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
              type: 'sized_box',
              height: 250,
              width: 300,
              child: {
                type: 'field',
                fieldType: 'range',
                name: 'dateRange',
              },
            },
          ],
        },
      ],
    },
  },
});
