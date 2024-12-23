import { Matchers } from "bun:test";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare module "bun:test" {
  interface Matchers<T> extends TestingLibraryMatchers<typeof expect.stringContaining, T> {}
  // This file is from Bun's docs, the line below is sad because it wants
  // generic arguments I've not figured out which yet.
  // interface AsymmetricMatchers extends TestingLibraryMatchers {}
}
