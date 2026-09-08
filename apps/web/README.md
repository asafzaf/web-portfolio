# Invenstory marketing site

Static landing page for the Invenstory app. Hebrew-first, no backend.

Live: [https://asafzaf.github.io/web-portfolio/invenstory/](https://asafzaf.github.io/web-portfolio/invenstory/)

The personal portfolio stays at [https://asafzaf.github.io/web-portfolio/](https://asafzaf.github.io/web-portfolio/). Deploy copies this app into `app/dist/invenstory/`.

This is marketing only. Household invites stay on `/get-app` of the API (`?code=…`, TestFlight, deep link).

## Local

From the repo root:

```bash
npm install
npm run web
```

Opens the original portfolio at [http://localhost:5173/web-portfolio/](http://localhost:5173/web-portfolio/).

The Invenstory landing is a separate Vite app:

```bash
npm run web:invenstory
```

That opens [http://localhost:5174/web-portfolio/invenstory/](http://localhost:5174/web-portfolio/invenstory/). It does not replace the portfolio homepage.

```bash
npm run web:build
npm run preview --workspace=@invenstory/web
```

## Install links

The site loads live URLs from the API (`GET /api/legal/links` on the staging host in `src/config/install.ts`) — same config the app and `/get-app` use (`IOS_INSTALL_URL`, `ANDROID_INSTALL_URL`, privacy, terms).

If the API is unreachable, it falls back to the values in that file. An empty Android URL keeps the Android button visible and disabled.

Change TestFlight / Play links on Render. You do not need to rebuild this site unless the API host itself changes.

## GitHub Pages

Push to `main` (or run **Actions → Deploy web to GitHub Pages**). The workflow builds the portfolio and Invenstory, then publishes:

| URL | Site |
| --- | --- |
| `/web-portfolio/` | Portfolio |
| `/web-portfolio/invenstory/` | Invenstory |
