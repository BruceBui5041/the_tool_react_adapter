import React from 'react';
import { IPageProps } from '../../page-builder/common-interface/page-context-interface';
import SubComponentBuilder from '../../page-builder/sub-component-builder';

interface IPageState {
  selectedItemId: number;
  isCollapsed: boolean;
}

export default React.memo((props: IPageProps<IPageState>) => {
  const { $root, setPageData, useInitState, exportPageContext } =
    props.pageBuilderContext;

  useInitState({
    selectedItemId: 2,
    isCollapsed: false,
  });

  const onChangePage = React.useCallback((pageId: number) => {
    setPageData({ selectedItemId: pageId });
  }, []);

  const toggleCollapseSideNav = React.useCallback(() => {
    setPageData({ isCollapsed: !$root.isCollapsed });
  }, [$root.isCollapsed]);

  exportPageContext({
    onChangePage,
    toggleCollapseSideNav,
  });

  return <SubComponentBuilder {...props} />;
});
