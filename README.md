# Vidasa Educational Institute website

A responsive React website for Vidasa Educational Institute, Kotamulla, Karangoda, Ratnapura.

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Editing guide

- Institute details, contact links, mission, vision and hall capacities: `src/config/site.js`
- Subjects and grade groups: `src/data/classes.js`
- Teacher profiles: `src/data/teachers.js`
- Gallery photos: `src/data/gallery.js`
- Main styles and visual tokens: `src/index.css`
- Page content: `src/pages/`
- Home sections: `src/components/home/`

The current website contains only the verified information supplied by the institute. Teacher profiles, the official timetable and real gallery photographs intentionally remain unpublished until verified content is available.

## Deployment

`npm run build` creates the production site in `dist/`. Netlify SPA redirects are included in `public/_redirects`, and Vercel rewrites are included in `vercel.json`.
