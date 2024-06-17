import React from 'react';
import {
  IPageContent,
  IProjectInfo,
} from '../../page-builder/common-interface/builder-common-interface';
import clientConfig from './app.config';
import clientTheme from './theme.config';

const clientPages: Record<string, IPageContent> = {
  core: {
    layout: () => Promise.resolve({}),
    code: React.lazy(() => import('./core.code')),
  },
  home_page: {
    layout: () => import('./home_page.layout'),
    code: React.lazy(() => import('./home_page.code')),
  },
  dashboard: {
    layout: () => import('./dashboard.layout'),
    code: React.lazy(() => import('./dashboard.code')),
  },
  side_navigation: {
    layout: () => import('./side_navigation.layout'),
    code: React.lazy(() => import('./side_navigation.code')),
  },
  login_page: {
    layout: () => import('./login_page.layout'),
    code: React.lazy(() => import('./login_page.code')),
  },
  register_page: {
    layout: () => import('./register_page.layout'),
    code: React.lazy(() => import('./register_page.code')),
  },
};

const projectInfo: IProjectInfo = {
  clientConfig,
  clientTheme,
  clientPages,
};

export default projectInfo;
