export default (): LayoutSchema => ({
  bottomNav: {
    type: 'bottom_navigation',
    navType: 'fixed',
    // selectedItemColor: '#primaryColor',
    // backgroundColor: '#primaryColor',

    items: [
      {
        label: 'Shop',
        icon: {
          type: 'icon',
          icon: 'cart-outline',
        },
        activeIcon: {
          type: 'icon',
          icon: 'cart',
          color: 'red',
        },
        path: 'product_list',
      },
      {
        label: 'Dashboard',
        icon: {
          type: 'icon',
          icon: 'home-outline',
        },
        activeIcon: {
          type: 'icon',
          icon: 'home',
          color: 'red',
        },
        path: 'dashboard',
      },
      {
        label: 'Admin',
        icon: {
          type: 'icon',
          icon: 'account-circle-outline',
        },
        activeIcon: {
          type: 'icon',
          icon: 'account-circle',
          color: 'red',
        },
        path: 'product_create',
      },
    ],
  },
});
