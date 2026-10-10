# Full-Stack Portfolio Website: Project Standards (v1.1)

**Stack:** React + Vite | **Goal:** clean, modular, reusable code | **Theme:** light, white-grey base, off-white cards, light firozi (turquoise) gradients

> Print-friendly: no colours are used inside this document. Colour values appear only as text codes.

---

## 0. Reference Review (firojynr.sentlas.in)

**What I could verify:** the page loads its content with JavaScript, so only its metadata was readable. It presents the owner as a software developer building cross-platform mobile apps and Node.js backends on AWS, with a senior role as the credibility line. Its page title follows the pattern "Name, Role". Its theme colour is a purple (#695DFF).

**What I could not verify:** the visual layout, section order, spacing and card styles. This document does not copy them. For a closer analysis, share screenshots of the page.

**What we adopt (general, proven portfolio patterns, not copied):**

| Pattern | Adaptation for a full-stack profile |
| --- | --- |
| One-line positioning: role, stack, proof | "Full-Stack Developer: React, Node.js, MongoDB" plus one proof line |
| Single accent colour used sparingly | Firozi accent only (see section 8) |
| Mobile-app showcase (device frames) | Browser-frame screenshots of web projects, plus API/architecture notes |
| Tech stack shown as tags | Grouped: Frontend, Backend, Database, Tools |
| Clear contact call-to-action | Email, GitHub, LinkedIn, and a contact form |

**Where the reference differs by design:** it uses a purple accent; this project uses firozi on a white-grey base.

---

## 1. Golden Rules

1. **One file, one job.** A component does one thing.
2. **Do not repeat yourself (DRY).** Code copied more than twice becomes reusable.
3. **Names describe purpose.** `Button.jsx` is good, `thing2.jsx` is bad.
4. **No hard-coded design values.** Colours, fonts and spacing come only from tokens (sections 6 and 8).
5. **Make it work first, then make it fast.**

---

## 2. Folder Structure

```
portfolio/
├── public/                 # Static files (favicon, resume.pdf)
├── src/
│   ├── assets/             # Images, icons, fonts
│   ├── components/
│   │   ├── common/         # Button, Card, Container, Tag
│   │   └── layout/         # Navbar, Footer, Section
│   ├── sections/           # Hero, About, Skills, Projects, Contact
│   ├── hooks/              # useScrollSpy, useMediaQuery
│   ├── context/            # Global state (only if needed)
│   ├── data/               # projects.js, skills.js, socials.js
│   ├── styles/
│   │   ├── tokens/         # colors.css, typography.css, spacing.css
│   │   └── global.css
│   ├── utils/              # Helper functions
│   ├── App.jsx
│   └── main.jsx
├── .env.example
└── package.json
```

**Layer rule (top uses bottom, never the reverse):**

| Layer | May use |
| --- | --- |
| `sections/` | `components/`, `hooks/`, `data/` |
| `components/` | `hooks/`, `utils/` |
| `data/` | Plain data only, no React code |

`components/common` never imports from `sections/`.

---

## 3. Component Standards

### 3.1 Naming

| Item | Style | Example |
| --- | --- | --- |
| Component file | PascalCase | `ProjectCard.jsx` |
| Hook | starts with `use` | `useScrollSpy.js` |
| Utility file | camelCase | `formatDate.js` |
| Folder | lowercase | `common` |
| Constant | UPPER_SNAKE | `MAX_PROJECTS` |

### 3.2 Template

```jsx
// src/components/common/Button.jsx
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ label, onClick, variant = "primary" }) {
  return (
    <button className={`${styles.btn} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
```

**Reading the code:** the function returns the UI. `{ label, onClick, variant = "primary" }` are props (inputs), and `variant` defaults to `"primary"`. `propTypes` warns in the console if a wrong type is passed. `export default` lets other files import it.

### 3.3 Rules

1. Maximum about 150 lines per component. Split anything larger.
2. UI components only display. Logic (data fetching, calculations) goes in hooks.
3. Maximum 5-6 props. More means the component does too much.
4. Content lives in `data/`, rendered with `.map()`:

```jsx
// src/data/projects.js
export const projects = [
  { id: 1, title: "Weather App", tech: ["React", "API"], live: "#", code: "#" },
];

// src/sections/Projects.jsx
{projects.map((p) => <ProjectCard key={p.id} {...p} />)}
```

5. `key` is a unique id, not the array index, for lists that can change.
6. No inline styles. Use CSS Modules plus tokens.
7. Accessibility: `alt` on every image, real `<button>` and `<a>` elements, ordered headings (`h1` then `h2` then `h3`).

---

## 4. State Management Guidelines

| Question (check top to bottom, stop at first yes) | Use |
| --- | --- |
| Only one component needs it? | `useState` |
| Parent and 1-2 children need it? | Props |
| Many distant components need it? | Context API |
| Data comes from a server? | Custom hook (React Query later) |
| Large, complex global state? | Zustand (unlikely for a portfolio) |

**Rules**

1. Keep state as low in the tree as possible. Global state is the last option.
2. Do not store derived data. Calculate it: `const count = items.length;`
3. Context is for rarely-changing values (theme, language) only.
4. One Context, one purpose.
5. Never mutate state: use `setItems([...items, x])`, not `items.push(x)`.
6. Small forms use `useState`; large forms use `react-hook-form`.

**Expected state here:** mobile menu open/closed (local), active section (hook), contact form (local), theme (Context, later).

---

## 5. Performance Optimization

### 5.1 Targets (Lighthouse)

| Metric | Target |
| --- | --- |
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 90+ |
| Console errors | **0** |

### 5.2 Strategies (in priority order)

1. **Images** (biggest impact): WebP/AVIF, correctly sized, `loading="lazy"` below the fold, `width` and `height` set to prevent layout jumps.
2. **Code splitting:**

```jsx
import { lazy, Suspense } from "react";
const Projects = lazy(() => import("./sections/Projects"));

<Suspense fallback={<p>Loading...</p>}>
  <Projects />
</Suspense>
```

`lazy` downloads a component only when needed; `Suspense` shows the fallback while waiting. 3. **Fonts:** load only needed weights; use `font-display: swap`. 4. **Re-renders:** use `React.memo`, `useMemo`, `useCallback` only after measuring a real problem. 5. **Bundle size:** avoid heavy libraries; import only what you use. 6. **Animation:** animate `transform` and `opacity` only; respect `prefers-reduced-motion`. 7. **Third-party scripts:** keep minimal, with `defer`.

### 5.3 Build command

```bash
npm run build
```

Creates the production version in `dist/` and prints file sizes.

| Error | Cause | Fix |
| --- | --- | --- |
| `Module not found` | Wrong import path or missing package | Check the path; run `npm install` |
| `Unexpected token` | Syntax mistake (missing bracket or quote) | Open the file and line shown in the error |
| `ELIFECYCLE` | Build script failed | Read the real error above it |

---

## 6. Extension Framework (Design Without Touching Core Code)

**Principle:** components never know actual colours or fonts. Design reaches them only through **CSS variables (tokens)**. Changing the design means editing token files, never component files.

```
src/styles/
├── tokens/
│   ├── colors.css        # Filled: section 8
│   ├── typography.css    # RESERVED: section 9 (to be added)
│   └── spacing.css       # Filled: section 7.4
├── global.css            # Reset + imports tokens
└── index.css
```

**Token naming convention**

| Group | Prefix | Example |
| --- | --- | --- |
| Colour | `--color-` | `--color-bg` |
| Gradient | `--gradient-` | `--gradient-firozi` |
| Font family | `--font-` | `--font-body` |
| Font size | `--text-` | `--text-lg` |
| Spacing | `--space-` | `--space-4` |
| Radius | `--radius-` | `--radius-md` |
| Shadow | `--shadow-` | `--shadow-card` |

**Rule:** if a design change forces a component edit, the token system is incomplete. Fix the tokens first.

---

## 7. UI Design Standards

### 7.1 Page structure (single page, scroll sections)

| Order | Section | Purpose |
| --- | --- | --- |
| 1 | Navbar | Anchor links, sticky, collapses on mobile |
| 2 | Hero | Name, role line, one proof line, two buttons (Projects, Contact) |
| 3 | About | Short story, photo, key facts |
| 4 | Skills | Grouped: Frontend, Backend, Database, Tools |
| 5 | Projects | Cards with screenshot, problem and solution line, stack tags, Live and Code links |
| 6 | Journey | Education, courses, certifications, experience |
| 7 | Contact | Email, GitHub, LinkedIn, simple form |
| 8 | Footer | Links, copyright |

### 7.2 Layout rules

1. Content width: `max-width: 1100px`, centred. Mobile-first: design for 360px, then scale up.
2. Breakpoints: 640px, 768px, 1024px, 1280px.
3. Every section uses the shared `Section` layout component (same padding, same heading style).
4. Projects grid: 1 column on mobile, 2 on tablet, 3 on desktop at most.
5. Browser-frame screenshots for web projects. Show the stack and one outcome per project.

### 7.3 Box (card) rules

1. All boxes use `--color-surface` (off-white) with a thin border and soft shadow.
2. One shared `Card` component. Do not restyle cards per section.
3. Hover effect: slight lift (`translateY(-2px)`) and slightly stronger shadow only.

### 7.4 Spacing and shape tokens

```css
/* src/styles/tokens/spacing.css */
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-8: 3rem;
  --space-10: 5rem;   /* section padding */

  --radius-md: 12px;
  --radius-lg: 20px;
}
```

---

## 8. Theme Standards

### 8.1 Palette

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Page background | `--color-bg` | `#EEF0F2` | Whole page (white-grey) |
| Box surface | `--color-surface` | `#FAF9F6` | Cards, navbar, forms (off-white) |
| Border | `--color-border` | `#E1E4E8` | Card outlines, dividers |
| Main text | `--color-text` | `#1F2933` | Headings, body |
| Muted text | `--color-text-muted` | `#5B6670` | Captions, secondary text |
| Firozi 50 | `--color-firozi-50` | `#E8F8F6` | Gradient mid-stop, soft highlights |
| Firozi 100 | `--color-firozi-100` | `#CFF1ED` | Gradient start (light) |
| Firozi 200 | `--color-firozi-200` | `#A8E6DF` | Gradient strongest stop |
| Firozi 700 | `--color-primary` | `#0F766E` | Buttons, links, focus ring |
| On primary | `--color-on-primary` | `#FFFFFF` | Text on buttons |

