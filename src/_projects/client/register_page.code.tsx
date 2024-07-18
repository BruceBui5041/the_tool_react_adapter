import React from 'react';
import SubComponentBuilder from '../../page-builder/sub-component-builder';
import { IPageProps } from '../../page-builder/common-interface/page-context-interface';

interface IPageState {
  birthday: string;
  passwordSuffixIcon: string;
  passwordObscureText: boolean;
  agreeTerm: boolean;
  showTermsAndServiceBottomSheet: boolean;
  email: string;
}

export default React.memo((props: IPageProps<IPageState>) => {
  const {
    exportPageContext,
    useInitState,
    $root,
    setPageData,
    validateForm,
    navigateBack,
  } = props.pageBuilderContext;

  useInitState({
    birthday: '2005-09-26',
    passwordSuffixIcon: 'eye-off',
    passwordObscureText: true,
    agreeTerm: false,
    showTermsAndServiceBottomSheet: false,
  });

  const onClickPasswordSuffixIcon = React.useCallback(() => {
    const newPasswordObscureText = !$root.passwordObscureText;
    setPageData({
      passwordObscureText: newPasswordObscureText,
      passwordSuffixIcon: newPasswordObscureText ? 'eye-off' : 'eye',
    });
  }, [$root.passwordObscureText]);

  exportPageContext({
    onClickPasswordSuffixIcon,
    submit: async () => {
      const isValid = await validateForm('register_form');
    },
    validateUsername: () => {
      return null;
    },
    validatePassword: () => {
      return null;
    },
    validateEmail: async () => {
      if ($root.email == 'abcd@gmail.com') {
        return 'This email is already existed';
      }
      return null;
    },
    showTermsAndServicePopup: () => {
      setPageData({
        showTermsAndServiceBottomSheet: !$root.showTermsAndServiceBottomSheet,
      });
    },
    validateFormLogin: async (state) => {
      const errorMap = {};

      if (!state?.username || state?.username?.length == 0) {
        errorMap['username'] =
          errorMap['username'] ?? 'Username can not be empty123123';
      }

      if (!state?.password || state?.password?.length == 0) {
        errorMap['password'] =
          errorMap['password'] ?? 'Password can not be empty';
      }

      if ((state?.username?.length ?? 0) < 5) {
        errorMap['username'] = errorMap['username'] ?? 'Username is too short';
      }

      if (state?.username == 'abcde') {
        errorMap['username'] =
          errorMap['username'] ?? 'Username is already existed!';
      }

      if ((state?.password?.length ?? 0) < 5) {
        errorMap['password'] = errorMap['password'] ?? 'Password is too short';
      }

      if (state?.username == state?.password) {
        errorMap['password'] =
          errorMap['password'] ?? 'Password cannot be the same as Username!!';
      }

      if (!state?.agreeTerm) {
        errorMap['agreeTerm'] =
          errorMap['agreeTerm'] ?? 'Please agree with our terms to continue';
      }

      return errorMap;
    },
  });

  return <SubComponentBuilder {...props} />;
});
