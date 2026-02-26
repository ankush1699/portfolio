# Portfolio

Personal portfolio site built with React and Vite. Live at [ankush1699.github.io/portfolio](https://ankush1699.github.io/portfolio/).

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173/portfolio/** (the app uses base path `/portfolio/`).

See **SETUP.md** for detailed setup and **CONTACT_FORM_SETUP.md** for the contact form (Formspree).

## Deploy

```bash
npm run deploy
```

Builds the site and pushes the `dist/` folder to the `gh-pages` branch. Enable GitHub Pages in the repo (Settings > Pages, source: gh-pages branch).

## Project layout

- **src/pages/** – Home, Projects, ProjectDetail, Experience, Research, Contact, Resume
- **src/components/** – Navbar, Footer, ProjectCard, TimelineItem, ScrollToTop, etc.
- **src/data/projects.js** – Project content and metadata
- **public/** – Static assets (avatar, favicon, 404 for GitHub Pages)

## Tech

React, Vite, React Router, Framer Motion, React Icons.
