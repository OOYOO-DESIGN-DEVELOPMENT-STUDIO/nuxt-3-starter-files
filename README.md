# Nuxt 3 Minimal Starter

Based off of Net Ninja's Nuxt 3 course on YouTube:

Sidenote 1:
pnpm install

Sidenote 2:
add .env

Sidenote 2: add PNPM_FLAGS=--shamefully-hoist in env variables when deploying to netlify if pnpm is ur package manager

Added the following to tsconfig.ts to remove error "Cannot write file '.js' because it would overwrite input file.ts { "extends": "../.nuxt/tsconfig.server.json" }":

"compilerOptions": {
    "outDir": "./build"
}

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
