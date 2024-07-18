import React from 'react';
import SubComponentBuilder from '../../page-builder/sub-component-builder';
import { IPageProps } from '../../page-builder/common-interface/page-context-interface';

interface IPageState {
  props?: any; // props from the parent
  navigatorIndex?: boolean[];
  dashboardNotifCount?: number;
}

export default React.memo((props: IPageProps<IPageState>) => {
  const {
    setPageData,
    exportPageContext,
    useInitState,
    $root,
    httpRequest,
    toggleChangeTheme,
  } = props.pageBuilderContext;

  useInitState({
    navigatorIndex: $root.props?.navigatorIndex ?? [
      false,
      false,
      false,
      false,
      false,
    ],
    dashboardNotifCount: 3,
  });

  const prevNavigatiorIndex = usePrevious($root.navigatorIndex);

  React.useEffect(() => {
    if (
      $root.props?.navigatorIndex &&
      _.isEqual($root.props?.navigatorIndex, $root.navigatorIndex)
    ) {
      console.log(`abcd side_naviagation setState`);
      setPageData({ navigatorIndex: $root.props?.navigatorIndex });
    }
  }, [$root.props?.navigatorIndex, $root.navigatorIndex]);

  React.useEffect(() => {
    if (!_.isEqual($root.props?.navigatorIndex, $root.navigatorIndex)) {
      console.log(`abcd side_naviagation updateNavigatorIndex`);

      $root.props?.updateNavigatorIndex?.($root.navigatorIndex);
    }
  }, [
    $root.navigatorIndex,
    $root.props?.navigatorIndex,
    $root.props?.updateNavigatorIndex,
  ]);

  return <SubComponentBuilder {...props} />;
});
