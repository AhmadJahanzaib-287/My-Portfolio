import { useEffect, useState } from "react";

const LOADER_DURATION = 2300;
const LETTER_EXIT_DURATION = 1200;
const HANDOFF_DURATION = 2300;
const LETTER_STAGGER = 36; // har harf kitne ms baad aaye
const LOADER_NAME = "AHMAD JAHANZAIB";

const LOADER_STYLES = String.raw`
/* ---- Main loader ---- */
.intro-loader {
  /* Mobile fix: naam ka size screen ki chaurai ke hisab se khud chhota hota hai.
     Laptop par --text-loader hi use hota hai, isliye wahan koi farq nahi. */
  --loader-pad: 24px;
  --loader-size: min(var(--text-loader, 96px), calc((100vw - var(--loader-pad) * 2) / 11.5));
  position: fixed;
  z-index: 100;
  inset: 0;
  overflow: hidden;
  color: var(--color-text);
}

.loader-exit-band {
  position: absolute;
  z-index: 0;
  inset: 0;
  background: var(--color-primary);
  transform: translateY(100%);
}

.loader-sheet {
  position: absolute;
  z-index: 1;
  inset: 0;
  overflow: hidden;
  background: var(--color-bg);
  transform: translateY(0);
}

.intro-loader.is-leaving .loader-exit-band {
  animation: loader-band-exit 1900ms cubic-bezier(0.76, 0, 0.24, 1) both;
}

.intro-loader.is-leaving .loader-sheet {
  animation: loader-sheet-exit 1650ms cubic-bezier(0.76, 0, 0.24, 1) 280ms both;
}

.intro-loader.is-leaving {
  pointer-events: none;
}

/* ---- Upar ke kone (PORTFOLIO aur saal) ---- */
.loader-corner {
  position: absolute;
  top: 32px;
  color: var(--color-text-muted);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.loader-corner-top {
  left: 26px;
}

.loader-corner-year {
  right: 26px;
}

/* ---- Beech wala naam ---- */
.loader-name-window {
  position: absolute;
  top: 50%;
  right: var(--loader-pad);
  left: var(--loader-pad);
  height: calc(var(--loader-size) * 1.2);
  overflow: hidden;
  transform: translateY(-50%);
}

.loader-name {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin: 0;
  font: 800 var(--loader-size)/0.98 var(--font-heading);
  letter-spacing: 0;
  text-align: center;
  white-space: nowrap;
}

.loader-letter {
  display: inline-block;
  color: var(--color-primary);
  transform: translateY(120%);
  animation: loader-letter-slide-in 600ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
}

.loader-letter-space {
  width: 0.28em;
  flex: 0 0 auto;
}

.loader-letter-dot {
  margin-left: 0.02em;
  color: var(--color-loader-dot);
  font-size: 1.15em;
}

/* ---- Neeche ka role aur percent ---- */
.loader-meta {
  position: absolute;
  right: 26px;
  bottom: 43px;
  left: 26px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  transition: opacity 300ms ease, transform 300ms ease;
}

.loader-role {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 10px;
  line-height: 1.45;
}

.loader-percent {
  display: flex;
  align-items: baseline;
  gap: 3px;
  margin: 0;
  color: var(--color-text);
  font: 800 56px/0.82 var(--font-heading);
}

.loader-percent small {
  color: var(--color-primary);
  font-size: 20px;
}

/* ---- Progress bar ---- */
.loader-progress {
  position: absolute;
  right: 26px;
  bottom: 24px;
  left: 26px;
  width: calc(100% - 52px);
  height: 2px;
  border: 0;
  border-radius: 0;
  appearance: none;
  background: var(--color-border);
  color: var(--color-primary);
}

.loader-progress::-webkit-progress-bar {
  background: var(--color-border);
}

.loader-progress::-webkit-progress-value {
  background: var(--color-primary);
  transition: width 80ms linear;
}

.loader-progress::-moz-progress-bar {
  background: var(--color-primary);
}

/* ---- Jab loader saaf ho raha ho ---- */
.intro-loader.is-clearing .loader-corner,
.intro-loader.is-clearing .loader-meta {
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 300ms ease, transform 300ms ease;
}

.intro-loader.is-clearing .loader-letter {
  animation-name: loader-letter-slide-out;
  animation-duration: 600ms;
  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
  animation-fill-mode: both;
}

.intro-loader.is-clearing .loader-progress {
  opacity: 0;
  transition: opacity 180ms ease;
}

/* ---- Animations ---- */
@keyframes loader-band-exit {
  0% {
    transform: translateY(100%);
  }
  30%,
  56% {
    transform: translateY(0);
  }
  74% {
    transform: translateY(-32%) scaleY(0.28);
    transform-origin: top;
  }
  100% {
    transform: translateY(-125%) scaleY(0.28);
    transform-origin: top;
  }
}

@keyframes loader-sheet-exit {
  0%,
  12% {
    transform: translateY(0);
    border-radius: 0;
  }
  45% {
    transform: translateY(-44vh);
    border-radius: 0 0 50% 50% / 0 0 72px 72px;
  }
  72% {
    transform: translateY(-88vh);
    border-radius: 0 0 50% 50% / 0 0 72px 72px;
  }
  100% {
    transform: translateY(-115vh);
    border-radius: 0 0 50% 50% / 0 0 72px 72px;
  }
}

@keyframes loader-letter-slide-in {
  from {
    transform: translateY(120%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes loader-letter-slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-125%);
  }
}

/* ---- Mobile (680px se kam) ---- */
@media (max-width: 680px) {
  .intro-loader {
    --loader-pad: 16px;
  }

  .loader-corner {
    top: 22px;
    font-size: 8px;
    letter-spacing: 0.12em;
  }

  .loader-corner-top {
    left: 18px;
  }

  .loader-corner-year {
    right: 18px;
  }

  .loader-meta {
    right: 18px;
    bottom: 38px;
    left: 18px;
  }

  .loader-role {
    font-size: 9px;
  }

  .loader-percent {
    font-size: 40px;
  }

  .loader-percent small {
    font-size: 15px;
  }

  .loader-progress {
    right: 18px;
    bottom: 20px;
    left: 18px;
    width: calc(100% - 36px);
  }
}

/* ---- Bohat chhoti mobile (400px se kam) ---- */
@media (max-width: 400px) {
  .loader-role {
    font-size: 8px;
  }

  .loader-percent {
    font-size: 34px;
  }

  .loader-percent small {
    font-size: 13px;
  }
}`;

