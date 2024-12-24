ARG BUN_VERSION=1.1.42
FROM oven/bun:${BUN_VERSION} AS builder

# Install OS  deps
RUN apt-get update -y && apt-get install -y ca-certificates curl build-essential

# Install Rust
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --default-toolchain stable --profile minimal --target x86_64-unknown-linux-gnu -y
ENV PATH="/root/.cargo/bin:${PATH}"

# Install wasm-pack
RUN cargo install wasm-pack

WORKDIR /app

# Copy necessary files only
COPY acrate ./acrate
COPY app ./app
COPY public ./public
COPY package.json bun.lockb ./
COPY app.config.ts tsconfig.json ./
COPY tailwind.config.cjs postcss.config.cjs ./
COPY wasm-build.ts ./

# Install deps and build the application
RUN bun install
RUN bun run build

# Production stage
FROM oven/bun:${BUN_VERSION}-slim

WORKDIR /app

# Copy only the necessary built files from builder
COPY --from=builder /app/.output/server ./server
COPY --from=builder /app/.output/public ./public

# Expose the port your app runs on (adjust if needed)
EXPOSE 3000

# Command to run the application
CMD ["bun", "run", "server/index.mjs"]
