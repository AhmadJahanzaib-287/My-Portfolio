import Section from "../components/common/Section.jsx";

/* ---- Chhote icons (har card ka apna icon) ---- */
const IC = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

const ICONS = {
  monitor: (
    <svg {...IC}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="16" x2="12" y2="20" />
    </svg>
  ),
  server: (
    <svg {...IC}>
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <line x1="7" y1="6.5" x2="7.01" y2="6.5" />
      <line x1="7" y1="17.5" x2="7.01" y2="17.5" />
    </svg>
  ),
  database: (
    <svg {...IC}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  branch: (
    <svg {...IC}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="8" r="2.5" />
      <path d="M6 8.5v7" />
      <path d="M18 10.5c0 4-6 3-11 6" />
    </svg>
  ),
  layers: (
    <svg {...IC}>
      <polygon points="12 3 2 8 12 13 22 8 12 3" />
      <polyline points="2 13 12 18 22 13" />
      <polyline points="2 17.5 12 22.5 22 17.5" />
    </svg>
  ),
  cloud: (
    <svg {...IC}>
      <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5H7z" />
    </svg>
  ),
  plug: (
    <svg {...IC}>
      <path d="M9 3v5" />
      <path d="M15 3v5" />
      <path d="M7 8h10v3a5 5 0 0 1-10 0V8z" />
      <path d="M12 16v5" />
    </svg>
  ),
};

/* ---- Skills ka data: yahan se apne skills badlo ----
   wide: true      -> card bara (doguna chaura) dikhta hai
   featured: true  -> icon ka dabba bhara hua (dark firozi) dikhta hai
   Card ke kone wala number khud ginti se banta hai (items ki tadad). */
const SKILL_GROUPS = [
  {
    id: "frontend",
    icon: "monitor",
    title: "Frontend",
    description: "Responsive, fast interfaces built with React, with clean components and careful details.",
    items: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Responsive UI", "REST API integration", "UI performance"],
    wide: true,
  },
  {
    id: "backend",
    icon: "server",
    title: "Backend",
    description: "REST APIs, authentication and server logic.",
    items: ["Node.js", "Express.js", "REST APIs", "JWT auth", "Middleware"],
  },
  {
    id: "databases",
    icon: "database",
    title: "Databases",
    description: "Storing and shaping data the right way.",
    items: ["MongoDB", "Mongoose", "Data modelling"],
  },
  {
    id: "tools",
    icon: "branch",
    title: "Tools & Workflow",
    description: "Version control and everyday tools that keep work organised.",
    items: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
  {
    id: "architecture",
    icon: "layers",
    title: "Architecture",
    description: "Codebases that stay clean as they grow.",
    items: ["Component design", "Feature-wise modules", "Reusable hooks", "Clean code"],
  },
  {
    id: "cloud",
    icon: "cloud",
    title: "Cloud & Deployment",
    description: "Getting projects online: deploying, configuring and keeping them running.",
    items: ["Vercel", "AWS basics", "Environment variables", "CI/CD basics", "Domain setup"],
    wide: true,
    featured: true,
  },
  {
    id: "integrations",
    icon: "plug",
    title: "Integrations",
    description: "Connecting outside services into products.",
    items: ["Third-party APIs", "Payments", "Maps", "Cloudinary uploads"],
  },
];

const SKILLS_STYLES = String.raw`
/* ---- Section ka background ---- */
.skills-section {
  position: relative;
  background: var(--color-firozi-50);
}

.skills-intro {
  max-width: 520px;
  margin: 0 0 40px;
  color: var(--color-text-muted);
  font-size: 17px;
  line-height: 1.7;
}

/* ---- Grid: 6 hisse, normal card 2 hisse, wide card 4 hisse ---- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 24px;
}

/* ---- Card ---- */
.skill-card {
  position: relative;
  grid-column: span 2;
  overflow: hidden;
  padding: 30px 30px 34px;
  border: 1px solid rgba(15, 118, 110, 0.12);
  border-radius: 30px;
  background: var(--color-surface, #FFFFFF);
  box-shadow: 0 14px 40px rgba(15, 118, 110, 0.07);
  transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
}

.skill-card.is-wide {
  grid-column: span 4;
}

.skill-card:hover {
  border-color: rgba(15, 118, 110, 0.35);
  box-shadow: 0 24px 54px rgba(15, 118, 110, 0.16);
  transform: translateY(-5px);
}

/* Kone ka bara gol (reference jaisa) */
.skill-card::before {
  content: "";
  position: absolute;
  top: -78px;
  right: -78px;
  width: 220px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-firozi-100, #CFF1ED);
  opacity: 0.7;
  transition: transform 400ms ease;
}

.skill-card:hover::before {
  transform: scale(1.12);
}

/* Kone wala number (items ki tadad) */
.skill-count {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 24px;
  color: var(--color-primary);
  font: italic 400 46px/1 Georgia, serif;
  opacity: 0.8;
}

/* ---- Card ka upar wala hissa: icon + title + description ---- */
.skill-head {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding-right: 76px;
}

.skill-icon {
  display: grid;
  flex: none;
  place-items: center;
  width: 64px;
  aspect-ratio: 1;
  border-radius: 20px;
  background: var(--color-firozi-100, #CFF1ED);
  color: var(--color-primary);
}

.skill-icon svg {
  width: 28px;
  height: 28px;
}

.skill-card.is-featured .skill-icon {
  background: var(--color-primary);
  box-shadow: 0 10px 22px rgba(15, 118, 110, 0.35);
  color: #FFFFFF;
}

.skill-title {
  margin: 0 0 6px;
  font: 800 26px/1.15 var(--font-heading);
}

.skill-desc {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 16px;
  line-height: 1.6;
}

/* ---- Tags (pill) ---- */
.skill-tags {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 26px 0 0;
  padding: 0;
  list-style: none;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 20px;
  border: 1px solid var(--color-border, #E1E4E8);
  border-radius: 999px;
  background: var(--color-firozi-50);
  color: var(--color-text);
  font: 500 15px var(--font-body);
  transition: background 200ms ease, border-color 200ms ease, color 200ms ease;
}

.skill-tag:hover {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: #FFFFFF;
}

/* ---- Neeche wali line ---- */
.skills-note {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 30px 0 0;
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

.skills-note span {
  color: var(--color-primary);
  font-size: var(--text-lg);
}

@media (prefers-reduced-motion: reduce) {
  .skill-card,
  .skill-card::before,
  .skill-tag {
    transition: none;
  }
}

/* ---- Tablet (1024px se kam): 2 column ---- */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .skill-card {
    grid-column: span 1;
  }

  .skill-card.is-wide,
  .skill-card:last-child {
    grid-column: span 2;
  }
}

/* ---- Mobile (680px se kam): ek column ---- */
@media (max-width: 680px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .skill-card,
  .skill-card.is-wide,
  .skill-card:last-child {
    grid-column: span 1;
  }

  .skill-card {
    padding: 22px 20px 26px;
    border-radius: 26px;
  }

  .skill-count {
    top: 16px;
    right: 18px;
    font-size: 34px;
  }

  .skill-head {
    gap: 14px;
    padding-right: 54px;
  }

  .skill-icon {
    width: 52px;
    border-radius: 16px;
  }

  .skill-icon svg {
    width: 24px;
    height: 24px;
  }

  .skill-title {
    font-size: 22px;
  }

  .skill-desc {
    font-size: 15px;
  }

  .skill-tags {
    gap: 8px;
    margin-top: 20px;
  }

  .skill-tag {
    min-height: 40px;
    padding: 0 16px;
    font-size: 14px;
  }
}`;

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="My toolkit"
      title={<>Good work starts with<br /><span className="heading-muted">the right tools.</span></>}
      className="skills-section"
    >
      <style>{SKILLS_STYLES}</style>

      <p className="skills-intro">
        The tools and technologies I work with, grouped so you can see exactly where each one fits.
      </p>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <article
            className={`skill-card${group.wide ? " is-wide" : ""}${group.featured ? " is-featured" : ""}`}
            key={group.id}
          >
            <span className="skill-count" aria-hidden="true">
              {String(group.items.length).padStart(2, "0")}
            </span>

            <div className="skill-head">
              <span className="skill-icon">{ICONS[group.icon]}</span>
              <div>
                <h3 className="skill-title">{group.title}</h3>
                <p className="skill-desc">{group.description}</p>
              </div>
            </div>

            <ul className="skill-tags">
              {group.items.map((item) => (
                <li className="skill-tag" key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="skills-note"><span>↗</span> Tools change. Thoughtful problem-solving doesn't.</p>
    </Section>
  );
}

export default Skills;