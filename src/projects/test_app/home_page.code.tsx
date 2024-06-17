import { IPageProps } from '../../page-builder/common-interface/page-context-interface';

interface IPageState {
  passedData: string;
  expansionTileExpanded: boolean;
  homePageData: number;
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
    getRoute,
    getCookies,
    $root,
  } = props.pageBuilderContext;

  React.useEffect(() => {
    (async () => {
      // const intervalID = setInterval(() => {
      //   logger.log(`This is home page ${Date.now()}`);
      // }, 2000);
      const currentRoute = await getRoute();
      setPageData({ passedData: currentRoute.pageArguments.passedData });
      console.log(`abcd params ${JSON.stringify(currentRoute.params)}`);
      console.log(
        `abcd query params ${JSON.stringify(currentRoute.queryParams)}`,
      );
      (async () => {
        logger.log(`Get testCookie: ${await getCookies('testCookie')}`);
      })();
    })();

    return () => {
      // clearInterval(intervalID);
    };
  }, []);

  exportPageContext({
    setHomePageData: () => {
      setPageData({ homePageData: Date.now() });
    },
    gotoFields: () => {
      navigateTo('fields_page');
    },
    toogleExpansionTitle: () => {
      setPageData({ expansionTileExpanded: !$root.expansionTileExpanded });
    },
  });
  return <></>;
});
