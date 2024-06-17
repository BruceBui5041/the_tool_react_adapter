export interface IPageBuilderContext<R> {
  setPageData(data: Partial<R>, isSilenced?: boolean): void;
  /**
   * Navigate and routing the app
   * @param destinationPagePath Route name must be specified in client-config.json
   * @param pageArguments Data want to pass to a new route
   * @param options specified for routing type
   */
  navigateTo(
    destinationPagePath: string,
    pageArguments?: Record<string, any>,
    options?: NavigateOptions,
  ): void;
  navigateBack(): void;
  navigateBackAndGoTo(
    destinationPagePath: string,
    pageArguments: Record<string, any>,
  ): void;
  openDrawer(): void;
  exportPageContext(pageContext: Record<any, any>): void;
  /**
   * Will trigger the validate form in the renderer
   * @param formName name of the form in layout
   */
  validateForm(formName: string): Promise<boolean>;
  /**
   * Init for page state. Will not caught re-rendering
   * @param initState
   */
  useInitState(initState: Partial<R>): void;
  setCookies(key: string, value: any): Promise<void>;
  // function setCookies(key: string, value: any): void;
  getCookies<T extends Record<string, any>>(
    key: keyof T,
    defaultValue?: any,
  ): Promise<any>;
  httpRequest: (path: string, options?: IHttpRequestOptions) => Promise<any>;
  /**
   * Toggle dark theme and light theme
   */
  toggleChangeTheme(): void;
  /**
   * Get current route information
   */
  getRoute(): Promise<Partial<IPageRoute>>;
  setRouteAuth: (authData: Record<string, any>) => Promise<any>;
  /**
   * The `root` of the page data, hold all state of the page
   */
  $root: R;
  root: R;
}

export interface IPageRoute {
  pageArguments: any;
  params: Record<any, any>;
  queryParams: Record<any, any>;
  currentPath: string;
}

export interface IHttpRequestPayload {
  path: string;
  options?: IHttpRequestOptions;
}

export interface IHttpRequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTION';
  data?: any;
}

type NavigateAction = 'replacement_route' | 'pop' | 'pop_and_push';

export interface NavigateOptions {
  action?: NavigateAction;
}

export interface IContextFunctions {
  httpRequest: (path: string, options?: IHttpRequestOptions) => Promise<any>;
  validateForm: (path: string, formName: string) => Promise<boolean>;
  setCookies(key: string, value: any): Promise<any>;
  toggleChangeTheme(): void;
  getRoute(): Promise<Partial<IPageRoute>>;
  getCookies<T extends Record<string, any>>(
    key: keyof T,
    defaultValue?: any,
  ): Promise<any>;
  setRouteAuth: (authData: Record<string, any>) => Promise<any>;
}

export interface IPageProps<R> {
  pageBuilderContext: IPageBuilderContext<R>;
  $: IPageBuilderContext<R>;
  children?: any;
}
