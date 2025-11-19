import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cosmetics/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/cosmetics/"!</div>;
}
