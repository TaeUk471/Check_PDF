"use client";

import {
  QueryClient,
  QueryCache,
  QueryClientProvider,
  DefaultOptions,
  useQueries,
  useMutation,
  UseQueryResult,
} from "@tanstack/react-query";
import { GraphQLQueries, GraphQLMutations } from "graphql/type";
import React, { useCallback, useMemo } from "react";

import { fetchGraphQL, mutateGraphQL } from "graphql/fetch";

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: 2,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  },
};

export const queryClient = new QueryClient({
  defaultOptions,
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.error(`[React Query Error] ${query.queryKey}:`, error);
    },
  }),
});

export const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

// 쿼리 결과값에 대한 1자 처리
const preprocessQueryData = <T,>(data: unknown): T => {
  return data && typeof data === "object" ? (data as T) : ({} as T);
};

// 각 페이지 (컴포넌트) 에서 사용할 출력 Type 정의
export const processResultType = <TResult,>(data: unknown): TResult | null => {
  return data && typeof data === "object" ? (data as TResult) : null;
};

export const useQueryStreamLine = <TQueries extends keyof GraphQLQueries>({
  queries,
}: {
  queries: Array<{
    queryKey: [TQueries, ...unknown[]];
    variables?: GraphQLQueries[TQueries]["variables"];
  }>;
}) => {
  const queryConfigs = useMemo(
    () =>
      queries.map(({ queryKey, variables }) => ({
        queryKey,
        queryFn: () => fetchGraphQL({ queryKey: [queryKey[0], variables || {}] }),
      })),
    [queries],
  );

  const queryResultsArray = useQueries({ queries: queryConfigs });

  const queryResults = useMemo(() => {
    return queries.reduce(
      (acc, { queryKey }, index) => {
        const queryResult = queryResultsArray[index];
        acc[queryKey[0]] = {
          ...queryResult,
          data: preprocessQueryData<GraphQLQueries[TQueries]["result"]>(queryResult?.data ?? {}),
        } as UseQueryResult<GraphQLQueries[TQueries]["result"], Error>;

        return acc;
      },
      {} as Record<TQueries, UseQueryResult<GraphQLQueries[TQueries]["result"], Error>>,
    );
  }, [queries, queryResultsArray]);

  return queryResults;
};

const preprocessMutationData = <T,>(data: unknown): T => {
  return data && typeof data === "object" ? (data as T) : ({} as T);
};

export const useMutationStreamLine = <TMutations extends keyof GraphQLMutations>({
  mutationKey,
  mutationFn,
}: {
  mutationKey: TMutations;
  mutationFn?: (
    variables: GraphQLMutations[TMutations]["variables"],
  ) => Promise<GraphQLMutations[TMutations]["result"]>;
}) => {
  const finalMutationFn = useCallback(
    async (variables: GraphQLMutations[TMutations]["variables"]) => {
      const result = mutationFn
        ? await mutationFn(variables)
        : await mutateGraphQL({ mutationKey, variables });
      return preprocessMutationData<GraphQLMutations[TMutations]["result"]>(result);
    },
    [mutationKey, mutationFn],
  );

  return useMutation<
    GraphQLMutations[TMutations]["result"],
    Error,
    GraphQLMutations[TMutations]["variables"]
  >({
    mutationFn: finalMutationFn,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [mutationKey] });
    },
  });
};
