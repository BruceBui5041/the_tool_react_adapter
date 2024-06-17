import * as React from 'react';
import _ from 'lodash';
import { PageBuilder } from './page-builder/page-code-builder';
import webJSChannel from './web_js_channel';
import { usePrevious } from './page-builder/page-utils';
import appBridge, { IPageInfo } from './app-bridge';
import {
  ADD_NEW_PAGE_EVENT,
  DART_JS_LOADED,
  REMOVE_PAGE_EVENT,
} from '../constants';
import { PageContextProvider } from './context/page-context';
import platform from 'platform-detect/os.mjs';

function App() {
  const [pagePaths, updatePages] = React.useState<string[]>([]);
  const [newPage, setNewPage] = React.useState('');
  const [currentProject, setCurrentProject] = React.useState(null);
  // Only web need to load DartJS before run App component
  const [isDartJSLoaded, setIsDartJSLoaded] = React.useState(
    platform.android || platform.ios,
  );

  // Only need for mobile platform to check if WebView is ready
  const [isInAppWebViewReady, setIsInAppWebViewReady] = React.useState(
    !platform.android && !platform.ios,
  );

  const prevPages = usePrevious(pagePaths);
  const lastAddedPage = usePrevious(newPage);

  const dartJSLoaded = React.useCallback(() => {
    setIsDartJSLoaded(true);
  }, []);

  React.useEffect(() => {
    if (!newPage) return;
    if (_.isEqual(newPage, lastAddedPage)) return;
    updatePages([...pagePaths, newPage]);
  }, [newPage, pagePaths, prevPages, lastAddedPage]);

  const addNewPage = React.useCallback((pageInfo: IPageInfo) => {
    const { pagePath } = pageInfo;
    setNewPage(pagePath);
  }, []);

  const removePage = React.useCallback(
    (pageInfo: IPageInfo) => {
      const { pagePath } = pageInfo;
      const newPages = pagePaths.filter(
        (currentPagePath) => currentPagePath != pagePath,
      );
      updatePages(newPages);
    },
    [pagePaths],
  );

  React.useEffect(() => {
    if (isInAppWebViewReady) return;
    const intervalId = setInterval(() => {
      if (appBridge.getAppBase().isInAppWebViewReady()) {
        setIsInAppWebViewReady(true);
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [isInAppWebViewReady]);

  React.useEffect(() => {
    webJSChannel.on(ADD_NEW_PAGE_EVENT, addNewPage);
    return () => {
      webJSChannel.removeListener(ADD_NEW_PAGE_EVENT, addNewPage);
    };
  }, []);

  React.useEffect(() => {
    webJSChannel.on(REMOVE_PAGE_EVENT, removePage);
    return () => {
      webJSChannel.removeListener(REMOVE_PAGE_EVENT, removePage);
    };
  }, [removePage]);

  React.useEffect(() => {
    if (isDartJSLoaded) return;
    webJSChannel.on(DART_JS_LOADED, dartJSLoaded);
    return () => {
      webJSChannel.removeListener(DART_JS_LOADED, dartJSLoaded);
    };
  }, []);

  React.useEffect(() => {
    if (!isDartJSLoaded || !isInAppWebViewReady) return;
    (async () => {
      const projectName = await appBridge.getAppBase().getSelectedProjectName();
      setCurrentProject(projectName);
    })();
  }, [isInAppWebViewReady, isDartJSLoaded]);

  if ((!isInAppWebViewReady && !isDartJSLoaded) || !currentProject) return null;

  return (
    <PageContextProvider>
      {pagePaths.map((pagePath) => {
        const indexOfLodash = pagePath.lastIndexOf('_');
        const path = pagePath.substring(0, indexOfLodash);
        const id = pagePath.substring(indexOfLodash + 1, pagePath.length);

        return (
          <PageBuilder
            key={id}
            currentProject={currentProject}
            pageId={id}
            pagePath={path}
            pageData={{}}
          />
        );
      })}
    </PageContextProvider>
  );
}

export default App;
