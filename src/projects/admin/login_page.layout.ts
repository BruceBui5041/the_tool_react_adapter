export default (): LayoutSchema => ({
  components: {
    field_layout: {
      type: 'container',
      margin: [0, 0, 0, 8],
    },
  },
  content: {
    type: 'container',
    className: 'auth-background',
    child: {
      type: 'container',
      child: {
        type: 'column',
        children: [
          {
            type: 'container',
            backgroundColor: 'transparent',
            flex: 1,
            alignment: 'center',
            child: {
              type: 'text',
              text: 'Welcome',
              color: 'white',
              style: 'textTheme.headlineLarge',
            },
          },
          {
            type: 'container',
            flex: 3,
            opacity: 0.9,
            backgroundColor: '#primaryColor',
            padding: [16, 32, 16, 16],
            borderRadius: {
              type: 'only',
              topLeft: 20,
              topRight: 20,
            },
            child: {
              type: 'column',
              mainAxisAlignment: 'spaceBetween',
              children: [
                {
                  type: 'container',
                  alignment: 'topRight',
                  flex: 2,
                  child: {
                    type: 'form',
                    name: 'login_form',
                    autovalidateMode: 'always',
                    validationFunction: 'validateFormLogin()',
                    child: {
                      type: 'column',
                      children: [
                        {
                          component: 'field_layout',
                          child: {
                            type: 'field',
                            name: 'username',
                            fieldType: 'text',
                            validators: [
                              {
                                type: 'is_required',
                                errorText: 'Username cannot be empty.',
                              },
                              {
                                type: 'is_email',
                                errorText: 'Username must be an email address.',
                              },
                            ],
                            hintText: 'Username',
                            labelText: 'Username',
                            prefixIcon: {
                              type: 'icon',
                              icon: 'email',
                              iconSize: 20,
                            },
                            className: ['field_prefix_icon_color'],
                            validationFunction: 'validateUsername()',
                            autovalidate: true,
                          },
                        },
                        {
                          component: 'field_layout',
                          child: {
                            type: 'field',
                            name: 'password',
                            fieldType: 'text',
                            hintText: 'Password',
                            labelText: 'Password',
                            prefixIcon: {
                              type: 'icon',
                              icon: 'lock',
                              iconSize: 20,
                            },
                            className: ['field_prefix_icon_color'],
                            suffixIcon: {
                              type: 'button',
                              buttonType: 'icon',
                              icon: '{{ passwordSuffixIcon }}',
                              onClick: 'onClickPasswordSuffixIcon()',
                            },
                            obscureText: '{{ passwordObscureText }}',
                            validationFunction: 'validatePassword()',
                            validators: [
                              {
                                type: 'is_required',
                                errorText: 'Password cannot be empty.',
                              },
                            ],
                          },
                        },
                        {
                          type: 'row',
                          mainAxisAlignment: 'end',
                          children: [
                            {
                              type: 'button',
                              buttonType: 'text',
                              text: 'Forgot password?',
                            },
                          ],
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
                    mainAxisAlignment: 'end',
                    children: [
                      {
                        type: 'padding',
                        padding: [0, 0, 0, 10],
                        child: {
                          type: 'sized_box',
                          width: 500,
                          height: 41,
                          child: {
                            type: 'button',
                            text: 'Sign In',
                            onClick: 'submit()',
                          },
                        },
                      },
                      {
                        type: 'row',
                        mainAxisAlignment: 'center',
                        children: [
                          {
                            type: 'text',
                            text: "Don't have an account?",
                          },
                          {
                            type: 'button',
                            buttonType: 'text',
                            text: 'Sign up',
                            onClick: 'navigateTo("register_page")',
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  },
});
