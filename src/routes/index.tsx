import { createFileRoute } from "@tanstack/react-router";
import { useCosmetics } from "../hooks/cosmetic/use-cosmetics-query";
import type { Cosmetics } from "../schema/cosmetic-schema";

import { Card, CardContent } from "@/components/ui/card";

import dummy from "../../public/dummy.json";
import { StarIcon } from "lucide-react";
import { MainAds } from "@/components/main-ads";
import { IndexCategories } from "@/components/index-categories";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

export type CosmeticsProps = {
  cosmetics: Cosmetics;
};

function RouteComponent() {
  const { data: cosmetics } = useCosmetics();

  console.log(cosmetics);

  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-4/5 flex flex-col gap-10">
        <MainAds />
        <IndexCategories />

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <StarIcon size={24} color="#315578" strokeWidth={3} />
            <span className="text-xl text-primary font-bold">인기상품</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
            {dummy.slice(0, 5).map((item, index) => (
              <div className="max-w-70 h-fit">
                <Card className="w-full h-100 p-0 rounded-2xl">
                  <CardContent className="flex flex-col gap-6 p-0">
                    <img
                      src={item.image}
                      className="bg-gray-200 text-center max-h-70 font-bold text-2xl text-primary-foreground rounded-2xl"
                    ></img>
                    <div className="flex flex-col pb-3">
                      <span className="text-center font-bold text-base whitespace-normal">
                        {item.name}
                      </span>
                      <span className="text-center text-primary font-bold">
                        {item.price} 원
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
