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
        background: scrolled
          ? "rgba(10, 10, 20, 0.4)" // Darker tint for better contrast when scrolled
          : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255, 165, 0, 0.15)" // Orange tint on border
          : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-4 flex items-center justify-between transition-all duration-500"
    >

      {/* NEW AESTHETIC LOGO */}
      <div className="relative group cursor-pointer select-none flex items-center">
        
        {/* AMBER GLOW (Matches Right Globe) */}
        <div className="absolute inset-0 blur-3xl opacity-40 bg-orange-500/30 rounded-full animate-pulse pointer-events-none" />

        {/* LOGO SVG */}
        <svg 
          width="130" 
          height="55" 
          viewBox="0 0 200 100" 
          className="relative drop-shadow-[0_0_12px_rgba(251,146,60,0.6)] hover:scale-105 transition-transform duration-300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient sampled from the globe in ChatGPT Image May 9, 2026, 09_41_37 PM.png */}
            <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#fde68a", stopOpacity: 1}} /> {/* Light Amber */}
              <stop offset="50%" style={{stopColor: "#fb923c", stopOpacity: 1}} /> {/* Mid Orange */}
              <stop offset="100%" style={{stopColor: "#92400e", stopOpacity: 1}} /> {/* Deep Bronze */}
            </linearGradient>
          </defs>

          {/* Coding Brackets < > */}
          <path d="M40 40 L25 50 L40 60" fill="none" stroke="url(#globeGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M160 40 L175 50 L160 60" fill="none" stroke="url(#globeGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>

          {/* Stylized 'A' */}
          <path d="M55 70 L85 30 L95 30 L80 70 Z" fill="url(#globeGradient)" />
          <path d="M78 55 L105 55 L100 62 L75 62 Z" fill="url(#globeGradient)" />

          {/* Stylized 'Z' */}
          <path d="M100 30 L155 30 L155 38 L115 62 L155 62 L155 70 L100 70 L100 62 L140 38 L100 38 Z" fill="url(#globeGradient)" />
        </svg>
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
                  font-medium
                  tracking-widest
                  uppercase
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {link}

                {/* ACTIVE UNDERLINE (Matches Logo Theme) */}
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
                        ? `
                          w-full
                          bg-gradient-to-r
                          from-amber-200
                          via-orange-500
                          to-amber-700
                          shadow-[0_0_15px_rgba(251,146,60,0.8)]
                        `
                        : `
                          w-0
                        `
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
        className="md:hidden text-white flex flex-col gap-1.5 p-2 rounded-lg bg-white/5"
        onClick={() => setOpen(!open)}
      >
        <span className={`block w-6 h-0.5 bg-orange-400 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-orange-400 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 right-0 backdrop-blur-2xl bg-black/80 border-b border-orange-500/20 flex flex-col py-4 animate-in slide-in-from-top duration-300">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`
                px-8
                py-4
                text-left
                uppercase
                tracking-tighter
                transition-all
                duration-300
                ${
                  active === link.toLowerCase()
                    ? "text-orange-400 bg-white/5"
                    : "text-white/70 hover:text-white"
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