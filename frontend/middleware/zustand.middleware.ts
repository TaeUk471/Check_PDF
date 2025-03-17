import { persist, subscribeWithSelector } from "zustand/middleware";

import { queryClient } from "./reactQuery.middleware";

export const ZustandMiddleware = <T extends object>(
  store: (set: (partial: Partial<T>) => void, get: () => T) => T,
  key: string,
) =>
  persist(
    subscribeWithSelector<T>((set, get) => ({
      ...store(set, get),
      setState: (partial: Partial<T>) => {
        console.log(`[Zustand Update] ${key}:`, partial);
        set(partial);

        queryClient.invalidateQueries({ queryKey: [key] });
      },
    })),
    { name: key },
  );
