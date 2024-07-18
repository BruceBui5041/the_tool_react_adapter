export default (): LayoutSchema => ({
  content: {
    type: 'container',
    width: '1sw',
    image: {
      type: 'network',
      url: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg',
      fit: 'cover',
    },
    child: {
      type: 'column',
      children: [
        {
          type: 'container',
          flex: 1,
          backgroundColor: 'yellow',
          child: {
            type: 'text',
            text: 'header',
          },
        },
        {
          type: 'container',
          alignment: 'topRight',
          flex: 1,
          child: {
            type: 'form',

            name: 'login_form',
            autovalidateMode: 'always',
            validationFunction: 'validateFormLogin()',
            child: {
              type: 'column',
              children: [
                {
                  type: 'field',
                  name: 'username',
                  fieldType: 'text',
                  hintText: 'Username',
                  labelText: 'Username',
                  validationFunction: 'validateUsername()',
                  autovalidate: true,
                },

                {
                  type: 'field',
                  name: 'password',
                  fieldType: 'text',
                  hintText: 'Password',
                  labelText: 'Password',
                  obscureText: true,
                  validationFunction: 'validatePassword()',
                },
                {
                  type: 'button',
                  buttonType: 'text',
                  text: 'Login',
                  onClick: 'submit()',
                },
              ],
            },
          },
        },
        {
          type: 'container',
          flex: 1,
          child: {
            type: 'column',
            children: [
              {
                type: 'button',
                text: 'Create Account',
                onClick: 'navigateTo("register_page")',
              },
            ],
          },
        },
      ],
    },
  },
});
