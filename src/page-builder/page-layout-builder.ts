import { IPageInfo } from '../app-bridge';
import platform from 'platform-detect/os.mjs';

export const getClientPageLayout = async (
  projectName: string,
  pageInfo: IPageInfo,
) => {
  try {
    const selectedProject = (await import(`../projects/${projectName}`))
      .default;
    const { clientPages } = selectedProject;

    const pageSrc = clientPages?.[pageInfo.pagePath];
    let pageLayout = pageSrc?.layout;

    if ((platform.android || platform.ios) && pageSrc?.mobileLayout) {
      pageLayout = pageSrc?.mobileLayout;
    }

    if (!pageLayout) return null;
    return (await pageLayout())?.default?.();
  } catch (error) {
    console.error('Error retrieving client page layout:', error);
    return null;
  }
};
