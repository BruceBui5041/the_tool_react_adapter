import React from 'react';

import clientTheme from './theme.config';
import clientConfig from './app.config';
import { IPageContent } from '../../page-builder/common-interface/builder-common-interface';

const clientPages: Record<string, IPageContent> = {
  init_page: {
    layout: () => import('./init_page.layout'),
    code: React.lazy(() => import('./init_page.code')),
  },
  login_page: {
    layout: () => import('./login_page.layout'),
    code: React.lazy(() => import('./login_page.code')),
  },
  register_page: {
    layout: () => import('./register_page.layout'),
    code: React.lazy(() => import('./register_page.code')),
  },
  test_page: {
    layout: () => import('./test_page.layout'),
    code: React.lazy(() => import('./test_page.code')),
  },
  home_page: {
    layout: () => import('./home_page.layout'),
    code: React.lazy(() => import('./home_page.code')),
  },
  test_block_page: {
    layout: () => import('./test_block_page.layout'),
    code: React.lazy(() => import('./test_block_page.code')),
  },
  component_test: {
    layout: () => import('./component_test.layout'),
    code: React.lazy(() => import('./component_test.code')),
  },
  component_test1: {
    layout: () => import('./component_test1.layout'),
    code: React.lazy(() => import('./component_test1.code')),
  },
};

export default {
  clientTheme,
  clientPages,
  clientConfig,
};
