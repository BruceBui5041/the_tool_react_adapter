import { Dictionary } from 'lodash';

export {};

type NavigateAction = 'replacement_route' | 'pop' | 'pop_and_push';

interface NavigateOptions {
  action?: NavigateAction;
}

interface IMediaQueryInterface {
  width: number;
  height: number;
  orientation: 'landscape' | 'portrait';
}

declare global {
  const _: typeof import('lodash');
  const React: typeof import('react');
  const logger: any;
  const props: any;
  /**
   * Current state of the page
   */
  // const $root: Dictionary<any>;
  /**
   * Contains infomation of device/browser screen
   */
  const $mediaQuery: IMediaQueryInterface | null;

  const $themeData: ThemeData | null;
  /**
   * Previous page data
   */
  const prevPageData: Dictionary<any>;

  /**
   * This function will return current state of the page
   */
  // function getPageData(): Dictionary<any>;

  /**
   * Update data into state. Will rerender ui
   * @param data Data will set to page state
   */
  // function setPageData(data: Dictionary<any>): void;

  /**
   * Toggle dark theme and white theme
   */
  // function toggleChangeTheme(): void;

  /**
   * Export data to context for using in layout
   * @param exportData Data will export
   */
  // function exportPageContext(exportData: Dictionary<any>): void;

  /**
   * Navigate and routing the app
   * @param routeName Route name must be specified in client-config.json
   * @param passedData Data want to pass to a new route
   */
  // function navigateTo(
  //   routeName: string,
  //   passedData?: Dictionary<any>,
  //   options?: NavigateOptions,
  // ): void;

  /**
   * Navigate back to the previous route
   */
  function navigateBack();

  /**
   * Pop current route out of navigate history and route to new page path
   * @param pagePath The page path the you want to navigate to
   * @param pageArguments data you want to pass into now row
   */
  function navigateBackAndGoTo(
    pagePath: string,
    pageArguments?: Dictionary<any>,
  );

  /**
   * Get current route information
   */
  // function getRoute(): {
  //   pageArguments: any;
  //   params: Dictionary<any>;
  //   queryParams: Dictionary<any>;
  //   currentPath: string;
  // };

  /**
   * Will trigger the validate form in the renderer
   * @param formName name of the form in layout
   */
  // function validateForm(formName: string): Promise<boolean>;

  /**
   * Init for page state. Will not caught re-rendering
   * @param initState
   */
  // function useInitState(initState: Dictionary<any>): void;
  /**
   * Get permission status, only on mobile
   * @param permissionName Permission name
   */
  function getPermissionStatus(
    permissionName: PermissionName,
  ): Promise<PermissionStatus>;
  /**
   * Request permission, only on mobile
   * @param permissionName Permission name
   */
  function requestPermission(
    permissionName: PermissionName,
  ): Promise<PermissionStatus>;

  function openAppSettings(): void;

  /**
   * Use to open the drawer of the page
   */
  function openDrawer(): void;

  // function setCookies(key: string, value: any): void;
  // function getCookies<T>(key: string, defaultValue?: any): T;
  // function request(url: string, options?: RequestOption): Promise<any>;

  function usePrevious<T>(value: T): T;

  /**
   * Use to set route authentication for the guard of the route
   * And return routeAuthContext as a object
   * @param routeAuth key value if auth route data
   */
  function setRouteAuth(routeAuth: Dictionary<any>): Promise<Dictionary<any>>;

  /**
   * Clear all data in route auth context
   * And return routeAuthContext as a object
   */
  function clearAllRouteAuth(): Promise<Dictionary<any>>;
}

type PermissionName =
  | 'calendar'
  | 'camera'
  | 'contacts'
  | 'location'
  | 'locationAlways'
  | 'locationWhenInUse'
  | 'mediaLibrary'
  | 'microphone'
  | 'phone'
  | 'photos'
  | 'photosAddOnly'
  | 'reminders'
  | 'sensors'
  | 'sms'
  | 'speech'
  | 'storage'
  | 'ignoreBatteryOptimizations'
  | 'notification'
  | 'accessMediaLocation'
  | 'activityRecognition'
  | 'unknown'
  | 'bluetooth'
  | 'manageExternalStorage'
  | 'systemAlertWindow'
  | 'requestInstallPackages'
  | 'appTrackingTransparency'
  | 'criticalAlerts'
  | 'accessNotificationPolicy'
  | 'bluetoothScan'
  | 'bluetoothAdvertise'
  | 'bluetoothConnect';

type PermissionStatus = {
  isGranted: boolean;
  isDenied: boolean;
  isLimited: boolean;
  isPermanentlyDenied: boolean;
  isRestricted: boolean;
};

interface RequestOption {
  method?: 'get' | 'post' | 'put' | 'delete';
  body?: any;
  headers?: any;
}
