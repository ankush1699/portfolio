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

## Troubleshooting

- If you get "command not found" errors, restart your terminal after installing Node.js
- Make sure you're in the project directory (`/Users/lending/Desktop/Portfolio`)
- If npm install fails, try deleting `node_modules` and `package-lock.json` (if they exist) and run `npm install` again
