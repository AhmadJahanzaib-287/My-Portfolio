import Section from "../components/common/Section.jsx";
import Card from "../components/common/Card.jsx";
import Tag from "../components/common/Tag.jsx";
import { projects } from "../data/projects.js";

const PROJECTS_STYLES = String.raw`.project-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.projects-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
.project-card { overflow: hidden; }
.project-card:first-child { grid-column: 1 / -1; }
.project-visual { position: relative; display: grid; min-height: 260px; place-items: center; overflow: hidden; padding: 32px; background: var(--color-firozi-50); }
.project-card:first-child .project-visual { min-height: 340px; }
.visual-editorial { background: #E8ECE7; }
.visual-commerce { background: #E7EEEE; }
.browser-bar { position: absolute; z-index: 2; top: 0; left: 0; display: flex; width: 100%; height: 32px; align-items: center; gap: 5px; padding: 0 12px; border-bottom: 1px solid rgba(31, 41, 51, 0.1); background: rgba(250, 249, 246, 0.8); }
.browser-bar i { width: 6px; aspect-ratio: 1; border-radius: 50%; background: #BCC8C7; }
.browser-bar span { position: absolute; left: 50%; color: var(--color-text-muted); font-size: 8px; transform: translateX(-50%); }
.browser-bar b { margin-left: auto; color: var(--color-text-muted); font-size: 9px; }
.mock-screen { position: relative; width: min(100%, 560px); min-height: 170px; overflow: hidden; border: 1px solid rgba(31, 41, 51, 0.1); border-radius: 6px; background: var(--color-surface); box-shadow: 0 20px 55px rgba(31, 41, 51, 0.14); }
.project-card:first-child .mock-screen { min-height: 230px; }
.mock-sidebar { position: absolute; inset: 0 auto 0 0; display: flex; width: 44px; flex-direction: column; align-items: center; gap: 16px; padding-top: 22px; background: #F1F5F1; }
.mock-sidebar b { color: var(--color-primary); font: 800 13px var(--font-heading); }
.mock-sidebar span { width: 10px; height: 3px; border-radius: 3px; background: #C9D8D3; }
.mock-main { padding: 25px 22px 15px 64px; }
.mock-main small, .editorial-mock small, .commerce-mock small { color: var(--color-primary); font-size: 7px; font-weight: 700; letter-spacing: 0.1em; }
.mock-main > strong { display: block; margin-top: 6px; font: 700 17px var(--font-heading); }
.mock-stats { display: flex; gap: 9px; margin-top: 14px; }
.mock-stats i { display: grid; flex: 1; gap: 5px; padding: 8px; border: 1px solid var(--color-border); border-radius: 4px; color: var(--color-text-muted); font-size: 7px; font-style: normal; }
.mock-stats b { color: var(--color-text); font: 700 12px var(--font-heading); }
.chart-bars { display: flex; height: 44px; align-items: end; gap: 7px; margin-top: 10px; border-bottom: 1px solid var(--color-border); }
.chart-bars i { flex: 1; height: 40%; border-radius: 3px 3px 0 0; background: var(--color-firozi-200); }
.chart-bars i:nth-child(3n) { height: 76%; background: var(--color-primary); }
.chart-bars i:nth-child(2n) { height: 55%; }
.editorial-mock { display: flex; min-height: 170px; flex-direction: column; justify-content: center; padding: 22px 32px; }
.editorial-mock > div { margin: 14px 0; font: 700 32px/0.98 var(--font-heading); }
.editorial-mock > span { color: var(--color-text-muted); font-size: 7px; letter-spacing: 0.06em; }
.editorial-mock > i { position: absolute; top: 26px; right: 30px; width: 68px; aspect-ratio: 1; border: 1px solid var(--color-firozi-200); border-radius: 50%; }
.commerce-mock { padding: 27px 30px; }
.commerce-mock > strong { display: block; margin: 14px 0; font: 700 23px/1.05 var(--font-heading); }
.commerce-mock > strong span { color: var(--color-primary); }
.commerce-mock > div { display: flex; gap: 12px; }
.commerce-mock > div i { display: grid; gap: 4px; color: var(--color-text-muted); font-size: 7px; font-style: normal; }
.commerce-mock > div b { color: var(--color-primary); font: 700 10px var(--font-heading); }
.project-details { padding: 24px; }
.project-title-row { display: flex; align-items: start; justify-content: space-between; gap: 16px; }
.project-number { color: var(--color-primary); font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
.project-title-row h3 { margin: 6px 0 0; font: 700 var(--text-xl) var(--font-heading); }
.project-arrow { display: grid; width: 36px; aspect-ratio: 1; flex: 0 0 auto; place-items: center; border: 1px solid var(--color-border); border-radius: 50%; color: var(--color-primary); transition: background 180ms ease, color 180ms ease; }
.project-arrow:hover { background: var(--color-primary); color: var(--color-on-primary); }
.project-problem, .project-outcome { margin: 16px 0 0; color: var(--color-text-muted); font-size: var(--text-sm); line-height: 1.65; }
.project-outcome { color: var(--color-text); }
.project-bottom { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 21px; }
.code-link { flex: 0 0 auto; color: var(--color-primary); font-size: 11px; font-weight: 700; }
.projects-footnote { display: flex; justify-content: space-between; gap: 20px; margin-top: 22px; color: var(--color-text-muted); font-size: var(--text-sm); }
.projects-footnote a { color: var(--color-primary); font-weight: 700; }
@media (max-width: 900px) {
  .projects-grid { gap: 16px; }
  .project-details { padding: 20px; }
}
@media (max-width: 680px) {
  .projects-grid { grid-template-columns: 1fr; }
  .project-card:first-child { grid-column: auto; }
  .project-visual, .project-card:first-child .project-visual { min-height: 230px; padding: 25px 17px; }
  .mock-screen { min-height: 155px; }
  .project-card:first-child .mock-screen { min-height: 190px; }
  .mock-main { padding-right: 10px; }
  .mock-stats { gap: 5px; }
  .mock-stats i { padding: 6px; }
  .mock-stats b { font-size: 10px; }
  .project-details { padding: 18px; }
  .project-title-row h3 { font-size: var(--text-lg); }
  .project-bottom { align-items: start; }
  .projects-footnote { flex-direction: column; gap: 8px; }
}
.chart-grid { display: grid; height: 52px; grid-template-columns: repeat(7, 1fr); align-items: end; gap: 4px; margin-top: 8px; border-bottom: 1px solid #E6E8EC; background: repeating-linear-gradient(to bottom, transparent 0 12px, #EFF1F3 13px); }
.chart-grid i { height: 32%; border-radius: 2px 2px 0 0; background: var(--color-firozi-200); }
.chart-grid i:nth-child(3n) { height: 78%; background: var(--color-primary); }
.chart-grid i:nth-child(4n) { height: 58%; }
.chart-days { display: flex; justify-content: space-between; margin-top: 4px; color: #9299A3; font-size: 5px; }
.task-dot { width: 6px; aspect-ratio: 1; flex: 0 0 auto; border-radius: 50%; background: #E6B45C; }
.task-done { background: var(--color-primary); }
.task-review { background: #8D9AAA; }
@media (max-width: 680px) {
  .chart-grid { height: 34px; gap: 2px; margin-top: 4px; }
  .chart-days { font-size: 3px; }
  .task-dot { width: 4px; }
}`;

