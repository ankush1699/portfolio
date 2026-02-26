# Portfolio audit: pending and optional

*Only open items. Fixed items have been removed.*

---

## Pending (action needed)

| # | Item | What to do |
|---|------|------------|
| 1 | **Contact form** | Form works only after you set `VITE_FORMSPREE_ID` in a `.env` file (get the ID from [formspree.io](https://formspree.io)). Until then, submitting shows a clear error and suggests emailing you. |
| 2 | **Project repo links** | Four projects have no repo link (Multi-Task NLP, Handwritten Text Recognition, Chaotic Traffic Flows, Anime GAN). In `src/data/projects.js` set `repo: 'https://github.com/...'` when those repos are public. |
| 3 | **Project demos** | All projects have `demo: null`. Add `demo: 'https://...'` in `src/data/projects.js` when you have live demos. |

---

## Optional / polish

| # | Item | Notes |
|---|------|--------|
| 4 | **404 page** | `public/404.html` is set for GitHub Pages. If you deploy elsewhere, update the redirect (e.g. `segmentCount`) in that file. |

---

## Summary

- **Pending:** Contact form env var; repo links for 4 projects; demo links when available.
- **Optional:** 404 page if not on GitHub Pages.
- **Done:** Unused components removed; custom favicon (teal "A") added; footer avatar fallback (AC) added; Contact form sends `Accept: application/json`.

---

## How to run locally

1. **Install dependencies** (first time only):
   ```bash
   cd "/Users/ankushchaudhary/Ankush Portfolio/portfolio"
   npm install
   ```

2. **Start the dev server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**  
   Use **http://localhost:5173/portfolio/** so routes (e.g. `/portfolio/projects`) work with the app’s base path.

4. **Contact form:**  
   Add a `.env` file with `VITE_FORMSPREE_ID=your_form_id`, then restart the dev server.

**Build:** `npm run build`  
**Preview build:** `npm run preview` then open the URL shown (e.g. http://localhost:4173/portfolio/).
