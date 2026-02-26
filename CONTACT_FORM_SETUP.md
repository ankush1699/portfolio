# Contact form process (Formspree)

This guide walks you through getting the portfolio contact form to send submissions to your email.

---

## 1. Create a Formspree account

1. Go to **https://formspree.io**
2. Click **Get Started** (or **Sign Up**)
3. Sign up with your email or Google/GitHub
4. Confirm your email if required

---

## 2. Create a new form

1. After logging in, click **+ New Form**
2. Give it a name (e.g. **Portfolio contact**)
3. Under **Email**, enter the address where you want to receive messages (e.g. `ankushchaudhary.ac99@gmail.com`)
4. Click **Create Form**

---

## 3. Get your form ID

1. On the form’s page you’ll see the form **endpoint URL**, e.g.:
   ```text
   https://formspree.io/f/xyzabc12
   ```
2. The **form ID** is the part after `/f/` — in this example it’s **`xyzabc12`**
3. Copy that ID (you’ll use it in the next step)

---

## 4. Add the form ID to your project

1. In your project root (same folder as `package.json`), create a file named **`.env`** (if it doesn’t exist)
2. Add this line, replacing `xyzabc12` with your actual form ID:
   ```bash
   VITE_FORMSPREE_ID=xyzabc12
   ```
3. Save the file  
   - **Important:** `.env` is in `.gitignore`, so this value is not committed to git. Each developer or deployment that needs the form to work must set their own `.env` (or use their host’s env vars).

---

## 5. Restart the dev server

1. If the app is running, stop it (**Ctrl+C** in the terminal)
2. Start it again:
   ```bash
   npm run dev
   ```
3. Open **http://localhost:5173/portfolio/** and go to the Contact page

---

## 6. Test the form

1. On the Contact page, fill in **Name**, **Email**, and **Message**
2. Click **Send Message**
3. You should see: **“Thank you! I'll get back to you soon.”**
4. Check the inbox of the email you set in Formspree (and spam, if needed) — you should receive the submission there

---

## Why the form works on GitHub Pages without committing .env

**Do not commit `.env` to git.** It’s in `.gitignore` for security (secrets stay only on your machine).

The form still works on GitHub Pages because:

1. **Vite bakes env vars in at build time.** When you run `npm run build`, Vite reads `VITE_FORMSPREE_ID` from your local `.env` and **replaces it inside the built JavaScript**. The value is literally written into the code in the `dist/` folder.
2. **You deploy the built folder, not .env.** Your deploy script runs `npm run build` on your computer (where `.env` exists), then pushes the `dist/` folder to GitHub. The live site serves those built files, which already contain the form ID. The server never needs the `.env` file.

So: **build on your machine (where .env exists) → deploy the `dist/` output.** The form ID is inside the deployed JS; nothing reads `.env` on GitHub’s servers.

---

## How to deploy so the form works (GitHub Pages)

1. **Keep `.env` only on your computer.** Do not add it to git. It should stay in `.gitignore`.
2. **From your project root, run:**
   ```bash
   npm run deploy
   ```
   This runs `npm run build` (which reads `.env` and bakes the form ID into the JS) and then `gh-pages -d dist` (which pushes the built files to the `gh-pages` branch).
3. GitHub Pages serves the site from that branch. The form will work because the form ID is already in the built JavaScript.

**Every time you change code and want to update the live site:** run `npm run deploy` again from your machine. Your local `.env` is used only during that build step; the pushed files already contain what’s needed.

**If you later use GitHub Actions to build and deploy:** add `VITE_FORMSPREE_ID` as a **repository secret** (GitHub repo → Settings → Secrets and variables → Actions). In the workflow, set it as an env var before running `npm run build` so the built JS includes the form ID. Never put the form ID in the repo; use a secret.

---

## If the form doesn’t work

| Symptom | What to check |
|--------|----------------|
| “Contact form is not configured…” | `.env` exists in the project root and contains `VITE_FORMSPREE_ID=your_id`. Restart dev server after adding/editing `.env`. |
| “Something went wrong…” | Formspree form ID is correct; you’re not over free-tier limits; browser console (F12 → Console) for errors. |
| No email received | Formspree dashboard → form → Submissions; check spam; confirm the form’s email address in Formspree. |

---

## Summary

1. Sign up at formspree.io → create a form → copy the form ID from the endpoint URL.
2. In project root: `.env` with `VITE_FORMSPREE_ID=your_form_id`.
3. Restart dev server and test on the Contact page.
4. For production, build in an environment where `.env` is available, then deploy the `dist/` output.
