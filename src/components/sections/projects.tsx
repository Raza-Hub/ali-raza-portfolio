import {
  ArrowUpRight,
  PenTool,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, projects, type ProjectIcon } from "@/data/portfolio";

const icons: Record<ProjectIcon, LucideIcon> = {
  workflow: Workflow,
  utensils: UtensilsCrossed,
  truck: Truck,
  bag: ShoppingBag,
  pen: PenTool,
};

export function Projects() {
  return (
    <section className="work section-wrap" id="work">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Things I’ve <em>built</em>
          </>
        }
        intro="Real products used by real businesses. Most are private client systems, so here’s what I did and what changed because of it."
      />

      <div className="project-list">
        {projects.map((project, index) => {
          const Icon = icons[project.icon];
          return (
            <article className={`project theme-${project.theme}`} key={project.name}>
              <div className="project-visual">
                <div className="project-visual-top">
                  <span className="project-icon">
                    <Icon size={28} strokeWidth={1.8} />
                  </span>
                  <span className="project-count">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="project-metric">
                  <b>{project.metric.value}</b>
                  <span>{project.metric.label}</span>
                </div>
                {project.chips && (
                  <ul className="project-chips" aria-label="Some of the integrations">
                    {project.chips.map((chip) => (
                      <li key={chip}>{chip}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="project-info">
                <p className="project-meta">
                  <span>{project.company}</span>
                  <span aria-hidden="true">•</span>
                  <span>{project.role}</span>
                  <span aria-hidden="true">•</span>
                  <span>{project.year}</span>
                </p>
                <h3>{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-desc">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="project-footer">
                  <ul className="tags">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <a
                    className="link-arrow"
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(`About ${project.name}`)}`}
                  >
                    Ask me about it <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
