import { cosmeticSchema } from "../../schema/cosmetic-schema";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { fetcher } from "../../lib/fetcher";

export const cosmeticsQueryOptions = () =>
  queryOptions({
    queryKey: ["cosmetics", "list"],
    queryFn: async () => {
      const res = await fetcher.get("http://localhost:9080/");

      if (res.ok) {
        return cosmeticSchema.parse(await res.json());
      }

      return null;
    },
  });

export const useCosmetics = () => {
  return useSuspenseQuery(cosmeticsQueryOptions());
};
