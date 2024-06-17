export default (): LayoutSchema => ({
  content: {
    type: 'container',
    className: ['side-nav--bg'],
    child: {
      type: 'padding',
      padding: 16,
      child: {
        type: 'column',
        crossAxisAlignment: 'end',
        children: [
          {
            type: 'button',
            buttonType: 'icon',
            dynamicProps: [
              {
                conditions: {
                  source: '{{ props.isCollapsed }}',
                  operator: '==',
                  target: true,
                },
                true: {
                  icon: 'menu',
                },
                false: {
                  icon: 'arrow-left',
                },
              },
            ],
            onClick: 'props.toggleCollapseSideNav()',
          },
          {
            type: 'center',
            flex: 3,
            child: {
              type: 'container',
              image: {
                type: 'network',
                url: 'app_logo.png',
              },
              height: 350,
              width: 400,
            },
          },
          {
            type: 'list',
            name: 'navItems',
            flex: 7,
            separator: {
              type: 'sized_box',
              height: 10,
            },
            itemLayout: {
              type: 'gesture_detector',
              onClick: 'onItemClick(id)',
              child: {
                type: 'container',
                height: 56,
                borderRadius: {
                  type: 'all',
                  radius: 12,
                },
                className: [
                  {
                    'side-nav__item__selected--bg': '{{selected}}',
                  },
                ],
                child: {
                  type: 'row',
                  children: [
                    {
                      type: 'icon',
                      flex: 2,
                      icon: '{{icon}}',
                      className: [
                        {
                          'side-nav__item__selected--color': '{{selected}}',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      flex: 3,
                      text: '{{title}}',
                      hidden: '{{ props.isCollapsed }}',
                      className: [
                        {
                          'side-nav__item__selected--color': '{{selected}}',
                        },
                      ],
                    },
                    {
                      type: 'visibility',
                      visible: '{{!!notifCount}}',
                      maintainSize: true,
                      hidden: '{{ props.isCollapsed }}',
                      child: {
                        type: 'container',
                        wrappers: [
                          {
                            type: 'padding',
                            padding: [0, 0, 8, 0],
                          },
                        ],
                        alignment: 'center',
                        borderRadius: {
                          type: 'all',
                          radius: 12,
                        },
                        dynamicProps: [
                          {
                            conditions: {
                              source: '{{notifCount}}',
                              operator: '!=',
                              target: null,
                            },
                            true: {
                              backgroundColor: '#secondaryColor',
                            },
                            false: {
                              backgroundColor: 'transparent',
                            },
                          },
                        ],
                        width: 24,
                        height: 24,
                        child: {
                          type: 'text',
                          text: '{{notifCount}}',
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          {
            type: 'column',
            flex: 3,
            children: [
              {
                type: 'container',
                backgroundColor: '#black10',
                borderRadius: {
                  type: 'all',
                  radius: 12,
                },
                height: 56,
                child: {
                  type: 'row',
                  children: [
                    {
                      type: 'icon',
                      flex: 3,
                      icon: 'headphones',
                    },
                    {
                      type: 'text',
                      flex: 7,
                      text: 'Contract Support',
                    },
                  ],
                },
              },
              {
                type: 'sized_box',
                height: 10,
              },
              {
                type: 'container',
                backgroundColor: '#secondaryColor20',
                borderRadius: {
                  type: 'all',
                  radius: 12,
                },
                height: 56,
                child: {
                  type: 'row',
                  children: [
                    {
                      type: 'icon',
                      flex: 3,
                      icon: 'gift-outline',
                    },
                    {
                      type: 'text',
                      flex: 7,
                      text: 'Free Gift Awaits You!',
                    },
                  ],
                },
              },
              {
                type: 'button',
                buttonType: 'text',
                wrappers: [
                  {
                    type: 'padding',
                    padding: [0, 10, 0, 0],
                  },
                ],
                child: {
                  type: 'row',
                  children: [
                    {
                      type: 'icon',
                      icon: 'logout',
                    },
                    {
                      type: 'text',
                      text: 'Logout',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  },
});
