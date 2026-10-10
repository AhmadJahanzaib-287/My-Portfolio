import { useState } from "react";
import Section from "../components/common/Section.jsx";

// Ribbon mein jo naam chalte hain, yahan se badlo
const RIBBON_FRONT = ["React", "Node.js", "Express", "MongoDB", "JavaScript", "REST APIs", "AWS", "Git & GitHub"];
const RIBBON_BACK = ["Responsive Design", "Clean Code", "API Integration", "Full-Stack", "Problem Solving", "TypeScript", "Product Thinking"];

// ID card ki picture (public folder wali file) aur details
const LANYARD_PHOTO = "/MY linkendin pic.jpeg";
const LANYARD_NAME = "Ahmad Jahanzaib";
const LANYARD_ROLE = "Full-Stack Developer";
const LANYARD_DETAILS = [
  { label: "Stack", value: "React · Node.js" },
  { label: "Focus", value: "Web apps & APIs" },
  { label: "Status", value: "Open to work", open: true },
];

// ---- "Core strengths" aur "Why hire me?" ka text: yahan se apna text likho ----
const EMAIL = "hello@ahmadjahanzaib.dev";
const CV_FILE = "/Ahmad-Jahanzaib-CV.pdf"; // CV ko public folder mein isi naam se rakho
const STORY_POINTS = [
  "Clean, responsive interfaces",
  "REST APIs with Node & Express",
  "MongoDB data modelling",
  "Git & GitHub workflow",
];
const STORY_INFO = [
  { icon: "cap", label: "STUDYING", value: "BS Software Engineering" },
  { icon: "code", label: "FOCUS", value: "React · Node.js · MongoDB" },
  { icon: "mail", label: "EMAIL", value: EMAIL },
  { icon: "bag", label: "OPEN TO", value: "Internships, freelance & junior roles" },
];

// ---- Chhote icons ----
const IC = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" };
const ICONS = {
  cap: <svg {...IC}><path d="M2 9l10-5 10 5-10 5-10-5z" /><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" /></svg>,
  code: <svg {...IC}><polyline points="8 6 2 12 8 18" /><polyline points="16 6 22 12 16 18" /></svg>,
  mail: <svg {...IC}><rect x="3" y="5" width="18" height="14" rx="3" /><polyline points="3.5 7 12 13 20.5 7" /></svg>,
  bag: <svg {...IC}><rect x="3" y="7" width="18" height="13" rx="3" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><line x1="3" y1="13" x2="21" y2="13" /></svg>,
};
const IconCheck = () => (<svg {...IC} strokeWidth="3"><polyline points="5 12.5 10 17.5 19 7" /></svg>);
const IconArrow = () => (<svg {...IC}><line x1="7" y1="17" x2="17" y2="7" /><polyline points="8 7 17 7 17 16" /></svg>);
const IconDownload = () => (<svg {...IC}><path d="M12 4v11" /><polyline points="7 11 12 16 17 11" /><path d="M5 20h14" /></svg>);

