import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section className="skills section-wrap" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title={
          <>
            My <em>toolbox</em>
          </>
        }
        intro="TypeScript and Node.js are home base. Around them is the stack I’ve used in production, not just in tutorials."
      />
      <div className="skill-table">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
