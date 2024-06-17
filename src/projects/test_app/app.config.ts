export default (): ClientConfigSchema => ({
  initialPage: 'init_page',
  themePath: 'pages/theme',
  pageAPI: 'http://localhost:3000',
  uploadFileHost: '/file/upload',
  routes: [
    { name: 'Flash Screen', path: 'init_page' },
    { name: 'Home Page', path: 'home_page' },
    { name: 'Home Page', path: 'home_page', route: 'home_page/:name' },

    { name: 'Fields Page', path: 'fields_page' },
    { name: 'Test Page', path: 'test_page' },
    { name: 'Test API', path: 'test_api' },
    { name: 'Permission Test', path: 'permission_page' },
    { name: 'Test Block Widget', path: 'test_block_page' },
    { name: 'Two page Component', path: 'test_root_data' },
    { name: 'Login', path: 'login_page' },
    { name: 'Register', path: 'register_page' },
    { name: 'Test Image Page', path: 'test_image_page' },
  ],
});
