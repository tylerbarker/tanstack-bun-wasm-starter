import { useWasm } from "@/hooks/useWasm";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { data: wasm, isLoading, isError } = useWasm();
  const [count, setCount] = useState(0);

  if (isError) return "Error!";
  if (isLoading) return "Loading...";

  return (
    <button
      type="button"
      className="transition-colors rounded-md bg-emerald-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      onClick={() => setCount(wasm.sum(count, 2))}
    >
      Add 1 to {count}?
    </button>
  );
}
