import React from 'react';
import { IPageProps } from '../../page-builder/common-interface/page-context-interface';
import SubComponentBuilder from '../../page-builder/sub-component-builder';

interface IPageState {
  published: boolean;
  multiColor: string[];
  listItems: string[][];
  materialTitle: string;
  color: string;
  materials: number[];
  colors: string[][];
  main_image: string;
  priceAsNumber: string;
  confirmCreateProduct: boolean;
}

export default React.memo((props: IPageProps<IPageState>) => {
  const {
    exportPageContext,
    useInitState,
    $root,
    setPageData,
    validateForm,
    navigateBack,
  } = props.pageBuilderContext;

  useInitState({
    published: true,
    // listItems: ["dev1", "dev2", "dev3", 'dev4'],
    multiColor: ['1', '2'],
    listItems: [
      ['1', 'dev Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
      ['2', 'dev2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
      ['3', 'dev3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
      ['4', 'dev4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
    ],
    materialTitle: 'Material Title',
    color: 'green',
    materials: [],
  });

  const loadColors = React.useCallback(() => {
    return new Promise<string[][]>((resolve) => {
      setTimeout(() => {
        resolve([
          ['red', 'Red'],
          ['blue', 'Blue'],
          ['green', 'Green'],
        ]);
      }, 1000);
    });
  }, []);

  React.useEffect(() => {
    (async () => {
      const colors = await loadColors();
      setPageData({ colors });
    })();
  }, [loadColors]);

  React.useEffect(() => {
    console.log(`root data ${JSON.stringify($root)}`);
  }, [$root]);

  exportPageContext({
    onDeleteItem: () => {
      console.log(`root data ${JSON.stringify($root)}`);
      if ($root.multiColor.length > 0) {
        const colors = $root.multiColor.filter((value) => {
          return value !== '1';
        });
        console.log(`test ${colors}`);
        setPageData({ multiColor: colors });
      }
    },

    onProductImageUploaded: (res) => {
      console.log(`abcd res ${JSON.stringify(res)}`);
      const { filename } = res;

      setPageData({ main_image: filename });
    },
    onPriceChange: (value: string) => {
      setPageData({ priceAsNumber: value });
    },
    validatePrice: () => {
      const state = $root;
      if (Number(state?.priceAsNumber ?? 0) <= 0) {
        return 'Price must be greater than 0';
      }

      return null;
    },
    changeFieldMaterialValue: () => {
      setPageData({
        materials: [...$root.materials, 1],
        materialTitle: 'New Material added',
      });
    },
    validateColor: () => {
      const state = $root;
      if (state?.color == 'red') {
        return 'Must not be Red';
      }

      return null;
    },
    validateMaterials: () => {
      const state = $root;
      if (state?.materials?.length <= 0) {
        return 'Must select at least 1 material';
      }

      return null;
    },
    formValidate: () => {
      const state = $root;
      if (state?.color == 'red') {
        return { color: 'can not be red!' };
      }

      return null;
    },

    submit: async () => {
      const isValid = await validateForm('product');

      if (!isValid) {
        return;
      }
      setPageData({ confirmCreateProduct: true });
    },
    createProduct: () => {
      console.log('create product');
      navigateBack();
    },
    closeCreateProductConfirm: () => {
      setPageData({ confirmCreateProduct: false });
    },
  });

  return <SubComponentBuilder {...props} />;
});
