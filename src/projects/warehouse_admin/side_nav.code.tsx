import React from 'react';
import { IPageProps } from '../../page-builder/common-interface/page-context-interface';
import SubComponentBuilder from '../../page-builder/sub-component-builder';
import { use } from 'passport';
import { isEqual } from 'lodash';

interface INavItem {
  title: string;
  icon: string;
  id: number;
  selected?: boolean;
  notifCount?: number;
}

interface IPageState {
  navItems: INavItem[];
  selectedItemId: number;
  isCollapsed: boolean;
  props?: {
    onChangePage: (pageId: number) => void;
    toggleCollapseSideNav: () => void;
    selectedItemId: number;
  };
}

export default React.memo((props: IPageProps<IPageState>) => {
  const { $root, setPageData, useInitState, exportPageContext } =
    props.pageBuilderContext;

  useInitState({
    selectedItemId: $root.props?.selectedItemId || 1,
    navItems: [
      {
        id: 1,
        title: 'Dashboard',
        icon: 'view-dashboard-outline',
        notifCount: 5,
      },
      {
        id: 2,
        title: 'Orders',
        icon: 'package-variant-closed',
      },
      {
        id: 3,
        title: 'Customers',
        icon: 'account-supervisor-outline',
        notifCount: 10,
      },
      {
        id: 4,
        title: 'Inventory',
        icon: 'warehouse',
        notifCount: 1,
      },
      {
        id: 5,
        title: 'Reports',
        icon: 'file-chart-outline',
      },
      {
        id: 6,
        title: 'Settings',
        icon: 'cog-outline',
      },
    ],
  });

  const prevSelectedItemId = usePrevious($root.selectedItemId);

  const onNavItemClick = React.useCallback((id: number) => {
    setPageData({
      selectedItemId: id,
    });
  }, []);

  React.useEffect(() => {
    if ($root.selectedItemId === prevSelectedItemId) return;
    $root.props?.onChangePage($root.selectedItemId);
    const navItems = $root.navItems.map((item) => {
      return {
        ...item,
        selected: item.id === $root.selectedItemId,
      };
    });
    setPageData({ navItems });
  }, [$root.navItems, prevSelectedItemId, $root.selectedItemId]);

  exportPageContext({
    onItemClick: onNavItemClick,
  });

  return <SubComponentBuilder {...props} />;
});
