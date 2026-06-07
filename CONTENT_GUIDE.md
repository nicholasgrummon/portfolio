# Content Guide

This site is built so that almost everything you'll want to change later —
swapping in real photos, rewriting placeholder text, and adding brand-new
projects — happens in **one data file** and a handful of **image folders**.
You shouldn't need to touch the page layouts (HTML/CSS) for routine updates.

## 1. Replacing placeholder text

Open each HTML file and search for square-bracket placeholders like
`[Your Name]` or `[One or two lines describing your role...]`:

- `index.html` — your name, tagline, bio, experience timeline, skills, and
  social links (GitHub/LinkedIn/email) in the header/footer.
- `design-projects.html` / `software-projects.html` / `maker-projects.html`
  — the intro paragraph at the top of each grid page.
- `js/projects-data.js` — every project's title, summary, and write-up
  text (see section 3 below).

Your name and social links appear in the `<header>`/`<footer>` of every
page, so update them consistently across `index.html`, `design-projects.html`,
`software-projects.html`, `maker-projects.html`, and `project.html`.

## 2. Adding your photos

Each project has its own folder under `assets/projects/<design|software|maker>/<slug>/`
containing a cover photo and a `gallery/` subfolder for additional photos.
**Until you add a file at the expected path, the site automatically shows a
"Photo coming soon" placeholder graphic** — so you can drop images in at any
time without breaking anything.

For example, the senior design project expects:

```
assets/projects/design/senior-design/cover.jpg
assets/projects/design/senior-design/gallery/01.jpg
assets/projects/design/senior-design/gallery/02.jpg
assets/projects/design/senior-design/gallery/03.jpg
```

To add your photo, save your file using **exactly that name and path**
(overwriting nothing — the folder is currently empty). If you'd rather use
different filenames or add more/fewer gallery photos, that's fine — just
update the matching `cover` and `gallery` paths for that project in
`js/projects-data.js` (see section 3).

**Tips:**
- Cover photos display at a 4:3 ratio — landscape images crop best.
- Gallery photos also display at 4:3, and link to the full-size image when clicked.
- Reasonable web sizes (around 1600px on the long edge, JPG/PNG/WebP) keep the site fast.
- Your headshot/avatar goes at `assets/images/avatar.jpg` (shown as a circle on the About section).
- Your résumé PDF goes at `assets/resume/resume.pdf` (linked from the "Download Résumé" button).
- The landing page's **"Projects" showcase** (the clickable bars above Skills)
  automatically pulls each category's collage from the *first four* projects'
  `cover` images, in the order they appear in `js/projects-data.js` — so the
  most important/recent work in each category should go near the top of its
  group in that file. Square-ish (1:1) covers collage most cleanly there.

## 3. Editing project text

All project content — titles, summaries, and write-ups — lives in
**`js/projects-data.js`**, in a single array called `PROJECTS`. Each project
is one JavaScript object. Find the one you want (e.g. by its `slug`) and
edit the text fields directly:

```js
{
  slug: "senior-design",
  category: "design",
  title: "[Senior Design Project Name]",       // → becomes "Autonomous Sorting Robot"
  summary: "[One-line summary...]",            // → shown on the card + detail page
  cover: "assets/projects/design/senior-design/cover.jpg",
  gallery: [ /* photo paths */ ],
  sections: [
    { heading: "Challenge", body: "[...]" },   // → write-up blocks, in display order
    { heading: "Approach",  body: "[...]" },
    { heading: "Build",     body: "[...]" },
    { heading: "Test",      body: "[...]" },
    { heading: "Outcome",   body: "[...]" },
  ],
}
```

You can rename, add, remove, or reorder `sections` entries freely — the
detail page just renders whatever is in the array, in order. Design projects
are pre-filled with a Challenge → Approach → Build → Test → Outcome structure
(matching a full engineering process); software and maker projects use a
simpler Build → Result structure. Adjust any of these to fit a specific
project.

### Software projects: tech stack & links

Software projects support two extra, **optional** fields that render on the
detail page only (cards stay simple/consistent across all categories):

```js
{
  slug: "software-project-1",
  category: "software",
  // ...title, summary, cover, gallery, sections as usual...
  techStack: ["Python", "React", "PostgreSQL"],   // shown as chips
  links: {
    repo: "https://github.com/you/project-name",  // → "View Code" button
    demo: "https://your-demo-url.com",            // → "Live Demo" button
  },
}
```

- `techStack` — list whatever languages, frameworks, or tools are most
  relevant; shown as a row of chips under the project summary.
- `links` — both `repo` and `demo` are independently optional. Omit either
  key (e.g. a CLI tool with no live demo) and that button simply won't
  appear. Omit the whole `links` object to hide both.

Nothing stops you from adding `techStack`/`links` to a Design or Maker
project too (e.g. a robotics project with an embedded-software repo) —
the detail page renders them whenever they're present, regardless of
category.

## 4. Adding a brand-new project

This is the main thing the site is designed to make easy as your body of
work grows:

1. **Create an image folder** for it:
   ```
   assets/projects/<design, software, or maker>/<your-new-slug>/
   assets/projects/<design, software, or maker>/<your-new-slug>/gallery/
   ```
   (`<your-new-slug>` should be lowercase with hyphens, e.g. `drone-chassis`.)

2. **Add a new entry to `PROJECTS`** in `js/projects-data.js`. The easiest
   way is to copy an existing object of the same category (`design`,
   `software`, or `maker`), paste it at the end of the array, and update:
   - `slug` — must be unique and match your folder name
   - `category` — `"design"`, `"software"`, or `"maker"` — controls which
     grid it shows in
   - `title`, `summary`, `cover`, `gallery`, and `sections`
   - for software projects: `techStack` and `links` too (see section 3)

3. **Drop in your photos** following the same `cover.jpg` / `gallery/01.jpg`
   convention (or update the paths in your new entry to match whatever
   filenames you used).

That's it — no HTML or CSS changes needed. The new project will
automatically appear as a card in the right grid (sorted in the order it
appears in the array) and get its own detail page at
`project.html?slug=<your-new-slug>`.

## 5. Previewing your changes locally

Just open any `.html` file directly in your browser (double-click it, or
use File → Open File). Because the site loads `js/projects-data.js` via a
plain `<script src="...">` tag — not `fetch()` — everything, including the
project grids and detail pages, works straight from disk via a `file://`
URL. No local server needed.

If you ever prefer serving it over `http://` instead (e.g. to more closely
mirror how GitHub Pages serves it), any static file server works — for
example, from the project's root folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## 6. Publishing to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo's **Settings → Pages**, set the source to the branch you
   pushed (e.g. `main`) and the root folder (`/`).
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`
   (or `https://<your-username>.github.io/` if the repo is named
   `<your-username>.github.io`).
