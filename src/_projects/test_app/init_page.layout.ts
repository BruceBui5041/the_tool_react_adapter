export default (): LayoutSchema => ({
  bottomNav: {
    type: 'bottom_navigation',
    selectedItemColor: 'green',
    navType: 'shifting',
    items: [
      {
        label: 'Login',
        icon: {
          type: 'icon',
          icon: 'account_circle',
        },
        path: 'login_page',
        backgroundColor: '#90ee90',
      },
      {
        label: 'Test Page',
        icon: {
          type: 'icon',
          icon: 'home',
        },
        path: 'test_page',
        backgroundColor: '#90ee90',
      },
      // {
      //   label: 'Home',
      //   icon: {
      //     type: 'icon',
      //     icon: 'school',
      //   },
      //   path: 'home_page',
      //   backgroundColor: '#87ceeb',
      // },
      {
        label: 'Block Test',
        icon: {
          type: 'icon',
          icon: 'star',
        },
        path: 'test_block_page',
        backgroundColor: '#87ceeb',
      },
    ],
  },
});
