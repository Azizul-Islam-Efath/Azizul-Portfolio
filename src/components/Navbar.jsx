import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Projects", "Experience", "Contact"];

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <nav
      style={{
        background: scrolled ? "rgba(0,0,0,0.4)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,0,0,0.12)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-500"
    >
      {/* LOGO WITH INLINE SVG FILTERS FOR EFFECT */}
      <div className="relative group cursor-pointer select-none">
        
        {/* NEW RED GLOW (Replacement for Purple) */}
        <div className="absolute inset-0 blur-3xl opacity-60 bg-red-900/40 rounded-full animate-pulse" />

        {/* INLINE SVG DEFINITION FOR THE EFFECTS */}
        <svg style={{ position: "absolute", width: 0, height: 0 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Liquid Coagulation Filter */}
            <filter id="liquidEffect">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>

            {/* Glossy Inner Highlight Filter */}
            <filter id="glossEffect">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1.5" specularExponent="30" lightingColor="#ff9999" result="specOut">
                <fePointLight x="-50" y="-100" z="200" />
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>

        {/* LOGO TEXT WITH UPDATED STYLING FOR EFFECT */}
        <span
          className="
            relative
            font-black
            text-4xl
            tracking-tight
            uppercase
            text-transparent
            bg-clip-text
            bg-gradient-to-b
            from-red-600
            via-red-900
            to-black
            drop-shadow-[0_0_12px_rgba(220,38,38,0.7)]
            transition-all
            duration-300
          "
          style={{
            /* APPLYING THE INLINE FILTERS TO THE TEXT */
            filter: "url(#liquidEffect) url(#glossEffect)",
          }}
        >
          AZ
          {/* Still text, but styled to match */}
          <span className="text-red-700/80 drop-shadow-none">.</span>
        </span>
      </div>

      {/* DESKTOP NAV */}
      <ul className="hidden md:flex gap-10">
        {NAV_LINKS.map((link) => {
          const isActive = active === link.toLowerCase();

          return (
            <li key={link} className="relative">
              <button
                onClick={() => scrollTo(link)}
                className={`
                  relative
                  text-sm
                  tracking-wide
                  transition-all
                  duration-300
                  ${isActive ? "text-white" : "text-white/70 hover:text-white"}
                `}
              >
                {link}

                {/* ACTIVE UNDERLINE (Updated to Red Theme) */}
                <span
                  className={`
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? `w-full bg-red-600 shadow-[0_0_12px_rgba(255,0,0,0.9)]`
                        : `w-0`
                    }
                  `}
                />
              </button>
            </li>
          );
        })}
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-white flex flex-col gap-1.5"
        onClick={() => setOpen(!open)}
      >
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 right-0 backdrop-blur-xl bg-white/10 border-b border-white/10 flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`
                px-8
                py-3
                text-left
                transition-all
                duration-300
                ${
                  active === link.toLowerCase()
                    ? "text-red-400" // Updated to match theme
                    : "text-white/80 hover:text-white"
                }
              `}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}