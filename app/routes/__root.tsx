import appCss from "@/styles/app.css?url";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, ScrollRestoration, createRootRoute } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import * as React from "react";
import type { ReactNode } from "react";

const inProduction = process.env.NODE_ENV === "production";

const MaybeTanStackRouterDevtools = inProduction
  ? () => null
  : React.lazy(() =>
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    );

const MaybeReactQueryDevtools = inProduction
  ? () => null
  : React.lazy(() =>
      import("@tanstack/react-query-devtools").then((res) => ({
        default: res.ReactQueryDevtools,
      })),
    );

const TanStackRouterDevtools = () => (
  <React.Suspense>
    <MaybeTanStackRouterDevtools />
  </React.Suspense>
);

const ReactQueryDevtools = () => (
  <React.Suspense>
    <MaybeReactQueryDevtools position="right" />
  </React.Suspense>
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://rsms.me/" },
      { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  const queryClient = new QueryClient();

  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <ReactQueryDevtools />
        <TanStackRouterDevtools />
      </QueryClientProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
