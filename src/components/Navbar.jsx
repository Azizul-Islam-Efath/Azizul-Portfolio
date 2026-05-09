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
        background: scrolled ? "rgba(0,0,0,0.6)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(220,38,38,0.2)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-500"
    >
      {/* LOGO CONTAINER */}
      <div className="relative group cursor-pointer select-none">
        
        {/* ENHANCED RED GLOW FOR VISIBILITY */}
        <div className="absolute inset-0 blur-[40px] opacity-70 bg-red-600/20 rounded-full animate-pulse" />

        {/* INLINE SVG DEFINITION FOR THE EFFECTS */}
        <svg style={{ position: "absolute", width: 0, height: 0 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Liquid Coagulation Filter - Slightly reduced blur for sharper text */}
            <filter id="liquidEffect">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>

            {/* Glossy Inner Highlight - Increased Specular for "Wet" Look */}
            <filter id="glossEffect">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feSpecularLighting in="blur" surfaceScale="7" specularConstant="2" specularExponent="40" lightingColor="#ffffff" result="specOut">
                <fePointLight x="-50" y="-100" z="250" />
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>

        {/* LOGO TEXT - BOLDER AND MORE VISIBLE */}
        <span
          className="
            relative
            font-[1000] 
            text-5xl
            tracking-widest
            uppercase
            text-transparent
            bg-clip-text
            bg-gradient-to-b
            from-red-500
            via-red-700
            to-red-950
            drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]
            transition-all
            duration-300
          "
          style={{
            /* Applying the glossy/liquid filters */
            filter: "url(#liquidEffect) url(#glossEffect)",
            WebkitTextStroke: "1px rgba(255,0,0,0.3)" // Adds a subtle outer edge for definition
          }}
        >
          AZ
          <span className="text-red-600/90 ml-1">.</span>
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
                  font-bold
                  tracking-widest
                  uppercase
                  transition-all
                  duration-300
                  ${isActive ? "text-white" : "text-white/60 hover:text-red-500"}
                `}
              >
                {link}
                <span
                  className={`
                    absolute
                    left-0
                    -bottom-2
                    h-[2.5px]
                    rounded-full
                    transition-all
                    duration-500
                    ${isActive ? `w-full bg-red-600 shadow-[0_0_15px_#ff0000]` : `w-0`}
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
        <span className={`block w-6 h-0.5 bg-red-600 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-red-600 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 right-0 backdrop-blur-2xl bg-black/90 border-b border-red-900/30 flex flex-col py-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`
                px-8
                py-4
                text-left
                uppercase
                font-bold
                tracking-widest
                transition-all
                duration-300
                ${active === link.toLowerCase() ? "text-red-500 bg-red-500/10" : "text-white/70"}
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