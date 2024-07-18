import React from 'react';
import { IPageProps } from '../../../page-builder/common-interface/page-context-interface';
import SubComponentBuilder from '../../../page-builder/sub-component-builder';

interface IPageState {
  customerNames: [string, string][];
  username?: string;
  status?: string;
  homeDeliveryOrderType?: boolean;
  pickupOrderType?: boolean;
  fromAmount?: string;
  toAmount?: string;
  props?: {
    closePopup: () => void;
    userNameOptions: [string, string][];
  };
}

export default React.memo((props: IPageProps<IPageState>) => {
  const { $ } = props;

  const closePopup = React.useCallback(() => {
    $.root.props?.closePopup?.();
  }, [$.root.props?.closePopup]);

  React.useEffect(() => {
    $.setPageData({
      customerNames: [
        ['all', 'All'],
        ...($.root.props?.userNameOptions ?? []),
      ] ?? [['all', 'All']],
    });
  }, [$.root.props?.userNameOptions]);

  React.useEffect(() => {
    const searchData = {
      username: $.root.username,
      status: $.root.status,
      homeDeliveryOrderType: $.root.homeDeliveryOrderType,
      pickupOrderType: $.root.pickupOrderType,
      fromAmount: $.root.fromAmount,
      toAmount: $.root.toAmount,
    };
    console.log(`search data ${JSON.stringify(searchData, null, 2)}`);
  }, [
    $.root.username,
    $.root.status,
    $.root.homeDeliveryOrderType,
    $.root.pickupOrderType,
    $.root.fromAmount,
    $.root.toAmount,
  ]);

  $.exportPageContext({
    closePopup,
  });

  return <SubComponentBuilder {...props} />;
});
