# Vidasa image replacement guide

All current SVG files are local branded placeholders, so the site works without external images. Replace them with optimized real photos before launch. JPG is recommended for photographs; WebP is even better when available.

## Hero

- Folder: `src/assets/images/hero/`
- Current file: `hero-placeholder.svg`
- Recommended replacement: `hero.jpg` or `hero.webp`
- Recommended size: 1600 × 1200 px (4:3), ideally under 350 KB
- Appears: Home page hero
- After adding the file, change the import in `src/components/home/Hero.jsx`.

## Institute and classrooms

- Folder: `src/assets/images/institute/`
- `institute-placeholder.svg`: exterior, entrance, reception or main institute image; 1400 × 1050 px
- `classroom-placeholder.svg`: classroom or learning-environment image; 1400 × 1050 px
- `image-fallback.svg`: keep this file; it protects the layout if another image cannot load
- Appears: Home about preview and About page
- Update imports in `src/components/home/AboutPreview.jsx` and `src/pages/About.jsx`.

## Teachers

- Folder: `src/assets/images/teachers/`
- Recommended names: `teacher-01.jpg`, `teacher-02.jpg`, and so on
- Recommended size: 900 × 675 px (4:3), under 180 KB each
- Use consistent, well-lit portraits with similar framing
- Appears: Home teacher preview and Teachers page
- Import each photo and assign it to the matching teacher in `src/data/teachers.js`.

## Gallery

- Folder: `src/assets/images/gallery/`
- Recommended names: `gallery-01.jpg`, `gallery-02.jpg`, and so on
- Recommended size: 1200 × 900 px (4:3), under 250 KB each
- Appears: Gallery page and lightbox
- Import photos and update/add entries in `src/data/gallery.js`. Each entry needs `id`, `src`, `alt`, `category`, and `title`.

## Social preview

- Folder: `public/`
- Current file: `og-image.svg`
- For best social-platform compatibility, replace it with `og-image.jpg` at 1200 × 630 px and update the `og:image` path in `index.html`.

Always use meaningful alt text that describes the actual photo, and avoid uploading full camera-resolution files. Non-critical images already use lazy loading.
