import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex min-h-lvh flex-col">
        <div className="container mx-auto my-4 flex max-w-7xl flex-1 flex-col gap-4 px-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}
