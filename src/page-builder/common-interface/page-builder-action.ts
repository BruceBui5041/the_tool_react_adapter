export enum PageContextActions {
  SET_STATE = 'set_state',
  NAVIGATE = 'navigate',
  NAVIGATE_BACK = 'navigate_back',
  EXPORT_PAGE_CONTEXT = 'export_page_context',
  OPEN_DRAWER = 'open_drawer',
}

export interface ISetStateAction {
  type: PageContextActions.SET_STATE;
  payload: ISetStatePayload;
}
export interface ISetStatePayload {
  pagePathId: string;
  data: Record<any, any>;
  isSilenced?: boolean;
}

export interface IExportPageContextAction {
  type: PageContextActions.EXPORT_PAGE_CONTEXT;
  payload: IExportPageContextPayload;
}

export interface IExportPageContextPayload {
  pagePathId: string;
  pageContext: Record<any, any>;
}

export interface INavigateAction {
  type: PageContextActions.NAVIGATE;
  payload: INavigatePayload;
}

export interface INavigatePayload {
  destinationPagePath: string;
  pageArguments: Record<string, any>;
  options: Record<string, any>;
}

export interface IOpenDrawerAction {
  type: PageContextActions.OPEN_DRAWER;
  payload: { pagePath: string };
}

export type IActions =
  | ISetStateAction
  | INavigateAction
  | IOpenDrawerAction
  | IExportPageContextAction;
