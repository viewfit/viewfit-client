import { createFileRoute } from "@tanstack/react-router";
import { useCosmetics } from "../hooks/cosmetic/use-cosmetics-query";
import type { Cosmetics } from "../schema/cosmetic-schema";

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
    <main className="w-full flex flex-col items-center mb-10">
      <div className="w-4/5 h-200">
        <img
          src="winter_ad_img.jpg"
          className="w-full rounded-2xl h-full object-fill"
        />
      </div>
    </main>
  );
}
