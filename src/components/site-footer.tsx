import { ArrowUp } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/brand-icons";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="footer section-wrap">
      <p>
        © {new Date().getFullYear()} {profile.name}. Designed &amp; built in{" "}
        {profile.location.split(",")[0]}.
      </p>
      <div className="footer-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon size={18} />
        </a>
        <a href="#home" className="back-top">
          Back to top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
