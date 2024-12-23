import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import type { RouterHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function createRouter(history?: RouterHistory) {
  const router = createTanStackRouter({
    routeTree,
    history,
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
