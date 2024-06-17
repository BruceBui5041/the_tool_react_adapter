export default (): ClientConfigSchema => {
  return {
    initialPage: 'dashboard',
    themePath: 'pages/theme',
    pageAPI: 'http://localhost:3000',
    uploadFileHost: '/file/upload',
    routes: [
      { name: 'Login', path: 'login_page' },
      { name: 'Register', path: 'register_page' },
      {
        name: 'Dashboard',
        path: 'dashboard',
        guards: [
          {
            redirectTo: 'login_page',
            authFunction: 'checkAuthDashboard()',
          },
        ],
      },
      // {
      //   name: 'New Product',
      //   path: 'product_create',
      // },
      // {
      //   name: 'Products',
      //   path: 'product_list',
      // },
      // {
      //   name: 'Home',
      //   path: 'home_page',
      // },
    ],
  };
};