const ABOUT_STYLES = String.raw`
#about {
  --ribbon-top: 30px;      /* ribbons section ke upar se kitni neeche shuru hon */
  --ribbon-zone: 150px;    /* ribbons ke X wale hisse ki oonchai */
  --strap-len: 110px;      /* patti ki lambai: kam karo to card upar jayega */
  --card-w: 340px;         /* ID card ki chaurai (beech wala column bhi isi se banta hai) */
  --lanyard-top: calc(var(--ribbon-top) + var(--ribbon-zone) / 2);  /* patti wahin se shuru jahan ribbons cross hoti hain */
  --story-pull: 165px;     /* right wala text kitna upar chadhe (card ke top ke barabar): yahan se badlo */
  position: relative;
  overflow: hidden;
  background: var(--color-firozi-50);
  padding-top: 250px;
  padding-bottom: 100px;
}

/* ---- Ribbons (sirf About mein) ---- */
.about-ribbons {
  position: absolute;
  z-index: 3;
  top: var(--ribbon-top);
  left: -5%;
  width: 110%;
  height: var(--ribbon-zone);
  pointer-events: none;
}
.ribbon {
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 62px;
  margin-top: -31px;
  overflow: hidden;
}
.ribbon-front {
  z-index: 2;
  background: #FBF0D6;
  color: #6B4E12;
  transform: rotate(-2.2deg);
  box-shadow: 0 16px 36px rgba(107, 78, 18, 0.22);
}
.ribbon-back {
  z-index: 1;
  background: var(--color-primary);
  color: #FFFFFF;
  transform: rotate(2.2deg);
  box-shadow: 0 10px 26px rgba(15, 118, 110, 0.3);
}
.ribbon-track { display: flex; width: max-content; animation: ribbon-left 30s linear infinite; }
.ribbon-back .ribbon-track { animation-name: ribbon-right; animation-duration: 38s; }
.ribbon-group { display: flex; flex: none; }
.ribbon-item { display: inline-flex; align-items: center; gap: 28px; padding-right: 28px; font: 700 26px var(--font-heading); white-space: nowrap; }
.ribbon-item i { font-style: normal; font-size: 18px; opacity: 0.85; }
.ribbon-back .ribbon-item { font-weight: 600; opacity: 0.85; }

@keyframes ribbon-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
@keyframes ribbon-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }

/* ---- Lanyard: chhoti patti + ID card (dono ribbons ke peeche se shuru) ---- */
.about-lanyard {
  position: absolute;
  z-index: 2;
  top: var(--lanyard-top);
  left: 50%;
  width: var(--card-w);
  margin-left: calc(var(--card-w) / -2);
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: 50% 0;   /* upar se latakti hui, isliye pendulum ki tarah jhoolti hai */
  pointer-events: none;
}
.about-lanyard.is-swinging { animation: lanyard-swing 1.7s ease-in-out; }
@keyframes lanyard-swing {
  0%   { transform: rotate(0deg); }
  15%  { transform: rotate(5deg); }
  35%  { transform: rotate(-4deg); }
  55%  { transform: rotate(2.8deg); }
  72%  { transform: rotate(-1.6deg); }
  88%  { transform: rotate(0.7deg); }
  100% { transform: rotate(0deg); }
}

.lanyard-strap {
  position: relative;
  width: 46px;
  height: var(--strap-len);
  background: #1D1C24;
  box-shadow: 0 10px 24px rgba(10, 30, 28, 0.35);
}
.lanyard-strap::before {
  content: "";
  position: absolute;
  inset: 0 5px;
  border-right: 1.5px dashed rgba(255, 255, 255, 0.35);
  border-left: 1.5px dashed rgba(255, 255, 255, 0.35);
}

.lanyard-clip {
  position: relative;
  z-index: 2;
  width: 40px;
  height: 24px;
  margin-top: -3px;
  border-radius: 6px 6px 10px 10px;
  background: linear-gradient(#F1F3F5, #BCC1C9 55%, #8C939D);
  box-shadow: 0 4px 8px rgba(10, 30, 28, 0.3);
}
.lanyard-clip::after {
  content: "";
  position: absolute;
  top: 7px;
  left: 50%;
  width: 14px;
  height: 7px;
  border-radius: 99px;
  background: #5E656F;
  transform: translateX(-50%);
}

/* ---- Card flip: hover par aage/peeche ghoomta hai ---- */
.lanyard-card {
  position: relative;
  z-index: 1;
  width: 100%;
  margin-top: -10px;
  perspective: 1400px;    /* 3D ka asar */
  pointer-events: auto;   /* patti ko chhor kar sirf card par hover chalega */
  cursor: grab;
  outline: none;
}
.lanyard-card:focus-visible .card-front { outline: 3px solid var(--color-primary); outline-offset: 5px; }
.card-flip {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 900ms cubic-bezier(0.4, 0.2, 0.2, 1);
}
.card-flip.is-flipped { transform: rotateY(180deg); }
.card-face {
  border: 1px solid var(--color-border, #E1E4E8);
  border-radius: 24px;
  background: var(--color-surface, #FFFFFF);
  box-shadow: 0 28px 60px rgba(10, 60, 56, 0.3);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* Front side */
.card-front { position: relative; padding: 42px 24px 26px; text-align: center; }
.card-front::before {
  content: "";
  position: absolute;
  top: 16px;
  left: 50%;
  width: 46px;
  height: 8px;
  border-radius: 99px;
  background: #DDE2E7;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25);
  transform: translateX(-50%);
}
.lanyard-photo {
  width: 150px;           /* picture ka size: yahan se bara/chhota karo */
  aspect-ratio: 1;
  margin: 0 auto 16px;
  overflow: hidden;
  border: 4px solid #FFFFFF;
  border-radius: 50%;
  background: var(--color-firozi-100, #CFF1ED);
  box-shadow: 0 0 0 3px var(--color-primary), 0 12px 26px rgba(15, 118, 110, 0.28);
}
.lanyard-photo img { display: block; width: 100%; height: 100%; object-fit: cover; }
.lanyard-name { margin: 0; font: 800 24px/1.15 var(--font-heading); }
.lanyard-role { margin: 6px 0 0; color: var(--color-primary); font-size: 15px; font-weight: 700; }
.lanyard-list { display: grid; gap: 10px; margin: 18px 0 0; padding: 16px 0 0; border-top: 1px dashed var(--color-border, #D5DAE0); list-style: none; }
.lanyard-list li { display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 14px; }
.lanyard-list span { color: var(--color-text-muted); }
.lanyard-list b { color: var(--color-text); font-weight: 700; text-align: right; }
.lanyard-list .is-open b { display: inline-flex; align-items: center; gap: 7px; }
.lanyard-list .is-open b::before { content: ""; width: 8px; aspect-ratio: 1; border-radius: 50%; background: var(--color-primary); box-shadow: 0 0 0 3px var(--color-firozi-100, #CFF1ED); }

/* Back side: poore card par sirf picture, kinaron/corners par blur */
.card-back { position: absolute; inset: 0; overflow: hidden; transform: rotateY(180deg); }
.card-back img { position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: cover; object-position: 50% 22%; }
.back-blur { filter: blur(18px) saturate(1.1); transform: scale(1.08); }   /* peeche ki dhundli copy */
.back-sharp {                                                              /* aage ki saaf picture, kinare dheere dheere ghulte hain */
  -webkit-mask-image: radial-gradient(ellipse 75% 70% at 50% 46%, #000 52%, transparent 100%);
  mask-image: radial-gradient(ellipse 75% 70% at 50% 46%, #000 52%, transparent 100%);
}

/* ---- Story: left card | (beech mein ID card) | right text ---- */
.about-story {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1fr) var(--card-w) minmax(0, 1fr);
  column-gap: 36px;
  align-items: start;
}

/* Left: gradient card */
.story-card {
  grid-column: 1;
  grid-row: 1;
  position: relative;
  overflow: hidden;
  padding: 30px 24px 32px;
  border-radius: 32px;
  background: linear-gradient(160deg, #17A096 0%, var(--color-primary) 45%, #0A524D 100%);
  color: #FFFFFF;
  box-shadow: 0 30px 70px rgba(10, 82, 77, 0.3);
}
.story-card::after {
  content: "";
  position: absolute;
  right: -110px;
  bottom: -110px;
  width: 320px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: repeating-radial-gradient(circle, rgba(255, 255, 255, 0.07) 0 1.5px, transparent 1.5px 40px);
  pointer-events: none;
}
.story-pill {
  display: inline-block;
  padding: 9px 16px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font: 700 12px var(--font-heading);
  letter-spacing: 0.16em;
}
.story-card h3 { position: relative; margin: 20px 0 22px; font: 800 clamp(26px, 2.5vw, 34px)/1.1 var(--font-heading); }
.story-card h3 em { font-family: Georgia, serif; font-weight: 400; font-style: italic; }
.story-points { position: relative; z-index: 1; display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
.story-points li { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border: 1px solid rgba(255, 255, 255, 0.22); border-radius: 18px; background: rgba(255, 255, 255, 0.12); font: 600 15px/1.3 var(--font-heading); }
.story-check { display: grid; flex: none; place-items: center; width: 30px; aspect-ratio: 1; border-radius: 50%; background: #FBF0D6; color: #0A524D; }
.story-check svg { width: 15px; height: 15px; }

/* Right: text, info cards, buttons */
.story-copy { grid-column: 3; grid-row: 1; margin-top: calc(var(--story-pull) * -1); }
.story-copy h2 { margin: 0 0 16px; font: 800 clamp(34px, 3.5vw, 48px)/1.05 var(--font-heading); }
.story-copy h2 em { color: var(--color-primary); font-family: Georgia, serif; font-weight: 400; font-style: italic; }
.story-lead { margin: 0 0 12px; color: var(--color-text); font-size: 16px; line-height: 1.7; }
.story-sub { margin: 0; color: var(--color-text-muted); font-size: 15px; line-height: 1.65; }
.story-info { display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 22px; }
.info-card { display: flex; align-items: center; gap: 14px; padding: 12px 16px; border: 1px solid var(--color-border, #E1E4E8); border-radius: 20px; background: var(--color-surface, #FFFFFF); }
.info-icon { display: grid; flex: none; place-items: center; width: 42px; aspect-ratio: 1; border-radius: 12px; background: var(--color-firozi-100, #CFF1ED); color: var(--color-primary); }
.info-icon svg { width: 20px; height: 20px; }
.info-text { min-width: 0; display: grid; gap: 3px; }
.info-text small { color: var(--color-text-muted); font-size: 11px; font-weight: 700; letter-spacing: 0.14em; }
.info-text b { overflow-wrap: anywhere; color: var(--color-text); font-size: 15px; font-weight: 700; line-height: 1.3; }
.story-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 22px; }
.story-btn { display: inline-flex; align-items: center; gap: 12px; height: 52px; padding: 0 8px 0 22px; border-radius: 999px; font: 700 16px var(--font-heading); text-decoration: none; white-space: nowrap; transition: transform 200ms ease, box-shadow 200ms ease; }
.story-btn:hover { transform: translateY(-2px); }
.story-btn:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 3px; }
.story-btn-icon { display: grid; place-items: center; width: 36px; aspect-ratio: 1; border-radius: 50%; }
.story-btn-icon svg { width: 17px; height: 17px; }
.story-btn-primary { background: var(--color-primary); color: #FFFFFF; box-shadow: 0 10px 24px rgba(15, 118, 110, 0.35); }
.story-btn-primary .story-btn-icon { background: rgba(255, 255, 255, 0.2); }
.story-btn-secondary { border: 1.5px solid rgba(31, 41, 51, 0.18); background: transparent; color: var(--color-text); }
.story-btn-secondary .story-btn-icon { background: var(--color-firozi-100, #CFF1ED); color: var(--color-primary); }

@media (prefers-reduced-motion: reduce) {
  .ribbon-track { animation: none; }
  .about-lanyard.is-swinging { animation: none; }
  .card-flip { transition: none; }
  .story-btn { transition: none; }
}

/* ---- Seamless Circle & Ring Extension (Hero se continue hone ke liye) ---- */
.about-circle-continuation {
  position: absolute;
  top: 0;
  left: 50%;
  width: min(100%, calc(380px + 12vh));
  height: 180px;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 1;
}
.about-ring {
  position: absolute;
  top: 0;
  left: 50%;
  width: 140%;
  aspect-ratio: 2 / 1;
  border: 1.8px dashed #000000;
  border-top: none;
  border-radius: 0 0 999px 999px;
  transform: translateX(-50%);
}
.about-dome {
  position: absolute;
  top: 0;
  left: 50%;
  width: 125%;
  aspect-ratio: 2 / 1;
  overflow: hidden;
  border-radius: 0 0 999px 999px;
  background: #10857D;
  box-shadow: 0 18px 90px rgba(15, 118, 110, 0.3);
  transform: translateX(-50%);
}
.about-dome::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08) 0 1.5px, transparent 1.5px 56px);
}

/* ---- Chhoti screen (1100px se kam): sab upar neeche, patti chhupi hui ---- */
@media (max-width: 1100px) {
  #about { --card-w: min(340px, 86%); }
  .about-lanyard { position: relative; top: auto; left: auto; margin: 40px auto 0; }
  .lanyard-strap { display: none; }
  .lanyard-clip { margin-top: 0; }
  .about-story { grid-template-columns: 1fr; row-gap: 40px; margin-top: 60px; }
  .story-card, .story-copy { grid-column: 1; grid-row: auto; }
  .story-copy { margin-top: 0; }
  .story-card { padding: 36px 32px 38px; }
  .story-card h3 { font-size: clamp(30px, 5vw, 44px); }
  .story-points li { font-size: 17px; }
  .story-copy h2 { font-size: clamp(38px, 7vw, 56px); }
  .story-lead { font-size: 18px; }
  .story-sub { font-size: 16px; }
  .story-info { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 680px) {
  #about { --ribbon-top: 20px; --ribbon-zone: 110px; padding-top: 180px; padding-bottom: 70px; }
  .ribbon { height: 44px; margin-top: -22px; }
  .ribbon-front { transform: rotate(-2.8deg); }
  .ribbon-back { transform: rotate(2.8deg); }
  .ribbon-item { gap: 18px; padding-right: 18px; font-size: 17px; }
  .ribbon-item i { font-size: 12px; }
  .about-circle-continuation { height: 120px; }
  .story-card { padding: 28px 20px 30px; border-radius: 28px; }
  .story-points li { padding: 12px 14px; gap: 12px; font-size: 15px; }
  .story-info { grid-template-columns: 1fr; }
  .story-actions { gap: 10px; }
}`;

