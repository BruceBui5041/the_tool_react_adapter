import React from 'react';
import { IPageProps } from '../../page-builder/common-interface/page-context-interface';
import SubComponentBuilder from '../../page-builder/sub-component-builder';

interface IPageState {}

export default React.memo((props: IPageProps<IPageState>) => {
  return <SubComponentBuilder {...props} />;
});
