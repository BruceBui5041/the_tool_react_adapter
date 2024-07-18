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
              text: 'Register',
              textAlign: 'left',
              color: 'white',
              style: 'textTheme.headlineLarge',
            },
          },
          {
            type: 'container',
            flex: 4,
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
                  scrollable: true,
                  flex: 2,
                  child: {
                    type: 'form',
                    name: 'register_form',
                    validationFunction: 'validateFormLogin($root)',
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
                            ],
                            hintText: 'Name',
                            labelText: 'Name',
                            prefixIcon: {
                              type: 'icon',
                              icon: 'account',
                              iconSize: 20,
                            },
                            prefixIconColor: '#primaryWatchColor',
                            validationFunction: 'validateUsername()',
                          },
                        },
                        {
                          component: 'field_layout',
                          child: {
                            type: 'field',
                            name: 'email',
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
                            hintText: 'Email address',
                            labelText: 'Email address',
                            prefixIcon: {
                              type: 'icon',
                              icon: 'email',
                              iconSize: 20,
                            },
                            prefixIconColor: '#primaryWatchColor',
                            validationFunction: 'validateEmail()',
                          },
                        },
                        {
                          component: 'field_layout',
                          child: {
                            type: 'field',
                            name: 'birthday',
                            fieldType: 'date',
                            hintText: 'Birthday',
                            labelText: 'Birthday',
                            format: 'MM/dd/yyyy',
                            lastDate: '2005-12-30 00:00:00',
                            firstDate: '1980-01-01 00:00:00',
                            // initialDate: '1999-12-19 00:00:00',
                            prefixIcon: {
                              type: 'icon',
                              icon: 'cake',
                              iconSize: 20,
                            },
                            prefixIconColor: '#primaryWatchColor',
                            allowClear: true,
                            validators: [
                              {
                                type: 'is_required',
                                errorText: 'Birthday cannot be empty.',
                              },
                            ],
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
                            prefixIconColor: '#primaryWatchColor',
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
                          component: 'field_layout',
                          child: {
                            type: 'field',
                            fieldType: 'checkbox',
                            name: 'agreeTerm',
                            fillColor: 'transparent',
                            padding: [0, 0, 0, 24],
                            maxHeight: 72,
                            boxBorder: {
                              type: 'none',
                            },
                            title: {
                              type: 'sized_box',
                              width: 300,
                              child: {
                                type: 'wrap',
                                children: [
                                  {
                                    type: 'text',
                                    text: 'I agree with the',
                                  },
                                  {
                                    type: 'gesture_detector',
                                    onClick: 'showTermsAndServicePopup()',
                                    child: {
                                      type: 'padding',
                                      padding: [4, 0],
                                      child: {
                                        type: 'text',
                                        text: 'Terms of service',
                                        color: 'skyblue',
                                        style: 'textTheme.bodyMedium',
                                      },
                                    },
                                  },
                                  {
                                    type: 'text',
                                    text: '& privacy policy',
                                  },
                                ],
                              },
                            },
                          },
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
                            text: 'Register',
                            onClick: 'submit()',
                          },
                        },
                      },
                      {
                        type: 'button',
                        buttonType: 'text',
                        text: 'Back to Login',
                        onClick:
                          'navigateTo("login_page", null, { action: "replacement_route" })',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: 'bottom_sheet',
            name: 'showTermsAndServiceBottomSheet',
            backgroundColor: 'transparent',
            height: 0.75,
            body: {
              type: 'container',
              backgroundColor: 'transparent',
              padding: [8, 0, 8, 24],
              child: {
                type: 'card',
                elevation: 20,
                child: {
                  type: 'column',
                  children: [
                    {
                      type: 'row',
                      mainAxisAlignment: 'end',
                      children: [
                        {
                          type: 'button',
                          buttonType: 'icon',
                          icon: 'window-close',
                          onClick: 'showTermsAndServicePopup()',
                        },
                      ],
                    },
                    {
                      type: 'row',
                      children: [
                        {
                          type: 'padding',
                          padding: 16,
                          child: {
                            type: 'column',
                            children: [
                              {
                                type: 'text',
                                text: 'Terms and service',
                                color: '#primaryWatchColor',
                                style: 'textTheme.headlineMedium',
                              },
                              {
                                type: 'text',
                                text: 'This is the bottom sheet content from layout json',
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  },
});
