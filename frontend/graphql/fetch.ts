import { graphqlMutation, graphqlRequest } from "libs/graphqlClient";

import { GRAPHQL_MUTATIONS, GRAPHQL_QUERIES, GraphQLMutations, GraphQLQueries } from "./type";

export const fetchGraphQL = async <TQuery extends keyof GraphQLQueries>({
  queryKey,
}: {
  queryKey: [TQuery, GraphQLQueries[TQuery]["variables"]];
}): Promise<(typeof GRAPHQL_QUERIES)[TQuery]["result"]> => {
  return await graphqlRequest<(typeof GRAPHQL_QUERIES)[TQuery]["result"]>(
    GRAPHQL_QUERIES[queryKey[0]].query,
    queryKey[1],
  );
};

export const mutateGraphQL = async <TMutation extends keyof GraphQLMutations>({
  mutationKey,
  variables,
}: {
  mutationKey: TMutation;
  variables: GraphQLMutations[TMutation]["variables"];
}): Promise<GraphQLMutations[TMutation]["result"]> => {
  return await graphqlMutation<(typeof GRAPHQL_MUTATIONS)[TMutation]["result"]>(
    GRAPHQL_MUTATIONS[mutationKey].mutation,
    variables,
  );

  // 이제 이걸 분리 시켜서 중간에 error catch를 해야하는지는..?
  // 굳이? graphqlClient를 사용하기 쉽게하기 위한 중계소 역할뿐
  // if (!gqlMutation) throw new Error(`GraphQL mutation not found for ${mutationKey}`);
};
