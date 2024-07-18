export default (): LayoutSchema => ({
  content: {
    type: 'container',
    child: {
      type: 'column',
      crossAxisAlignment: 'start',
      children: [
        {
          type: 'text',
          text: 'Recent Orders',
          flex: 1,
        },
        {
          type: 'list',
          flex: 16,
          name: 'recentOrders',
          separator: {
            type: 'divider',
            thickness: 0.3,
            color: '#black20',
          },
          itemLayout: {
            type: 'list_tile',
            leading: {
              type: 'container',
              width: 50,
              height: 50,
              borderRadius: {
                type: 'all',
                radius: 8,
              },
              boxBorder: {
                color: '#black10',
                style: 'solid',
                width: 1,
              },
              image: {
                type: 'network',
                url: '{{ image }}',
              },
            },
            title: {
              type: 'text',
              text: '{{ name }}',
            },
            subtitle: {
              type: 'text',
              text: '${{ price }} x {{ quantity }}',
            },
            trailing: {
              type: 'column',
              children: [
                {
                  type: 'text',
                  text: '{{ orderDate }}',
                },
                {
                  type: 'container',
                  borderRadius: {
                    type: 'all',
                    radius: 8,
                  },
                  padding: [8, 2, 8, 2],
                  dynamicProps: [
                    {
                      conditions: {
                        source: '{{ status }}',
                        operator: '==',
                        target: 'pending',
                      },
                      true: {
                        backgroundColor: '#errorColor12',
                      },
                      false: {
                        backgroundColor: '#successColor12',
                      },
                    },
                  ],
                  child: {
                    type: 'text',
                    dynamicProps: [
                      {
                        conditions: {
                          source: '{{ status }}',
                          operator: '==',
                          target: 'pending',
                        },
                        true: {
                          color: '#errorColor',
                        },
                        false: {
                          color: '#successColor',
                        },
                      },
                    ],
                    text: '{{ formatStatus }}',
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },
});
