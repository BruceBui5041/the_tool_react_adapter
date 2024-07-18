export default (): LayoutSchema => ({
  content: {
    type: 'container',
    backgroundColor: '{{ props.backgroundParentSet }}',
    child: {
      type: 'column',
      children: [
        {
          type: 'text',
          text: 'Grandchildren',
          color: 'black',
        },

        {
          type: 'text',
          text: '{{ componentState }}',
          color: 'black',
        },
        {
          type: 'text',
          color: 'black',
          text: 'root {{ $root.componentState }}',
        },
        {
          type: 'button',
          text: 'Grandchildren()',
          onClick: 'updateDataFunction()',
        },
        {
          type: 'button',
          text: 'Do nothing button',
        },
      ],
    },
  },
});
