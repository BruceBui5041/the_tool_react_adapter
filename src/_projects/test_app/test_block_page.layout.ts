export default (): LayoutSchema => ({
  components: {
    test_component: {
      type: 'component',
      path: 'component_test',
      componentProps: {
        changeData: '{{ functionUsedInComponent }}',
        backgroundParentSet: 'peachpuff',
        parentState: '{{ parentState }}',
      },
    },
  },
  content: {
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
        mainAxisAlignment: 'center',
        children: [
          {
            type: 'text',
            text: 'Parent State: {{ parentState }}',
          },
          {
            type: 'row',
            mainAxisAlignment: 'center',
            children: [
              {
                type: 'button',
                text: 'Parent Function',
                onClick: 'functionUsedInComponent()',
              },
              {
                type: 'button',
                text: 'Not related State',
                onClick: 'notRelatedUpdateState()',
              },
            ],
          },
        ],
      },
      {
        type: 'scroll_view',
        flex: 8,
        sliverListType: 'fixed_extent_list',
        itemExtent: 200,
        children: [
          {
            component: 'test_component',
            componentProps: {
              backgroundParentSet: 'red',
            },
          },
          {
            component: 'test_component',
          },
          {
            component: 'test_component',
            componentProps: {
              backgroundParentSet: 'yellow',
            },
          },
          {
            component: 'test_component',
          },
          {
            component: 'test_component',
            componentProps: {
              backgroundParentSet: 'yellow',
            },
          },
          {
            component: 'test_component',
          },
          {
            component: 'test_component',
            componentProps: {
              backgroundParentSet: 'yellow',
            },
          },
          {
            component: 'test_component',
          },
          {
            component: 'test_component',
            componentProps: {
              backgroundParentSet: 'yellow',
            },
          },
          {
            component: 'test_component',
          },
          {
            component: 'test_component',
            componentProps: {
              backgroundParentSet: 'yellow',
            },
          },
          {
            component: 'test_component',
          },
          {
            component: 'test_component',
            componentProps: {
              backgroundParentSet: 'yellow',
            },
          },
          {
            component: 'test_component',
          },
          {
            component: 'test_component',
            componentProps: {
              backgroundParentSet: 'yellow',
            },
          },
          {
            component: 'test_component',
          },
          {
            component: 'test_component',
            componentProps: {
              backgroundParentSet: 'yellow',
            },
          },
          {
            component: 'test_component',
          },
          {
            component: 'test_component',
            componentProps: {
              backgroundParentSet: 'yellow',
            },
          },
          {
            component: 'test_component',
          },
        ],
      },
    ],
  },
});
