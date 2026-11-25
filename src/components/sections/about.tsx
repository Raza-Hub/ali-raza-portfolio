import { ArrowUpRight } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

export function About() {
  return (
    <section className="about section-wrap" id="about">
      <div className="about-grid">
        <div>
          <p className="eyebrow">About me</p>
          <h2>
            I like the hard, unglamorous parts of software — and making them <em>feel simple.</em>
          </h2>
        </div>
        <div className="about-text">
          <p>
            I’m Ali, a software engineer from Lahore. For the past five years I’ve been building
            backend platforms, integrations and web apps for food-tech, logistics, e-commerce and
            enterprise automation.
          </p>
          <p>
            Right now I’m at Exact Solution Electronics, where I built 63 integrations for
            ExactFlow, an order management platform, and use LLMs to automate data-heavy workflows.
            I care about clear APIs, honest estimates and code the next developer can understand.
          </p>
          <a className="link-arrow" href={profile.linkedin} target="_blank" rel="noreferrer">
            More on LinkedIn <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <dl className="stats">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
