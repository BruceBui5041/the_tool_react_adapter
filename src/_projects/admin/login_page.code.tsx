import React from 'react';
import SubComponentBuilder from '../../page-builder/sub-component-builder';
import { IPageProps } from '../../page-builder/common-interface/page-context-interface';

interface IPageState {
  passwordSuffixIcon: string;
  passwordObscureText: boolean;
  username: string;
  password: string;
}

export default React.memo((props: IPageProps<IPageState>) => {
  const {
    setPageData,
    useInitState,
    exportPageContext,
    validateForm,
    setRouteAuth,
    navigateTo,
    $root,
  } = props.pageBuilderContext;

  useInitState({
    passwordSuffixIcon: 'eye-off',
    passwordObscureText: true,
  });

  const onClickPasswordSuffixIcon = React.useCallback(() => {
    const newPasswordObscureText = !$root.passwordObscureText;
    setPageData({
      passwordObscureText: newPasswordObscureText,
      passwordSuffixIcon: newPasswordObscureText ? 'eye-off' : 'eye',
    });
  }, [$root.passwordObscureText]);

  React.useEffect(() => {
    // validateForm('login_form');
  }, [$root?.username, $root?.password]);

  const validateUsername = React.useCallback(async () => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      });
    });

    if ($root?.username == 'abcd@gmail.com') {
      return 'User already existed !!!';
    }
    return null;
  }, [$root.username]);

  const validatePassword = React.useCallback(async () => {
    if (($root?.password?.length ?? 0) < 5) {
      return 'Password is too short !!!';
    }
    return null;
  }, [$root.password]);

  exportPageContext({
    onClickPasswordSuffixIcon,
    submit: async () => {
      const { password, username } = $root;
      const isValid = await validateForm('login_form');

      if (!username || !password) {
        return;
      }

      console.log(`login page validateForm ${isValid}`);
      if (isValid) {
        setRouteAuth({ isAuthorized: true });
        navigateTo('dashboard', undefined, { action: 'replacement_route' });
      }
    },
    validateUsername,
    validatePassword,
    validateFormLogin: async () => {
      const state = $root;
      const errorMap = {};
      if ((state?.username?.length ?? 0) < 5) {
        errorMap['username'] = 'Username is too short!!';
        return errorMap;
      }

      if (state?.username == state?.password) {
        errorMap['password'] = 'Password cannot be the same as Username!!';
        return errorMap;
      }

      // let errorText = await validateUsername();
      // if (errorText) {
      //   errorMap['username'] = errorText;
      //   return errorMap;
      // }

      // errorText = await validatePassword();
      // if (errorText) {
      //   errorMap['password'] = errorText;
      //   return errorMap;
      // }

      // console.log(`login page validateFormLogin ${errorMap}`);
      return errorMap;
    },
  });

  return <SubComponentBuilder {...props} />;
});
