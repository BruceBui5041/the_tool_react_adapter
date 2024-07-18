import React from 'react';
import SubComponentBuilder from '../../../page-builder/sub-component-builder';
import { IPageProps } from '../../../page-builder/common-interface/page-context-interface';

interface IPageState {
  product_list: Record<string, any>[];
  toggleThemeIcon: string;
  showRemoveSnackbar: boolean;
  removeSnackbarMessage: string;
  props?: any; // props from the parent
}

export default React.memo((props: IPageProps<IPageState>) => {
  const {
    exportPageContext,
    useInitState,
    setPageData,
    $root,
    navigateTo,
    toggleChangeTheme,
  } = props.pageBuilderContext;

  useInitState({
    product_list: [],
    toggleThemeIcon: 'lightbulb-on-outline',
    showRemoveSnackbar: false,
    //   deleteIcon: 'trash-can-outline',
  });

  const getListOfProducts = React.useCallback((): Promise<
    Record<string, any>[]
  > => {
    const fakeData = [
      {
        id: 1,
        name: 'Product 1',
        price: 11,
        rate: 4.5,
        image: 'https://picsum.photos/200/300',
        description: 'Lorem ipsum dolor sit amet nisl',
        qty: 1,
        size: 'M',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 12,
        rate: 4.5,
        image: 'https://picsum.photos/200/301',
        description: 'Lorem ipsum dolor',
        qty: 2,
        size: 'M',
      },
      {
        id: 3,
        name: 'Product 3',
        price: 13,
        rate: 4.5,
        image: 'https://picsum.photos/200/302',
        description: 'nisl eget ultricies ultricies',
        qty: 2,
        size: 'M',
      },
      {
        id: 4,
        name: 'Product 4',
        price: 14,
        rate: 4.5,
        image: 'https://picsum.photos/200/303',
        description: 'Lorem ipsum dolor sit amet',
        qty: 5,
        size: 'XL',
      },
      {
        id: 5,
        name: 'Product 5',
        price: 15,
        rate: 4.5,
        image: 'https://picsum.photos/200/304',
        description: 'Lorem ipsum dolor sit amet',
        qty: 2,
        size: 'XL',
      },
      {
        id: 6,
        name: 'Product 6',
        price: 16,
        rate: 4.5,
        image: 'https://picsum.photos/200/305',
        description: 'Donec auctor',
        qty: 1,
        size: 'XL',
      },

      {
        id: 7,
        name: 'Product 7',
        price: 17,
        rate: 4.5,
        image: 'https://picsum.photos/200/306',
        description: 'Donec auctor',
        qty: 2,
        size: 'XS',
      },
      {
        id: 8,
        name: 'Product 8',
        price: 18,
        rate: 4.5,
        image: 'https://picsum.photos/200/307',
        description: 'Donec auctor',
        qty: 6,
        size: 'XS',
      },
      {
        id: 9,
        name: 'Product 9',
        price: 19,
        rate: 4.5,
        image: 'https://picsum.photos/200/308',
        description: 'Donec auctor',
        qty: 2,
        size: 'XS',
      },
      {
        id: 10,
        name: 'Product 10',
        price: 20,
        rate: 4.5,
        image: 'https://picsum.photos/200/309',
        description: 'Donec auctor',
        qty: 2,
        size: 'XSS',
      },
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeData);
      }, 1000);
    });
  }, []);

  React.useEffect(() => {
    (async () => {
      const product_list = await getListOfProducts();
      const newProductList = product_list.map((product: any) => {
        return {
          ...product,
          isLove: false,
          deleteIcon: 'trash-can-outline',
        };
      });
      setPageData({ product_list: newProductList });
    })();
  }, [getListOfProducts]);

  const closeRemoveSnackbar = React.useCallback(() => {
    setPageData({ showRemoveSnackbar: false });
  }, []);

  const removeItem = React.useCallback(
    (id: number) => {
      const { product_list } = $root;
      let removeSnackbarMessage = '';
      const newProductList = product_list.filter((product: any) => {
        if (product.id !== id) {
          return true;
        }
        removeSnackbarMessage = `${product.name} removed`;
        return false;
      });
      // const newProductList = product_list.map((product: any) => {
      //   if (product.id === id) {
      //     return {
      //       ...product,
      //       isLove: !product.isLove,
      //       deleteIcon:
      //         product.deleteIcon == 'trash-can'
      //           ? 'trash-can-outline'
      //           : 'trash-can',
      //       deleteIconColor: product.deleteIconColor == 'red' ? undefined : 'red',
      //     };
      //   }
      //   return product;
      // });
      setPageData({
        product_list: newProductList,
        showRemoveSnackbar: true,
        removeSnackbarMessage,
      });
    },
    [$root.product_list],
  );

  exportPageContext({
    changeTheme: () => {
      const { toggleThemeIcon } = $root;
      const newIcon =
        toggleThemeIcon === 'lightbulb-on-outline'
          ? 'lightbulb-outline'
          : 'lightbulb-on-outline';
      setPageData({ toggleThemeIcon: newIcon });
      toggleChangeTheme();
    },
    removeItem,
    closeRemoveSnackbar,
    goTo: (pagePath) => {
      navigateTo(pagePath);
    },
  });

  return <SubComponentBuilder {...props} />;
});
