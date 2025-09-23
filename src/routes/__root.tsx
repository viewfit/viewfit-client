import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import z from "zod";
import { type QueryClient } from "@tanstack/react-query";
import { Header } from "@/components/header";

type RootRouteContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RootRouteContext>()({
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex flex-col min-h-lvh gap-2">
        <div className="border-b-1 min-w-4/5 shadow-xs h-fit">
          <Header />
        </div>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  );
}
