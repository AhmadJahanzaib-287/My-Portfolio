const SECTION_STYLES = String.raw`.section .container { width: min(var(--content-width), calc(100% - 48px)); margin-inline: auto; }
.section { padding: var(--space-10) 0; }
.section-heading { margin-bottom: var(--space-8); }
.eyebrow { margin: 0 0 var(--space-4); color: var(--color-primary); font-size: var(--text-sm); font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
.section-heading h2 { max-width: 760px; margin: 0; font: 700 var(--text-2xl)/1.13 var(--font-heading); }
.heading-muted { color: var(--color-text-muted); font-weight: 500; }
.body-copy { color: var(--color-text-muted); line-height: 1.8; }
@media (max-width: 900px) {
  .section .container { width: min(var(--content-width), calc(100% - 40px)); }
}
@media (max-width: 680px) {
  .section .container { width: calc(100% - 36px); }
  .section { padding: 64px 0; }
  .section-heading { margin-bottom: 34px; }
  .section-heading h2 { font-size: 30px; }
}`;

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <style>{SECTION_STYLES}</style>
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default Section;
