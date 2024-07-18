export default (): LayoutSchema => ({
  appBar: {
    type: 'appbar',
    alignment: false,
    elevation: 1,
    // leading: {
    //   type: 'button',
    //   buttonType: 'icon',
    //   icon: 'arrow-left',
    // },
    shapeBorder: {
      type: 'rectangle',
      borderRadius: {
        type: 'only',
        bottomRight: 16,
        bottomLeft: 16,
      },
    },
    appBarBottom: {
      height: 50,
      child: {
        type: 'row',
        crossAxisAlignment: 'center',
        children: [
          {
            type: 'padding',
            flex: 1,
            padding: [10, 0, 0, 8],
            child: {
              type: 'text',
              text: 'My Cart',
              color: '#primaryColor',
              style: 'textTheme.headlineSmall',
            },
          },
        ],
      },
    },
    actions: [
      {
        type: 'button',
        buttonType: 'icon',
        icon: '{{ toggleThemeIcon }}',
        onClick: 'changeTheme()',
      },
    ],
  },
  content: {
    type: 'padding',
    padding: 8,
    child: {
      type: 'column',
      wrappers: [
        {
          type: 'safe_area',
        },
      ],
      // scrollable: true,
      children: [
        {
          type: 'list',
          name: 'product_list',
          flex: 1,
          itemCount: 5,
          itemExtent: 174,
          separator: {
            type: 'sized_box',
            height: 24,
          },
          itemLayout: {
            type: 'column',
            children: [
              {
                type: 'container',
                height: 150,
                child: {
                  type: 'stack',
                  clipBehavior: 'none',
                  children: [
                    {
                      type: 'card',
                      elevation: 10,
                      shapeBorder: {
                        type: 'rounded',
                        borderRadius: {
                          type: 'all',
                          radius: 16,
                        },
                      },
                      child: {
                        type: 'row',
                        children: [
                          {
                            type: 'container',
                            borderRadius: {
                              type: 'only',
                              bottomLeft: 16,
                              topLeft: 16,
                            },
                            image: {
                              type: 'network',
                              url: '{{ image }}',
                              fit: 'fill',
                            },
                            width: 150,
                            height: 150,
                          },
                          {
                            type: 'padding',
                            padding: 10,
                            flex: 1,
                            child: {
                              type: 'column',
                              crossAxisAlignment: 'start',
                              mainAxisAlignment: 'start',
                              children: [
                                {
                                  type: 'column',
                                  crossAxisAlignment: 'start',
                                  flex: 3,
                                  children: [
                                    {
                                      type: 'text',
                                      text: '{{ name }}',
                                      style: 'textTheme.titleLarge',
                                    },
                                    {
                                      type: 'text',
                                      text: '{{ description }}',
                                    },
                                  ],
                                },
                                {
                                  type: 'row',
                                  children: [
                                    {
                                      type: 'column',
                                      crossAxisAlignment: 'start',
                                      flex: 1,
                                      children: [
                                        {
                                          type: 'row',
                                          children: [
                                            {
                                              type: 'text',
                                              text: 'Size: ',
                                            },
                                            {
                                              type: 'text',
                                              text: '{{ size }}',
                                              style: 'textTheme.titleMedium',
                                            },
                                          ],
                                        },
                                        {
                                          type: 'text',
                                          text: '$ {{ price }}',
                                          style: 'textTheme.titleLarge',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'container',
                                      flex: 2,
                                      child: {
                                        type: 'row',
                                        mainAxisAlignment: 'end',
                                        children: [
                                          {
                                            type: 'container',
                                            backgroundColor: 'whitesmoke',
                                            height: 38,
                                            borderRadius: {
                                              type: 'all',
                                              radius: 24,
                                            },
                                            child: {
                                              type: 'row',
                                              children: [
                                                {
                                                  type: 'button',
                                                  buttonType: 'icon',
                                                  iconSize: 16,
                                                  icon: 'plus',
                                                  onClick:
                                                    'increaseQty({{ id }})',
                                                },
                                                {
                                                  type: 'text',
                                                  text: '{{ qty }}',
                                                  style:
                                                    'textTheme.titleMedium',
                                                },
                                                {
                                                  type: 'button',
                                                  buttonType: 'icon',
                                                  iconSize: 16,
                                                  icon: 'minus',
                                                  onClick:
                                                    'decreaseQty({{ id }})',
                                                },
                                              ],
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
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
});
