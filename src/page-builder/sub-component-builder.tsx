import { IPageProps } from './common-interface/page-context-interface';

interface IPageState {}

const SubComponentBuilder = React.memo((props: IPageProps<IPageState>) => {
  const childrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }
    return child;
  });

  return <>{childrenWithProps}</>;
});

export default SubComponentBuilder;
