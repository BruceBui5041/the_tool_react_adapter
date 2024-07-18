import React from 'react';
import SubComponentBuilder from '../../page-builder/sub-component-builder';
import { IPageProps } from '../../page-builder/common-interface/page-context-interface';

interface IPageState {
  recentOrders: IItem[];
}

interface IItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  orderDate: string;
  status: string;
  image: string;
}
export default React.memo((props: IPageProps<IPageState>) => {
  const { $ } = props;

  const capitalizeStatus = React.useCallback((data: IItem[]) => {
    return data.map((item) => ({
      ...item,
      formatStatus:
        item.status.charAt(0).toUpperCase() + item.status.substring(1),
    }));
  }, []);

  $.useInitState({
    recentOrders: capitalizeStatus(fakeRecentOrders),
  });

  return <SubComponentBuilder {...props} />;
});

const fakeRecentOrders = [
  {
    id: 1,
    name: 'Iphone 10',
    price: 1500,
    quantity: 2,
    orderDate: '2023-09-01',
    status: 'delivered',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 2,
    name: 'Iphone 11',
    price: 1600,
    quantity: 3,
    orderDate: '2023-09-02',
    status: 'pending',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 3,
    name: 'Iphone 12',
    price: 1700,
    quantity: 4,
    orderDate: '2023-09-03',
    status: 'delivered',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 4,
    name: 'Iphone 13',
    price: 1800,
    quantity: 5,
    orderDate: '2023-09-04',
    status: 'pending',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 5,
    name: 'Iphone 14',
    price: 1900,
    quantity: 6,
    orderDate: '2023-09-05',
    status: 'delivered',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 6,
    name: 'Iphone 15',
    price: 2000,
    quantity: 7,
    orderDate: '2023-09-06',
    status: 'pending',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 7,
    name: 'Iphone 16',
    price: 2100,
    quantity: 8,
    orderDate: '2023-09-07',
    status: 'delivered',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 8,
    name: 'Iphone 17',
    price: 2200,
    quantity: 9,
    orderDate: '2023-09-08',
    status: 'pending',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 9,
    name: 'Iphone 18',
    price: 2300,
    quantity: 10,
    orderDate: '2023-09-09',
    status: 'delivered',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 10,
    name: 'Iphone 19',
    price: 2400,
    quantity: 11,
    orderDate: '2023-09-10',
    status: 'pending',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 11,
    name: 'Iphone 20',
    price: 2500,
    quantity: 12,
    orderDate: '2023-09-11',
    status: 'delivered',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
  {
    id: 12,
    name: 'Iphone 21',
    price: 2600,
    quantity: 13,
    orderDate: '2023-09-12',
    status: 'delivered',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-6f6726b6ec8945dd69edae16df2c1f88-lq',
  },
];
