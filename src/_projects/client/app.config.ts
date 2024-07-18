export default (): ClientConfigSchema => {
  return {
    initialPage: 'home_page',
    themePath: 'pages/theme',
    pageAPI: 'http://localhost:3000',
    uploadFileHost: '/file/upload',
    routes: [
      // { name: 'Login', path: 'login_page' },
      { name: 'Register', path: 'register_page' },
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
      {
        name: 'New Product',
        path: 'product_create',
      },
      {
        name: 'Products',
        path: 'order_list',
      },
      {
        name: 'Products',
        path: 'cart_list',
      },
      {
        name: 'Home',
        path: 'home_page',
      },
    ],
  };
};
