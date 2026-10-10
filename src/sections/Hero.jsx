const IC = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" };
const IconCode = () => (<svg {...IC}><polyline points="8 6 2 12 8 18" /><polyline points="16 6 22 12 16 18" /></svg>);
const IconServer = () => (<svg {...IC}><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><line x1="7" y1="6.5" x2="7.01" y2="6.5" /><line x1="7" y1="17.5" x2="7.01" y2="17.5" /></svg>);
const IconCheck = () => (<svg {...IC} strokeWidth="3"><polyline points="5 12.5 10 17.5 19 7" /></svg>);
const IconArrow = () => (<svg {...IC}><line x1="7" y1="17" x2="17" y2="7" /><polyline points="8 7 17 7 17 16" /></svg>);
const IconMail = () => (<svg {...IC}><rect x="3" y="5" width="18" height="14" rx="3" /><polyline points="3.5 7 12 13 20.5 7" /></svg>);

// Keyboard ki rows: har number ek key ki chaurai (flex) hai
const ones = (n) => Array(n).fill(1);
const KEY_ROWS = [
  { slim: true, keys: [...ones(13), 1.7] },
  { keys: [...ones(13), 1.7] },
  { keys: [1.5, ...ones(12), 1.2] },
  { keys: [1.8, ...ones(11), 1.9] },
  { keys: [2.3, ...ones(10), 2.4] },
  { keys: [1, 1, 1, 1.4, 6.9, 1.4, 1, 1] },
];