**Contrast rule:** body text is always `--color-text` or `--color-text-muted` on off-white or white-grey. Never put text on `--color-firozi-200`. Use the darker `--color-primary` for links and buttons so they stay readable.

### 8.2 Gradient rule (light firozi merging into off-white)

The gradient starts as light firozi and fades into the off-white background, so there is no hard edge.

```css
/* src/styles/tokens/colors.css */
:root {
  --color-bg: #EEF0F2;
  --color-surface: #FAF9F6;
  --color-border: #E1E4E8;
  --color-text: #1F2933;
  --color-text-muted: #5B6670;

  --color-firozi-50: #E8F8F6;
  --color-firozi-100: #CFF1ED;
  --color-firozi-200: #A8E6DF;
  --color-primary: #0F766E;
  --color-on-primary: #FFFFFF;

  --gradient-firozi: linear-gradient(
    160deg,
    var(--color-firozi-100) 0%,
    var(--color-firozi-50) 40%,
    var(--color-surface) 100%
  );
}

body { background: var(--color-bg); color: var(--color-text); }
```

**Where gradients are allowed (and nowhere else):**

1. Hero background.
2. One featured project card or a highlight strip.
3. Contact section backdrop.

Gradient sits **behind** content, always ends in `--color-surface`, and is never used on buttons or text. Maximum 3 gradient areas per page, so the design stays calm.

