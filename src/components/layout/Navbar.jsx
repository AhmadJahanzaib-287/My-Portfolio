import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Journey", id: "journey" },
  { label: "Contact", id: "contact" },
];

const LEFT_COUNT = 3; // pehle 3 links left side par, baqi right side par

const NAVBAR_STYLES = String.raw`
.site-header { position: sticky; z-index: 20; top: 14px; display: flex; justify-content: center; margin: 14px auto -86px; border: 0; background: transparent; }

/* ---- Black glassy bar (width ab content ke hisab se hai) ---- */
.nav.container {
  --nav-gap: 48px;        /* naam aur links ke darmian faasla: yahan se badlo */
  --nav-pad-x: 18px;      /* bar ke andar left/right padding: yahan se badlo */
  --dot-size: 12px;       /* naam ke akhir wale box ka size: yahan se badlo */

  position: relative;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: var(--nav-gap);
  width: fit-content;
  max-width: calc(100% - 48px);
  min-height: 76px;
  padding: 8px var(--nav-pad-x);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(30, 30, 38, 0.72), rgba(10, 10, 14, 0.62));
  backdrop-filter: blur(20px) saturate(170%);
  -webkit-backdrop-filter: blur(20px) saturate(170%);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 -1px 0 rgba(255, 255, 255, 0.04);
  color: #FFFFFF;
}

/* ---- Left / Right groups ---- */
.nav-links { display: contents; }
.nav-group { display: flex; align-items: center; gap: 4px; grid-row: 1; }
.nav-group.left { grid-column: 1; justify-self: start; }
.nav-group.right { grid-column: 3; justify-self: end; }

.nav-group > a { position: relative; z-index: 1; padding: 13px 18px; border-radius: 999px; color: rgba(255, 255, 255, 0.7); font-size: 14px; font-weight: 500; transition: color 180ms ease; white-space: nowrap; }
.nav-group > a:hover { color: #FFFFFF; }
.nav-group > a.is-lit { color: #FFFFFF; }

/* ---- Center name ---- */
.wordmark { grid-column: 2; grid-row: 1; display: inline-flex; align-items: center; gap: 10px; color: #FFFFFF; font: 800 16px var(--font-heading); letter-spacing: 0.06em; white-space: nowrap; }

.wordmark-mark {
  display: grid; width: 42px; aspect-ratio: 1; place-items: center;
  border-radius: 12px; background: var(--color-firozi-100); color: #1a1a1f;
  font-size: 15px; font-weight: 800; letter-spacing: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transform: rotate(-4deg);
  transform-origin: 50% 0%;   /* upar se latakta hua jaisa swing */
}
.wordmark:hover .wordmark-mark,
.wordmark-mark:hover { animation: logo-swing 900ms ease-in-out; }

@keyframes logo-swing {
  0%   { transform: rotate(-4deg); }
  20%  { transform: rotate(18deg); }
  40%  { transform: rotate(-14deg); }
  60%  { transform: rotate(10deg); }
  80%  { transform: rotate(-6deg); }
  100% { transform: rotate(-4deg); }
}

/* Naam ke akhir wala box */
.wordmark-dot {
  display: inline-block;
  width: var(--dot-size);
  height: var(--dot-size);
  margin-left: -2px;
  align-self: flex-end;
  margin-bottom: 4px;
  border-radius: 3px;
  background: var(--color-primary);
}

/* ---- Sliding pill ---- */
.nav-pill { position: absolute; z-index: 0; top: 0; left: 0; border-radius: 999px; background: var(--color-primary); box-shadow: 0 8px 22px rgba(15, 118, 110, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.25); opacity: 0; pointer-events: none; will-change: transform, width; }
.nav-pill.is-ready { transition: transform 560ms cubic-bezier(0.34, 1.45, 0.5, 1), width 560ms cubic-bezier(0.34, 1.45, 0.5, 1), height 560ms cubic-bezier(0.34, 1.45, 0.5, 1), opacity 220ms ease; }

.menu-toggle { display: none; }

@media (prefers-reduced-motion: reduce) {
  .wordmark:hover .wordmark-mark,
  .wordmark-mark:hover { animation: none; }
}

@media (max-width: 1024px) {
  .site-header { margin-bottom: -82px; }
  .nav.container { --nav-gap: 28px; max-width: calc(100% - 36px); }
  .nav-group > a { padding: 12px 11px; font-size: 13px; }
  .wordmark { font-size: 14px; }
}

@media (max-width: 800px) {
  .site-header { top: 8px; margin: 8px auto -70px; }
  .nav.container { --dot-size: 9px; display: flex; justify-content: space-between; width: calc(100% - 24px); max-width: none; min-height: 60px; padding: 6px 8px 6px 12px; }
  .wordmark { font-size: 12px; gap: 8px; }
  .wordmark-mark { width: 34px; border-radius: 10px; font-size: 12px; }
  .wordmark-dot { margin-bottom: 3px; }
  .menu-toggle { display: grid; width: 40px; height: 40px; flex: 0 0 auto; align-content: center; justify-items: center; gap: 5px; border: 1px solid rgba(255, 255, 255, 0.22); border-radius: 50%; background: transparent; cursor: pointer; }
  .menu-toggle span { width: 15px; height: 1.5px; background: #FFFFFF; }
  .nav-links { position: absolute; top: calc(100% + 8px); right: 0; left: 0; display: none; flex-direction: column; gap: 2px; padding: 10px; border: 1px solid rgba(255, 255, 255, 0.14); border-radius: 22px; background: rgba(14, 14, 18, 0.78); backdrop-filter: blur(20px) saturate(170%); -webkit-backdrop-filter: blur(20px) saturate(170%); box-shadow: 0 16px 35px rgba(0, 0, 0, 0.35); }
  .nav-links.is-open { display: flex; }
  .nav-group { flex-direction: column; align-items: stretch; gap: 2px; }
  .nav-group > a { padding: 12px 14px; }
  .nav-pill { display: none; }
  .nav-group > a.is-active { background: var(--color-primary); color: #FFFFFF; }
}

@media (min-width: 801px) and (max-height: 820px) {
  .site-header { top: 8px; margin: 8px auto -66px; }
  .nav.container { min-height: 62px; }
  .nav-group > a { padding-block: 10px; }
}
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [ready, setReady] = useState(false);
  const [pill, setPill] = useState({ x: 0, y: 0, w: 0, h: 0, visible: false });

  const navRef = useRef(null);
  const itemRefs = useRef([]);

  const target = hoverIndex !== null ? hoverIndex : activeIndex;

  // Pill ki position poori nav bar ke hisab se naapi jati hai
  const measure = useCallback(() => {
    const nav = navRef.current;
    const el = itemRefs.current[target];
    if (!nav || !el || el.offsetWidth === 0) {
      setPill((p) => (p.visible ? { ...p, visible: false } : p));
      return;
    }
    const n = nav.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const next = {
      x: Math.round(r.left - n.left - nav.clientLeft),
      y: Math.round(r.top - n.top - nav.clientTop),
      w: el.offsetWidth,
      h: el.offsetHeight,
      visible: true,
    };
    setPill((p) =>
      p.x === next.x && p.y === next.y && p.w === next.w && p.h === next.h && p.visible ? p : next
    );
  }, [target]);

  useLayoutEffect(() => {
    measure();
  }, [measure, isOpen]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (observer) observer.observe(nav);
    window.addEventListener("resize", measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  // Scroll spy
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = 0;
      NAV_ITEMS.forEach((item, i) => {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= line) current = i;
      });
      const atBottom =
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = NAV_ITEMS.length - 1;
      setActiveIndex(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const renderLink = (item, i) => (
    <a
      key={item.id}
      ref={(el) => { itemRefs.current[i] = el; }}
      href={`#${item.id}`}
      className={[i === target ? "is-lit" : "", i === activeIndex ? "is-active" : ""].join(" ").trim()}
      aria-current={i === activeIndex ? "location" : undefined}
      onMouseEnter={() => setHoverIndex(i)}
      onFocus={() => setHoverIndex(i)}
      onBlur={() => setHoverIndex(null)}
      onClick={() => { setActiveIndex(i); setIsOpen(false); }}
    >
      {item.label}
    </a>
  );

  return (
    <header className="site-header">
      <style>{NAVBAR_STYLES}</style>
      <nav
        ref={navRef}
        className="nav container"
        aria-label="Main navigation"
        onMouseLeave={() => setHoverIndex(null)}
      >
        <span
          className={`nav-pill ${ready ? "is-ready" : ""}`}
          aria-hidden="true"
          style={{
            width: pill.w,
            height: pill.h,
            transform: `translate3d(${pill.x}px, ${pill.y}px, 0)`,
            opacity: pill.visible ? 1 : 0,
          }}
        />

        <a className="wordmark" href="#home" aria-label="Ahmad Jahanzaib, home">
          <span className="wordmark-mark">AJ</span>
          <span className="wordmark-name">AHMAD JAHANZAIB</span>
          <span className="wordmark-dot" aria-hidden="true"></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span><span></span>
        </button>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          <div className="nav-group left">
            {NAV_ITEMS.slice(0, LEFT_COUNT).map((item, i) => renderLink(item, i))}
          </div>
          <div className="nav-group right">
            {NAV_ITEMS.slice(LEFT_COUNT).map((item, i) => renderLink(item, i + LEFT_COUNT))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;