function ProjectVisual({ variant }) {
  return (
    <div className={`project-visual visual-${variant}`} aria-hidden="true">
      <div className="browser-bar"><i></i><i></i><i></i><span>studio.preview</span><b>•••</b></div>
      <div className="mock-screen">
        {variant === "analytics" && <><div className="mock-sidebar"><b>n.</b><span></span><span></span><span></span><span></span></div><div className="mock-main"><small>OVERVIEW / THIS MONTH</small><strong>Good morning, Ahmad.</strong><div className="mock-stats"><i>Revenue <b>$48.2k</b></i><i>Growth <b>+18.6%</b></i><i>Users <b>12,480</b></i></div><div className="chart-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></>}
        {variant === "editorial" && <div className="editorial-mock"><small>THE FIELD JOURNAL &nbsp; / &nbsp; ISSUE 04</small><div>On finding<br />a slower rhythm.</div><span>WORDS BY AHMAD JAHANZAIB &nbsp; · &nbsp; 8 MIN READ</span><i></i></div>}
        {variant === "commerce" && <div className="commerce-mock"><small>RELAY / SYSTEM HEALTH</small><strong>All systems<br />operational<span>.</span></strong><div><i>API LATENCY <b>42ms</b></i><i>SUCCESS RATE <b>99.98%</b></i><i>QUEUE DEPTH <b>128</b></i></div></div>}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work · 2022—2025" title={<>A few things I've<br /><span className="heading-muted">put into the world.</span></>} className="projects-section">
      <style>{PROJECTS_STYLES}</style>
      <div className="projects-grid">
        {projects.map((project) => (
          <Card className={`project-card project-${project.visual}`} key={project.id}>
            <ProjectVisual variant={project.visual} />
            <div className="project-details">
              <div className="project-title-row"><div><span className="project-number">{project.number} / {project.category}</span><h3>{project.title}</h3></div><a className="project-arrow" href={project.live} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>↗</a></div>
              <p className="project-problem">{project.problem}</p><p className="project-outcome">{project.outcome}</p>
              <div className="project-bottom"><div className="project-tags">{project.tech.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div><a className="code-link" href={project.code} target="_blank" rel="noreferrer">Code ↗</a></div>
            </div>
          </Card>
        ))}
      </div>
      <div className="projects-footnote"><span>More good work is in progress.</span><a href="mailto:hello@ahmadjahanzaib.dev">Ask me about it ↗</a></div>
    </Section>
  );
}

export default Projects;
