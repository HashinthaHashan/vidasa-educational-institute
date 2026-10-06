# Vidasa Educational Institute website

A responsive static frontend built with React, Vite, Tailwind CSS, React Router and Lucide icons.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Create a production bundle with `npm run build` and test it with `npm run preview`.

## Content updates

- Institute contact details and social links: `src/config/site.js`
- Classes: `src/data/classes.js`
- Teachers: `src/data/teachers.js`
- Timetable: `src/data/timetable.js`
- Gallery: `src/data/gallery.js`
- Image requirements and replacement instructions: `src/assets/images/README.md`

## Deployment

The output in `dist/` can be deployed as a static site. Netlify SPA redirects are included in `public/_redirects`, and Vercel rewrites are included in `vercel.json` so React Router links work when loaded directly.

Before publishing, replace all placeholder contact details, sample class/teacher/timetable data and placeholder images with verified institute information.
