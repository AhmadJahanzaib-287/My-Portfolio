import { useState } from "react";
import Section from "../components/common/Section.jsx";
import Button from "../components/common/Button.jsx";
import { socials } from "../data/socials.js";

const EMAIL = "hello@ahmadjahanzaib.dev";

const CONTACT_STYLES = String.raw`.contact-socials a:hover { color: var(--color-primary); }
.contact-section { background: var(--gradient-firozi); }
.contact-grid { display: grid; grid-template-columns: 1fr 0.82fr; gap: clamp(40px, 8vw, 110px); }
.contact-copy { padding-top: 4px; }
.contact-lead { max-width: 420px; margin: 0; color: var(--color-text-muted); font-size: var(--text-lg); line-height: 1.7; }
.email-link { display: inline-flex; align-items: center; gap: 14px; margin-top: 30px; color: var(--color-primary); font: 700 24px var(--font-heading); overflow-wrap: anywhere; }
.email-link span { font-size: 17px; }
.contact-socials { display: flex; gap: 22px; margin-top: 30px; }
.contact-socials a { color: var(--color-text-muted); font-size: var(--text-sm); transition: color 180ms ease; }
.contact-socials span { margin-left: 5px; color: var(--color-primary); }
.contact-form { display: grid; gap: 17px; padding: 24px; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface); box-shadow: var(--shadow-card); }
.contact-form label { display: grid; gap: 8px; color: var(--color-text); font-size: var(--text-sm); font-weight: 700; }
.contact-form input, .contact-form textarea { width: 100%; border: 1px solid var(--color-border); border-radius: 6px; outline: none; background: #FFFFFF; color: var(--color-text); font-size: var(--text-sm); font-weight: 400; transition: border-color 150ms ease, box-shadow 150ms ease; }
.contact-form input { min-height: 44px; padding: 0 12px; }
.contact-form textarea { min-height: 92px; padding: 12px; resize: vertical; }
.contact-form input:focus, .contact-form textarea:focus { border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-firozi-100); }
.contact-form input::placeholder, .contact-form textarea::placeholder { color: #818B92; }
.contact-form .button { justify-self: start; }
.form-note { min-height: 1em; margin: -8px 0 0; color: var(--color-text-muted); font-size: 11px; }
@media (max-width: 900px) {
  .contact-grid { gap: 42px; }
}
@media (max-width: 680px) {
  .contact-grid { grid-template-columns: 1fr; gap: 32px; }
  .contact-form { padding: 18px; }
}
@media (max-width: 400px) {
  .email-link { font-size: 19px; }
}`;

function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(`${formData.get("message")}\n\nFrom: ${formData.get("name")} (${formData.get("email")})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <Section id="contact" eyebrow="Have a good one in mind?" title={<>Let's make<br /><span className="heading-muted">something matter.</span></>} className="contact-section">
      <style>{CONTACT_STYLES}</style>
      <div className="contact-grid"><div className="contact-copy"><p className="contact-lead">I'm always up for a thoughtful conversation, a tricky problem, or a really good cup of coffee.</p><a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL}<span>↗</span></a><div className="contact-socials">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <span>↗</span></a>)}</div></div>
        <form className="contact-form" onSubmit={handleSubmit}><label>Your name<input name="name" type="text" autoComplete="name" placeholder="How should I address you?" required /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label><label>A little about it<textarea name="message" rows="3" placeholder="What are you thinking about?" required></textarea></label><Button type="submit">{sent ? "Opening your email app" : "Send an introduction"} <span aria-hidden="true">↗</span></Button><p className="form-note" aria-live="polite">{sent ? "Your draft is ready in your email app." : "This opens a pre-filled email in your mail app."}</p></form>
      </div>
    </Section>
  );
}

export default Contact;
