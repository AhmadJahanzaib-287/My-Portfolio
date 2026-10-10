import { useState } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Loader from "./components/layout/Loader.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Journey from "./sections/Journey.jsx";
import Contact from "./sections/Contact.jsx";

const APP_STYLES = String.raw`@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap");
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
  --color-loader-dot: #000000;
  --gradient-firozi: linear-gradient(160deg, var(--color-firozi-100) 0%, var(--color-firozi-50) 40%, var(--color-surface) 100%);
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-8: 3rem;
  --space-10: 5rem;
  --radius-md: 12px;
  --radius-lg: 20px;
  --content-width: 1100px;
  --shadow-card: 0 12px 36px rgba(31, 41, 51, 0.06);
  --font-heading: "Manrope", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 2rem;
  --text-display: 4.5rem;
  --text-loader: 6rem; font-family: var(--font-body); color: var(--color-text); background: var(--color-bg); font-synthesis: none; text-rendering: optimizeLegibility
}
:root { font-family: var(--font-body); color: var(--color-text); background: var(--color-bg); font-synthesis: none; text-rendering: optimizeLegibility; }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 88px; }
body { margin: 0; min-width: 320px; background: var(--color-bg); color: var(--color-text); }
button, input, textarea { font: inherit; }
a { color: inherit; text-decoration: none; }
button, a { -webkit-tap-highlight-color: transparent; }
::selection { background: var(--color-firozi-200); color: var(--color-text); }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 88px; }
body { margin: 0; min-width: 320px; background: var(--color-bg); color: var(--color-text); }
button, input, textarea { font: inherit; }
a { color: inherit; text-decoration: none; }
button, a { -webkit-tap-highlight-color: transparent; }
::selection { background: var(--color-firozi-200); color: var(--color-text); }
.site-content { min-height: 100vh; opacity: 0; transform: translateY(22px); }
.site-content.is-ready { animation: site-reveal 720ms cubic-bezier(0.2, 0.75, 0.25, 1) both; }
@keyframes site-reveal { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 1024px) { :root { --text-loader: 4.25rem; }
}
@media (max-width: 680px) {
  :root { --text-loader: 3rem; }
  html { scroll-padding-top: 70px; }
}
@media (max-width: 400px) {
  :root { --text-loader: 1.75rem; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}`;

function App() {
  const [isSiteReady, setIsSiteReady] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  return (
    <>

      <style>{APP_STYLES}</style>      <Loader onComplete={() => setIsSiteReady(true)} />
      <div className={`site-content${isSiteReady ? " is-ready" : ""}`} aria-hidden={!isSiteReady} inert={!isSiteReady}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
