# Vidasa photo guide

The website currently uses only the official Vidasa logo. Real teacher, institute and classroom photographs can be added later without changing the page layout.

## Official logo

- File: `src/assets/images/brand/vidasa-official-logo.jpg`
- Used in the navigation, footer and home hero
- Browser icon: `public/favicon.png`

## Teacher photos

1. Create `public/images/teachers/`.
2. Add optimized WebP or JPG photos, ideally 900 × 675 px and under 200 KB each.
3. Add the verified profile to `src/data/teachers.js` using a path such as `/images/teachers/teacher-name.webp`.

## Gallery photos

1. Create `public/images/gallery/`.
2. Add optimized WebP or JPG photos, ideally 1200 × 900 px and under 300 KB each.
3. Add the photo information to `src/data/gallery.js` using a path such as `/images/gallery/classroom-01.webp`.

Use consistent framing, meaningful alternative text and verified names. Do not upload full camera-resolution files directly.
