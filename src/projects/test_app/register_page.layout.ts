export default (): LayoutSchema => ({
  content: {
    type: 'container',
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
          backgroundColor: 'rgba(255,255,255,0.75)',
          flex: 3,
          child: {
            type: 'column',
            mainAxisAlignment: 'center',
            scrollable: true,
            children: [
              {
                type: 'form',
                name: 'register_form',
                autovalidateMode: 'disabled',
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
                      autovalidate: true,
                    },
                    {
                      type: 'field',
                      name: 'email',
                      fieldType: 'text',
                      hintText: 'Email',
                      labelText: 'Email',
                      autovalidate: true,
                      validators: [
                        {
                          type: 'is_required',
                        },
                        {
                          type: 'is_email',
                          errorText: 'Must be an email',
                        },
                      ],
                    },
                    {
                      type: 'field',
                      name: 'password',
                      fieldType: 'text',
                      hintText: 'Password',
                      labelText: 'Password',
                      obscureText: true,
                    },
                    {
                      type: 'field',
                      name: 'confirmPassword',
                      fieldType: 'text',
                      hintText: 'Confirm Password',
                      labelText: 'Confirm Password',
                      obscureText: true,
                    },
                    {
                      type: 'field',
                      fieldType: 'datetime',
                      name: 'birthDay',
                      hintText: 'Birthday',
                      labelText: 'Birthday',
                      validators: [
                        {
                          type: 'is_required',
                          errorText: 'Please select your birthday !',
                        },
                      ],
                    },
                    {
                      type: 'field',
                      fieldType: 'text',
                      name: 'age',
                      hintText: 'Age',
                      labelText: 'Age',
                      keyboardType: 'number',
                      validators: [
                        {
                          type: 'is_required',
                        },
                        {
                          type: 'numeric',
                          errorText: 'Age must be a number',
                        },
                        {
                          type: 'max',
                          maxValue: 120,
                          inclusive: true,
                        },
                        {
                          type: 'min',
                          minValue: 18,
                        },
                      ],
                    },
                    {
                      type: 'field',
                      fieldType: 'select',
                      name: 'gender',
                      hintText: 'Gender',
                      labelText: 'Gender',
                      defaultValue: 'male',
                      allowClear: true,
                      items: [
                        ['female', 'Female'],
                        ['male', 'Male'],
                        ['other', 'Other'],
                      ],
                      validators: [
                        {
                          type: 'is_required',
                          errorText: 'Please select your gender !',
                        },
                      ],
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'container',
          flex: 1,
          child: {
            type: 'row',
            mainAxisAlignment: 'center',
            children: [
              {
                type: 'button',
                text: 'Submit',
                onClick: 'submit()',
              },
              {
                type: 'button',
                text: 'Back to Login',
                onClick: 'navigateBack()',
              },
            ],
          },
        },
      ],
    },
  },
});
