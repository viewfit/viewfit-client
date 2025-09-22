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
    <div>
      {cosmetics?.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}
