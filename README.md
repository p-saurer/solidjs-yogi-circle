## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ pnpm install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `pnpm dev` or `pnpm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `pnpm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

### Vitest + @testing-library/jest-dom + TypeScript issues

Currently we import the types separately from @types/testing-library**jest-dom because we use also @solidjs/testing-library which does not support the newest (^6.0.0) library of @testing-library/jest-dom yet.
The version of @types/testing-library**jest-dom needs to be below 6.0.0 because in newer versions it is deprecated (as they are provided by @testing-library/jest-dom).

Once @solidjs/testing-library is up to date with the newest @testing-library/jest-dom matchers, we can switch and remove the separate type definitions, and probably some setup steps.
