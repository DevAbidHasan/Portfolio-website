# Abid Hasan Plabon — Portfolio

Personal portfolio of my, a full-stack developer from Dhaka, Bangladesh. Built with React and Vite, featuring scroll-reveal animations, light/dark theme, a custom cursor, and a section-based single-page layout.

| | |
|---|---|
| **Repository** | `Portfolio-website` |
| **Local folder** | `my-portfolio` |
| **Live site** | [plabon.netlify.app](https://plabon.netlify.app) |

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Architecture overview](#architecture-overview)
- [Styling & theming](#styling--theming)
- [Customization guide](#customization-guide)
- [Build & deployment](#build--deployment)
- [Browser support](#browser-support)
- [License](#license)

---

## Features

- **Single-page home** with anchored sections (Hero, About, Workflow, Stats, Skills, Projects, Education, Certifications, Contact)
- **Light / dark theme** with `localStorage` persistence and system-preference fallback
- **Page loader** with smooth exit transition before content appears
- **Scroll reveal animations** powered by [AOS](https://michalsnik.github.io/aos/) (respects `prefers-reduced-motion`)
- **Custom desktop cursor** (pointer-fine devices only)
- **Responsive navbar** with mobile drawer, sticky section nav highlights, and contact CTA
- **Project filtering** by category (Web, AI/ML, Data, Others) with multi-category support
- **Interactive hero** — 3D-tilt profile card, tech marquee, animated photo border
- **Certificate cards** with download and verify links
- **Toast notifications** via `react-hot-toast`
- **Scroll-to-top** floating button

---

## Tech stack

### Core

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 19.x | UI library |
| [Vite](https://vite.dev/) | 7.x | Dev server & production bundler |
| [React Router](https://reactrouter.com/) | 7.x | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS (via `@tailwindcss/vite`) |
| [DaisyUI](https://daisyui.com/) | 5.x | Tailwind component plugin |

### UI & animation

| Package | Purpose |
|---------|---------|
| `aos` | Scroll-reveal on section enter |
| `react-icons` | Icon set (Feather, Simple Icons, etc.) |
| `react-hot-toast` | Toast messages (e.g. cert verification) |
| `@gsap/react` | Available for advanced animations |
| `lucide-react` | Additional icons (optional use) |

### 3D (installed, optional)

These packages are included for potential 3D/interactive sections:

| Package | Purpose |
|---------|---------|
| `three` | WebGL 3D engine |
| `@react-three/fiber` | React renderer for Three.js |
| `@react-three/drei` | Three.js helpers |
| `@react-three/rapier` | Physics engine |
| `meshline` | Thick line rendering for 3D ropes/straps |

### Tooling

| Tool | Purpose |
|------|---------|
| ESLint 9 | Linting (`eslint.config.js`) |
| `@vitejs/plugin-react` | React Fast Refresh |

---

## Prerequisites

Before you begin, ensure you have:

- **Node.js** `18.x` or newer (recommended: `20 LTS`)
- **npm** `9+` (comes with Node) or **pnpm** / **yarn**

Check your versions:

```bash
node -v
npm -v
```

---

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/DevAbidHasan/Portfolio-website.git my-portfolio
cd my-portfolio
```

The GitHub repository is named **Portfolio-website**; the project directory on your machine is **my-portfolio**.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite prints a local URL (typically `http://localhost:5173`). Open it in your browser.

### 4. Production build (optional)

```bash
npm run build
npm run preview
```

`preview` serves the `dist/` folder locally so you can test the production build.

---

## Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Create optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Project structure

```
my-portfolio/
├── public/                          # Static assets (served as-is)
│   ├── logo-1.png                   # Favicon & navbar logo
│   ├── PXL_20240130_070044507.jpg   # Profile photo
│   ├── Resume_MERN_Plabon.pdf       # Downloadable resume
│   ├── PHero_Certificate_page-0001.jpg
│   ├── Freecodecamp Certification - Plabon.jpg
│   └── ...
│
├── src/
│   ├── main.jsx                     # App entry — ThemeProvider + Router
│   ├── index.css                    # CSS variables, light/dark theme tokens
│   ├── App.css                      # Global styles, sections, components
│   ├── App.jsx                      # Legacy/unused root (router used instead)
│   │
│   ├── router/
│   │   └── Router.jsx               # React Router config
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx           # Shell: loader, navbar, footer, toaster
│   │   └── HomeLayout.jsx           # Home page section composition
│   │
│   ├── context/
│   │   └── ThemeContext.jsx         # Theme state + localStorage
│   │
│   ├── utils/
│   │   └── scrollReveal.js          # AOS init / refresh helper
│   │
│   └── components/
│       ├── Navbar.jsx               # Header, nav links, theme toggle, mobile menu
│       ├── Footer.jsx
│       ├── Hero.jsx                 # Hero + profile card + marquee
│       ├── HeroProfileCard.jsx      # 3D tilt card with social links
│       ├── About.jsx
│       ├── Workflow.jsx
│       ├── Stats.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx             # Filterable project list
│       ├── Education.jsx
│       ├── Certifications.jsx
│       ├── CTA.jsx                  # Contact section (#contact)
│       ├── Loader.jsx               # Initial page loader
│       ├── ThemeToggle.jsx          # Custom sun/moon switch
│       ├── CustomCursor.jsx
│       ├── ScrollToTop.jsx
│       ├── Reveal.jsx               # AOS wrapper component
│       ├── Marquee.jsx              # Tech stack marquee
│       ├── SectionHeader.jsx        # Reusable section heading
│       ├── ErrorPage.jsx            # Router error boundary page
│       └── animations/              # Optional animation helpers
│           ├── BlurText.jsx
│           └── SplitText.jsx
│
├── index.html                       # HTML shell, font preload, theme flash script
├── vite.config.js                   # Vite + React + Tailwind plugins
├── eslint.config.js
├── package.json
└── README.md
```

---

## Architecture overview

### Routing

```
/  →  MainLayout
       ├── Navbar
       ├── <Outlet />  →  HomeLayout (index route)
       │                    ├── Hero (#hero)
       │                    ├── About (#about)
       │                    ├── Workflow
       │                    ├── Stats
       │                    ├── Skills (#skills)
       │                    ├── Projects (#projects)
       │                    ├── Education (#education)
       │                    ├── Certifications (#certifications)
       │                    └── CTA (#contact)
       └── Footer
```

`MainLayout` shows a **Loader** until assets are ready, then mounts the page and initializes scroll reveal.

### Key flows

1. **Theme** — `index.html` inline script sets `data-theme` before paint to avoid flash. `ThemeContext` syncs changes to `localStorage`.
2. **Scroll reveal** — `Reveal` wraps sections with `data-aos` attributes; `initScrollReveal()` runs after loader completes.
3. **Projects** — Data lives in `Projects.jsx` as a `projects` array. Each item supports multiple `categories` for filtering.

---

## Styling & theming

### CSS layers

| File | Role |
|------|------|
| `src/index.css` | Theme CSS variables (`--bg`, `--accent`, etc.), base resets |
| `src/App.css` | Component styles, layout grids, hover effects, section blocks |

### Theme toggle

Themes are applied via `data-theme="light"` or `data-theme="dark"` on `<html>`. Customize colors in `src/index.css` under the `:root` and `[data-theme="dark"]` blocks.

### Design tokens (examples)

```css
--accent: #4f46e5;        /* Indigo — light mode */
--accent: #818cf8;        /* Indigo — dark mode */
--bg-elevated: …          /* Cards, panels */
--hero-border-a/b/c: …    /* Hero gradient border colors */
```

Tailwind utilities are available alongside custom classes (e.g. `.section-block`, `.btn-pill`, `.project-row`).

---

## Customization guide

### Personal info

| What to change | Where |
|----------------|-------|
| Name, title, bio | `Hero.jsx`, `About.jsx`, `CTA.jsx` |
| Email & social links | `CTA.jsx`, `Footer.jsx`, `HeroProfileCard.jsx`, `Navbar.jsx` |
| Resume PDF | Replace `public/Resume_MERN_Plabon.pdf` and update download links |
| Profile photo | Replace `public/PXL_20240130_070044507.jpg` |
| Page title | `index.html` `<title>` |

### Projects

Edit the `projects` array in `src/components/Projects.jsx`:

```js
{
  title: "My App",
  description: "Short description.",
  image: "https://…",
  live: "https://…",
  clientRepo: "https://github.com/…",
  serverRepo: "https://github.com/…",  // optional
  stack: ["React", "Node.js"],
  categories: ["Web"],                 // supports multiple: ["Web", "Data"]
}
```

### Skills

Update the `skills` array in `src/components/Skills.jsx`.

### Education & certifications

- `src/components/Education.jsx` — `journey` array
- `src/components/Certifications.jsx` — `certifications` array + images in `public/`

### Navbar links

Edit the `NAV` array in `src/components/Navbar.jsx`. Section `id` attributes must match `href` anchors (e.g. `#projects`).

### Loader duration

Adjust timing in `src/layouts/MainLayout.jsx` (`1300` ms min delay, `750` ms exit).

---

## Build & deployment

### Build output

```bash
npm run build
```

Output goes to `dist/`. This is a **static SPA** — deploy to any static host.

### Recommended hosts

- [Netlify](https://www.netlify.com/) — drag & drop `dist/` or connect Git repo
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/) (requires `base` in `vite.config.js` if using a project subpath)

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add a `_redirects` file in `public/` if you add more routes later:

```
/*    /index.html   200
```

### Environment variables

This project does **not** require `.env` files for local development. All content is static. If you add analytics or a contact API later, create `.env` and add `.env` to `.gitignore` (already ignored via `*.local`).

---

## Browser support

- Chrome, Firefox, Safari, Edge (last 2 versions)
- Mobile Safari & Chrome Android
- `prefers-reduced-motion` disables scroll reveal and some hover transforms
- Custom cursor only on `pointer: fine` (mouse/trackpad) devices

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `npm install` fails | Use Node 18+; delete `node_modules` and `package-lock.json`, then reinstall |
| Theme flashes wrong color on load | Ensure `index.html` theme script runs before CSS; clear `localStorage` key `theme` |
| AOS animations not firing | Loader must finish first; check `initScrollReveal()` in `MainLayout.jsx` |
| Horizontal scrollbar | Project uses `overflow-x: clip` on `html`/`body`; check custom elements with wide transforms |
| Large bundle warning | Three.js/Rapier chunks are heavy; lazy-load 3D components if you add them |

---

## Author

**Abid Hasan Plabon**  
Full Stack Developer · Dhaka, Bangladesh

- GitHub: [@DevAbidHasan](https://github.com/DevAbidHasan) / [Portfolio-website](https://github.com/DevAbidHasan/Portfolio-website)
- LinkedIn: [Abid Hasan Plabon](https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/)
- Email: abidhasanplabon80@gmail.com

---

## License

This project is private/personal portfolio code. All rights reserved unless otherwise specified by the repository owner.
