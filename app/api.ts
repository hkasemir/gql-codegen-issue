import { ClientError, GraphQLClient } from "graphql-request";

import { createApi } from "@reduxjs/toolkit/query/react";

const client = new GraphQLClient("/");

async function gqlBaseQuery({
  document,
  variables,
}: {
  document: string;
  variables: void | Record<string, unknown>;
}) {
  try {
    const result = await client.request(document, variables);
    return { data: result };
  } catch (error) {
    if (error instanceof ClientError) {
      return { error: { status: error.response.status, data: error } };
    }
    return { error: { status: 500, data: error } };
  }
}

export const api = createApi({
  baseQuery: gqlBaseQuery,
  endpoints: () => ({}),
});
