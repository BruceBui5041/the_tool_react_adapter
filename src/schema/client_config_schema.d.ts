interface IGuard {
  redirectTo: string;
  authFunction: string;
}

interface IRouteConfig {
  name: string;
  path: string;
  route?: string;
  guards?: IGuard[];
}

declare interface ClientConfigSchema {
  initialPage: string;
  socketioHost?: {
    host: string;
    options: Record<string, any>;
  };
  themePath: string;
  pageAPI: string;
  uploadFileHost: string;
  routes: IRouteConfig[];
  notFoundPagePath?: string;
}