const HERO_STYLES = String.raw`
.hero { 
  position: relative; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  min-height: 100vh; 
  height: 100vh; 
  overflow: hidden; 
  background: var(--color-firozi-50); /* Single solid light firozi color without gradients or dots */
}
.hero-inner { position: relative; display: flex; flex-direction: column; justify-content: space-between; width: min(1320px, calc(100% - 52px)); height: 100%; max-height: 100vh; margin-inline: auto; padding: calc(80px + 1vh) 0 20px; box-sizing: border-box; }

/* ---- Upar ka heading (bara) ---- */
.hero-heading { position: relative; z-index: 2; text-align: center; animation: rise-in 700ms both; flex: 0 0 auto; }
.hero-hello { position: relative; display: inline-flex; align-items: center; gap: 8px; margin: 0 0 8px; padding: 5px 16px; border: 1.5px solid rgba(31, 41, 51, 0.7); border-radius: 26px 26px 26px 6px; background: var(--color-surface); box-shadow: 3px 4px 0 var(--color-text); font: 700 15px var(--font-heading); }
.hero-hello span { font-size: 17px; }
.hero-heading h1 { margin: 0; font: 700 clamp(32px, min(4.2vw, 6vh), 58px)/1.05 var(--font-heading); letter-spacing: 0; }
.hero-heading h1 em { color: var(--color-primary); font-family: Georgia, serif; font-size: 0.96em; font-weight: 400; }
.hero-heading h1 strong { font-weight: 800; }
.hero-stack { display: flex; align-items: center; justify-content: center; gap: 10px; margin: 8px 0 0; color: var(--color-text-muted); font-size: 14px; font-weight: 500; }
.hero-stack i, .hero-current p i { width: 5px; aspect-ratio: 1; border-radius: 50%; background: var(--color-primary); }

/* ---- 3 column layout ---- */
.hero-showcase { position: relative; display: grid; grid-template-columns: minmax(200px, 0.8fr) minmax(0, 2fr) minmax(200px, 0.8fr); align-items: center; gap: 20px; margin-top: 0; flex: 1; min-height: 0; }

/* ---- Left text (aur neeche shift kia) ---- */
.hero-intro { position: relative; z-index: 2; align-self: center; padding-top: 80px; padding-bottom: 0px; }
.quote-mark { display: block; height: 50px; color: var(--color-primary); font: 800 78px/1 var(--font-heading); }
.hero-intro > p { max-width: 270px; margin: 10px 0 0; color: var(--color-text-muted); font-size: clamp(16px, 1.6vh, 20px); line-height: 1.55; }
.vertical-scroll { display: inline-flex; align-items: center; gap: 10px; margin-top: 22px; color: var(--color-text-muted); font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-decoration: none; }
.vertical-scroll i { width: 42px; height: 1px; background: linear-gradient(90deg, var(--color-primary), var(--color-border)); }

/* ---- Right text (aur neeche shift kia) ---- */
.hero-current { position: relative; z-index: 2; align-self: center; justify-self: end; padding-top: 90px; padding-bottom: 0px; text-align: right; }
.hero-current > span { color: var(--color-text-muted); font-size: 12px; font-weight: 700; letter-spacing: 0.18em; }
.hero-current h2 { margin: 10px 0 8px; font: 800 clamp(28px, 3.6vh, 38px)/1.08 var(--font-heading); }
.hero-current p { display: flex; align-items: center; justify-content: flex-end; gap: 8px; margin: 0; color: var(--color-text-muted); font-size: 15px; }

/* ---- Laptop stage: ring + dome + laptop ---- */
.laptop-stage { position: relative; z-index: 1; width: min(100%, calc(380px + 12vh)); margin-inline: auto; padding: 10px 0 20px; animation: rise-in 850ms 100ms both; }

/* ---- Outer Black Dashed Ring (Aligned to D-shape dome) ---- */
.laptop-ring { position: absolute; z-index: 0; bottom: 0; left: 50%; width: 140%; aspect-ratio: 2 / 1; border: 1.8px dashed #000000; border-bottom: none; border-radius: 999px 999px 0 0; transform: translateX(-50%); pointer-events: none; }

.laptop-dome { 
  position: absolute; 
  z-index: 1; 
  bottom: 0; 
  left: 50%; 
  width: 125%; 
  aspect-ratio: 2 / 1; 
  overflow: hidden; 
  border-radius: 999px 999px 0 0; 
  background: #10857D; /* <--- Single solid color */
  box-shadow: 0 -18px 90px rgba(15, 118, 110, 0.3); 
  transform: translateX(-50%); 
  pointer-events: none; 
}
/* Repeating pattern ko bhi simple transparent overlay dein */
.laptop-dome::before { 
  content: ""; 
  position: absolute; 
  inset: 0; 
  background: repeating-radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.08) 0 1.5px, transparent 1.5px 56px); 
}

.laptop-device { position: relative; z-index: 2; }

/* Screen (lid) */
.laptop-screen { position: relative; width: 84%; aspect-ratio: 1.64; margin-inline: auto; padding: 8px 8px 7px; overflow: hidden; border: 2px solid #33343A; border-radius: 14px 14px 6px 6px; background: #202127; box-shadow: 0 18px 45px rgba(31, 41, 51, 0.25); }
.laptop-camera { position: absolute; z-index: 2; top: 3px; left: 50%; width: 4px; aspect-ratio: 1; border-radius: 50%; background: #60636B; transform: translateX(-50%); }
.laptop-hinge { position: relative; z-index: 3; width: 84%; height: 6px; margin: 0 auto; border-radius: 0 0 8px 8px; background: linear-gradient(#111216, #3B3D45 60%, #8A9099); }

/* Keyboard deck (perspective se tirchi dikhti hai) */
.laptop-deck-wrap { position: relative; height: 85px; margin-bottom: 6px; }
.laptop-deck { position: absolute; top: 0; left: 8%; box-sizing: border-box; width: 84%; height: 180px; padding: 10px 3.5% 0; border-radius: 4px 4px 16px 16px; background: linear-gradient(180deg, #C7CBD1 0%, #E6E9ED 35%, #D5D9DE 100%); transform-origin: 50% 0; transform: perspective(1400px) rotateX(64deg); }
.kb { display: grid; gap: 3.5px; }
.kb-row { display: flex; gap: 3.5px; height: 17px; }
.kb-row.is-slim { height: 10px; }
.kb-row i { display: block; min-width: 0; border-radius: 3px; background: linear-gradient(#3A3C43, #23242A); box-shadow: 0 1px 0 rgba(255, 255, 255, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.14); }
.kb-row.is-slim i { border-radius: 2px; }
.laptop-trackpad { width: 34%; height: 42px; margin: 10px auto 0; border: 1px solid rgba(31, 41, 51, 0.14); border-radius: 6px; background: linear-gradient(#DCDFE4, #D0D4DA); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8); }
.laptop-lip { position: absolute; top: 100%; left: 0; width: 100%; height: 8px; border-radius: 0 0 18px 18px / 0 0 12px 12px; background: linear-gradient(#B8BDC5, #8E959F); box-shadow: 0 3px 8px rgba(31, 41, 51, 0.18); }
.laptop-lip::before { content: ""; position: absolute; top: 0; left: 50%; width: 16%; height: 3px; border-radius: 0 0 8px 8px; background: #9CA2AB; transform: translateX(-50%); }
.laptop-shadow { width: 92%; height: 10px; margin: 2px auto 0; border-radius: 50%; background: rgba(10, 60, 56, 0.28); filter: blur(7px); }

/* ---- Screen ke andar ki app ---- */
.app-window { display: grid; width: 100%; height: 100%; overflow: hidden; grid-template-columns: 22% 78%; border-radius: 5px; background: #F8F9FA; color: #252832; font-family: var(--font-body); }
.app-sidebar { display: flex; min-width: 0; flex-direction: column; gap: 8px; padding: 10px 8px; border-right: 1px solid #E7E9ED; background: #FFFFFF; }
.app-brand { display: flex; align-items: center; gap: 5px; margin-bottom: 4px; font-size: 9px; }
.app-brand > span, .app-profile > span { display: grid; width: 18px; aspect-ratio: 1; place-items: center; border-radius: 5px; background: var(--color-primary); color: #FFFFFF; font-size: 7px; font-weight: 800; }
.app-sidebar > small { margin: 4px 0 1px; color: #9299A3; font-size: 6px; font-weight: 700; letter-spacing: 0.1em; }
.app-nav-item { display: flex; align-items: center; gap: 5px; padding: 5px 4px; border-radius: 4px; color: #727A85; font-size: 7px; white-space: nowrap; }
.app-nav-item i { width: 6px; height: 6px; border: 1px solid #ABB2BC; border-radius: 2px; }
.app-nav-item.is-active { background: var(--color-firozi-50); color: var(--color-primary); font-weight: 700; }
.app-nav-item.is-active i { border-color: var(--color-primary); background: var(--color-firozi-200); }
.app-profile { display: flex; align-items: center; gap: 5px; margin-top: auto; padding-top: 6px; border-top: 1px solid #E7E9ED; }
.app-profile > span { width: 18px; border-radius: 50%; }
.app-profile div { display: grid; gap: 1px; min-width: 0; }
.app-profile b { overflow: hidden; font-size: 6px; text-overflow: ellipsis; white-space: nowrap; }
.app-profile small { color: #9299A3; font-size: 5px; }
.app-main { min-width: 0; }
.app-topbar { display: flex; height: 26px; align-items: center; justify-content: space-between; padding: 0 10px; border-bottom: 1px solid #E7E9ED; background: #FFFFFF; color: #737B86; font-size: 6px; }
.app-topbar > div { display: flex; align-items: center; gap: 8px; }
.app-topbar i { width: 8px; aspect-ratio: 1; border: 1px solid #CED3D9; border-radius: 50%; }
.app-topbar b { display: grid; width: 14px; aspect-ratio: 1; place-items: center; border-radius: 50%; background: var(--color-firozi-100); color: var(--color-primary); font-size: 6px; }
.app-content { padding: 10px 12px; }
.app-welcome { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.app-welcome small { color: #9299A3; font-size: 5px; font-weight: 700; letter-spacing: 0.12em; }
.app-welcome h2 { margin: 3px 0 2px; font: 700 11px var(--font-heading); }
.app-welcome p { margin: 0; color: #858C96; font-size: 6px; }
.app-new { padding: 5px 7px; border-radius: 3px; background: var(--color-primary); color: #FFFFFF; font-size: 6px; white-space: nowrap; }
.app-metrics { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; margin-top: 8px; }
.app-metrics > div { display: grid; gap: 2px; padding: 6px; border: 1px solid #E6E8EC; border-radius: 4px; background: #FFFFFF; }
.app-metrics small { overflow: hidden; color: #9299A3; font-size: 5px; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
.app-metrics b { font: 800 13px var(--font-heading); }
.app-metrics span { color: var(--color-primary); font-size: 5px; }
.app-lower { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 6px; margin-top: 6px; }
.app-chart, .app-tasks { min-width: 0; padding: 6px; border: 1px solid #E6E8EC; border-radius: 4px; background: #FFFFFF; }
.app-panel-title { display: flex; align-items: center; justify-content: space-between; gap: 4px; }
.app-panel-title b { font-size: 6px; }
.app-panel-title > span { color: #9299A3; font-size: 5px; white-space: nowrap; }
.app-tasks p { display: flex; align-items: center; gap: 4px; margin: 6px 0 0; }
.app-tasks p > span { display: grid; min-width: 0; gap: 1px; }
.app-tasks p b { overflow: hidden; font-size: 5px; text-overflow: ellipsis; white-space: nowrap; }
.app-tasks p small { color: #9299A3; font-size: 4px; }
.app-tasks p em { margin-left: auto; color: var(--color-text-muted); font-size: 4px; font-style: normal; white-space: nowrap; }

/* ---- Floating chips ---- */
.laptop-chip { position: absolute; z-index: 3; display: flex; align-items: center; gap: 7px; padding: 8px 14px; border: 1px solid rgba(15, 118, 110, 0.18); border-radius: 999px; background: var(--color-firozi-50); box-shadow: 0 8px 18px rgba(31, 41, 51, 0.08); color: var(--color-primary); font-size: 13px; font-weight: 700; white-space: nowrap; }
.laptop-chip svg { width: 15px; height: 15px; flex: none; }
.laptop-chip b { color: inherit; opacity: 0.7; }
.chip-left { top: 32%; left: -6%; }
.chip-right { top: 10%; right: -6%; border-color: #EBD59A; background: #FBF0D6; color: #6B4E12; }
.chip-check { top: 54%; right: -8%; border-color: rgba(31, 41, 51, 0.08); background: #FFFFFF; color: var(--color-text); }
.check-badge { display: grid; place-items: center; width: 20px; aspect-ratio: 1; border-radius: 50%; background: var(--color-primary); color: #FFFFFF; }
.chip-check .check-badge svg { width: 12px; height: 12px; }

/* ---- View Projects / Hire Me (Buttons ko uper shift rakha hai) ---- */
.hero-actions { position: absolute; z-index: 5; bottom: 12px; left: 50%; display: flex; align-items: center; width: max-content; padding: 6px; border: 1.5px solid rgba(255, 255, 255, 0.8); border-radius: 999px; background: rgba(255, 255, 255, 0.4); -webkit-backdrop-filter: blur(14px) saturate(160%); backdrop-filter: blur(14px) saturate(160%); box-shadow: 0 10px 28px rgba(15, 118, 110, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.85); transform: translateX(-50%); }
.hero-btn { display: inline-flex; align-items: center; gap: 12px; height: 46px; padding: 0 7px 0 22px; border-radius: 999px; font: 700 16px var(--font-heading); text-decoration: none; white-space: nowrap; transition: transform 200ms ease, box-shadow 200ms ease; }
.hero-btn:hover { transform: translateY(-2px); }
.hero-btn:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 3px; }
.hero-btn-icon { display: grid; place-items: center; width: 34px; aspect-ratio: 1; border-radius: 50%; }
.hero-btn-icon svg { width: 16px; height: 16px; }
.hero-btn-primary { position: relative; z-index: 1; background: #1D1C24; color: #FFFFFF; box-shadow: 0 6px 16px rgba(29, 28, 36, 0.25); }
.hero-btn-primary .hero-btn-icon { background: rgba(255, 255, 255, 0.16); }
.hero-btn-secondary { margin-left: -12px; padding-left: 32px; background: #FFFFFF; color: #1D1C24; box-shadow: 0 5px 14px rgba(31, 41, 51, 0.08); }
.hero-btn-secondary .hero-btn-icon { background: var(--color-firozi-100); color: var(--color-primary); }

@keyframes rise-in { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
@media (prefers-reduced-motion: reduce) { .hero-heading, .laptop-stage { animation: none; } .hero-btn { transition: none; } }

/* ---- Tablet & Mobile: scroll natural overflow ---- */
@media (max-width: 960px) {
  .hero { height: auto; min-height: 100vh; overflow: visible; }
  .hero-inner { height: auto; max-height: none; padding-top: 112px; }
  .hero-heading h1 { font-size: clamp(36px, 8.6vw, 62px); }
  .hero-showcase { display: flex; flex-direction: column; align-items: stretch; gap: 28px; margin-top: 18px; }
  .laptop-stage { order: 1; width: min(100%, 600px); }
  .hero-intro { order: 2; padding: 0 4px 0 56px; }
  .quote-mark { position: absolute; top: -6px; left: 0; height: auto; font-size: 64px; }
  .hero-intro > p { max-width: 520px; margin: 0; font-size: 18px; }
  .vertical-scroll { display: none; }
  .hero-current { order: 3; align-self: flex-start; justify-self: start; padding: 0 0 40px 4px; text-align: left; }
  .hero-current h2 { font-size: 30px; }
  .hero-current p { justify-content: flex-start; }
  .hero-actions { position: relative; bottom: auto; left: auto; transform: none; margin: 20px auto 0; }
}

/* ---- Mobile ---- */
@media (max-width: 680px) {
  .hero-inner { width: calc(100% - 28px); padding-top: 100px; }
  .hero-hello { margin-bottom: 12px; padding: 7px 16px; font-size: 15px; box-shadow: 3px 4px 0 var(--color-text); }
  .hero-heading h1 { font-size: clamp(34px, 10vw, 48px); }
  .hero-heading h1 br { display: none; }
  .hero-stack { flex-wrap: wrap; gap: 8px; margin-top: 12px; font-size: 13px; }
  .hero-intro { padding-left: 46px; }
  .hero-intro > p { font-size: 16px; }
  .hero-current h2 { font-size: 26px; }
  .hero-current p { font-size: 14px; }

  .laptop-stage { padding: 20px 0 30px; }
  .laptop-screen { width: 92%; padding: 6px 6px 5px; border-width: 1.5px; border-radius: 10px 10px 4px 4px; }
  .laptop-camera { top: 2px; width: 3px; }
  .laptop-hinge { width: 92%; height: 5px; }
  .laptop-deck-wrap { height: 65px; margin-bottom: 8px; }
  .laptop-deck { left: 4%; width: 92%; height: 136px; padding: 8px 3.5% 0; border-radius: 3px 3px 10px 10px; transform: perspective(1530px) rotateX(64deg); }
  .kb { gap: 3px; }
  .kb-row { height: 13px; gap: 3px; }
  .kb-row.is-slim { height: 8px; }
  .kb-row i, .kb-row.is-slim i { border-radius: 2px; }
  .laptop-trackpad { height: 30px; margin-top: 8px; border-radius: 5px; }
  .laptop-lip { height: 7px; }
  .laptop-lip::before { height: 3px; }
  .laptop-shadow { height: 9px; }

  .app-sidebar { gap: 5px; padding: 8px 5px; }
  .app-brand { gap: 3px; margin-bottom: 4px; font-size: 7px; }
  .app-brand > span { width: 17px; border-radius: 5px; font-size: 6px; }
  .app-sidebar > small { margin-top: 4px; font-size: 5px; }
  .app-nav-item { gap: 4px; padding: 5px 3px; font-size: 6px; }
  .app-nav-item i { width: 6px; height: 6px; }
  .app-profile { gap: 3px; padding-top: 5px; }
  .app-profile > span { width: 16px; }
  .app-profile b { font-size: 5px; }
  .app-profile small { font-size: 4px; }
  .app-topbar { height: 22px; padding-inline: 7px; font-size: 5px; }
  .app-topbar > div { gap: 5px; }
  .app-topbar i { width: 7px; }
  .app-topbar b { width: 13px; font-size: 5px; }
  .app-content { padding: 8px 7px; }
  .app-welcome small { font-size: 4px; }
  .app-welcome h2 { margin: 3px 0 2px; font-size: 9px; }
  .app-welcome p { font-size: 5px; }
  .app-new { padding: 5px; font-size: 5px; }
  .app-metrics { gap: 4px; margin-top: 7px; }
  .app-metrics > div { gap: 2px; padding: 5px; }
  .app-metrics small { font-size: 4px; }
  .app-metrics b { font-size: 10px; }
  .app-metrics span { font-size: 4px; }
  .app-lower { gap: 4px; margin-top: 4px; }
  .app-chart, .app-tasks { padding: 5px; }
  .app-panel-title b { font-size: 5px; }
  .app-panel-title > span { font-size: 4px; }
  .app-tasks p { gap: 3px; margin-top: 5px; }
  .app-tasks p b { font-size: 4px; }
  .app-tasks p small, .app-tasks p em { font-size: 3px; }

  .laptop-chip { gap: 5px; padding: 7px 11px; font-size: 11px; }
  .laptop-chip svg { width: 13px; height: 13px; }
  .chip-left { top: 30%; left: -2%; }
  .chip-right { top: 6%; right: -2%; }
  .chip-check { display: none; }

  .hero-actions { bottom: 14px; padding: 5px; }
  .hero-btn { gap: 10px; height: 46px; padding: 0 6px 0 18px; font-size: 14px; }
  .hero-btn-icon { width: 34px; }
  .hero-btn-icon svg { width: 16px; height: 16px; }
  .hero-btn-secondary { margin-left: -10px; padding-left: 26px; }
}
`;

