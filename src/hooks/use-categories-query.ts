import { fetcher } from "@/lib/fetcher";
import { categorySchema } from "@/schema/category-schema";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

export const categoriesQueryOption = (parentId: number | null) =>
  queryOptions({
    queryKey: ["category", "list", parentId],
    queryFn: async () => {
      const url: string = "http://localhost:9080/categories";

      if (parentId) {
        const res = await fetcher.get(url + "/" + parentId);

        if (res.ok) {
          return categorySchema.parse(await res.json());
        }

        return null;
      }

      return null;
    },
  });

export const useCategories = (parentId: number | null) => {
  return useSuspenseQuery(categoriesQueryOption(parentId));
};
