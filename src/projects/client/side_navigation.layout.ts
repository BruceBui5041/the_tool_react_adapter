export default (): LayoutSchema => ({
  components: {
    _nav_item_lead_icon: {
      type: 'card',
      elevation: 4,
      child: {
        type: 'container',
        height: 32,
        width: 32,
        alignment: 'center',
        child: {
          type: 'icon',
          icon: 'home',
          iconSize: 20,
        },
      },
    },
    _nav_item_trailing: {
      type: 'container',
      height: 16,
      width: 16,
      shape: 'circle',
      child: {
        type: 'center',
        heightFactor: 16,
        widthFactor: 16,
        child: {
          type: 'text',
        },
      },
    },
    _nav_item_title: {
      type: 'container',
      height: 32,
      alignment: 'centerLeft',
      child: {
        type: 'column',
        mainAxisAlignment: 'center',
        children: [
          {
            type: 'expanded',
            flex: 1,
            child: {
              type: 'text',
              text: '',
            },
          },
          {
            type: 'text',
            text: 'Dashboard',
            style: 'textTheme.bodyLarge',
          },
          {
            type: 'expanded',
            flex: 1,
            child: {
              type: 'text',
              text: '',
            },
          },
        ],
      },
    },
  },
  content: {
    type: 'container',
    height: '1sh',
    child: {
      type: 'column',
      wrappers: [
        {
          type: 'safe_area',
        },
      ],
      children: [
        {
          type: 'column',
          flex: 1,
          children: [
            {
              type: 'container',
              width: 'infinity',
              height: 'infinity',
              flex: 1,
              margin: [0, 8, 8, 0],
              borderRadius: {
                type: 'only',
                topRight: 16,
                bottomRight: 16,
              },
              gradient: {
                type: 'linear',
                colors: ['skyblue', 'pink'],
                begin: 'topLeft',
                end: 'bottomRight',
              },
              child: {
                type: 'column',
                mainAxisAlignment: 'center',
                children: [
                  {
                    type: 'text',
                    style: 'textTheme.bodyLarge',
                    text: 'The Tool',
                  },
                  {
                    type: 'text',
                    style: 'textTheme.labelMedium',
                    text: 'for the win',
                  },
                ],
              },
            },
          ],
        },

        {
          type: 'container',
          flex: 9,
          child: {
            type: 'expansion_list',
            name: 'navigatorIndex',
            dividerColor: 'transparent',
            elevation: 0,
            children: [
              {
                backgroundColor: 'transparent',
                head: {
                  type: 'list_tile',
                  leading: {
                    component: '_nav_item_lead_icon',
                  },
                  title: {
                    component: '_nav_item_title',
                    child: {
                      children: [
                        {},
                        {
                          text: 'Dashboard',
                        },
                      ],
                    },
                  },
                  trailing: {
                    component: '_nav_item_trailing',
                    backgroundColor: 'red',
                    child: {
                      child: {
                        text: '{{ $parent.dashboardNotifCount }}',
                      },
                    },
                  },
                },
                body: {
                  type: 'column',
                  children: [
                    {
                      type: 'list_tile',
                      title: {
                        component: '_nav_item_title',
                        child: {
                          children: [
                            {},
                            {
                              text: 'Employees',
                            },
                          ],
                        },
                      },
                      onClick: 'console.log("Go to Employees")',
                    },
                    {
                      type: 'list_tile',
                      title: {
                        component: '_nav_item_title',
                        child: {
                          children: [
                            {},
                            {
                              text: 'Products',
                            },
                          ],
                        },
                      },
                      onClick: 'navigateTo("create_product")',
                    },
                  ],
                },
              },
              {
                backgroundColor: 'transparent',
                head: {
                  type: 'list_tile',
                  leading: {
                    component: '_nav_item_lead_icon',
                    child: {
                      child: {
                        icon: 'bell',
                      },
                    },
                  },
                  title: {
                    component: '_nav_item_title',
                    child: {
                      children: [
                        {},
                        {
                          text: 'Apps',
                        },
                      ],
                    },
                  },
                },
                body: {
                  type: 'text',
                  text: 'This is the Expansion Body 2',
                },
              },
              {
                backgroundColor: 'transparent',
                head: {
                  type: 'list_tile',
                  leading: {
                    component: '_nav_item_lead_icon',
                    child: {
                      child: {
                        icon: 'bridge',
                      },
                    },
                  },
                  title: {
                    component: '_nav_item_title',
                    child: {
                      children: [
                        {},
                        {
                          text: 'Templates',
                        },
                      ],
                    },
                  },
                },
                body: {
                  type: 'text',
                  text: 'This is the Expansion Body 2',
                },
              },
              {
                backgroundColor: 'transparent',
                head: {
                  type: 'list_tile',
                  leading: {
                    component: '_nav_item_lead_icon',
                    child: {
                      child: {
                        icon: 'forest',
                      },
                    },
                  },
                  title: {
                    component: '_nav_item_title',
                    child: {
                      children: [
                        {},
                        {
                          text: 'Layouts',
                        },
                      ],
                    },
                  },
                },
                body: {
                  type: 'text',
                  text: 'This is the Expansion Body 2',
                },
              },
              {
                backgroundColor: 'transparent',
                head: {
                  type: 'list_tile',
                  leading: {
                    component: '_nav_item_lead_icon',
                    child: {
                      child: {
                        icon: 'island',
                      },
                    },
                  },
                  title: {
                    component: '_nav_item_title',
                    child: {
                      children: [
                        {},
                        {
                          text: 'Form',
                        },
                      ],
                    },
                  },
                },
                body: {
                  type: 'text',
                  text: 'This is the Expansion Body 2',
                },
              },
            ],
          },
        },
      ],
    },
  },
});