function Loader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [progress, setProgress] = useState(0);
  const [isClearing, setIsClearing] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (!isVisible) return undefined;

    const startTime = window.performance.now();
    let animationFrame;
    let exitTimer;
    let removeTimer;

    const updateProgress = (time) => {
      const nextProgress = Math.min(Math.floor(((time - startTime) / LOADER_DURATION) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      } else {
        setIsClearing(true);
        exitTimer = window.setTimeout(() => {
          setIsLeaving(true);
          onComplete();
          removeTimer = window.setTimeout(() => setIsVisible(false), HANDOFF_DURATION);
        }, LETTER_EXIT_DURATION);
      }
    };

    animationFrame = window.requestAnimationFrame(updateProgress);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`intro-loader${isClearing ? " is-clearing" : ""}${isLeaving ? " is-leaving" : ""}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <style>{LOADER_STYLES}</style>
      <div className="loader-exit-band" aria-hidden="true"></div>

      <div className="loader-sheet">
        <span className="loader-corner loader-corner-top">PORTFOLIO</span>
        <span className="loader-corner loader-corner-year">© {new Date().getFullYear()}</span>

        <div className="loader-name-window">
          <h1 className="loader-name" aria-label={LOADER_NAME}>
            {Array.from(LOADER_NAME, (letter, index) => (
              <span
                className={`loader-letter${letter === " " ? " loader-letter-space" : ""}`}
                key={`${letter}-${index}`}
                style={{ animationDelay: `${index * LETTER_STAGGER}ms` }}
                aria-hidden="true"
              >
                {letter === " " ? "\u00a0" : letter}
              </span>
            ))}
            <span
              className="loader-letter loader-letter-dot"
              style={{ animationDelay: `${LOADER_NAME.length * LETTER_STAGGER}ms` }}
              aria-hidden="true"
            >
              .
            </span>
          </h1>
        </div>

        <div className="loader-meta">
          <p className="loader-role">Full-Stack Developer — React &amp;<br />Node.js</p>
          <p className="loader-percent"><span>{progress}</span><small>%</small></p>
        </div>

        <progress
          className="loader-progress"
          max="100"
          value={progress}
          aria-label={`Portfolio loading ${progress}%`}
        />
      </div>
    </div>
  );
}

export default Loader;