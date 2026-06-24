# collabor8 Website

Astro static site for collabor8 Architecture + Design (BC).

## Local Development

```sh
npm install
npm run dev
```

The local development server usually opens at `http://localhost:4321`.

## Builds

This site supports two production build targets:

| Target | Command | Output |
| --- | --- | --- |
| GitHub Pages | `npm run build:github` | `dist/` with `/collabor8-site/` base paths |
| GoDaddy / root domain | `npm run build:godaddy` | `dist/` with root `/` paths |

## Deploy To GoDaddy

1. Run:

```sh
npm run build:godaddy
```

2. Upload the contents of `dist/` to the GoDaddy hosting root, usually `public_html/`.

3. Confirm these pages load:

- `/`
- `/work`

Important: upload the contents inside `dist/`, not the `dist` folder itself.

## Deploy To GitHub Pages

```sh
npm run build:github
```

GitHub Pages uses the repository subpath `/collabor8-site/`, so keep using `build:github` for that environment.
