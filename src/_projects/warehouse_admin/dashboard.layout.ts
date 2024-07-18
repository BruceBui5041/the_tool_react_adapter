export default (): LayoutSchema => ({
  components: {
    _dashboard_item_container: {
      type: 'container',
      className: 'common--component--bg',
    },
  },
  content: {
    type: 'container',
    child: {
      type: 'column',
      children: [
        {
          type: 'row',
          // scrollable: true,
          children: [
            {
              type: 'sized_box',
              height: '0.15sh',
              wrappers: [
                {
                  type: 'expanded',
                  flex: 2,
                },
              ],
              child: {
                type: 'row',

                children: [
                  {
                    type: 'component',
                    path: 'dashboard_sumary_card',
                    wrappers: [
                      {
                        type: 'expanded',
                        flex: 1,
                      },
                    ],
                    componentProps: {
                      topLeftIcon: {
                        icon: 'chart-arc',
                        backgroundColor: '#primaryColor12',
                        color: '#primaryColor100',
                      },
                      summary1: {
                        title: 'Sales',
                        detail: '$111',
                        pnlPercentage: 10,
                      },
                      summary2: {
                        title: 'Volumes',
                        detail: '$222',
                        pnlPercentage: 5,
                      },
                    },
                  },
                  {
                    type: 'sized_box',
                    width: 20,
                  },
                  {
                    type: 'component',
                    path: 'dashboard_sumary_card',
                    wrappers: [
                      {
                        type: 'expanded',
                        flex: 1,
                      },
                    ],
                    componentProps: {
                      topLeftIcon: {
                        icon: 'account-multiple-outline',
                        backgroundColor: '#secondaryColor20',
                        color: '#black100',
                      },
                      summary1: {
                        title: 'Customer',
                        detail: '$111',
                        pnlPercentage: 11.76,
                      },
                      summary2: {
                        title: 'Active',
                        detail: '$222',
                        pnlPercentage: -8.3,
                      },
                    },
                  },
                ],
              },
            },
            {
              type: 'sized_box',
              width: 20,
            },
            {
              type: 'sized_box',
              height: '0.15sh',
              wrappers: [
                {
                  type: 'expanded',
                  flex: 1,
                },
              ],
              child: {
                type: 'component',
                path: 'dashboard_sumary_card',
                componentProps: {
                  topLeftIcon: {
                    icon: 'shopping-outline',
                    backgroundColor: '#secondaryColor20',
                    color: '#black100',
                  },
                  summary1: {
                    title: 'All Orders',
                    detail: 450,
                  },
                  summary2: {
                    title: 'Pending',
                    detail: 5,
                  },
                  summary3: {
                    title: 'Completed',
                    detail: 445,
                  },
                },
              },
            },
          ],
        },
        {
          type: 'sized_box',
          height: '0.02sh',
        },
        {
          type: 'row',
          children: [
            {
              type: 'column',
              crossAxisAlignment: 'stretch',
              wrappers: [
                {
                  type: 'expanded',
                  flex: 2,
                },
              ],
              children: [
                {
                  type: 'row',
                  children: [
                    {
                      type: 'sized_box',
                      wrappers: [
                        {
                          type: 'expanded',
                          flex: 1,
                        },
                      ],
                      height: '0.32sh',
                      child: {
                        component: '_dashboard_item_container',

                        child: {
                          type: 'text',
                          text: 'Sales Chart',
                        },
                      },
                    },
                    {
                      type: 'sized_box',
                      width: 20,
                    },
                    {
                      type: 'column',
                      wrappers: [
                        {
                          type: 'expanded',
                          flex: 1,
                        },
                      ],
                      children: [
                        {
                          type: 'sized_box',
                          height: '0.15sh',
                          child: {
                            type: 'component',
                            path: 'dashboard_sumary_card',
                            componentProps: {
                              backgroundColor: '#primaryColor100',
                              topLeftIcon: {
                                icon: 'cube-outline',
                                backgroundColor: '#white16',
                                color: '#white100',
                              },
                              hideDuration: true,
                              summary1: {
                                title: 'All Products',
                                detail: '45',
                                titleColor: '#white100',
                                detailColor: '#white100',
                              },
                              summary2: {
                                title: 'Active',
                                detail: '32',
                                titleColor: '#white100',
                                detailColor: '#white100',
                              },
                            },
                          },
                        },
                        {
                          type: 'sized_box',
                          height: '0.02sh',
                        },
                        {
                          type: 'sized_box',
                          height: '0.15sh',
                          child: {
                            type: 'component',
                            path: 'dashboard_sumary_card',
                            componentProps: {
                              topLeftIcon: {
                                icon: 'cart-outline',
                                backgroundColor: '#secondaryColor20',
                                color: '#black100',
                              },
                              summary1: {
                                title: 'Abandoned Cart',
                                detail: '20%',
                                pnlPercentage: 0.0,
                              },
                              summary2: {
                                title: 'Customers',
                                detail: 30,
                              },
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'sized_box',
                  height: '0.02sh',
                },
                {
                  type: 'sized_box',
                  height: '0.36sh',

                  child: {
                    component: '_dashboard_item_container',
                    child: {
                      type: 'text',
                      text: 'Summary Chart',
                    },
                  },
                },
              ],
            },
            {
              type: 'sized_box',
              width: '0.02sh',
            },
            {
              type: 'sized_box',
              height: '0.70sh',
              wrappers: [
                {
                  type: 'expanded',
                  flex: 1,
                },
              ],
              child: {
                component: '_dashboard_item_container',
                child: {
                  type: 'component',
                  path: 'recent_orders',
                  componentProps: {},
                },
              },
            },
          ],
        },
      ],
    },
  },
});
