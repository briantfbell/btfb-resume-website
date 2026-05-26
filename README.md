# briantfbell.io

Personal portfolio and resume site built in React + Vite. Two sections - a password-gated professional resume/portfolio and a public editorial creative section - living in the same repo, deploying as a single SPA.

Live: [briantfbell.io](https://briantfbell.io)

---

## Stack

- React 19 with React Router v7
- Vite 8
- CSS Modules - no Tailwind, no component library
- lucide-react for icons
- Deployed on Netlify, domain managed through Cloudflare

---

## Project Structure

```
src/
├── App.jsx                   # All routes defined here
├── Home.jsx                  # Landing splash (two-button entry)
├── main.jsx                  # ReactDOM entry
├── index.css                 # Global resets
│
├── components/
│   ├── Header.jsx            # Resume section header - name, titles, contact, tab nav
│   ├── PasswordGate.jsx      # Client-side password wrapper
│   ├── Experience.jsx        # Work history (left column)
│   ├── Sidebar.jsx           # Skills, education, targeting (right column)
│   └── Projects.module.css
│
├── data/
│   └── projectsData.js       # Project cards as a JS array
│
└── pages/
    ├── PortfolioLayout.jsx   # Shell for resume section
    │
    ├── resume/
    │   ├── Summary.jsx
    │   ├── Resume.jsx        # Two-column layout (Experience + Sidebar)
    │   └── ProjectsPage.jsx
    │
    └── creative/
        ├── CreativeLayout.jsx
        ├── CreativeLanding.jsx
        ├── Work.jsx          # Published videos + in-production ideas
        ├── Ask.jsx           # Pitch/sponsorship page
        ├── Plan.jsx          # Phased roadmap
        └── Other.jsx         # Brand, design, nonprofit work

public/
├── _redirects                # Netlify SPA fallback
├── project-images/
├── summary_photos/
├── Bell_Resume_CAO_v3.20.01Q.pdf
├── og-image.png
└── favicon-16.png / favicon-32.png / apple-touch-icon.png / site.webmanifest
```

---

## Routing

```
/                  → Home (landing splash)
/summary           → Summary & Approach  ← password-gated
/resume            → Resume (two-column) ← password-gated
/projects          → Project Portfolio   ← password-gated
/creative          → CreativeLanding (index)
/creative/work     → The Work
/creative/ask      → The Ask
/creative/plan     → The Plan
/creative/other    → Other Work
```

The portfolio routes are wrapped in `PasswordGate`, which also wraps `PortfolioLayout`. The creative section is public.

---

## Password Gate

Simple client-side component. Password is a hardcoded constant:

```js
const PASSWORD = "1996";
```

Uses `useState` for input, unlocked state, and error. No session persistence - navigating directly to `/resume` will re-prompt.

The password is intentionally a placeholder, not real security. It's a lightweight friction layer to keep the resume off public indexing while the site is in development. The plan is to swap it for an environment variable or backend check before treating this as production. If you're adapting this for actual gating, don't use a hardcoded constant or remove PasswordGate entirely.

---

## Project Cards

Driven by a plain JS array in `src/data/projectsData.js`. Each entry:

```js
{
  name: "Project Name",
  chips: ["Solo Project"],              // badge labels
  description: "...",
  tags: ["React", "PostgreSQL"],        // tech/topic tags
  status: "Live",
  link: "https://...",
  video: "https://youtube.com/embed/...",  // optional
  images: ["/project-images/photo.png"],   // optional
}
```

Everything else - resume content, creative copy, roadmap phases - is hardcoded in JSX. No CMS.

---

## Two Design Systems

The professional and creative sections share a router and deployment but nothing else visually.

- **Professional:** Dark background (`#0d0d0f`), gold accent (`#c9a84c`), monospaced labels, dense two-column layout.
- **Creative:** Light/cream background, serif headlines, editorial spacing, YouTube embeds, stats blocks.

Each has its own layout component (`PortfolioLayout` vs `CreativeLayout`) that handles its own navigation and renders child routes via `<Outlet />`.

---

## Styling

Pure CSS Modules throughout - one `.module.css` per component, no global utility classes. Mobile responsiveness handled per-component with media queries.

---

## Deployment

Netlify via Git integration - push to `main`, auto-deploys. The `public/_redirects` file is required:

```
/* /index.html 200
```

Without it, any direct URL load or refresh on a non-root route will 404.

Domain is managed through Cloudflare. DNS points to Netlify; SSL is handled by Netlify's Let's Encrypt cert.

---

## Running Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

---

## If You're Adapting This

Start here:

- `src/data/projectsData.js` — swap in your projects
- `src/components/Experience.jsx` and `Sidebar.jsx` — work history and skills are hardcoded here
- `src/components/PasswordGate.jsx` — change `const PASSWORD` or remove the gate
- `src/pages/resume/Summary.jsx` — your about/narrative content
- `index.html` — update OG/Twitter meta tags and favicon assets
- `public/` — replace the PDF, images, and OG image

The creative section (`src/pages/creative/`) is self-contained. Remove it or gut it depending on whether you need a second section at all.
