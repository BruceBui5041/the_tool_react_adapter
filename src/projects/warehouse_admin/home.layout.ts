export default (): LayoutSchema => ({
  drawer: {
    child: {
      type: 'component',
      path: 'side_nav',
      componentProps: {
        onChangePage: '{{ onChangePage }}',
      },
    },
  },
  content: {
    type: 'container',
    className: ['app--bg'],
    child: {
      type: 'row',
      children: [
        {
          type: 'container',
          flex: 3,
          mediaScreenOnly: [
            {
              className: 'desktop-break-point',
              style: {
                flex: 2,
              },
            },
            {
              className: 'ipad-break-point',
              style: {
                flex: 3,
              },
            },
            {
              className: 'sm-mobile-break-point',
              style: {
                hidden: true,
                flex: 0,
              },
            },
          ],
          child: {
            type: 'component',
            path: 'side_nav',
            componentProps: {
              onChangePage: '{{ onChangePage }}',
              isCollapsed: '{{ isCollapsed }}',
              selectedItemId: '{{ selectedItemId }}',
              toggleCollapseSideNav: '{{ toggleCollapseSideNav }}',
            },
          },
        },
        {
          type: 'column',
          flex: 9,
          children: [
            {
              type: 'sized_box',
              height: '0.08sh',
              child: {
                type: 'component',
                path: 'topbar',
                // flex: 1,
                componentProps: {
                  selectedItemId: '{{ selectedItemId }}',
                },
              },
            },
            {
              type: 'container',
              height: '0.92sh',
              padding: 20,
              child: {
                type: 'column',
                // scrollable: true,
                children: [
                  {
                    type: 'container',
                    dynamicProps: [
                      {
                        conditions: {
                          source: '{{ selectedItemId }}',
                          operator: '==',
                          target: 1,
                        },
                        true: {
                          hidden: false,
                        },
                        false: {
                          hidden: true,
                        },
                      },
                    ],
                    child: {
                      type: 'component',
                      path: 'dashboard',
                      componentProps: {
                        selectedItemId: '{{ selectedItemId }}',
                      },
                    },
                  },
                  {
                    type: 'container',
                    dynamicProps: [
                      {
                        conditions: {
                          source: '{{ selectedItemId }}',
                          operator: '==',
                          target: 2,
                        },
                        true: {
                          hidden: false,
                        },
                        false: {
                          hidden: true,
                        },
                      },
                    ],
                    child: {
                      type: 'component',
                      path: 'order_summary',
                      componentProps: {
                        selectedItemId: '{{ selectedItemId }}',
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
});
