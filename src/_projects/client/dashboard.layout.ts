export default (): LayoutSchema => ({
  drawer: {
    child: {
      type: 'component',
      path: 'side_navigation',
      componentProps: {
        navigatorIndex: '{{ mainNav }}',
        updateNavigatorIndex: '{{ updateNavigatorIndex }}',
      },
    },
  },
  components: {
    _side_navigation_component: {
      type: 'component',
      path: 'side_navigation',
      componentProps: {
        navigatorIndex: '{{ mainNav }}',
        updateNavigatorIndex: '{{ updateNavigatorIndex }}',
      },
    },
    _navbar_button_icon: {
      type: 'button',
      buttonType: 'icon',
      color: 'white',
      iconSize: 14,
    },
    _navbar_small_text: {
      type: 'text',
      style: 'textTheme.labelSmall',
      flex: 1,
    },
    _body: {
      type: 'stack',
      children: [
        {
          type: 'column',
          children: [
            {
              type: 'container',
              flex: 1,
              padding: [0, 5, 10, 0],
              child: {
                type: 'column',
                children: [
                  {
                    type: 'row',
                    mainAxisAlignment: 'spaceBetween',
                    children: [
                      {
                        type: 'button',
                        icon: 'menu',
                        buttonType: 'icon',
                        onClick: 'openDrawer()',
                        mediaScreenOnly: [
                          {
                            className: 'ipad-break-point',
                            style: {
                              hidden: true,
                            },
                          },
                        ],
                      },
                      {
                        type: 'row',
                        flex: 1,
                        mainAxisAlignment: 'end',
                        children: [
                          {
                            type: 'column',

                            children: [
                              {
                                type: 'row',
                                mainAxisAlignment: 'spaceBetween',
                                children: [
                                  {
                                    component: '_navbar_button_icon',
                                    icon: 'lightbulb-on-outline',
                                    onClick: 'changeTheme()',
                                  },
                                  {
                                    component: '_navbar_button_icon',
                                    icon: 'web',
                                    onClick: 'onChangeLanguage()',
                                  },
                                  {
                                    component: '_navbar_button_icon',
                                    icon: 'bell',
                                    onClick: 'onChangeNotificationChange()',
                                  },
                                  {
                                    component: '_navbar_button_icon',
                                    icon: 'email',
                                  },
                                ],
                              },
                              {
                                type: 'row',
                                mainAxisAlignment: 'end',
                                children: [
                                  {
                                    component: '_navbar_small_text',
                                    text: 'ABCD1',
                                  },
                                  {
                                    component: '_navbar_small_text',
                                    text: '-',
                                  },
                                  {
                                    component: '_navbar_small_text',
                                    text: 'ABCD2',
                                  },
                                  {
                                    component: '_navbar_small_text',
                                    text: '-',
                                  },
                                  {
                                    component: '_navbar_small_text',
                                    text: 'ABCD3',
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'container',
                            height: 32,
                            width: 32,
                            shape: 'circle',
                            image: {
                              type: 'network',
                              fit: 'fill',
                              url: '{{userImage}}',
                            },
                            child: {
                              type: 'clip_oval',
                              child: {
                                type: 'clickable',
                                onClick: 'toggleSelectAll()',
                              },
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            {
              type: 'container',
              flex: 3,
              backgroundColor: '#primaryColor',
              width: '1sw',
              mediaScreenOnly: [
                {
                  className: 'desktop-break-point',
                  style: {
                    width: '0.8sw',
                  },
                },
                {
                  className: 'ipad-break-point',
                  style: {
                    width: '0.8sw',
                  },
                },
              ],
              borderRadius: {
                type: 'only',
                topLeft: 24,
                topRight: 24,
              },
              child: {
                type: 'text',
                text: '',
              },
            },
          ],
        },
        {
          type: 'container',
          height: '0.8sh',
          width: '1sw',
          mediaScreenOnly: [
            {
              className: 'desktop-break-point',
              style: {
                width: '0.77sw',
              },
            },
            {
              className: 'ipad-break-point',
              style: {
                width: '0.75sw',
              },
            },
          ],
          padding: [10, 10],
          alignment: 'center',
          positioned: {
            top: '0.08sh',
          },
          child: {
            type: 'table',
            name: 'users',
            total: 'totalUsers',
            minWidth: 600,
            loadDataFunction: 'loadData',
            onSelectChanged: 'onSelectedChange',
            onSelectAll: 'onSelectAll',
            columns: [
              {
                label: 'User ID',
                fieldData: 'id',
              },
              {
                label: 'First Name',
                fieldData: 'first_name',
              },
              {
                label: 'Last Name',
                fieldData: 'last_name',
              },
              {
                label: 'Email',
                fieldData: 'email',
              },
              {
                label: '',
              },
            ],
            rows: [
              {
                cells: [
                  {
                    child: {
                      type: 'text',
                      text: '{{id}}',
                    },
                  },
                  {
                    child: {
                      type: 'text',
                      text: '{{first_name}}',
                    },
                  },
                  {
                    child: {
                      type: 'text',
                      text: '{{last_name}}',
                    },
                  },
                  {
                    child: {
                      type: 'text',
                      text: '{{email}}',
                    },
                  },
                  {
                    child: {
                      type: 'button',
                      text: '{{ $root.actionLable1 }}',
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  },
  content: {
    type: 'container',
    child: {
      type: 'row',
      children: [
        {
          type: 'container',
          flex: 0,
          hidden: true,
          child: {
            component: '_side_navigation_component',
          },
          mediaScreenOnly: [
            {
              style: {
                flex: 3,
                hidden: false,
              },
              className: 'ipad-break-point',
            },
          ],
        },
        {
          type: 'container',
          flex: 9,
          mediaScreenOnly: [
            {
              className: 'desktop-break-point',
              style: {
                flex: 10,
              },
            },
          ],
          child: {
            type: 'stack',
            children: [
              {
                type: 'container',
                backgroundColor: 'red',
                height: '0.32sh',
                width: '1sw',
                mediaScreenOnly: [
                  {
                    className: 'desktop-break-point',
                    style: {
                      width: '0.8sw',
                    },
                  },
                  {
                    className: 'ipad-break-point',
                    style: {
                      width: '0.8sw',
                    },
                  },
                ],
                gradient: {
                  type: 'linear',
                  colors: ['pink', 'skyblue'],
                  begin: 'topLeft',
                  end: 'bottomRight',
                },
                child: {
                  type: 'text',
                  text: '',
                },
              },
              {
                component: '_body',
                wrappers: [
                  {
                    type: 'safe_area',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  },
});