function Hero() {
  return (
    <section className="hero" id="home">
      <style>{HERO_STYLES}</style>
      <div className="container hero-inner">
        <div className="hero-heading">
          <p className="hero-hello">Hello! <span aria-hidden="true">&#128075;</span></p>
          <h1>I'm <em>Ahmad Jahanzaib</em>,<br /><strong>Full-Stack Developer</strong></h1>
          <p className="hero-stack">React <i></i> Node.js <i></i> Product-minded engineering</p>
        </div>

        <div className="hero-showcase">
          <aside className="hero-intro">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>I build thoughtful web apps and the dependable systems behind them, from first sketch to production.</p>
            <a className="vertical-scroll" href="#about"><span>SCROLL TO EXPLORE</span><i></i></a>
          </aside>

          <div className="laptop-stage">
            <div className="laptop-ring"></div>
            <div className="laptop-dome"></div>

            <div className="laptop-device" role="img" aria-label="Open laptop showing a product analytics application built by Ahmad Jahanzaib">
              <div className="laptop-screen">
                <div className="laptop-camera"></div>
                <div className="app-window">
                  <div className="app-sidebar">
                    <div className="app-brand"><span>AJ</span><b>studio</b></div>
                    <small>WORKSPACE</small>
                    <span className="app-nav-item is-active"><i></i>Overview</span>
                    <span className="app-nav-item"><i></i>Projects</span>
                    <span className="app-nav-item"><i></i>Analytics</span>
                    <span className="app-nav-item"><i></i>Messages</span>
                    <div className="app-profile"><span>AJ</span><div><b>Ahmad J.</b><small>Developer</small></div></div>
                  </div>
                  <div className="app-main">
                    <div className="app-topbar"><span>Workspace / Overview</span><div><i></i><i></i><b>AJ</b></div></div>
                    <div className="app-content">
                      <div className="app-welcome"><div><small>MONDAY, OCTOBER 09</small><h2>Good morning, Ahmad.</h2><p>Here is what's happening with your work today.</p></div><span className="app-new">+ New project</span></div>
                      <div className="app-metrics"><div><small>ACTIVE PROJECTS</small><b>08</b><span>+2 this month</span></div><div><small>DELIVERED</small><b>24</b><span>Across 6 teams</span></div><div><small>FOCUS TIME</small><b>32.5h</b><span>This week</span></div></div>
                      <div className="app-lower"><div className="app-chart"><div className="app-panel-title"><b>Weekly activity</b><span>Last 7 days⌄</span></div><div className="chart-grid"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div className="chart-days"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div><div className="app-tasks"><div className="app-panel-title"><b>Recent work</b><span>View all →</span></div><p><i className="task-dot"></i><span><b>Commerce dashboard</b><small>UI Engineering · Today</small></span><em>In progress</em></p><p><i className="task-dot task-done"></i><span><b>API integration</b><small>Backend · Yesterday</small></span><em>Complete</em></p><p><i className="task-dot task-review"></i><span><b>Portfolio refresh</b><small>Design system · Oct 06</small></span><em>In review</em></p></div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="laptop-hinge"></div>

              <div className="laptop-deck-wrap">
                <div className="laptop-deck">
                  <div className="kb">
                    {KEY_ROWS.map((row, r) => (
                      <div key={r} className={`kb-row${row.slim ? " is-slim" : ""}`}>
                        {row.keys.map((flex, k) => (<i key={k} style={{ flex }}></i>))}
                      </div>
                    ))}
                  </div>
                  <div className="laptop-trackpad"></div>
                </div>
                <div className="laptop-lip"></div>
              </div>

              <div className="laptop-shadow"></div>
            </div>

            <div className="laptop-chip chip-left"><IconCode /> React <b>+</b> Node.js</div>
            <div className="laptop-chip chip-right"><IconServer /> AWS ready</div>
            <div className="laptop-chip chip-check"><span className="check-badge"><IconCheck /></span> Clean &amp; responsive</div>

            <div className="hero-actions">
              <a className="hero-btn hero-btn-primary" href="#projects">View Projects <span className="hero-btn-icon"><IconArrow /></span></a>
              <a className="hero-btn hero-btn-secondary" href="#contact">Hire Me <span className="hero-btn-icon"><IconMail /></span></a>
            </div>
          </div>

          <aside className="hero-current"><span>CURRENTLY</span><h2>Building<br />for the web.</h2><p>Independent <i></i> Open to work</p></aside>
        </div>
      </div>
    </section>
  );
}

export default Hero;