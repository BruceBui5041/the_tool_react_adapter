export default (): LayoutSchema => ({
  components: {
    _dashboard_item_container: {
      type: 'container',
      className: 'common--component--bg',
    },
  },
  content: {
    type: 'container',
    height: '0.87sh',
    child: {
      type: 'column',
      // crossAxisAlignment: 'stretch',
      children: [
        {
          type: 'row',
          mainAxisAlignment: 'spaceBetween',
          flex: 3,
          children: [
            {
              type: 'text',
              text: 'Order Summary',
            },
            {
              type: 'button',
              onClick: 'openCreateOrderPopup',
              child: {
                type: 'row',
                children: [
                  {
                    type: 'icon',
                    icon: 'plus',
                    color: '#white100',
                  },
                  {
                    type: 'text',
                    text: 'Create a New Order',
                    color: '#white100',
                  },
                ],
              },
            },
          ],
        },
        {
          type: 'sized_box',
          height: 20,
          flex: 1,
        },
        {
          type: 'row',
          flex: 10,
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
        {
          type: 'sized_box',
          flex: 1,
        },
        {
          type: 'stack',
          flex: 45,
          children: [
            {
              component: '_dashboard_item_container',
              padding: [15, 10, 15, 20],
              // margin: [0, 20, 0, 20],
              child: {
                type: 'column',
                children: [
                  {
                    type: 'row',
                    mainAxisAlignment: 'spaceBetween',
                    children: [
                      {
                        type: 'text',
                        text: 'Order Summary',
                        flex: 1,
                      },
                      {
                        type: 'row',
                        flex: 1,
                        mainAxisAlignment: 'end',
                        children: [
                          {
                            type: 'field',
                            fieldType: 'text',
                            name: 'searchText',
                            hintText: 'Search',
                            padding: [7, 0],
                            className: 'bordered-field',
                            maxHeight: 36,
                            maxWidth: 200,
                            prefixIcon: {
                              type: 'icon',
                              icon: 'magnify',
                              color: '#black60',
                            },
                          },
                          {
                            type: 'sized_box',
                            width: 10,
                          },
                          {
                            type: 'button',
                            buttonType: 'outlined',
                            child: {
                              type: 'row',
                              children: [
                                {
                                  type: 'icon',
                                  icon: 'filter-outline',
                                },
                                {
                                  type: 'text',
                                  text: 'Filter',
                                },
                              ],
                            },
                            onClick: 'toggleOrderFilter',
                          },
                          {
                            type: 'sized_box',
                            width: 10,
                          },
                          {
                            type: 'button',
                            buttonType: 'outlined',
                            child: {
                              type: 'row',
                              children: [
                                {
                                  type: 'icon',
                                  icon: 'calendar-month-outline',
                                },
                                {
                                  type: 'text',
                                  text: 'Filter',
                                },
                              ],
                            },
                            onClick: 'toggleDateTimeFilter',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'sized_box',
                    height: 12,
                  },
                  {
                    type: 'table',
                    name: 'orders',
                    loadDataFunction: 'requestOrderSummary',
                    onSort: 'onSort',
                    flex: 1,
                    columnSpacing: 8,
                    dividerThickness: 0,
                    minWidth: 600,
                    headingRowDecoration: {
                      border: {
                        top: {
                          width: 1,
                          color: '#black10',
                        },
                        bottom: {
                          width: 1,
                          color: '#black10',
                        },
                      },
                    },
                    columns: [
                      {
                        fieldData: '{{ id }}',
                        label: 'Order ID',
                        fixedWidth: 100,
                      },
                      {
                        fieldData: '{{ customerName }}',
                        label: 'Customer Name',
                      },
                      {
                        fieldData: '{{ orderDate }}',
                        label: 'Order Date',
                      },
                      {
                        fieldData: '{{ totalPrice }}',
                        label: 'Total Amount',
                        fixedWidth: 150,
                      },
                      {
                        fieldData: '{{ action }}',
                        label: 'Action',
                        fixedWidth: 180,
                      },
                      {
                        fieldData: '{{ status }}',
                        label: 'Order Status',
                      },
                    ],
                    rows: [
                      {
                        cells: [
                          {
                            child: {
                              type: 'text',
                              text: '{{ id }}',
                            },
                          },
                          {
                            child: {
                              type: 'text',
                              text: '{{ customerName }}',
                            },
                          },
                          {
                            child: {
                              type: 'text',
                              text: '{{ orderDate }}',
                            },
                          },
                          {
                            child: {
                              type: 'text',
                              text: '{{ totalPrice }}',
                              wrappers: [
                                {
                                  type: 'align',
                                  alignment: 'center',
                                },
                              ],
                            },
                          },
                          {
                            child: {
                              type: 'field',
                              fieldType: 'select',
                              name: 'action',
                              defaultValue: 'pending',
                              fillColor: '#black10',
                              filled: true,
                              padding: [8, 0, 0, 0],
                              maxHeight: 23,
                              maxWidth: 109,

                              style: {
                                color: '#black60',
                                fontSize: '9sp',
                              },
                              icon: {
                                type: 'icon',
                                icon: 'chevron-down',
                                color: '#black60',
                              },
                              items: [
                                ['pending', 'Pending'],
                                ['in_progress', 'In Progess'],
                                ['completed', 'Completed'],
                              ],
                            },
                          },
                          {
                            child: {
                              type: 'container',
                              borderRadius: {
                                type: 'all',
                                radius: 8,
                              },
                              padding: [8, 2, 8, 2],
                              dynamicProps: [
                                {
                                  type: 'switch',
                                  switch: '{{ status }}',
                                  cases: {
                                    pending: {
                                      backgroundColor: '#secondaryColor30',
                                    },
                                    in_progress: {
                                      backgroundColor: '#primaryColor16',
                                    },
                                    completed: {
                                      backgroundColor: '#successColor16',
                                    },
                                  },
                                },
                              ],
                              child: {
                                type: 'text',
                                dynamicProps: [
                                  {
                                    type: 'switch',
                                    switch: '{{ status }}',
                                    cases: {
                                      pending: {
                                        color: '#black100',
                                      },
                                      in_progress: {
                                        color: '#primaryColor',
                                      },
                                      completed: {
                                        color: '#successColor',
                                      },
                                    },
                                  },
                                ],
                                text: '{{ formatStatus }}',
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
              type: 'visibility',
              positioned: {
                top: 20,
                right: 20,
              },
              visible: '{{ openOrderFilter }}',
              child: {
                type: 'component',
                path: 'order_filter',
                componentProps: {
                  closePopup: '{{ toggleOrderFilter }}',
                  userNameOptions: '{{ userNameOptions }}',
                },
              },
            },
            {
              type: 'visibility',
              positioned: {
                top: 20,
                right: 20,
              },
              visible: '{{ openDateTimeFilter }}',
              child: {
                type: 'component',
                path: 'order_datetime_filter',
                componentProps: {
                  closePopup: '{{ toggleDateTimeFilter }}',
                },
              },
            },
          ],
        },
        {
          type: 'dialog',
          name: 'isCreatePopupOpen',
          title: {
            type: 'text',
            text: 'Create New Order',
          },
          content: {
            type: 'component',
            path: 'create_order_popup',
            componentProps: {
              closePopup: '{{ closeCreateOrderPopup }}',
            },
          },
        },
      ],
    },
  },
});