```css
/* Example usage */
.hero { background: var(--gradient-firozi); }
.card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); }
```

### 8.3 Dark mode

Not in scope. If added later, redefine the same tokens under `[data-theme="dark"]`. No component changes are needed.

---

## 9. Typography Standards (Reserved)

To be added later. Only `src/styles/tokens/typography.css` will be filled (`--font-heading`, `--font-body`, `--text-*` sizes). Components already use these tokens, so no other file changes.

---

## 10. Deployment Standards

### 10.1 Pre-deploy checklist

- [ ] Console: 0 errors, 0 warnings
- [ ] Tested at 360px, 768px, 1280px
- [ ] All links and buttons work
- [ ] All images have `alt`
- [ ] `<title>` and meta description set; favicon added
- [ ] `npm run build` passes
- [ ] `.env` is not in Git
- [ ] Lighthouse targets met (5.1)
- [ ] Text contrast checked on gradient areas

### 10.2 Git

Branches: `main` (live), `dev` (work in progress), `feature/name`. Commit format: `type: short description`.

| Type | Meaning | Example |
| --- | --- | --- |
| `feat` | New feature | `feat: add hero section` |
| `fix` | Bug fix | `fix: navbar overlap on mobile` |
| `style` | Formatting or visuals | `style: apply firozi gradient to hero` |
| `refactor` | Cleanup | `refactor: split ProjectCard` |
| `docs` | Documentation | `docs: update README` |

