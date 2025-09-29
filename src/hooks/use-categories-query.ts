import { fetcher } from "@/lib/fetcher"
import { categorySchema } from "@/schema/category-schema";
import { queryOptions } from "@tanstack/react-query"


export const categoriesQueryOption = () => {
    queryOptions({
        queryKey: ["category", "list"],
        queryFn: async () => {
            const res = await fetcher.get("localhost:9080/categories");

            if(res.ok){
             return categorySchema.parse(res.json());   
            }

            return null;
        },
    }
    );
}