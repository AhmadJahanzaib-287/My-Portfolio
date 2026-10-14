import { socials } from "../../data/socials.js";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const FOOTER_STYLES = String.raw`
.site-footer {
  --footer-bg: var(--color-firozi-50);
  --footer-text: var(--color-text);
  --footer-muted: var(--color-text-muted);
  --footer-accent: var(--color-primary);
  position: relative;
  overflow: hidden;
  padding: 44px 0 0;
  background: radial-gradient(ellipse at 46% -15%, rgba(15, 118, 110, 0.1), transparent 48%), var(--footer-bg);
  color: var(--footer-text);
}
.footer-wrap { position: relative; z-index: 1; width: min(var(--content-width), calc(100% - 56px)); margin: 0 auto; }
.footer-cta { display: flex; align-items: center; justify-content: space-between; gap: 48px; padding: 0 0 36px; }
.footer-cta h2 { max-width: 900px; margin: 0; font: 800 60px/1.08 var(--font-heading); }
.footer-cta h2 span { color: var(--footer-accent); font-family: Georgia, serif; font-style: italic; font-weight: 400; }
.footer-hire {
  display: flex; flex: 0 0 150px; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  width: 124px; aspect-ratio: 1; border-radius: 50%; background: var(--color-primary); color: #FFFFFF;
  font-size: 16px; font-weight: 700; box-shadow: 0 16px 42px rgba(15, 118, 110, 0.22);
  transition: transform 220ms ease, background 220ms ease;
}
.footer-hire:hover { transform: translateY(-5px); background: #0B625C; }
.footer-hire svg { width: 25px; height: 25px; }
.footer-divider { height: 1px; background: rgba(31, 41, 51, 0.14); }
.footer-columns { display: grid; grid-template-columns: 1.45fr 0.8fr 1.15fr 0.85fr; gap: 48px; padding: 44px 0; }
.footer-brand { max-width: 340px; }
.footer-brandmark { display: inline-flex; align-items: center; gap: 13px; color: var(--footer-text); font: 800 23px/1 var(--font-heading); }
.footer-brandmark > span:first-child { display: grid; width: 54px; aspect-ratio: 1; place-items: center; border-radius: 15px; background: var(--color-firozi-100); color: var(--color-primary); font-size: 20px; transform: rotate(-5deg); }
.footer-brandmark > span:last-child { color: var(--footer-accent); }
.footer-brand p { margin: 24px 0 0; color: var(--footer-muted); font-size: 17px; line-height: 1.7; }
.footer-column h3 { margin: 3px 0 24px; color: var(--footer-text); font-size: 15px; font-weight: 800; letter-spacing: 0.12em; }
.footer-column ul { display: grid; gap: 15px; margin: 0; padding: 0; list-style: none; }
.footer-column li, .footer-column a { color: var(--footer-muted); font-size: 16px; line-height: 1.5; overflow-wrap: anywhere; }
.footer-column a { transition: color 180ms ease; }
.footer-column a:hover, .footer-cv:hover { color: var(--footer-text); }
.footer-cv { display: inline-flex; align-items: center; gap: 9px; margin-top: 18px; color: var(--color-primary) !important; transition: color 180ms ease; }
.footer-cv svg { width: 18px; height: 18px; }
.footer-socials { display: flex; gap: 12px; }
.footer-socials a { display: grid; width: 60px; aspect-ratio: 1; place-items: center; border: 1px solid rgba(31, 41, 51, 0.14); border-radius: 50%; background: rgba(255, 255, 255, 0.55); color: var(--footer-text); transition: background 180ms ease, transform 180ms ease; }
.footer-socials a:hover { transform: translateY(-3px); background: #FFFFFF; }
.footer-socials svg { width: 22px; height: 22px; }
.footer-bottom { display: grid; grid-template-columns: 1fr 1fr auto; align-items: center; gap: 24px; min-height: 72px; border-top: 1px solid rgba(31, 41, 51, 0.14); color: var(--footer-muted); font-size: 15px; }
.footer-bottom p { margin: 0; }
.footer-credit { text-align: center; }
.footer-top { display: inline-flex; align-items: center; gap: 12px; padding: 14px 22px; border: 1px solid rgba(31, 41, 51, 0.2); border-radius: 999px; color: var(--footer-text); font-weight: 700; transition: border-color 180ms ease, background 180ms ease; }
.footer-top:hover { border-color: rgba(31, 41, 51, 0.4); background: rgba(255, 255, 255, 0.55); }
.footer-top svg { width: 18px; height: 18px; }
.footer-watermark { overflow: hidden; color: rgba(15, 118, 110, 0.2); font: 800 64px/0.82 var(--font-heading); letter-spacing: 0; text-align: center; white-space: nowrap; -webkit-mask-image: linear-gradient(to bottom, #000 20%, transparent 100%); mask-image: linear-gradient(to bottom, #000 20%, transparent 100%); }
@media (max-width: 900px) {
  .footer-cta h2 { font-size: 48px; }
  .footer-columns { grid-template-columns: 1.2fr 0.8fr 1fr; gap: 32px 32px; padding: 36px 0; }
  .footer-social-column { grid-column: 2 / -1; }
  .footer-watermark { font-size: 56px; }
}
@media (max-width: 680px) {
  .site-footer { padding-top: 36px; }
  .footer-wrap { width: calc(100% - 40px); }
  .footer-cta { align-items: flex-start; gap: 20px; padding: 0 0 28px; }
  .footer-cta h2 { font-size: 34px; }
  .footer-hire { flex-basis: 76px; width: 76px; gap: 5px; font-size: 12px; }
  .footer-hire svg { width: 20px; height: 20px; }
  .footer-columns { grid-template-columns: 1fr 1fr; gap: 28px 24px; padding: 30px 0; }
  .footer-brand { grid-column: 1 / -1; max-width: 420px; }
  .footer-brandmark { font-size: 18px; }
  .footer-brandmark > span:first-child { width: 46px; border-radius: 13px; font-size: 17px; }
  .footer-brand p { margin-top: 16px; font-size: 15px; }
  .footer-column h3 { margin-bottom: 14px; font-size: 13px; }
  .footer-column li, .footer-column a { font-size: 14px; }
  .footer-social-column { grid-column: auto; }
  .footer-socials { flex-wrap: wrap; gap: 8px; }
  .footer-socials a { width: 42px; }
  .footer-socials svg { width: 19px; height: 19px; }
  .footer-bottom { grid-template-columns: 1fr auto; gap: 10px; min-height: 0; padding: 16px 0; font-size: 11px; }
  .footer-credit { grid-column: 1; grid-row: 2; text-align: left; }
  .footer-top { grid-column: 2; grid-row: 1 / 3; gap: 8px; padding: 12px 14px; font-size: 12px; white-space: nowrap; }
  .footer-watermark { font-size: 36px; }
}
@media (max-width: 390px) {
  .footer-cta h2 { font-size: 30px; }
  .footer-hire { flex-basis: 68px; width: 68px; }
  .footer-social-column { grid-column: 1 / -1; }
  .footer-watermark { font-size: 30px; }
}
@media (prefers-reduced-motion: reduce) {
  .footer-hire, .footer-column a, .footer-socials a, .footer-top { transition: none; }
}
`;

