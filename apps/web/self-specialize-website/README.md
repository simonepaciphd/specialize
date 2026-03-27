# Self-Specialize Your Agents

A static marketing site for **Self-Specialize Your Agents**, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for deployment

```bash
npm install
npm run build
```

The static export is generated in `out/`.

## Deploy to GitHub Pages

### User or organization site
If your Pages site is served from the root domain, build normally:

```bash
npm run build
```

Publish the contents of `out/`.

### Project site under a repository path
If your Pages URL will look like `https://username.github.io/repository-name/`, build with a base path:

```bash
NEXT_PUBLIC_BASE_PATH=/repository-name npm run build
```

Then publish the contents of `out/`.

The project includes `public/.nojekyll` so underscore-prefixed Next.js assets are served correctly on GitHub Pages.

## Deploy to Vercel

### Option 1: static output
1. Import the repo into Vercel.
2. Set the framework to Next.js.
3. Run the default build command.
4. Vercel can serve the generated static output directly.

### Option 2: manual upload
1. Run `npm run build`.
2. Deploy the `out/` directory to any static host supported by Vercel.

## Project structure

```text
self-specialize-website/
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── public/
└── src/
```
