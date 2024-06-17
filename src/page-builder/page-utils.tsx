import React from 'react';
import platform from 'platform-detect/os.mjs';
import { IPageContent } from './common-interface/builder-common-interface';

export function usePrevious(value: any) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = React.useRef();
  // Store current value in ref
  React.useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export function getPageCodeByPath(
  project: Record<string, IPageContent>,
  pagePath: string,
) {
  const pageInfo = project?.[pagePath];
  const pageCode = pageInfo?.code;
  return pageCode;
}

const cachedLayouts = {};
export async function getPageLayoutByPath(
  project: Record<string, IPageContent>,
  pagePath: string,
): Promise<LayoutSchema> {
  const pageInfo = project?.[pagePath];
  if (cachedLayouts[pagePath]) {
    return cachedLayouts[pagePath];
  }

  let layout = pageInfo?.layout;

  if ((platform.android || platform.ios) && pageInfo?.mobileLayout) {
    layout = pageInfo?.mobileLayout;
  }

  const layoutJSON = (await layout())?.default?.();

  cachedLayouts[pagePath] = layoutJSON;
  return layoutJSON;
}