function SocialIcon({ label }) {
  if (label === "LinkedIn") {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 9h3v11H4zM5.5 4.5a1.5 1.5 0 1 0 0 .01M11 20V9h3v1.6c.7-1.2 1.8-1.9 3.4-1.9 2.6 0 3.6 1.7 3.6 4.5V20h-3v-6.1c0-1.5-.4-2.5-1.9-2.5S14 12.6 14 14v6z" /></svg>;
  }
  if (label === "GitHub") {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7.1 0C5 1.2 3.8 1.6 3.8 1.6a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V22" /></svg>;
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}

function Footer() {
  return (
    <footer className="site-footer">
      <style>{FOOTER_STYLES}</style>
      <div className="footer-wrap">
        <div className="footer-cta">
          <h2>Let&apos;s build something<br /><span>great</span> together.</h2>
          <a className="footer-hire" href="#contact" aria-label="Hire me, go to contact section">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
            <span>Hire me</span>
          </a>
        </div>
        <div className="footer-divider" />
        <div className="footer-columns">
          <div className="footer-brand">
            <a className="footer-brandmark" href="#home" aria-label="Ahmad Jahanzaib, back to home">
              <span aria-hidden="true">AJ</span><span>AHMAD JAHANZAIB.</span>
            </a>
            <p>Full-Stack Developer. Building thoughtful web experiences and the systems behind them.</p>
          </div>
          <nav className="footer-column" aria-label="Footer navigation">
            <h3>NAVIGATE</h3>
            <ul>{FOOTER_LINKS.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
          </nav>
          <div className="footer-column">
            <h3>CONTACT</h3>
            <ul>
              <li><a href="mailto:hello@ahmadjahanzaib.dev">hello@ahmadjahanzaib.dev</a></li>
            </ul>
            <a className="footer-cv" href="/Ahmad-Jahanzaib-CV.pdf" download>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 17v3h16v-3" /></svg>
              Download CV
            </a>
          </div>
          <div className="footer-column footer-social-column">
            <h3>SOCIAL</h3>
            <div className="footer-socials">
              {socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} title={social.label}><SocialIcon label={social.label} /></a>)}
              <a href="mailto:hello@ahmadjahanzaib.dev" aria-label="Email Ahmad Jahanzaib" title="Email"><SocialIcon label="Email" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ahmad Jahanzaib. All rights reserved.</p>
          <p className="footer-credit">Built with React</p>
          <a className="footer-top" href="#home">
            Back to top
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 14 6-6 6 6M12 8v12" /></svg>
          </a>
        </div>
      </div>
      <div className="footer-watermark" aria-hidden="true">AHMAD JAHANZAIB</div>
    </footer>
  );
}

export default Footer;
