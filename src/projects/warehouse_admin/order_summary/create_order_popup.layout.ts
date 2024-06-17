export default (): LayoutSchema => ({
  components: {
    _field_select_outline: {
      type: 'field',
      fieldType: 'select',
      name: '',
      fillColor: '#black04',
      filled: true,
      maxHeight: 52,
      icon: {
        type: 'icon',
        icon: 'chevron-down',
        color: '#black60',
      },
    },
  },
  content: {
    type: 'sized_box',
    height: '0.8sh',
    width: '0.5sw',
    child: {
      type: 'column',
      children: [
        {
          type: 'row',
          flex: 7,
          children: [
            {
              type: 'column',
              flex: 1,
              children: [
                {
                  type: 'row',
                  mainAxisAlignment: 'spaceBetween',
                  children: [
                    {
                      type: 'text',
                      text: 'Order Details',
                      style: 'textTheme.labelLarge',
                      flex: 1,
                    },
                    {
                      type: 'row',
                      mainAxisAlignment: 'spaceBetween',
                      flex: 1,
                      children: [
                        {
                          type: 'text',
                          text: 'New Customer',
                          style: 'textTheme.labelLarge',
                        },
                        {
                          type: 'sized_box',
                          width: 40,
                          height: 20,
                          child: {
                            type: 'fitted_box',
                            fit: 'fill',
                            child: {
                              type: 'field',
                              fieldType: 'switch',
                              name: 'isNewCustomer',
                              padding: 0,
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'sized_box',
                  height: 24,
                },
                {
                  type: 'field',
                  fieldType: 'select',
                  name: 'customer',
                  hintText: 'Select Customer',
                  items: '{{ selectCustomers }}',
                  fillColor: '#black04',
                  filled: true,
                  maxHeight: 52,
                  icon: {
                    type: 'icon',
                    icon: 'chevron-down',
                    color: '#black60',
                  },
                  searchable: true,
                  searchInputFieldDecoration: {
                    enabledBorder: {
                      type: 'outline',
                      borderSide: {
                        color: '#black30',
                        width: 1,
                        style: 'solid',
                      },
                    },
                    focusedBorder: {
                      type: 'outline',
                      borderSide: {
                        color: '#black30',
                        width: 1,
                        style: 'solid',
                      },
                    },
                  },
                },
                {
                  type: 'sized_box',
                  height: 24,
                },
                {
                  type: 'row',
                  mainAxisAlignment: 'spaceBetween',
                  children: [
                    {
                      component: '_field_select_outline',
                      name: 'paymentType',
                      hintText: 'Payment Type',
                      flex: 1,
                      items: [
                        ['1', 'Cash'],
                        ['2', 'Credit'],
                      ],
                    },
                    {
                      type: 'sized_box',
                      width: 12,
                    },
                    {
                      component: '_field_select_outline',
                      name: 'orderType',
                      hintText: 'Order Type',
                      flex: 1,
                      items: [
                        ['1', 'Shopee'],
                        ['2', 'Laz'],
                      ],
                    },
                  ],
                },
                {
                  type: 'sized_box',
                  height: 24,
                },
                {
                  type: 'column',
                  children: [
                    {
                      type: 'text',
                      text: 'Order Time & Date',
                      wrappers: [
                        {
                          type: 'align',
                          alignment: 'centerLeft',
                        },
                      ],
                    },
                    {
                      type: 'row',
                      mainAxisAlignment: 'spaceBetween',
                      children: [
                        {
                          type: 'field',
                          fieldType: 'date',
                          name: 'orderDate',
                          defaultValue: 'now',
                          hintText: 'Order Date',
                          flex: 1,
                          fillColor: '#black04',
                          filled: true,
                          maxHeight: 52,
                          prefixIcon: {
                            type: 'icon',
                            icon: 'calendar-month-outline',
                            color: '#black60',
                          },
                        },
                        {
                          type: 'sized_box',
                          width: 12,
                        },
                        {
                          type: 'field',
                          fieldType: 'time',
                          name: 'orderTime',
                          hintText: 'Order Time',
                          defaultValue: 'now',
                          flex: 1,
                          fillColor: '#black04',
                          filled: true,
                          maxHeight: 52,
                          prefixIcon: {
                            type: 'icon',
                            icon: 'clock-time-eight-outline',
                            color: '#black60',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'sized_box',
                  height: 24,
                },
                {
                  type: 'column',
                  children: [
                    {
                      type: 'text',
                      text: 'Order Status',
                      wrappers: [
                        {
                          type: 'align',
                          alignment: 'centerLeft',
                        },
                      ],
                    },
                    {
                      component: '_field_select_outline',
                      name: 'orderStatus',
                      hintText: 'Order Status',
                      defaultValue: 'pending',
                      items: [
                        ['pending', 'Pending'],
                        ['in_progress', 'In Progess'],
                        ['completed', 'Completed'],
                      ],
                    },
                  ],
                },
                {
                  type: 'sized_box',
                  height: 24,
                },
                {
                  type: 'field',
                  fieldType: 'text',
                  name: 'orderNote',
                  hintText: 'Order Note',
                  maxLines: 8,
                  flex: 1,
                  fillColor: '#black04',
                  filled: true,
                  maxHeight: 52,
                },
              ],
            },
            {
              type: 'sized_box',
              width: 12,
            },
            {
              type: 'column',
              flex: 1,
              children: [
                {
                  type: 'text',
                  text: 'Items',
                  style: 'textTheme.labelLarge',
                  wrappers: [
                    {
                      type: 'align',
                      alignment: 'centerLeft',
                    },
                  ],
                },
                {
                  type: 'sized_box',
                  height: 24,
                },
                {
                  type: 'field',
                  fieldType: 'text',
                  name: 'searchText',
                  hintText: 'Search',
                  padding: [7, 0],
                  className: 'bordered-field',
                  maxHeight: 52,
                  prefixIcon: {
                    type: 'icon',
                    icon: 'magnify',
                    color: '#black60',
                  },
                },
                {
                  type: 'sized_box',
                  height: 24,
                },
                {
                  type: 'list',
                  flex: 16,
                  name: 'filteredItems',
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
                      text: '${{ price }}',
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
          ],
        },
        {
          type: 'row',
          flex: 1,
          mainAxisAlignment: 'center',
          children: [
            {
              type: 'button',
              buttonType: 'outlined',
              onClick: 'closePopup',
              child: {
                type: 'text',
                text: 'Cancel',
                color: '#primary100',
              },
            },
            {
              type: 'sized_box',
              width: 12,
            },
            {
              type: 'button',
              text: 'Create Order',
            },
          ],
        },
      ],
    },
  },
});
