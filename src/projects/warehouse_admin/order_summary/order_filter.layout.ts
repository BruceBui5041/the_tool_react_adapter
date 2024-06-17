export default (): LayoutSchema => ({
  components: {
    _dashboard_item_container: {
      type: 'container',
      boxShadow: {
        color: '#black20',
        blurRadius: 10,
        blurStyle: 'outer',
      },
      className: 'common--component--bg',
    },
  },
  content: {
    component: '_dashboard_item_container',
    height: '0.55sh',
    width: '0.28sw',
    child: {
      type: 'column',
      scrollable: true,
      children: [
        {
          type: 'row',
          mainAxisAlignment: 'spaceBetween',
          children: [
            {
              type: 'text',
              text: 'Filter',
              style: 'textTheme.titleLarge',
            },
            {
              type: 'button',
              buttonType: 'icon',
              iconSize: 16,
              icon: 'close',
              onClick: 'closePopup',
            },
          ],
        },
        {
          type: 'column',
          children: [
            {
              type: 'text',
              text: 'Order Type',
              wrappers: [
                {
                  type: 'align',
                  alignment: 'centerLeft',
                },
              ],
            },
            {
              type: 'sized_box',
              height: 60,
              child: {
                type: 'row',
                mainAxisAlignment: 'spaceBetween',
                children: [
                  {
                    type: 'field',
                    fieldType: 'checkbox',
                    flex: 1,
                    name: 'homeDeliveryOrderType',
                    title: {
                      type: 'text',
                      text: 'Home Delivery',
                    },
                  },
                  {
                    type: 'field',
                    fieldType: 'checkbox',
                    name: 'pickupOrderType',
                    flex: 1,
                    title: {
                      type: 'text',
                      text: 'Pick Up',
                    },
                  },
                ],
              },
            },
            {
              type: 'divider',
              color: '#black10',
            },
            {
              type: 'sized_box',
              height: 8,
            },
            {
              type: 'divider',
              color: '#black10',
            },
            {
              type: 'column',
              crossAxisAlignment: 'start',
              children: [
                {
                  type: 'text',
                  text: 'Status',
                },
                {
                  type: 'field',
                  fieldType: 'select',
                  name: 'status',
                  defaultValue: 'all',
                  padding: [7, 0],
                  className: 'bordered-field',
                  items: [
                    ['all', 'All'],
                    ['pending', 'Pending'],
                    ['completed', 'Completed'],
                    ['in_progress', 'In Progress'],
                  ],
                },
              ],
            },
            {
              type: 'sized_box',
              height: 8,
            },
            {
              type: 'column',
              crossAxisAlignment: 'start',
              children: [
                {
                  type: 'text',
                  text: 'Customer',
                },
                {
                  type: 'field',
                  fieldType: 'select',
                  name: 'username',
                  padding: [7, 0],
                  defaultValue: 'all',
                  className: 'bordered-field',
                  items: '{{ customerNames }}',
                },
              ],
            },
            {
              type: 'sized_box',
              height: 8,
            },
            {
              type: 'column',
              crossAxisAlignment: 'start',
              children: [
                {
                  type: 'text',
                  text: 'Amount',
                },
                {
                  type: 'sized_box',
                  height: 4,
                },
                {
                  type: 'row',
                  mainAxisAlignment: 'spaceBetween',
                  children: [
                    {
                      type: 'field',
                      fieldType: 'currency',
                      name: 'fromAmount',
                      labelText: 'From',
                      padding: [7, 0],
                      formatters: {
                        decimalPlaces: 2,
                        leadingSymbol: '$',
                      },
                      className: 'bordered-field',
                      flex: 1,
                    },
                    {
                      type: 'sized_box',
                      width: 20,
                    },
                    {
                      type: 'field',
                      fieldType: 'currency',
                      name: 'toAmount',
                      labelText: 'To',
                      padding: [7, 0],
                      formatters: {
                        decimalPlaces: 2,
                        leadingSymbol: '$',
                      },
                      className: 'bordered-field',
                      flex: 1,
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
              type: 'row',
              children: [
                {
                  type: 'sized_box',
                  height: 36,
                  flex: 1,
                  child: {
                    type: 'button',
                    text: 'Apply',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
});
