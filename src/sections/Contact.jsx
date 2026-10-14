import { useState } from "react";
import Section from "../components/common/Section.jsx";
import Button from "../components/common/Button.jsx";
import { socials } from "../data/socials.js";

const EMAIL = "hello@ahmadjahanzaib.dev";

const CONTACT_STYLES = String.raw`
.contact-section { background: var(--gradient-firozi); }
.contact-section .section-heading { max-width: 780px; margin-bottom: 44px; }
.contact-section .section-heading h2 { font-size: 52px; }
.contact-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(420px, 0.9fr); align-items: stretch; gap: 72px; }
.contact-copy { display: flex; flex-direction: column; align-items: flex-start; padding: 8px 0; }
.contact-availability { display: inline-flex; align-items: center; gap: 10px; margin: 0 0 24px; color: var(--color-primary); font-size: 13px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
.contact-availability::before { width: 9px; aspect-ratio: 1; border-radius: 50%; background: var(--color-primary); box-shadow: 0 0 0 4px var(--color-firozi-100); content: ""; }
.contact-lead { max-width: 480px; margin: 0; color: var(--color-text-muted); font-size: 20px; line-height: 1.75; }
.contact-details { display: grid; gap: 22px; margin-top: 36px; }
.email-link { display: inline-flex; align-items: center; gap: 14px; color: var(--color-primary); font: 800 25px/1.25 var(--font-heading); overflow-wrap: anywhere; }
.email-link span { display: grid; width: 34px; aspect-ratio: 1; flex: 0 0 auto; place-items: center; border: 1px solid rgba(15, 118, 110, 0.22); border-radius: 50%; font-size: 16px; transition: color 180ms ease, background 180ms ease, transform 180ms ease; }
.email-link:hover span { transform: translate(2px, -2px); background: var(--color-primary); color: #FFFFFF; }
.contact-socials { display: flex; flex-wrap: wrap; gap: 12px 28px; }
.contact-socials a { display: inline-flex; align-items: center; gap: 7px; padding: 5px 0; color: var(--color-text-muted); font-size: 15px; font-weight: 600; transition: color 180ms ease; }
.contact-socials a:hover { color: var(--color-primary); }
.contact-socials span { color: var(--color-primary); }
.contact-form { display: grid; align-content: start; gap: 18px; padding: 30px; border: 1px solid rgba(31, 41, 51, 0.08); border-radius: 8px; background: var(--color-surface); box-shadow: 0 24px 60px rgba(31, 41, 51, 0.1); }
.contact-form-heading { margin-bottom: 2px; }
.contact-form-heading h3 { margin: 0; color: var(--color-text); font: 800 25px/1.2 var(--font-heading); }
.contact-form-heading p { margin: 8px 0 0; color: var(--color-text-muted); font-size: 14px; line-height: 1.5; }
.contact-form label { display: grid; gap: 8px; color: var(--color-text); font-size: var(--text-sm); font-weight: 700; }
.contact-form input, .contact-form textarea { width: 100%; border: 1px solid var(--color-border); border-radius: 5px; outline: none; background: #FFFFFF; color: var(--color-text); font-size: 15px; font-weight: 400; transition: border-color 150ms ease, box-shadow 150ms ease; }
.contact-form input { min-height: 50px; padding: 0 14px; }
.contact-form textarea { min-height: 126px; padding: 13px 14px; resize: vertical; }
.contact-form input:focus, .contact-form textarea:focus { border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12); }
.contact-form input::placeholder, .contact-form textarea::placeholder { color: #818B92; }
.contact-form .button { justify-self: start; min-width: 220px; }
.form-note { min-height: 1em; margin: -8px 0 0; color: var(--color-text-muted); font-size: 12px; }
@media (max-width: 900px) {
  .contact-section .section-heading h2 { font-size: 44px; }
  .contact-grid { grid-template-columns: minmax(0, 1fr) minmax(360px, 0.95fr); gap: 38px; }
  .contact-form { padding: 24px; }
  .email-link { font-size: 21px; }
}
@media (max-width: 680px) {
  .contact-section .section-heading { margin-bottom: 30px; }
  .contact-section .section-heading h2 { font-size: 32px; }
  .contact-grid { grid-template-columns: minmax(0, 1fr); gap: 32px; }
  .contact-copy { padding: 0; }
  .contact-availability { margin-bottom: 18px; font-size: 11px; }
  .contact-lead { font-size: 17px; }
  .contact-details { gap: 18px; margin-top: 26px; }
  .email-link { gap: 10px; font-size: 20px; }
  .email-link span { width: 30px; }
  .contact-form { gap: 16px; padding: 20px; }
  .contact-form-heading h3 { font-size: 22px; }
  .contact-form textarea { min-height: 112px; }
}
@media (max-width: 380px) {
  .email-link { font-size: 18px; }
  .contact-form { padding: 17px; }
  .contact-form .button { min-width: 0; width: 100%; }
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
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="contact-availability">Open to internships, freelance & junior roles</p>
          <p className="contact-lead">I&apos;m always up for a thoughtful conversation, a tricky problem, or a really good cup of coffee.</p>
          <div className="contact-details">
            <a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL}<span aria-hidden="true">↗</span></a>
            <div className="contact-socials">
              {socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<span aria-hidden="true">↗</span></a>)}
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <h3>Send me a note</h3>
            <p>A few details are all it takes to get started.</p>
          </div>
          <label>Your name<input name="name" type="text" autoComplete="name" placeholder="How should I address you?" required /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
          <label>A little about it<textarea name="message" rows="3" placeholder="What are you thinking about?" required></textarea></label>
          <Button type="submit">{sent ? "Opening your email app" : "Send an introduction"} <span aria-hidden="true">↗</span></Button>
          <p className="form-note" aria-live="polite">{sent ? "Your draft is ready in your email app." : "This opens a pre-filled email in your mail app."}</p>
        </form>
      </div>
    </Section>
  );
}

export default Contact;