// Ek ribbon ki chalti hui patti. Items 2 baar repeat hote hain taake gap na aaye
function RibbonTrack({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="ribbon-track">
      {[0, 1].map((g) => (
        <div className="ribbon-group" key={g}>
          {loop.map((text, i) => (
            <span className="ribbon-item" key={i}>
              {text}
              <i aria-hidden="true">✦</i>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

// Patti + clip + ID card: cursor card par aaye to lanyard jhoolta hai aur card palat kar peeche ki picture dikhata hai
function Lanyard() {
  const [swing, setSwing] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const openCard = () => { setSwing(true); setFlipped(true); };
  const closeCard = () => setFlipped(false);
  const toggleOnTouch = () => { setSwing(true); setFlipped((f) => !f); };

  return (
    <div
      className={`about-lanyard${swing ? " is-swinging" : ""}`}
      onAnimationEnd={() => setSwing(false)}
    >
      <div className="lanyard-strap" aria-hidden="true"></div>
      <div className="lanyard-clip" aria-hidden="true"></div>
      <div
        className="lanyard-card"
        tabIndex={0}
        onMouseEnter={openCard}
        onMouseLeave={closeCard}
        onFocus={openCard}
        onBlur={closeCard}
        onTouchStart={toggleOnTouch}
      >
        <div className={`card-flip${flipped ? " is-flipped" : ""}`}>
          <div className="card-face card-front">
            <div className="lanyard-photo">
              <img src={LANYARD_PHOTO} alt={`Portrait of ${LANYARD_NAME}`} width="150" height="150" />
            </div>
            <h3 className="lanyard-name">{LANYARD_NAME}</h3>
            <p className="lanyard-role">{LANYARD_ROLE}</p>
            <ul className="lanyard-list">
              {LANYARD_DETAILS.map((d) => (
                <li key={d.label} className={d.open ? "is-open" : undefined}>
                  <span>{d.label}</span>
                  <b>{d.value}</b>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-face card-back" aria-hidden="true">
            <img className="back-blur" src={LANYARD_PHOTO} alt="" />
            <img className="back-sharp" src={LANYARD_PHOTO} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="A little about me" title={<>Developer by craft.<br /><span className="heading-muted">Curious by nature.</span></>}>
      <style>{ABOUT_STYLES}</style>

      {/* Crossing ribbons (decorative) */}
      <div className="about-ribbons" aria-hidden="true">
        <div className="ribbon ribbon-back"><RibbonTrack items={RIBBON_BACK} /></div>
        <div className="ribbon ribbon-front"><RibbonTrack items={RIBBON_FRONT} /></div>
      </div>

      {/* Visual circle + ring continuation from Hero section */}
      <div className="about-circle-continuation" aria-hidden="true">
        <div className="about-ring"></div>
        <div className="about-dome"></div>
      </div>

      {/* Teesri ribbon + ID card */}
      <Lanyard />

      {/* Left: Core strengths | Right: Why hire me (beech wala column ID card ke liye khali) */}
      <div className="about-story">
        <div className="story-card">
          <span className="story-pill">CORE STRENGTHS</span>
          <h3>From idea <em>to</em> working web app.</h3>
          <ul className="story-points">
            {STORY_POINTS.map((point) => (
              <li key={point}>
                <span className="story-check"><IconCheck /></span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="story-copy">
          <h2>Why <em>hire</em> me?</h2>
          <p className="story-lead">I'm a Software Engineering student who loves turning ideas into clean, working web apps with React, Node.js and MongoDB.</p>
          <p className="story-sub">I'm building real projects and getting ready for my first software-house role or freelance work.</p>

          <div className="story-info">
            {STORY_INFO.map((item) => (
              <div className="info-card" key={item.label}>
                <span className="info-icon">{ICONS[item.icon]}</span>
                <span className="info-text">
                  <small>{item.label}</small>
                  <b>{item.value}</b>
                </span>
              </div>
            ))}
          </div>

          <div className="story-actions">
            <a className="story-btn story-btn-primary" href={`mailto:${EMAIL}`}>
              Hire me <span className="story-btn-icon"><IconArrow /></span>
            </a>
            <a className="story-btn story-btn-secondary" href={CV_FILE} download>
              Download CV <span className="story-btn-icon"><IconDownload /></span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;