import React from 'react';
import { IPageProps } from '../../page-builder/common-interface/page-context-interface';
import SubComponentBuilder from '../../page-builder/sub-component-builder';

interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
}

interface IPageState {
  tempUsers?: IUser[];
  refreshToken?: number;
  actionLable1?: string;
  users?: IUser[];
  mainNav?: boolean[];
  userImage?: string;
  totalUsers?: number;
  offset?: number;
  limit?: number;
  sortColumn?: string;
  isSortAscending?: boolean;
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
    actionLable1: 'Edit',
    users: [],
    mainNav: [true, false, false, false, false],
    userImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  });

  console.log('abcd dashboard re-render');

  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);

  const forceUpdate = React.useCallback(() => {
    setPageData({ refreshToken: Date.now() });
  }, []);

  React.useEffect(() => {
    (async () => {
      // const res = await request("https://my.api.mockaroo.com/datatest.json?key=5ad89160");
      // setPageData({ tempUser: res?.data });
    })();
  }, []);

  const onTableSort = React.useCallback(
    (columnIndex: number, fieldData: string, sortAscending: boolean) => {
      console.log(
        `abcd onTableSort ${columnIndex} ${fieldData} ${sortAscending}`,
      );

      const sortedUsers = _.orderBy(
        $root.tempUsers,
        fieldData,
        sortAscending ? 'asc' : 'desc',
      );
      setPageData({ users: sortedUsers });
    },
    [$root.tempUsers],
  );

  const fakePaging = (
    data: IUser[],
    { offset, limit, sortColumn, isSortAscending },
  ) => {
    let limitCount = 0;

    const sortedUsers = _.orderBy(
      data,
      sortColumn,
      isSortAscending ? 'asc' : 'desc',
    );

    const pagingData = (sortedUsers || []).filter((item, index) => {
      if (index >= offset && limitCount < limit) {
        limitCount++;
        return true;
      }
      return false;
    });

    return pagingData.map((user) => {
      if (selectedIds.includes(user.id)) {
        return {
          _selected: true,
          ...user,
        };
      }
      return user;
    });
  };

  const loadData = async ({ offset, limit, sortColumn, isSortAscending }) => {
    console.log(
      `abcd loadDataFunction ${offset} ${limit} ${sortColumn} ${isSortAscending}`,
    );

    let { tempUsers = [] } = $root;
    if (tempUsers.length == 0) {
      const res = await httpRequest(
        'https://my.api.mockaroo.com/datatest.json?key=5ad89160',
      );
      tempUsers = res?.data;
    }
    const totalUsers = tempUsers?.length || 0;
    const users = fakePaging(tempUsers, {
      offset,
      limit,
      sortColumn,
      isSortAscending,
    });

    // return users;
    setPageData({
      users,
      totalUsers,
      tempUsers,
      offset,
      limit,
      sortColumn,
      isSortAscending,
    });
  };

  React.useEffect(() => {
    const { tempUsers, offset, limit, sortColumn, isSortAscending } = $root;
    if (!tempUsers) return;
    const newUsers = fakePaging(tempUsers, {
      offset,
      limit,
      sortColumn,
      isSortAscending,
    });

    setPageData({
      totalUsers: tempUsers.length,
      users: newUsers,
    });
  }, [$root?.tempUsers]);

  const onSelectedChange = React.useCallback(
    (rowIndex: number, selection: boolean) => {
      if (!$root.users?.length) return;

      const recordId = $root.users[rowIndex]?.id;
      if (!recordId) return;

      setSelectedIds((prevSelectedIds) =>
        selection
          ? [...prevSelectedIds, recordId]
          : prevSelectedIds.filter((id) => id !== recordId),
      );
    },
    [$root.users],
  );

  let [selectAll, setSelectAll] = React.useState(false);

  const onSelectAll = React.useCallback(
    (selection: boolean) => {
      setSelectAll(selection);
      let newSelectedIds: number[] = [];
      if (selection) {
        const updatedUsers = $root.users?.map?.((user) => {
          return {
            ...user,
            _selected: true,
          };
        });
        newSelectedIds = _.map(updatedUsers, 'id');
      }

      setSelectedIds(newSelectedIds);
      return newSelectedIds;
    },
    [$root.users, selectAll],
  );

  const toggleSelectAll = React.useCallback(() => {
    let newSelectedIds = onSelectAll(!selectAll);

    const updatedUsers = $root.users?.map?.((user) => {
      return {
        ...user,
        _selected: newSelectedIds.includes(user?.id),
      };
    });

    setPageData({
      users: updatedUsers,
    });
  }, [$root.users, selectAll, onSelectAll]);

  const onChangeLanguage = React.useCallback(() => {
    console.log('abcd onChangeLanguage');
  }, []);

  const onChangeNotificationChange = React.useCallback(() => {
    console.log('abcd onChangeNotificationChange');
  }, []);

  const updateNavigatorIndex = React.useCallback(
    (navData) => {
      if (!_.isEqual($root.mainNav, navData)) {
        setPageData({ mainNav: navData || [] });
      }
    },
    [$root.mainNav],
  );

  exportPageContext({
    loadData,
    onTableSort: onTableSort,
    forceUpdate: forceUpdate,
    toggleSelectAll,
    onChangeLanguage,
    onChangeNotificationChange,
    updateNavigatorIndex,
    changeTheme: () => {
      toggleChangeTheme();
    },
    onSelectedChange,
    onSelectAll,
  });

  return <SubComponentBuilder {...props} />;
});
