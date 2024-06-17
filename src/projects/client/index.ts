import React from 'react';

import clientTheme from './theme.config';
import clientConfig from './app.config';
import { IPageContent } from '../../page-builder/common-interface/builder-common-interface';

const clientPages: Record<string, IPageContent> = {
  // pages
  home_page: {
    layout: () => import('./home_page.layout'),
    code: React.lazy(() => import('./home_page.code')),
  },
  dashboard: {
    layout: () => import('./dashboard.layout'),
    code: React.lazy(() => import('./dashboard.code')),
  },
  order_list: {
    layout: () => import('./order_list/layout'),
    code: React.lazy(() => import('./order_list/code')),
    mobileLayout: () => import('./order_list/mobile.layout'),
  },
  product_create: {
    layout: () => import('./product_create.layout'),
    code: React.lazy(() => import('./product_create.code')),
  },
  cart_list: {
    layout: () => import('./cart_list.layout'),
    code: React.lazy(() => import('./cart_list.code')),
  },
  register_page: {
    layout: () => import('./register_page.layout'),
    code: React.lazy(() => import('./register_page.code')),
  },

  // components
  delete_snackbar: {
    layout: () => import('./order_list/delete_snackbar/layout'),
    code: React.lazy(() => import('./order_list/delete_snackbar/code')),
  },
  side_navigation: {
    layout: () => import('./side_navigation.layout'),
    code: React.lazy(() => import('./side_navigation.code')),
  },
};

export default {
  clientTheme,
  clientPages,
  clientConfig,
};
