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
              text: 'My Order Mobile',
              style: 'textTheme.headlineSmall',
            },
          },
          {
            type: 'container',
            width: 220,
            child: {
              type: 'row',
              mainAxisAlignment: 'spaceEvenly',
              children: [
                {
                  type: 'button',
                  buttonType: 'outlined',
                  color: 'grey',
                  style: {
                    foregroundColor: 'grey',
                    side: {
                      style: 'solid',
                      width: 1,
                      color: 'grey',
                    },
                  },
                  text: 'Ongoing',
                },
                {
                  type: 'button',
                  buttonType: 'outlined',
                  color: 'grey',
                  style: {
                    foregroundColor: 'white',
                    backgroundColor: 'black',
                    side: {
                      style: 'solid',
                      width: 1,
                      color: 'grey',
                    },
                  },
                  text: 'Completed',
                },
              ],
            },
          },
        ],
      },
    },
    actions: [
      {
        type: 'button',
        buttonType: 'icon',
        icon: 'cart-outline',
        onClick: "goTo('cart_list')",
      },
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
                        type: 'rectangle',
                        borderRadius: {
                          type: 'all',
                          radius: 16,
                        },
                      },
                      child: {
                        type: 'dismissable',
                        key: '{{ id }}',
                        onDismissed: 'removeItem({{ id }})',
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
                                        type: 'text',
                                        text: 'Quantity: ',
                                      },
                                      {
                                        type: 'text',
                                        text: '{{ qty }}',
                                        style: 'textTheme.titleMedium',
                                      },
                                    ],
                                  },
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
                                    type: 'row',
                                    children: [
                                      {
                                        type: 'text',
                                        text: 'Price: ',
                                      },
                                      {
                                        type: 'text',
                                        text: '${{ price }}',
                                        style: 'textTheme.titleMedium',
                                      },
                                    ],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    },
                    {
                      type: 'card',
                      positioned: {
                        bottom: -7,
                        right: 0,
                      },
                      shapeBorder: {
                        type: 'circle',
                      },
                      child: {
                        type: 'button',
                        buttonType: 'icon',
                        color: '{{ deleteIconColor }}',
                        icon: '{{ deleteIcon }}',
                        onClick: 'removeItem({{ id }})',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'component',
          path: 'delete_snackbar',
          componentProps: {
            removeSnackbarMessage: '{{ removeSnackbarMessage }}',
            showRemoveSnackbar: '{{ showRemoveSnackbar }}',
            closeRemoveSnackbar: '{{closeRemoveSnackbar}}',
          },
        },
      ],
    },
  },
});
