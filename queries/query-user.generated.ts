import * as Types from '../types';

import { UsernameOnlyFragment } from './user-fragment.generated';
import { UsernameOnlyFragmentDoc } from './user-fragment.generated';
import { api } from 'app/api';
export type UserWithUsernameQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type UserWithUsernameQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & UsernameOnlyFragment
  ) }
);


export const UserWithUsernameDocument = `
    query UserWithUsername($id: ID!) {
  user(id: $id) {
    ...usernameOnly
  }
}
    ${UsernameOnlyFragmentDoc}`;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    UserWithUsername: build.query<UserWithUsernameQuery, UserWithUsernameQueryVariables>({
      query: (variables) => ({ document: UserWithUsernameDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useUserWithUsernameQuery, useLazyUserWithUsernameQuery } = injectedRtkApi;

