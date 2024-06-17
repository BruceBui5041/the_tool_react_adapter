import * as React from 'react';
import appBridge from '../app-bridge';
import {
  IActions,
  PageContextActions,
} from '../page-builder/common-interface/page-builder-action';
import {
  IContextFunctions,
  IHttpRequestOptions,
  IPageRoute,
} from '../page-builder/common-interface/page-context-interface';

export interface IPageContextState {}

const initialState: IPageContextState = {};

const reducer = (
  state: IPageContextState,
  action: IActions,
): IPageContextState => {
  const { type, payload } = action;
  const appBase = appBridge.getAppBase();
  switch (type) {
    case PageContextActions.SET_STATE: {
      const { pagePathId, data } = payload;
      const currentPageData = { ...(state[pagePathId] || {}), ...data };
      const pageDataFromContext = appBase.getContextData()?.[pagePathId] || {};
      state = {
        ...state,
        [pagePathId]: { ...pageDataFromContext, ...currentPageData },
      };
      // set data into dart side
      appBase.setContextData(state);
      return state;
    }

    case PageContextActions.EXPORT_PAGE_CONTEXT: {
      const { pageContext, pagePathId } = payload;
      const currentPageContext = state?.[pagePathId] || {};
      Object.assign(currentPageContext, pageContext);
      state[pagePathId] = currentPageContext;
      if (!appBase.getContextData()?.[pagePathId]) {
        appBase.getContextData()[pagePathId] = state[pagePathId];
      } else {
        Object.assign(
          appBase.getContextData()?.[pagePathId],
          state[pagePathId],
        );
      }
      return state;
    }

    case PageContextActions.NAVIGATE: {
      const { options, pageArguments, destinationPagePath } = payload;
      appBase._navigateTo(destinationPagePath, pageArguments, options);
      return state;
    }

    case PageContextActions.OPEN_DRAWER: {
      const { pagePath } = payload;
      appBase._openDrawer(pagePath);
      return state;
    }

    default:
      return state;
  }
};

export const PageContext: React.Context<
  [[IPageContextState, React.Dispatch<IActions>], Partial<IContextFunctions>]
> = React.createContext([[initialState, (action: IActions) => {}], {}]);

export const PageContextProvider = React.memo((props: any) => {
  const { children } = props;
  const contextReducer = React.useReducer(
    reducer,
    appBridge.getAppBase().getContextData(),
  );
  const appBase = appBridge.getAppBase();

  const httpRequest = React.useCallback(
    async (path: string, options: IHttpRequestOptions = {}) => {
      return appBase._request(path, options);
    },
    [appBase._request],
  );

  const validateForm = React.useCallback(
    async (pagePath: string, formName: string): Promise<any> => {
      return appBase.validateForm(pagePath, formName);
    },
    [appBase.validateForm],
  );

  const setCookies = React.useCallback(
    async (key: string, value: any): Promise<any> => {
      return appBase._setCookies(key, value);
    },
    [appBase._setCookies],
  );

  const getCookies = React.useCallback<
    <T>(key: keyof T, defaultValue?: any) => Promise<any>
  >((key: any, defaultValue?: any): Promise<any> => {
    return appBase.getCookies(key, defaultValue);
  }, []);

  const toggleChangeTheme = React.useCallback(() => {
    appBase.toggleChangeTheme();
  }, [appBase.toggleChangeTheme]);

  const getRoute = React.useCallback((): Promise<Partial<IPageRoute>> => {
    return appBase.getRoute();
  }, [appBase.getRoute]);

  const setRouteAuth = React.useCallback(
    (authData: Record<string, any>): Promise<any> => {
      return appBase.setRouteAuth(authData);
    },
    [appBase.setRouteAuth],
  );

  const contextFunctions = React.useMemo(() => {
    return {
      httpRequest,
      validateForm,
      setCookies,
      toggleChangeTheme,
      getRoute,
      getCookies,
      setRouteAuth,
    };
  }, [
    httpRequest,
    validateForm,
    setCookies,
    toggleChangeTheme,
    getRoute,
    getCookies,
    setRouteAuth,
  ]);

  return (
    <PageContext.Provider value={[contextReducer, contextFunctions]}>
      {children}
    </PageContext.Provider>
  );
});
