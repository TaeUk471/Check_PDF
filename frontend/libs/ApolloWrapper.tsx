"use client";

import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

import { middlewareLink } from "middleware/graphql.middleware";

// have a function to create a client for you
export const makeClient = () => {
  // const httpLink = new HttpLink({
  //   // this needs to be an absolute url, as relative urls cannot be used in SSR
  //   uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:4000/graphql",
  //   // if you release set Endpoint properly
  //   // you can disable result caching here if you want to
  //   // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
  //   fetchOptions: { cache: "no-store" },
  //   // you can override the default `fetchOptions` on a per query basis
  //   // via the `context` property on the options passed as a second argument
  //   // to an Apollo Client data fetching hook, e.g.:
  //   // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
  // });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: middlewareLink,
  });
};

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
