import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

const wasmLoaderQueryOptions = queryOptions({
  queryKey: ["wasm"],
  queryFn: () => import("@wasm-lib"),
});

export function useWasm() {
  return useSuspenseQuery(wasmLoaderQueryOptions);
}
