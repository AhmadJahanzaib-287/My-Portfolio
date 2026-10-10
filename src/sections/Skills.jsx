import Section from "../components/common/Section.jsx";
import { skills } from "../data/skills.js";

const SKILLS_STYLES = String.raw`.skills-section { background: var(--color-surface); }
.skills-list { border-top: 1px solid var(--color-border); }
.skill-row { display: grid; grid-template-columns: 58px minmax(130px, 0.55fr) 1.45fr; align-items: center; gap: 20px; padding: 27px 0; border-bottom: 1px solid var(--color-border); }
.skill-index { color: var(--color-primary); font-size: 11px; font-weight: 700; }
.skill-row h3 { margin: 0; font: 700 var(--text-lg) var(--font-heading); }
.skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tag { display: inline-flex; min-height: 31px; align-items: center; padding: 0 11px; border: 1px solid var(--color-border); border-radius: 999px; color: var(--color-text-muted); font-size: 11px; }
.skills-note { display: flex; align-items: center; gap: 10px; margin: 26px 0 0; color: var(--color-text-muted); font-size: var(--text-sm); }
.skills-note span { color: var(--color-primary); font-size: var(--text-lg); }
@media (max-width: 680px) {
  .skill-row { grid-template-columns: 30px 1fr; gap: 10px; padding: 20px 0; }
  .skill-row h3 { font-size: var(--text-base); }
  .skill-tags { grid-column: 2; }
}`;

function Skills() {
  return (
    <Section id="skills" eyebrow="My toolkit" title={<>Good work starts with<br /><span className="heading-muted">the right tools.</span></>} className="skills-section">
      <style>{SKILLS_STYLES}</style>
      <div className="skills-list">
        {skills.map((group, index) => (
          <div className="skill-row" key={group.group}>
            <span className="skill-index">0{index + 1}</span>
            <h3>{group.group}</h3>
            <div className="skill-tags">{group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div>
          </div>
        ))}
      </div>
      <p className="skills-note"><span>↗</span> Tools change. Thoughtful problem-solving doesn't.</p>
    </Section>
  );
}

export default Skills;
