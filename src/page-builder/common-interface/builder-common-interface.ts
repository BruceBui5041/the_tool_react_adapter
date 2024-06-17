import { LazyExoticComponent } from 'react';
import { IPageInfo } from '../../app-bridge';

export interface IPageContent {
  layout: () => Promise<any>;
  mobileLayout?: () => Promise<any>;
  code: LazyExoticComponent<any>;
}

export interface IProjectInfo {
  clientPages: Record<string, IPageContent>;
  clientTheme: (pageInfo?: IPageInfo) => ClientThemeSchema;
  clientConfig: (pageInfo?: IPageInfo) => ClientConfigSchema;
}
