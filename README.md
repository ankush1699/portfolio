# Portfolio Website

A beautiful, modern, and welcoming portfolio website built with React and Vite.

## Features

- ✨ Modern and clean design
- 🎨 Warm and welcoming color scheme
- 📱 Fully responsive
- ⚡ Smooth animations and transitions
- 🚀 Fast performance with Vite
- 📧 Contact form
- 🎯 Smooth scroll navigation

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Update Your Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update your name, title, and description
   - Update social media links (GitHub, LinkedIn, Email)

2. **About Section** (`src/components/About.jsx`):
   - Update the about text
   - Update the highlight numbers (years of experience, projects, clients)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Update the skills array with your skills and proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`):
   - Update the projects array with your actual projects
   - Add project images by replacing the placeholder divs

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and location information
   - Connect the form to a backend service (optional)

6. **Colors** (`src/index.css`):
   - Customize the color scheme by modifying CSS variables in the `:root` selector

### Adding Your Photo

Replace the placeholder in `src/components/Hero.jsx`:
```jsx
<img src="/your-photo.jpg" alt="Your Name" className="hero-photo" />
```

Make sure to add the image to the `public` folder.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deploying to GitHub Pages

1. **Install gh-pages package**:
```bash
npm install --save-dev gh-pages
```

2. **Add deploy script to package.json**:
Add this script to your `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. **Update vite.config.js**:
Make sure the `base` property in `vite.config.js` matches your repository name:
```js
base: '/Portfolio/'  // Replace 'Portfolio' with your repo name
```

4. **Deploy**:
```bash
npm run deploy
```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "gh-pages" branch
   - Your site will be live at: `https://<username>.github.io/Portfolio/`

## Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── *.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- React
- Vite
- React Icons
- CSS3 (Custom Properties, Animations)

## License

This project is open source and available under the MIT License.

## Contact

Feel free to reach out if you have any questions or suggestions!
