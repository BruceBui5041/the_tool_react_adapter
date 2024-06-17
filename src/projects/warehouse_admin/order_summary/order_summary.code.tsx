import React from 'react';
import { IPageProps } from '../../../page-builder/common-interface/page-context-interface';
import SubComponentBuilder from '../../../page-builder/sub-component-builder';

interface IItem {
  id: number;
  customerName: string;
  orderDate: string;
  totalPrice: number;
  status: string;
}

interface IPageState {
  orders: IItem[];
  openOrderFilter: boolean;
  openDateTimeFilter: boolean;
  isCreatePopupOpen: boolean;
}

const statusMap = {
  pending: 'Pending',
  in_progress: 'In Progress',
  completed: 'Completed',
};

export default React.memo((props: IPageProps<IPageState>) => {
  const { $ } = props;

  const capitalizeStatus = React.useCallback((data: IItem[]) => {
    return data.map((item) => ({
      ...item,
      action: item.status,
      formatStatus: statusMap[item.status],
    }));
  }, []);

  $.useInitState({
    orders: capitalizeStatus(fakeData),
    openOrderFilter: false,
    isCreatePopupOpen: false,
  });

  const userNameOptions = React.useMemo(() => {
    const { orders = [] } = $.$root;
    const customerNames = orders.map((order) => order.customerName);
    return Array.from(new Set(customerNames)).map((name) => [name, name]);
  }, [$.$root.orders]);

  const openCreateOrderPopup = React.useCallback(() => {
    $.setPageData({
      isCreatePopupOpen: true,
    });
  }, []);

  const closeCreateOrderPopup = React.useCallback(() => {
    $.setPageData({
      isCreatePopupOpen: false,
    });
  }, []);

  const onSort = React.useCallback(
    (sortColumn: string, isSortAscending: boolean) => {
      const { orders } = $.$root;
      const sortedOrders = orders.sort((a, b) => {
        if (isSortAscending) {
          return a[sortColumn] > b[sortColumn] ? 1 : -1;
        }
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      });
      $.setPageData({
        orders: sortedOrders,
      });
    },
    [$.$root],
  );

  const toggleOrderFilter = React.useCallback(() => {
    $.setPageData({
      openOrderFilter: !$.root.openOrderFilter,
    });
  }, [$.root.openOrderFilter]);

  const toggleDateTimeFilter = React.useCallback(() => {
    $.setPageData({
      openDateTimeFilter: !$.root.openDateTimeFilter,
    });
  }, [$.root.openDateTimeFilter]);

  const requestOrderSummary = async ({
    offset,
    limit,
    sortColumn,
    isSortAscending,
  }) => {
    console.log(
      `abcd loadDataFunction ${offset} ${limit} ${sortColumn} ${isSortAscending}`,
    );
  };

  $.exportPageContext({
    requestOrderSummary,
    onSort,
    toggleOrderFilter,
    toggleDateTimeFilter,
    userNameOptions,
    openCreateOrderPopup,
    closeCreateOrderPopup,
  });

  return <SubComponentBuilder {...props} />;
});

function getRandomStatus() {
  const statuses = ['pending', 'in_progress', 'completed'];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

const fakeData = [
  {
    id: 1,
    customerName: 'Bruce Wayne',
    orderDate: '2023-09-01 - 10:00 AM',
    totalPrice: 1500,
    status: getRandomStatus(),
  },
  {
    id: 2,
    customerName: 'Clark Kent',
    orderDate: '2023-09-02 - 11:00 AM',
    totalPrice: 1600,
    status: getRandomStatus(),
  },
  {
    id: 3,
    customerName: 'Diana Prince',
    orderDate: '2023-09-03 - 12:00 PM',
    totalPrice: 1700,
    status: getRandomStatus(),
  },
  {
    id: 4,
    customerName: 'Barry Allen',
    orderDate: '2023-09-04 - 1:00 PM',
    totalPrice: 1800,
    status: getRandomStatus(),
  },
  {
    id: 5,
    customerName: 'Arthur Curry',
    orderDate: '2023-09-05 - 2:00 PM',
    totalPrice: 1900,
    status: getRandomStatus(),
  },
  {
    id: 6,
    customerName: 'Victor Stone',
    orderDate: '2023-09-06 - 3:00 PM',
    totalPrice: 2000,
    status: getRandomStatus(),
  },
  {
    id: 7,
    customerName: 'Hal Jordan',
    orderDate: '2023-09-07 - 4:00 PM',
    totalPrice: 2100,
    status: getRandomStatus(),
  },
  {
    id: 8,
    customerName: 'Oliver Queen',
    orderDate: '2023-09-08 - 5:00 PM',
    totalPrice: 2200,
    status: getRandomStatus(),
  },
  {
    id: 9,
    customerName: 'Kara Danvers',
    orderDate: '2023-09-09 - 6:00 PM',
    totalPrice: 2300,
    status: getRandomStatus(),
  },
  {
    id: 10,
    customerName: 'Barbara Gordon',
    orderDate: '2023-09-10 - 7:00 PM',
    totalPrice: 2400,
    status: getRandomStatus(),
  },
];
