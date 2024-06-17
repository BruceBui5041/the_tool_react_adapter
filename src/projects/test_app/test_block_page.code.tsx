import { IPageProps } from '../../page-builder/common-interface/page-context-interface';
import SubComponentBuilder from '../../page-builder/sub-component-builder';

interface IPageState {
  parentState: any;
  notRelated: string;
}

export default React.memo((props: IPageProps<IPageState>) => {
  const { setPageData, exportPageContext, validateForm, useInitState, $root } =
    props.pageBuilderContext;
  React.useEffect(() => {
    // const intervalId = setInterval(() => {
    //   setPageData({ parentState: 'test_block_' + Date.now() });
    // }, 500);
    // return () => {
    //   clearInterval(intervalId);
    // };
    // console.log(`$root.parentState ${$root.parentState}`);
  }, [$root.parentState]);

  const functionUsedInComponent = React.useCallback(() => {
    setPageData({ parentState: 'test_block_' + Date.now() });
  }, []);

  const notRelatedUpdateState = React.useCallback(() => {
    setPageData({ notRelated: 'notRelated_' + Date.now() });
  }, []);

  React.useEffect(() => {
    exportPageContext({
      functionUsedInComponent,
      notRelatedUpdateState,
    });
  }, [functionUsedInComponent, exportPageContext, notRelatedUpdateState]);

  return <SubComponentBuilder {...props} />;
});
