export default (): LayoutSchema => ({
  content: {
    type: 'container',
    className: ['side-nav--bg'],
    child: {
      type: 'row',
      children: [
        {
          type: 'text',
          text: 'Dashboard {{ props.selectedItemId }}',
          style: 'textTheme.headlineSmall',
        },
      ],
    },
  },
});
