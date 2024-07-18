import { IPageProps } from '../../page-builder/common-interface/page-context-interface';
import SubComponentBuilder from '../../page-builder/sub-component-builder';

interface IPageState {
  changeData: () => void;
  componentState;
  props: any;
}

export default React.memo((props: IPageProps<IPageState>) => {
  const { setPageData, exportPageContext, validateForm, useInitState, $root } =
    props.pageBuilderContext;

  // console.log(`abcd component_test props ${JSON.stringify($root)}`);
  // React.useEffect(() => {
  //   console.log(`abcd component_test props ${JSON.stringify(props)}`);
  // }, [props]);

  exportPageContext({
    updateDataFunction: () => {
      setPageData({ componentState: 'component_test_' + Date.now() });
    },
    updateParentData: () => {
      $root.props?.changeData?.();
    },
  });

  return <SubComponentBuilder {...props} />;
});
