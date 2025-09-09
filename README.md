# Portfolio Website

A modern, responsive portfolio website built with Astro, React, and TypeScript featuring dark/light themes, smooth animations, and mobile-optimized design.

## ✨ Features

- ⚡ Built with Astro for optimal performance and static site generation
- ⚛️ React components with TypeScript for type safety
- 🎨 Modern design with Tailwind CSS
- 🌙 Dark/Light theme toggle with system preference detection
- 📱 Fully responsive mobile-first design
- ✨ Smooth animations with Framer Motion
- 🧭 Scroll-based active navigation
- 📧 Contact form with EmailJS integration
- 🔍 SEO optimized
- 🚀 Fast loading times with optimized assets

## 🚀 Project Structure

```text
/
├── public/
│   ├── domLogo.svg
│   └── samplePortrait.jpg
├── src/
│   ├── assets/
│   │   ├── certifications/
│   │   ├── educations/
│   │   ├── projectsImg/
│   │   └── technologies/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ui/
│   │       ├── Logo.tsx
│   │       ├── ScrollIndicator.tsx
│   │       ├── ThemeToggle.tsx
│   │       └── TypingAnimation.tsx
│   ├── config/
│   │   ├── emailjs.ts
│   │   └── emailjs.template.ts
│   ├── data/
│   │   ├── certifications.json
│   │   ├── education.json
│   │   ├── navigation.json
│   │   ├── projects.json
│   │   ├── technologies.json
│   │   └── types.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── globals.css
├── astro.config.mjs
├── tailwind.config.mjs
├── postcss.config.mjs
└── package.json
```

## 📂 Key Directories

- `src/pages/` - Astro pages that become routes
- `src/components/` - React and Astro components for different sections
- `src/layouts/` - Reusable layout components
- `src/data/` - JSON data files for portfolio content
- `src/assets/` - Images and static assets organized by category
- `src/config/` - Configuration files for EmailJS and other services
- `src/styles/` - Global CSS styles and theme definitions
- `public/` - Static assets served directly

## 🎨 Sections

- **Hero** - Introduction with animated typing effect
- **About** - Personal introduction and background
- **Education** - Educational timeline with institutions
- **Certifications** - Professional certifications and achievements
- **Skills** - Technical skills with visual indicators
- **Projects** - Portfolio projects with descriptions and links
- **Contact** - Contact form with EmailJS integration

## 🧞 Development Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🛠️ Tech Stack

- **Framework**: Astro 4.x
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite (via Astro)
- **Email Service**: EmailJS
- **Deployment**: Static site generation

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/dom-l07/portfolioWebsite.git
   cd portfolioWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🔧 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `src/config/emailjs.ts`

### Customization
- Update personal information in `src/data/` JSON files
- Replace images in `src/assets/` and `public/` directories
- Modify color schemes in `tailwind.config.mjs`
- Adjust animations in component files

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive navigation with hamburger menu
- Optimized layouts for all screen sizes
- Touch-friendly interactive elements
- Adaptive typography and spacing

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
