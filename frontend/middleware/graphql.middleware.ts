import { ApolloLink, HttpLink } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) console.error("GraphQL Errors:", graphQLErrors);
  if (networkError) console.error("Network Error:", networkError);
});

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("access_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// ✅ 네트워크 요청을 담당하는 httpLink
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:4000/graphql",
});

export const middlewareLink = ApolloLink.from([errorLink, httpLink]);
