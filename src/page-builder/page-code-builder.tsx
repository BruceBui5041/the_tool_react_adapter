import * as React from "react";
import { PageContext } from "../context/page-context";
import * as hooks from "usehooks-ts";

import {
  IHttpRequestOptions,
  IPageBuilderContext,
  IPageRoute,
} from "./common-interface/page-context-interface";
import _, { isEqual } from "lodash";
import { PageContextActions } from "./common-interface/page-builder-action";
import { getPageCodeByPath, getPageLayoutByPath } from "./page-utils";
import { utilsManager } from "../utils-manager";
import { IProjectInfo } from "./common-interface/builder-common-interface";

interface IPageBuilderProps {
  currentProject: string;
  pagePath: string;
  pageId: string;
  pageData: Record<any, any>;
  clients: Record<string, IProjectInfo>;
}

interface ISubComponent {
  /**
   * The dictionary of component props that will be passed to the component from the parent
   */
  componentProps?: Record<any, any>;
  path: string;
  id: string;
}

export const PageBuilder = React.memo((props: IPageBuilderProps) => {
  const [[contextData, dispatchPageAction], contextFunctions] =
    React.useContext(PageContext);

  const isMounted = hooks.useIsMounted();

  let [initializedPageData] = React.useState(false);

  const [_subComponents, setSubComponents] = React.useState<
    Record<string, ISubComponent>
  >({});

  const pagePathId = React.useMemo(
    () => `${props.pagePath}_${props.pageId}`,
    []
  );

  const currentProject = React.useMemo(() => {
    return props.clients?.[props.currentProject];
  }, [props.currentProject]);

  const projectPages = React.useMemo(() => {
    return currentProject?.clientPages;
  }, [currentProject]);

  const PageComponent = React.useMemo(() => {
    return getPageCodeByPath(projectPages, props.pagePath);
  }, [projectPages, props.pagePath]);

  const pageData = React.useMemo(() => {
    return contextData[pagePathId];
  }, [contextData[pagePathId]]);

  /**
   * This function will be called from Flutter when the page need to register sub component
   * It will register the sub component into parent page and return the sub component layout json on Flutter side
   */
  const __registerSubComponent__ = React.useCallback(
    async (componentPathId: string, componentProps: any) => {
      const lastLodashIndex = componentPathId.lastIndexOf("_");
      const componentPath = componentPathId.substring(0, lastLodashIndex);
      const id = componentPathId.substring(
        lastLodashIndex + 1,
        componentPathId.length
      );

      const layoutJSON = await getPageLayoutByPath(projectPages, componentPath);

      setSubComponents((prev) => {
        return {
          ...prev,
          [componentPathId]: { componentProps, path: componentPath, id },
        };
      });

      return layoutJSON;
    },
    [_subComponents, pagePathId, projectPages]
  );

  const setPageData = React.useCallback(
    (data: Record<any, any>, isSilenced = false) => {
      dispatchPageAction({
        type: PageContextActions.SET_STATE,
        payload: { pagePathId: pagePathId, data, isSilenced },
      });
    },
    [dispatchPageAction]
  );

  const navigateTo = React.useCallback(
    (
      destinationPagePath: string,
      pageArguments: Record<string, any> = {},
      options: Record<string, any> = {}
    ) => {
      dispatchPageAction({
        type: PageContextActions.NAVIGATE,
        payload: {
          destinationPagePath,
          pageArguments,
          options,
        },
      });
    },
    [dispatchPageAction]
  );

  const navigateBack = React.useCallback(() => {
    navigateTo("", {}, { action: "pop" });
  }, [navigateTo]);

  const navigateBackAndGoTo = React.useCallback(
    (destinationPagePath: string, pageArguments: Record<string, any> = {}) => {
      navigateTo(destinationPagePath, pageArguments, {
        action: "pop_and_push",
      });
    },
    [navigateTo]
  );

  const openDrawer = React.useCallback(() => {
    dispatchPageAction({
      type: PageContextActions.OPEN_DRAWER,
      payload: { pagePath: pagePathId },
    });
  }, []);

  const httpRequest = React.useCallback(
    async (path: string, options: IHttpRequestOptions = {}) => {
      return await contextFunctions.httpRequest?.(path, options);
    },
    [contextFunctions.httpRequest]
  );

  const validateForm = React.useCallback(
    async (formName: string): Promise<boolean> => {
      return (
        (await contextFunctions.validateForm?.(pagePathId, formName)) || false
      );
    },
    [pagePathId]
  );

  const getRoute = React.useCallback(async (): Promise<Partial<IPageRoute>> => {
    return contextFunctions?.getRoute?.() || {};
  }, [contextFunctions]);

  /**
   * This function set page function into page state for layout binding value use
   */
  const exportPageContext = React.useCallback(
    (pageContext: Record<any, any>) => {
      dispatchPageAction({
        type: PageContextActions.EXPORT_PAGE_CONTEXT,
        payload: {
          pagePathId,
          pageContext,
        },
      });
    },
    []
  );

  const useInitState = React.useCallback(
    (initState: Record<any, any>) => {
      if (!initializedPageData) {
        setPageData(initState);
        initializedPageData = true;
      }
    },
    [setPageData, initializedPageData]
  );

  const setCookies = React.useCallback(
    async (key: string, value: any): Promise<void> => {
      return contextFunctions?.setCookies?.(key, value);
    },
    [contextFunctions?.setCookies]
  );

  const getCookies = React.useCallback<
    <T extends Record<string, any>>(
      key: keyof T,
      defaultValue?: any
    ) => Promise<any>
  >(
    (key: any, defaultValue?: any): Promise<any> => {
      if (!contextFunctions.getCookies) {
        throw Error("Not found getCookies function");
      }
      return contextFunctions.getCookies(key, defaultValue);
    },
    [contextFunctions.getCookies]
  );

  const toggleChangeTheme = React.useCallback(() => {
    contextFunctions.toggleChangeTheme?.();
  }, [contextFunctions.toggleChangeTheme]);

  const setRouteAuth = React.useCallback(
    (authData: Record<string, any>): Promise<any> => {
      if (!contextFunctions.setRouteAuth) {
        throw Error("Not found setRouteAuth function");
      }
      return contextFunctions.setRouteAuth?.(authData);
    },
    [contextFunctions.setRouteAuth]
  );

  /**
   * Expose page common function for binding value of the json layout
   */
  React.useEffect(() => {
    exportPageContext({
      setPageData,
      navigateTo,
      navigateBack,
      navigateBackAndGoTo,
      openDrawer,
      httpRequest: httpRequest,
      validateForm,
      setCookies,
      useInitState,
      toggleChangeTheme,
      getRoute,
      getCookies,
      setRouteAuth,
      __registerSubComponent__,
    });
  }, [
    setPageData,
    navigateTo,
    navigateBack,
    navigateBackAndGoTo,
    openDrawer,
    httpRequest,
    validateForm,
    setCookies,
    useInitState,
    toggleChangeTheme,
    getRoute,
    getCookies,
    setRouteAuth,
    __registerSubComponent__,
  ]);

  const prevPageDataProps = usePrevious(props.pageData);
  React.useEffect(() => {
    if (isEqual(prevPageDataProps, props.pageData)) return;
    setPageData({ props: props.pageData });
  }, [props.pageData]);

  React.useEffect(() => {
    if (!isMounted()) return;
    setPageData({ _tLoaded: true });
  }, [isMounted(), setPageData]);

  React.useEffect(() => {
    console.log("mount page", props.pagePath);
    return () => {
      console.log("unmount page", props.pagePath);
    };
  }, [props.pagePath]);

  const pageBuilderContext: IPageBuilderContext<Record<any, any>> =
    React.useMemo(() => {
      return {
        $root: pageData,
        root: pageData,
        setPageData,
        navigateTo,
        navigateBack,
        navigateBackAndGoTo,
        openDrawer,
        httpRequest,
        exportPageContext,
        validateForm,
        useInitState,
        setCookies,
        toggleChangeTheme,
        getRoute,
        getCookies,
        setRouteAuth,
      };
    }, [
      setPageData,
      navigateTo,
      navigateBack,
      navigateBackAndGoTo,
      openDrawer,
      httpRequest,
      exportPageContext,
      validateForm,
      useInitState,
      setCookies,
      toggleChangeTheme,
      getRoute,
      getCookies,
      setRouteAuth,
      pageData,
    ]);

  if (!_.get(pageData, "_tLoaded")) {
    return null;
  }

  return (
    // <div id={pagePathId}>
    <div>
      <React.Suspense fallback={<div>Loading</div>}>
        {PageComponent && (
          <PageComponent
            pageBuilderContext={pageBuilderContext}
            $={pageBuilderContext}
          >
            {Object.keys(_subComponents).map((componentPathId) => {
              const componentInfo = _subComponents[componentPathId];
              const componentProps = componentInfo.componentProps || {};
              const computedProps = {};

              Object.entries(componentProps).forEach(([propKey, propVal]) => {
                /**
                 * Use the pageData as parentData passed to the sub component for binding value
                 */
                const bindingValue = utilsManager.bindingValueToProp({
                  contextData: pageData,
                  rawValueBinding: propVal,
                });

                computedProps[propKey] = bindingValue;
              });

              return (
                <PageBuilder
                  key={componentPathId}
                  currentProject={props.currentProject}
                  pageId={componentInfo.id}
                  pagePath={componentInfo.path}
                  pageData={computedProps}
                  clients={props.clients}
                />
              );
            })}
          </PageComponent>
        )}
      </React.Suspense>
    </div>
  );
});
