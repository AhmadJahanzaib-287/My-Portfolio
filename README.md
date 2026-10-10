# Ahmad Jahanzaib Portfolio Prototype

React + Vite single-page portfolio built from `Portfolio Project Standards v1.1.md`.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Personalize the prototype

- Replace the sample name, role, location, bio and experience in `src/sections/Hero.jsx`, `About.jsx`, and `Journey.jsx`.
- Update project copy, technology tags, and live/code URLs in `src/data/projects.js`.
- Update skills in `src/data/skills.js` and social links in `src/data/socials.js`.
- Replace the sample email in `src/sections/Contact.jsx`, `src/sections/Projects.jsx`, and `src/components/layout/Navbar.jsx`.
- Replace the portrait URL in `src/sections/About.jsx` with your own image.
- Change the palette and spacing in `src/styles/tokens/`; layout and component styling lives in `src/styles/global.css`.

The contact form opens a pre-filled email draft in the visitor's mail app; it does not submit to a server. Project and social URLs are placeholders.
