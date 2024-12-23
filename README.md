# Tanstack + Bun + Rust WASM Starter 🐰

An extremely shiny React app starter featuring:

- TanStack [Start](https://tanstack.com/start) + [Router](https://tanstack.com/router) + [Query](https://tanstack.com/query)
- Package management, TS scripting with [Bun](https://bun.sh)
- Deployed to a [Bun](https://bun.sh) server
- Integrated WASM library with [Rust](https://www.rust-lang.org) and [wasm-bindgen](https://wasm-bindgen.netlify.app)
- Styling with [TailwindCSS](https://tailwindcss.com)
- Formatting + linting with [Biome](https://biomejs.dev)
- Project dependencies managed by [asdf](https://asdf-vm.com)
- Dockerized deployment (I recommend [fly.io](https://fly.io))

## Requirements

To use this template as intended, you'll need all the following installed:

- [asdf](https://asdf-vm.com) (+ run `asdf plugin add bun`)
- [Bun](https://bun.sh) (via asdf, run `asdf install`)
- Biome.js [IDE integration](https://biomejs.dev/guides/editors/first-party-extensions)
- Fly.io account & [flyctl](https://fly.io/docs/flyctl/install) (or your preferred hosting provider)
- chromedriver (`brew install --cask chromedriver --no-quarantine`)
- Rust (via [rustup](https://rustup.rs))
- [wasm-bindgen-cli](https://wasm-bindgen.netlify.app/reference/cli.html?highlight=cli#installation) + [wasm-pack](https://rustwasm.github.io/wasm-pack/)

All of the above assumes macOS. Where I've not included links to installation, please refer to a search engine for the relevant instructions for your machine.

## After You 'Use this template'

1. Rename root directory, replace all uses of "tanstack-bun-wasm-starter" name.
2. Rename WASM crate directory - replace all uses of "acrate" name.
3. Replace my name with your own in maintainers, author, in package.json and Cargo.toml.
4. Replace "yourdomain.com" with your actual domain in robots.txt and sitemap.xml (BYO DNS config, see [fly certs](https://fly.io/docs/flyctl/certs).
5. Run `bun run setup`
6. If all's well run `bun run dev`
7. Happy coding ✌️

## Deployment

I deploy this to Fly.io, so these instructions will be specific. I've intentionally not included the autogenerated `fly.toml` file in this repository so you can generate it yourself:

1. Create an account with Fly.io
2. [Install flyctl](https://fly.io/docs/flyctl/install) and authenticate.
3. Run `flyctl launch` from the root directory and follow the prompts.
4. Deploy with `flyctl deploy`.

Note that `flyctl launch` will also generate a GitHub Action for deployment. Be sure to note down the `FLY_API_TOKEN` and save it to your repo action secrets if you'd like to automate deployments this way.
