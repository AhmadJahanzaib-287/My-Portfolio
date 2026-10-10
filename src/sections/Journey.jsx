import Section from "../components/common/Section.jsx";

const milestones = [
  { period: "2022 — NOW", title: "Senior Full-Stack Developer", place: "Common Ground Studio · London", note: "Leading product engineering for people-first startups. Shipped 8 products from discovery to launch." },
  { period: "2020 — 2022", title: "Full-Stack Developer", place: "Brightworks Digital · Remote", note: "Built accessible customer platforms and APIs for teams across health, education, and commerce." },
  { period: "2016 — 2020", title: "BSc Computer Science", place: "University of Bristol · Bristol", note: "First Class Honours. Focused on human-computer interaction and distributed systems." },
];

const JOURNEY_STYLES = String.raw`.journey-section { background: var(--color-surface); }
.journey-layout { display: grid; grid-template-columns: 0.72fr 1.28fr; gap: clamp(40px, 8vw, 110px); }
.journey-intro { max-width: 260px; margin: 0; color: var(--color-text-muted); font-size: var(--text-lg); line-height: 1.65; }
.timeline { border-left: 1px solid var(--color-border); }
.timeline-item { position: relative; padding: 0 0 32px 30px; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-dot { position: absolute; top: 4px; left: -5px; width: 9px; aspect-ratio: 1; border: 2px solid var(--color-surface); border-radius: 50%; background: var(--color-primary); box-shadow: 0 0 0 1px var(--color-primary); }
.timeline-period { margin: 0 0 8px; color: var(--color-primary); font-size: 10px; font-weight: 700; letter-spacing: 0.08em; }
.timeline-item h3 { margin: 0; font: 700 var(--text-lg) var(--font-heading); }
.timeline-place { margin: 6px 0; color: var(--color-text-muted); font-size: var(--text-sm); }
.timeline-note { max-width: 520px; margin: 10px 0 0; color: var(--color-text-muted); font-size: var(--text-sm); line-height: 1.65; }
@media (max-width: 680px) {
  .journey-layout { grid-template-columns: 1fr; gap: 34px; }
  .journey-intro { max-width: 430px; }
}`;

function Journey() {
  return (
    <Section id="journey" eyebrow="The path so far" title={<>A little context<br /><span className="heading-muted">behind the code.</span></>} className="journey-section">
      <style>{JOURNEY_STYLES}</style>
      <div className="journey-layout"><p className="journey-intro">Every role taught me something different about what makes technology work for people.</p>
        <div className="timeline">{milestones.map((item) => <article className="timeline-item" key={item.period}><span className="timeline-dot"></span><p className="timeline-period">{item.period}</p><h3>{item.title}</h3><p className="timeline-place">{item.place}</p><p className="timeline-note">{item.note}</p></article>)}</div>
      </div>
    </Section>
  );
}

export default Journey;
