import type { ChildProcess, SpawnOptions } from "node:child_process";
import { spawn } from "node:child_process";
import type { FSWatcher } from "chokidar";
import chokidar from "chokidar";

const CRATE_PATH = "./acrate";
const OUTPUT_PATH = "../app/pkg";
const WASM_PACK_ARGS = ["build", "--out-dir", OUTPUT_PATH];
const SPAWN_OPTS: SpawnOptions = { cwd: CRATE_PATH, stdio: "inherit" };

let currentBuild: ChildProcess | null = null;
let watcher: FSWatcher | null = null;

const args = process.argv.slice(2);
const watch = args.includes("--watch");

function runWasmPack() {
  // Kill any existing build process
  if (currentBuild) {
    currentBuild.kill();
  }

  currentBuild = spawn("wasm-pack", WASM_PACK_ARGS, SPAWN_OPTS);

  currentBuild.on("exit", () => {
    currentBuild = null;
  });
}

// Initial build
runWasmPack();

if (watch) {
  watcher = chokidar.watch(CRATE_PATH, {
    ignored: /target/,
  });

  watcher.on("change", (path) => {
    console.log(`🦀 Rust file changed: ${path}`);
    runWasmPack();
  });
}

function cleanup() {
  currentBuild?.kill();
  watcher?.close();
  process.exit(0);
}

// Handle cleanup
process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
process.on("exit", cleanup);
