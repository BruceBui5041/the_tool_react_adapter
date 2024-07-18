export default (): LayoutSchema => ({
  content: {
    type: 'snackbar',
    name: 'showRemoveSnackbar',
    labelText: 'Undo',
    onClick: 'closeRemoveSnackbar',
    dismissDirection: 'startToEnd',
    child: {
      type: 'text',
      text: '{{ removeSnackbarMessage }}',
    },
  },
});
