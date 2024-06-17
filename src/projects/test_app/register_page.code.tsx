import React from 'react';
import { IPageProps } from '../../page-builder/common-interface/page-context-interface';

interface IPageState {
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
  birthDay: string;
}

export default React.memo((props: IPageProps<IPageState>) => {
  const { setPageData, exportPageContext, validateForm, useInitState, $root } =
    props.pageBuilderContext;

  const submit = React.useCallback(async () => {
    const isValid = await validateForm('register_form');
  }, [validateForm]);

  useInitState({
    birthDay: '2022-09-26 12:30',
  });

  const validateFormLogin = React.useCallback(async () => {
    const state = $root;
    const errorMap = {};

    if (!state?.username || state?.username?.length == 0) {
      errorMap['username'] =
        errorMap['username'] ?? 'Username can not be empty';
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

    if (state?.confirmPassword != state?.password) {
      errorMap['password'] =
        errorMap['password'] ?? 'Password and Confirm Password are not match';

      errorMap['confirmPassword'] =
        errorMap['confirmPassword'] ??
        'Password and Confirm Password are not match';
    }

    if (state?.username == state?.password) {
      errorMap['password'] =
        errorMap['password'] ?? 'Password cannot be the same as Username!!';
    }

    if (!state?.gender) {
      errorMap['gender'] = errorMap['gender'] ?? 'Gender cannot be empty';
    }

    return errorMap;
  }, []);

  React.useEffect(() => {
    exportPageContext({
      submit,
      validateFormLogin,
    });
  }, [exportPageContext, submit, validateFormLogin]);

  return <></>;
});

// useInitState({
//   birthDay: '2022-09-26 12:30',
// });
