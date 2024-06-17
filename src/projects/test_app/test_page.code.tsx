import React from 'react';
import { IPageProps } from '../../page-builder/common-interface/page-context-interface';

interface IPageState {
  test: number;
  abcd: number;
  apiData: string;
  dynamicColor: string;
  'text-error': boolean;
  dynamicProps: boolean;
  nest: {
    nest1: string;
  };
}

export default React.memo((props: IPageProps<IPageState>) => {
  const {
    setPageData,
    exportPageContext,
    validateForm,
    useInitState,
    httpRequest,
    setCookies,
    toggleChangeTheme,
    navigateTo,
    $root,
  } = props.pageBuilderContext;

  const [testState, setTestState] = React.useState('Init state');

  // React.useEffect(() => {
  //   (async () => {
  //     let testExport = await import('./test_export.code');

  //     setPageData({
  //       abcd: testExport.ABCD,
  //     });
  //   })();
  // }, []);

  useInitState({
    dynamicProps: true,
  });

  const test1 = React.useMemo(() => {
    // (async () => {
    //   let testExport = await import('./test_export.code');
    //   testExport.ABCD;
    // })();
    return 'mlem mlem';
  }, [testState]);

  React.useEffect(() => {
    const cookie = `Test cookie ${testState}`;
    setCookies('testCookie', cookie);
    logger.log(`Set testCookie: ${cookie}`);
  }, [testState]);

  React.useEffect(() => {
    logger.log(`Test Effect ${testState}`);
  }, [testState]);

  const getTestingData = React.useCallback(async () => {
    try {
      const response = await httpRequest(
        'http://localhost:3000/products/0156f421-d727-41c7-b60e-50c3e3b82613',
      );

      setPageData({ apiData: JSON.stringify(response?.data || {}) });
    } catch (e: any) {
      setPageData({ apiData: e.message });
    }
  }, [setPageData]);

  const changeTheme = React.useCallback(() => {
    toggleChangeTheme();
  }, [toggleChangeTheme]);

  const updatePageState = React.useCallback(() => {
    setPageData({
      abcd: Date.now(),
      'text-error': !$root['text-error'],
      dynamicColor: !$root['text-error'] ? 'purple' : 'skyblue',
      nest: { nest1: 'nest1 data' },
      dynamicProps: !$root.dynamicProps,
    });
  }, [setPageData, $root['text-error'], $root.dynamicProps]);

  const testFunction = React.useCallback(() => {
    setTestState(`${Date.now()}`);
    setPageData({ test: Date.now() });
  }, [setTestState, setPageData]);

  const goTo = React.useCallback(
    (route: string) => {
      navigateTo(route);
    },
    [navigateTo],
  );

  const goFieldTestPage = React.useCallback(() => {
    navigateTo('home_page/123abcd?queryParams=brucebui', {
      passedData: 'data-from-test_page',
    });
  }, [navigateTo]);

  const goToPermissionTestPage = React.useCallback(() => {
    navigateTo('permission_page');
  }, [navigateTo]);

  const goToHomePage = React.useCallback(() => {
    navigateTo('home_page', { passedData: $root.test });
  }, [navigateTo, $root.test]);

  React.useEffect(() => {
    exportPageContext({
      changeTheme,
      updatePageState,
      testFunction,
      goTo,
      goFieldTestPage,
      getTestingData,
      goToPermissionTestPage,
      goToHomePage,
      dataFromExportPageContext: 'CONTANST OR SOMETHING',
    });
  }, [
    exportPageContext,
    changeTheme,
    updatePageState,
    testFunction,
    goTo,
    goFieldTestPage,
    getTestingData,
    goToPermissionTestPage,
    goToHomePage,
  ]);

  return <></>;
});
