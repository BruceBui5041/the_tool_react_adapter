export default (): LayoutSchema => ({
  components: {
    custom_container: {
      type: 'container',
      height: 100,
    },
    grand_child_component: {
      type: 'component',
      path: 'component_test1',
      componentProps: {
        backgroundParentSet: 'skyblue',
      },
    },
  },
  content: {
    type: 'container',
    height: 200,
    margin: [1, 3],
    maxHeight: 500,
    backgroundColor: '{{ props.backgroundParentSet }}',
    child: {
      type: 'column',
      children: [
        {
          type: 'text',
          color: 'black',
          text: 'Component state: {{ componentState }}',
        },
        {
          type: 'text',
          text: 'From parent state: {{ props.parentState }}',
        },
        {
          type: 'row',
          mainAxisAlignment: 'center',
          children: [
            {
              type: 'button',
              buttonType: 'text',
              text: 'Components function',
              onClick: 'updateDataFunction()',
            },
            {
              type: 'button',
              buttonType: 'text',
              text: 'Parents function',
              onClick: 'updateParentData()',
            },
          ],
        },
        {
          type: 'row',
          mainAxisAlignment: 'center',
          children: [
            {
              component: 'custom_container',
              flex: 1,
              child: {
                component: 'grand_child_component',
                componentProps: {
                  backgroundParentSet: 'skyblue',
                },
              },
            },
            {
              component: 'custom_container',
              flex: 1,
              child: {
                component: 'grand_child_component',
                componentProps: {
                  backgroundParentSet: 'aliceblue',
                },
              },
            },
            {
              component: 'custom_container',
              flex: 1,
              child: {
                component: 'grand_child_component',
                componentProps: {
                  backgroundParentSet: 'lightgray',
                },
              },
            },
          ],
        },
      ],
    },
  },
});
