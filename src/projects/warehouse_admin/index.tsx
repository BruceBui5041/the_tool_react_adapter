import React from 'react';

import clientTheme from './theme.config';
import clientConfig from './app.config';
import { IPageContent } from '../../page-builder/common-interface/builder-common-interface';
import { create } from 'lodash';

const clientPages: Record<string, IPageContent> = {
  // pages
  dashboard: {
    layout: () => import('./dashboard.layout'),
    code: React.lazy(() => import('./dashboard.code')),
  },
  home: {
    layout: () => import('./home.layout'),
    code: React.lazy(() => import('./home.code')),
  },
  order_summary: {
    layout: () => import('./order_summary/order_summary.layout'),
    code: React.lazy(() => import('./order_summary/order_summary.code')),
  },

  //components
  side_nav: {
    layout: () => import('./side_nav.layout'),
    code: React.lazy(() => import('./side_nav.code')),
  },
  topbar: {
    layout: () => import('./topbar.layout'),
    code: React.lazy(() => import('./topbar.code')),
  },
  dashboard_sumary_card: {
    layout: () => import('./dashboard_sumary_card.layout'),
    code: React.lazy(() => import('./dashboard_sumary_card.code')),
  },
  recent_orders: {
    layout: () => import('./recent_orders.layout'),
    code: React.lazy(() => import('./recent_orders.code')),
  },
  order_filter: {
    layout: () => import('./order_summary/order_filter.layout'),
    code: React.lazy(() => import('./order_summary/order_filter.code')),
  },
  order_datetime_filter: {
    layout: () => import('./order_summary/order_datetime_filter.layout'),
    code: React.lazy(
      () => import('./order_summary/order_datetime_filter.code'),
    ),
  },
  create_order_popup: {
    layout: () => import('./order_summary/create_order_popup.layout'),
    code: React.lazy(() => import('./order_summary/create_order_popup.code')),
  },
};

export default {
  clientTheme,
  clientPages,
  clientConfig,
};
