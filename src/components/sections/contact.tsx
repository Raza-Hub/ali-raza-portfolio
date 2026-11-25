import { Mail, Phone } from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/brand-icons";
import { profile } from "@/data/portfolio";
import { ContactForm } from "./contact-form";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <Mail size={22} />,
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: `tel:${profile.phone}`,
    icon: <Phone size={22} />,
  },
  {
    label: "WhatsApp",
    value: "Message me",
    href: profile.whatsapp,
    icon: <WhatsAppIcon size={22} />,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Ali Raza",
    href: profile.linkedin,
    icon: <LinkedInIcon size={20} />,
    external: true,
  },
];

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner section-wrap">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>
            Got a project in mind? <em>Let’s talk.</em>
          </h2>
          <p className="contact-lede">
            Tell me a little about what you’re building. I’ll get back to you as soon as I can.
          </p>
          <ul className="channels">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="channel-icon">{channel.icon}</span>
                  <span>
                    <small>{channel.label}</small>
                    {channel.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm email={profile.email} />
      </div>
    </section>
  );
}
