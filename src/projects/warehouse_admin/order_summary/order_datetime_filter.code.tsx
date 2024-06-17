import React from 'react';
import { IPageProps } from '../../../page-builder/common-interface/page-context-interface';
import SubComponentBuilder from '../../../page-builder/sub-component-builder';

interface IPageState {
  props?: {
    closePopup: () => void;
  };
}

export default React.memo((props: IPageProps<IPageState>) => {
  const { $ } = props;

  const closePopup = React.useCallback(() => {
    $.root.props?.closePopup?.();
  }, [$.root.props?.closePopup]);

  $.exportPageContext({
    closePopup,
  });

  return <SubComponentBuilder {...props} />;
});
