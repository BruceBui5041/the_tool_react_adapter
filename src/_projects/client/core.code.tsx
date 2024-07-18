import React from 'react';
import { IPageProps } from '../../page-builder/common-interface/page-context-interface';

export default React.memo((props: IPageProps<any>) => {
  const { exportPageContext } = props.pageBuilderContext;

  const checkAuthDashboard = React.useCallback(async () => {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

    return result;
  }, []);

  exportPageContext({
    checkAuthDashboard,
  });

  return <></>;
});
