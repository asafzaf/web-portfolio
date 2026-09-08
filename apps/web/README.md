# Invenstory marketing site

Static landing page for the Invenstory app. Hebrew-first, no backend.

Live: [https://asafzaf.github.io/web-portfolio/](https://asafzaf.github.io/web-portfolio/)  
Alias: [https://asafzaf.github.io/web-portfolio/invenstory](https://asafzaf.github.io/web-portfolio/invenstory)

This is marketing only. Household invites stay on `/get-app` of the API (`?code=…`, TestFlight, deep link).

## Local

From the repo root:

```bash
npm install
npm run web
```

Opens [http://localhost:5173/web-portfolio/](http://localhost:5173/web-portfolio/). Vite `base` and the React router basename are `/web-portfolio` so they match this GitHub repo’s Pages URL (`asafzaf.github.io/web-portfolio/`).

```bash
npm run web:build
npm run preview --workspace=@invenstory/web
```

## Install links

The site loads live URLs from the API (`GET /api/legal/links` on the staging host in `src/config/install.ts`) — same config the app and `/get-app` use (`IOS_INSTALL_URL`, `ANDROID_INSTALL_URL`, privacy, terms).

If the API is unreachable, it falls back to the values in that file. An empty Android URL keeps the Android button visible and disabled.

Change TestFlight / Play links on Render. You do not need to rebuild this site unless the API host itself changes.

## GitHub Pages

1. Repo **Settings → Pages → Build and deployment → Source**: GitHub Actions.
2. Push to `main` under `apps/web/**`, or run **Actions → Deploy web to GitHub Pages → Run workflow**.
3. The workflow builds `apps/web` and deploys `dist`. Unknown paths use `public/404.html` so later routes (e.g. `/privacy`) can be React routes without a host rewrite.

If this repo already serves another Pages site from the `gh-pages` branch, switch the Pages source to GitHub Actions only when you intend this site to be the one at the Pages URL.
