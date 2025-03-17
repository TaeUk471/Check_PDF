import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  DocumentNode,
} from "@apollo/client";

// Apollo Client 인스턴스 생성 (React 코드 외부에서만 사용)
export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:4000/graphql",
  }),
  cache: new InMemoryCache(),
});

export async function graphqlRequest<T>(
  query: DocumentNode,
  variables?: Record<string, unknown>,
): Promise<T> {
  const { data } = await client.query<T>({ query, variables });

  if (!data) {
    throw new Error("No data returned from GraphQL query.");
  }

  return data;
}

export async function graphqlMutation<T>(
  mutation: DocumentNode,
  variables?: Record<string, unknown>,
): Promise<T> {
  const { data } = await client.mutate<T>({ mutation, variables });

  if (!data) {
    throw new Error("No data returned from GraphQL mutation.");
  }

  return data;
}
