interface IsignIn {
  login: string;
  password: string;
}

export const signIn = (props: IsignIn): Promise<string> => {
  return Promise.resolve('test token');
};
