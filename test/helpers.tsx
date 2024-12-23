import { createRouter } from "@/router";
import { RouterProvider, createMemoryHistory } from "@tanstack/react-router";
import { render } from "@testing-library/react";

export function renderRouter(historyEntries: string[]) {
  const history = createMemoryHistory({
    initialEntries: historyEntries,
  });
  const router = createRouter(history);
  render(<RouterProvider router={router} />);

  return router;
}
