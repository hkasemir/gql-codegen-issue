import * as Types from '../types';

export type UsernameOnlyFragment = (
  { __typename?: 'User' }
  & Pick<Types.User, 'username'>
);

export const UsernameOnlyFragmentDoc = `
    fragment usernameOnly on User {
  username
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
  }),
});

export { injectedRtkApi as api };
export const {  } = injectedRtkApi;

