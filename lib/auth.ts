import { configureAuth } from 'react-query-auth';

const authConfig = {
  userFn: async () => await Promise.resolve(123),
  loginFn: async () => await Promise.resolve(123),
  registerFn: async () => await Promise.resolve(123),
  logoutFn: async () => await Promise.resolve(123),
};

/* const testData = () => {
  return configureAuth(authConfig);
}; */
const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  ...authConfig,
});

export { useUser, useLogin, useRegister, useLogout };
