import _ from 'lodash';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import webJSChannel from './web_js_channel';
import {
  ADD_NEW_PAGE_EVENT,
  DART_JS_LOADED,
  GET_PAGE_LAYOUT_EVENT,
  REMOVE_PAGE_EVENT,
} from '../constants';
import { IPageInfo } from './app-bridge';
import { getClientPageLayout } from './page-builder/page-layout-builder';
import { getClientTheme } from './page-builder/app-theme-builder';
import { getClientConfig } from './page-builder/app-config-builder';

class AppBase {
  valueBindingPattern = new RegExp(/[^{{\\}}]+(?=}})/, 'g');
  #context: any = { _data: {}, _prevData: {}, _platform: 'mobile' };
  #window: any = {};

  constructor() {
    this.#window = window;
  }

  isValueBinding = (rawBindingValue: string) => {
    return !_.isEmpty(rawBindingValue.match(this.valueBindingPattern));
  };

  getBindingValue = (data: any, rawBindingValue: string) => {
    const key = rawBindingValue.match(this.valueBindingPattern)?.[0];
    return _.get(data, (key || '').trim());
  };

  getContextData = (): any => {
    return this.#context;
  };

  isInAppWebViewReady = () => {
    return this.#window.flutter_inappwebview?.callHandler;
  };

  _flutterInAppWebView = (flutterFunctionName: string, ...args) => {
    return this.#window.flutter_inappwebview.callHandler(
      flutterFunctionName,
      ...args,
    );
  };

  setContextData = (data: any, callback = () => {}) => {
    const nextData = Object.assign({}, this.#context._data, data);
    const dataAsString = JSON.stringify(nextData);

    if (this.#context._platform == 'mobile') {
      this._flutterInAppWebView('setState', nextData);
    } else if (this.#context._platform == 'web') {
      this.#window.setState(dataAsString, callback);
    }
  };

  getPageContext = (pageId: string): any => {
    return _.get(this.#context, pageId);
  };

  _navigateTo = (pagePath: string, pageArguments = {}, options = {}) => {
    const navigateData = { pagePath, pageArguments, options };
    if (this.#context._platform == 'mobile') {
      this._flutterInAppWebView('navigate', navigateData);
    } else if (this.#context._platform == 'web') {
      this.#window.navigate(
        pagePath,
        JSON.stringify(pageArguments ?? {}),
        JSON.stringify(options ?? {}),
      );
    }
  };

  // function usePrevious(value) {
  //   // The ref object is a generic container whose current property is mutable ...
  //   // ... and can hold any value, similar to an instance property on a class
  //   const ref = React.useRef();
  //   // Store current value in ref
  //   React.useEffect(() => {
  //     ref.current = value;
  //   }, [value]); // Only re-run if value changes
  //   // Return previous value (happens before update in useEffect above)
  //   return ref.current;
  // }

  setPlatform = (platform: string) => {
    Object.assign(this.#context, {
      _platform: platform,
    });
  };

  dartJSFullyLoaded = () => {
    webJSChannel.emit(DART_JS_LOADED);
  };

  isFunctionExistsOnContext = (functionName: string, pagePath: string) => {
    if (_.get(this.#context, `${pagePath}.${functionName}`)) {
      return 1;
    }
    return 0;
  };

  _setCookies = (key: string, value: any) => {
    switch (this.#context._platform) {
      case 'web':
        Cookies.set(key, value);
        break;

      case 'mobile':
        this._flutterInAppWebView('setCookies', key, value);
        break;
    }
  };

  getCookies = async (key: string, defaultValue: any) => {
    switch (this.#context._platform) {
      case 'web':
        return Cookies.get(key);

      case 'mobile':
        return await this._flutterInAppWebView('get_cookies', key);
    }
  };

  toggleChangeTheme = async () => {
    switch (this.#context._platform) {
      case 'web':
        this.#window.toggle_change_theme('');
        return;

      case 'mobile':
        await this._flutterInAppWebView('toggle_change_theme');
        return;
    }
  };

  _request = async (path: string, options = {}) => {
    const optionAsJSON = JSON.stringify(options);
    switch (this.#context._platform) {
      case 'web':
        const requestId = uuidv4();
        const returnDataPromise = new Promise((resolve, reject) => {
          const checkTimeoutId = setTimeout(() => {
            reject('Request timeout!');
          }, 10000);

          webJSChannel.once(requestId, (data) => {
            const { err, message, response } = JSON.parse(data);
            clearTimeout(checkTimeoutId);

            if (err || message) {
              reject(response.response);
            } else {
              resolve(response);
            }
          });
        });

        this.#window.t_request(requestId, path, optionAsJSON);

        return returnDataPromise;

      case 'mobile':
        return await this._flutterInAppWebView('t_request', path, optionAsJSON);
    }
  };

  #__emitEvent__ = async (
    eventName: string,
    actionName: string,
  ): Promise<any> => {
    const actionId = uuidv4();
    const promiseResult = new Promise<Record<string, any>>((resolve) => {
      webJSChannel.once(actionId, (data) => {
        const { result } = JSON.parse(data);
        resolve(result);
      });
    });
    this.dispatchFormAction(eventName, actionId, actionName);
    return promiseResult;
  };

  validateForm = async (pagePath: string, formName: string) => {
    return this.#__emitEvent__(`form:${pagePath}:${formName}`, 'validate');
  };

  __ondataresponse = (requestId: string, data: any) => {
    webJSChannel.emit(requestId, data);
  };

  dispatchFormAction = async (
    formName: string,
    actionId = '',
    action = 'submit',
  ) => {
    console.log('abcd dispatchFormAction', formName, actionId);
    switch (this.#context._platform) {
      case 'web':
        this.#window.dispatch_form_action(
          formName,
          JSON.stringify({ action, actionId }),
        );
        return;

      case 'mobile':
        await this._flutterInAppWebView(
          'dispatch_form_action',
          formName,
          JSON.stringify({ action, actionId }),
        );
        return;
    }
  };

  #permissionEvent = async (action: string, permissionName = '') => {
    return this._flutterInAppWebView(
      'permission_event',
      action,
      permissionName,
    );
  };

  requestPermission = async (permissionName: string) => {
    return await this.#permissionEvent('request', permissionName);
  };

  getPermissionStatus = async (permissionName: string) => {
    return await this.#permissionEvent('status', permissionName);
  };

  openAppSettings = async () => {
    switch (this.#context._platform) {
      case 'web':
        return null;

      case 'mobile':
        return await this.#permissionEvent('open_app_settings');
    }
  };

  _openDrawer = (pageId: string) => {
    switch (this.#context._platform) {
      case 'web':
        return this.#window.open_drawer(pageId);

      case 'mobile':
        return this._flutterInAppWebView('open_drawer', pageId);
    }
  };

  #update_route_auth_data = async (action: string, routeAuthJSON: string) => {
    switch (this.#context._platform) {
      case 'web':
        return this.#window.update_route_auth_data(action, routeAuthJSON);

      case 'mobile':
        return await this._flutterInAppWebView(
          'update_route_auth_data',
          action,
          routeAuthJSON,
        );
    }
  };

  #get_select_project_name = async () => {
    switch (this.#context._platform) {
      case 'web':
        return this.#window.get_select_project_name();
      case 'mobile':
        return await this._flutterInAppWebView('get_select_project_name');
    }
  };

  getRoute = async (): Promise<any> => {
    switch (this.#context._platform) {
      case 'web':
        return this.#window.get_route();
      case 'mobile':
        return await this._flutterInAppWebView('get_route');
    }
  };

  getSelectedProjectName = async () => {
    return await this.#get_select_project_name();
  };

  setRouteAuth = async (routeAuth: Record<string, any>) => {
    const routeAuthJSON = JSON.stringify(routeAuth);
    const result = await this.#update_route_auth_data('set', routeAuthJSON);
    return JSON.parse(result);
  };

  clearAllRouteAuth = async () => {
    const result = await this.#update_route_auth_data('clear', '{}');
    return JSON.parse(result);
  };

  addClientPage = (pageInfo: IPageInfo) => {
    const { pagePath } = pageInfo;
    webJSChannel.emit(ADD_NEW_PAGE_EVENT, { pagePath });
  };

  removeClientPage = (pageInfo: IPageInfo) => {
    const { pagePath } = pageInfo;
    webJSChannel.emit(REMOVE_PAGE_EVENT, { pagePath });
  };

  getClientPagelayout = async (clientName: string, pageInfo: IPageInfo) => {
    return await getClientPageLayout(clientName, pageInfo);
  };

  getClientTheme = async (projectName: string) => {
    return await getClientTheme(projectName);
  };

  getClientConfig = async (projectName: string) => {
    return await getClientConfig(projectName);
  };
}

export default AppBase;
