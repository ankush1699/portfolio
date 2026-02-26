# Setup Guide

## Step 1: Install Node.js

### Option A: Direct Download (Recommended)
1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version for macOS
3. Run the installer and follow the prompts
4. Verify installation by running: `node --version` and `npm --version`

### Option B: Using Homebrew
If you have Homebrew installed:
```bash
brew install node
```

### Option C: Using NVM (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts
```

## Step 2: Install Dependencies

Once Node.js is installed, run:
```bash
npm install
```

## Step 3: Run the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Step 4: Build for Production

```bash
npm run build
```

## Navbar logo (your photo)

The header shows a circular photo on the left. Add your image to the project:

- Place your photo at **`public/avatar.jpg`** (or use `avatar.png` and update the filename in `src/components/Navbar.jsx`).

If the file is missing, the navbar shows your initials “AC” in a circle instead.

## Contact form (Formspree)

To receive contact form submissions by email:

1. Go to [formspree.io](https://formspree.io) and sign up (free).
2. Create a new form and add your email to receive submissions.
3. Copy your form ID (e.g. `mzbqpkpn` from `https://formspree.io/f/mzbqpkpn`).
4. In the project root, create a file **`.env`** with:
   ```
   VITE_FORMSPREE_ID=your_form_id_here
   ```
5. Restart the dev server. Submissions will be sent to your email.

## Troubleshooting

- If you get "command not found" errors, restart your terminal after installing Node.js
- Make sure you're in the project directory (`/Users/lending/Desktop/Portfolio`)
- If npm install fails, try deleting `node_modules` and `package-lock.json` (if they exist) and run `npm install` again
