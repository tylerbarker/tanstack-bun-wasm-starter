import { expect, test } from "bun:test";
import { renderRouter } from "@test/helpers";
import { screen } from "@testing-library/react";

// I've been away from the React ecosystem a while so
// this may not be idiomatic, but `renderRouter` was
// the best way I could come up with.

test("unknown route renders NotFound component", async () => {
  renderRouter(["/routeThatDefinitelyDoesNotExist"]);

  const notFoundComponent = screen.getByTestId("page-not-found");
  const backButton = screen.getByTestId("back-button");
  expect(notFoundComponent).toBeInTheDocument();
  expect(backButton).toBeInTheDocument();
});
