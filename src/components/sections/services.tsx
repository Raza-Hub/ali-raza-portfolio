import {
  Bot,
  Check,
  Cloud,
  LayoutDashboard,
  Plug,
  Server,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { services, type ServiceIcon } from "@/data/portfolio";

const icons: Record<ServiceIcon, LucideIcon> = {
  server: Server,
  plug: Plug,
  layout: LayoutDashboard,
  cloud: Cloud,
  bot: Bot,
  users: Users,
};

export function Services() {
  return (
    <section className="services section-wrap" id="services">
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            How I can <em>help you</em>
          </>
        }
        intro="Whether you need a new backend, a tricky integration finished, or someone to steady a growing codebase, this is the work I do best."
      />
      <div className="service-grid">
        {services.map((service, index) => {
          const Icon = icons[service.icon];
          return (
            <article className="service-card" key={service.title}>
              <div className="service-top">
                <span className={`service-icon tone-${index % 6}`}>
                  <Icon size={26} strokeWidth={1.9} />
                </span>
                <span className="service-num">0{index + 1}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>
                    <Check size={17} strokeWidth={2.6} /> {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
