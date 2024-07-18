import React from 'react';
import { IPageProps } from '../../../../page-builder/common-interface/page-context-interface';
import SubComponentBuilder from '../../../../page-builder/sub-component-builder';

interface IPageState {
  showRemoveSnackbar: boolean;
  removeSnackbarMessage: string;
  props?: any; // props from the parent
}

export default React.memo((props: IPageProps<IPageState>) => {
  const { exportPageContext, useInitState, setPageData, $root } =
    props.pageBuilderContext;

  useInitState({
    showRemoveSnackbar: $root.props.showRemoveSnackbar,
    removeSnackbarMessage: $root.props.removeSnackbarMessage,
  });

  React.useEffect(() => {
    if ($root.props.showRemoveSnackbar) {
      setPageData({
        showRemoveSnackbar: $root.props.showRemoveSnackbar,
        removeSnackbarMessage: $root.props.removeSnackbarMessage,
      });
    }
  }, [$root.props.showRemoveSnackbar, $root.props.removeSnackbarMessage]);

  exportPageContext({
    closeRemoveSnackbar: () => {
      $root.props?.closeRemoveSnackbar?.();
    },
  });

  return <SubComponentBuilder {...props} />;
});