```bash
git add .
```

Stages all changed files for the next commit.

```bash
git commit -m "feat: add hero section"
```

Saves a snapshot of the staged files with a message.

```bash
git push origin main
```

Uploads your commits to GitHub.

| Error | Cause | Fix |
| --- | --- | --- |
| `not a git repository` | Wrong folder | `cd` into the project, or run `git init` |
| `rejected ... non-fast-forward` | GitHub has newer commits | Run `git pull origin main`, then push |
| `Authentication failed` | Login or token problem | Reset your GitHub token or SSH key |

### 10.3 Hosting (Vercel or Netlify, both free)

1. Push code to GitHub.
2. Log in to Vercel/Netlify with GitHub.
3. Select the repo. Build command: `npm run build`. Output folder: `dist`.
4. Deploy. Every push to `main` updates the live site.

Secrets go in the hosting dashboard, never in code. Vite variables must start with `VITE_`.

| Problem | Cause | Fix |
| --- | --- | --- |
| 404 on page refresh | Single-page app routing | Add a "rewrite all to index.html" rule |
| Images missing | Wrong path or file not in `public/` | Use `/image.png` paths; check case-sensitive names |
| Build fails online, works locally | Node version or missing package | Match the Node version used locally |

After deploying: reopen the live link on a phone and run Lighthouse again.

---

## 11. Code Quality Tools

| Tool | Job | Command |
| --- | --- | --- |
| ESLint | Catches mistakes | `npm run lint` |
| Prettier | Formats code consistently | `npx prettier --write .` |

`npx` runs a package without installing it permanently, `--write` saves the formatting into the files, `.` means the whole project.

| Error | Cause | Fix |
| --- | --- | --- |
| `command not found: prettier` | Not installed | `npm install --save-dev prettier` |
| `react-hooks/exhaustive-deps` warning | Incomplete `useEffect` dependency list | Add every variable used inside the effect to `[ ]` |
| `'x' is defined but never used` | Unused variable or import | Delete it |

---

## 12. Quick Reference

1. Small components, one job each.
2. Content in `data/`, UI in `components/`.
3. State low, global last.
4. Optimize images first.
5. Design only through tokens.
6. Gradients: hero, one feature card, contact only, always ending in off-white.
7. Zero console errors before every deploy.
8. Small commit after every task.

*v1.1: adds UI Design (7) and Theme (8). Typography (9) remains reserved.*