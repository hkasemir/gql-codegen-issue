import * as Types from './types';

import { api } from 'app/api';
export type UserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'username' | 'email'>
  ) }
);


export const UserDocument = `
    query user {
  user(id: 1) {
    id
    username
    email
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    user: build.query<UserQuery, UserQueryVariables | void>({
      query: (variables) => ({ document: UserDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useUserQuery, useLazyUserQuery } = injectedRtkApi;

