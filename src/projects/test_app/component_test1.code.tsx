import { IPageProps } from '../../page-builder/common-interface/page-context-interface';

interface IPageState {
  changeData: () => void;
  componentState;
}

export default React.memo((props: IPageProps<IPageState>) => {
  const { setPageData, exportPageContext, $root } = props.pageBuilderContext;

  // React.useEffect(() => {
  //   console.log(`abcd component_test1 ${JSON.stringify($root)}`);
  // }, [$root]);

  exportPageContext({
    updateDataFunction: () => {
      setPageData({ componentState: Date.now() });
    },
  });

  return <></>;
});
