import { Award, Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section className="experience section-wrap" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Where I’ve <em>worked</em>
          </>
        }
      />
      <div className="experience-grid">
        <ol className="timeline">
          {experience.map((job) => (
            <li className="job" key={job.company}>
              <span className="job-dot" aria-hidden="true">
                <Briefcase size={18} strokeWidth={2} />
              </span>
              <div className="job-head">
                <div>
                  <h3>{job.title}</h3>
                  <p className="job-company">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className={`job-period${job.current ? " is-current" : ""}`}>
                  {job.period}
                </span>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <aside className="edu-card">
          <span className="edu-icon">
            <GraduationCap size={26} strokeWidth={1.9} />
          </span>
          <p className="eyebrow">Education</p>
          <h3>{education.degree}</h3>
          <p>{education.school}</p>
          <p className="edu-period">{education.period}</p>
          <hr />
          <p className="edu-cert">
            <Award size={20} strokeWidth={1.9} />
            <span>{education.certification}</span>
          </p>
        </aside>
      </div>
    </section>
  );
}
