import React from 'react';
import { IPageProps } from '../../../page-builder/common-interface/page-context-interface';
import SubComponentBuilder from '../../../page-builder/sub-component-builder';
import moment from 'moment';

interface ICustomer {
  id: string;
  name: string;
}
interface IPageState {
  isNewCustomer: boolean;
  customers: ICustomer[];
  selectCustomers: [string, string][];
  orderDate: string;
  currentItems: IItem[];
  searchText: string;
  filteredItems: IItem[];
  customer: string;
  props: {
    closePopup: () => void;
  };
}

interface IItem {
  id: number;
  name: string;
  price: number;
  orderDate: string;
  image: string;
}

const customers: ICustomer[] = [
  { id: '1', name: 'Customer 1' },
  { id: '2', name: 'Customer 2' },
  { id: '3', name: 'Customer 3' },
];

export default React.memo((props: IPageProps<IPageState>) => {
  const { $ } = props;

  const capitalizeStatus = React.useCallback((data: IItem[]) => {
    return data.map((item) => item);
  }, []);

  $.useInitState({
    selectCustomers: customers.map((customer) => [customer.id, customer.name]),
    // orderDate: moment(Date.now()).format('yyyy-MM-dd hh:mm:ss'),
    currentItems: capitalizeStatus(currentItems),
    filteredItems: capitalizeStatus(currentItems),
    customer: '1',
  });

  $.exportPageContext({
    closePopup: $.root.props.closePopup,
  });

  React.useEffect(() => {
    console.log(`customer ${$.$root.customer}`);
  }, [$.$root.customer]);

  React.useEffect(() => {
    if ($.$root.searchText == undefined) {
      return;
    }
    console.log(`searchText ${$.$root.searchText}`);

    $.setPageData({
      filteredItems: $.$root.currentItems.filter((item) =>
        item.name.includes($.$root.searchText),
      ),
    });
  }, [$.$root.searchText]);

  return <SubComponentBuilder {...props} />;
});

const currentItems = [
  {
    id: 1,
    name: 'Iphone 10',
    price: 1500,
    orderDate: '2023-09-01',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 2,
    name: 'Iphone 11',
    price: 1600,
    orderDate: '2023-09-02',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 3,
    name: 'Iphone 12',
    price: 1700,
    orderDate: '2023-09-03',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 4,
    name: 'Iphone 13',
    price: 1800,
    orderDate: '2023-09-04',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 5,
    name: 'Iphone 14',
    price: 1900,
    orderDate: '2023-09-05',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 6,
    name: 'Iphone 15',
    price: 2000,
    orderDate: '2023-09-06',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 7,
    name: 'Iphone 16',
    price: 2100,
    orderDate: '2023-09-07',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 8,
    name: 'Iphone 17',
    price: 2200,
    orderDate: '2023-09-08',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 9,
    name: 'Iphone 18',
    price: 2300,
    orderDate: '2023-09-09',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 10,
    name: 'Iphone 19',
    price: 2400,
    orderDate: '2023-09-10',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 11,
    name: 'Iphone 20',
    price: 2500,
    orderDate: '2023-09-11',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 12,
    name: 'Iphone 21',
    price: 2600,
    orderDate: '2023-09-12',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
];
