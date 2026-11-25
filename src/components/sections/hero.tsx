import Image from "next/image";
import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { Sparkle, Squiggle } from "@/components/ui/brand-icons";
import { marquee, profile } from "@/data/portfolio";

export function Hero() {
  return (
    <>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="availability">
            <span className="pulse" aria-hidden="true" />
            Available for freelance &amp; full-time roles
          </p>

          <h1>
            Hi, I’m {profile.firstName}. I build the{" "}
            <span className="highlight">
              <em>backend</em>
              <Squiggle className="highlight-line" />
            </span>{" "}
            that keeps products running.
          </h1>

          <p className="hero-lede">
            Senior Software Engineer with 5+ years turning messy requirements into reliable APIs,
            payment flows and integrations — plus the web apps that sit on top of them.
          </p>

          <div className="hero-actions">
            <a className="btn btn-accent" href="#work">
              See my work <ArrowDownRight size={20} strokeWidth={2.2} />
            </a>
            <a className="btn btn-outline" href={profile.resume} download>
              <Download size={19} strokeWidth={2.2} /> Download CV
            </a>
          </div>
        </div>

        <div className="hero-card-wrap">
          <div className="hero-card">
            <div className="hero-photo">
              {profile.photo ? (
                <Image src={profile.photo} alt={profile.name} fill sizes="360px" priority />
              ) : (
                <span className="hero-initials" aria-hidden="true">
                  AR
                </span>
              )}
            </div>
            <div className="hero-card-body">
              <strong>{profile.name}</strong>
              <span>{profile.role}</span>
              <span className="hero-card-location">
                <MapPin size={16} /> {profile.location}
              </span>
            </div>
          </div>

          <div className="sticker sticker-years">
            <b>5+</b>
            <span>
              years of
              <br />
              experience
            </span>
          </div>
          <div className="sticker sticker-integrations">
            <b>63</b>
            <span>
              integrations
              <br />
              shipped
            </span>
          </div>
          <Sparkle className="hero-spark hero-spark-1" size={28} />
          <Sparkle className="hero-spark hero-spark-2" size={18} />
        </div>
      </section>

      <div className="marquee" aria-label="Technologies I work with">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
              {marquee.map((item) => (
                <span key={item}>
                  {item}
                  <Sparkle size={14} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
