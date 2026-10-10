import { socials } from "../../data/socials.js";

const FOOTER_STYLES = String.raw`.footer-links a:hover { color: var(--color-primary); }
.site-footer { border-top: 1px solid var(--color-border); background: var(--color-surface); }
.footer-inner { display: flex; min-height: 80px; align-items: center; justify-content: space-between; gap: 20px; color: var(--color-text-muted); font-size: 11px; }
.footer-inner p { margin: 0; }
.footer-inner p span { padding-inline: 7px; color: var(--color-primary); }
.footer-links { display: flex; flex-wrap: wrap; align-items: center; gap: 20px; }
.footer-links a { transition: color 180ms ease; }
@media (max-width: 680px) {
  .footer-inner { min-height: 92px; align-items: start; flex-direction: column; justify-content: center; gap: 10px; padding-block: 17px; }
  .footer-links { gap: 16px; }
}`;

function Footer() {
  return (
    <footer className="site-footer">
      <style>{FOOTER_STYLES}</style>
      <div className="container footer-inner">
        <p>Designed & built with care <span aria-hidden="true">/</span> Ahmad Jahanzaib</p>
        <div className="footer-links">
          {socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
