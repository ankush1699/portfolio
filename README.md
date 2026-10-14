# Portfolio

Personal portfolio built with React and Vite, published on GitHub Pages at
[ankush1699.github.io/portfolio](https://ankush1699.github.io/portfolio/).

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173/portfolio/ (the site is served under the `/portfolio/` base path).

## Contact form

The form sends messages through [Formspree](https://formspree.io). Put the form ID in a `.env` file in the
project root (it is git-ignored):

```
VITE_FORMSPREE_ID=your_form_id
```

Restart the dev server after changing it. The ID is baked into the site when it is built, so `.env` must exist
on the computer you deploy from.

## Publish

```bash
npm run deploy
```

This builds the site and pushes `dist/` to the `gh-pages` branch. Commit and push the source to `main` as well.

If GitHub rejects a push with "email privacy restrictions", either turn off *Block command line pushes that expose
my email* in GitHub's email settings, or commit with your GitHub `noreply` address.

## Where things live

```
src/
  data/profile.js       Name, role, tagline, stats, core stack, experience, education, skills, resume filename
  data/projects.js      Projects, in display order (hidden ones are skipped)
  data/research.js      Research papers shown on the Research page and the home page
  pages/                Home, Projects, ProjectDetail, Experience, Research, Contact, Resume (each has a .css)
  components/           Navbar, Footer, ProjectCover, ResumeButton, TagPill, RouteTitle, ScrollToTop
  index.css             Colors, fonts, spacing, shared styles (change the look here)
public/                 Everything the site serves as-is
  hero.png              Photo in the hero (square, about 640px)
  og-image.png          Link preview image (1200 x 627)
  logo-name-on-dark.png  Name part of the logo (the role line under it is live text in Logo.jsx)
  covers/               Project thumbnails (1200 x 627)
  fonts/                Web fonts (Lemon Milk, headings)
  404.html              Makes page links work on GitHub Pages
design-assets/
  logo/                 Logo source files
  make-covers.py        Draws the project thumbnails (see below)
  originals/            Local only, not in git: full-size photos, resume drafts, the raw font pack
```

## Common edits

- **Resume:** put the PDF in `public/` and set `resumePdf` in `src/data/profile.js` to its filename (now
  `Ankush_Chaudhary_Resume.pdf`). To replace it, overwrite the file. Set `resumePdf` to `null` to show a
  "Résumé coming soon" placeholder instead.
- **Add a project:** add an entry to `src/data/projects.js` (copy an existing one). The list order is the display order.
  - Thumbnail: add a diagram to `design-assets/make-covers.py`, run `python3 design-assets/make-covers.py`
    (needs Pillow and the macOS Avenir Next font), and set `cover` to the new file. Or drop in your own 1200 x 627 image.
  - Links: `repo` (GitHub), `demo`, `report` (a PDF inside `public/`), or `reportUrl` (an outside paper link).
  - Set `hidden: true` to keep a project in the file but off the site.
- **Research:** edit `src/data/research.js`. The notes on the Research page are in `src/pages/Research.jsx`.
- **Experience, skills, stats:** edit `src/data/profile.js`.
- **Colors and fonts:** edit the variables at the top of `src/index.css`.

## Rules for the content

- Plain English, no em dashes.
- Every number must be one you can back up, from the repo, the paper or your own records. If you cannot, leave it out.

## Notes

- Headings use **Lemon Milk v5**, which is free for personal use only and has capital letters only. For commercial use,
  the author asks for a donation, or use the Pro version.
- Pages respect the reduced-motion setting, show a visible keyboard focus ring, and have a skip link.
- Two projects (handwritten text recognition, anime GAN) are hidden until their text is checked against their reports.
  See the TODO in `src/data/projects.js`.

## Tech

React, Vite, React Router, Framer Motion, React Icons.
