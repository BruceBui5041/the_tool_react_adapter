export default (): ClientConfigSchema => {
  return {
    initialPage: 'home',
    themePath: 'pages/theme',
    pageAPI: 'http://localhost:3000',
    uploadFileHost: '/file/upload',
    routes: [
      {
        name: 'Home',
        path: 'home',
      },
      {
        name: 'Dashboard',
        path: 'dashboard',
        // guards: [
        //   {
        //     redirectTo: 'login_page',
        //     authFunction: 'checkAuthDashboard()',
        //   },
        // ],
      },
    ],
  };
};
