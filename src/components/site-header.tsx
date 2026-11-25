"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["Experience", "#experience"],
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`topbar${scrolled ? " is-scrolled" : ""}`}>
      <div className="topbar-inner">
        <a className="brand" href="#home" aria-label="Ali Raza, back to top">
          <span className="brand-mark">AR</span>
          <span className="brand-name">Ali Raza</span>
        </a>

        <nav
          className={`nav${isOpen ? " is-open" : ""}`}
          id="main-nav"
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn btn-dark nav-cta" href="#contact" onClick={() => setIsOpen(false)}>
            Let’s talk <ArrowUpRight size={18} strokeWidth={2.2} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
