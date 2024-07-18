import { IPageProps } from '../../page-builder/common-interface/page-context-interface';

interface IPageState {
  username: string;
  password: string;
}

export default React.memo((props: IPageProps<IPageState>) => {
  const { setPageData, exportPageContext, validateForm, $root } =
    props.pageBuilderContext;

  const validateUsername = React.useCallback(async () => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      });
    });

    if ($root?.username == 'abcd') {
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

  const validateFormLogin = React.useCallback(async () => {
    const state = $root;
    const errorMap = {};
    if ((state?.username?.length ?? 0) < 5) {
      errorMap['username'] = 'Username is too short!!';
    }

    if (state?.username == state?.password) {
      errorMap['password'] = 'Password cannot be the same as Username!!';
    }

    return errorMap;
  }, [$root.password, $root.username]);

  const submit = React.useCallback(async () => {
    const isValid = await validateForm('login_form');
    console.log(`isValid login_form`);
  }, [validateForm]);

  React.useEffect(() => {
    exportPageContext({
      submit,
      validateUsername,
      validatePassword,
      validateFormLogin,
    });
  }, [
    exportPageContext,
    submit,
    validateUsername,
    validatePassword,
    validateFormLogin,
  ]);

  return <></>;
});
