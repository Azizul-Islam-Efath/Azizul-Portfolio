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
        background: scrolled ? "rgba(2, 2, 5, 0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(153, 27, 27, 0.2)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-3 flex items-center justify-between transition-all duration-500"
    >
      {/* HIGH-ACCURACY BLOODY GLOSSY LOGO */}
      <div className="relative group cursor-pointer select-none flex items-center">
        
        {/* EXTERNAL RED RADIANCE */}
        <div className="absolute inset-0 blur-[35px] opacity-50 bg-red-600/30 rounded-full animate-pulse pointer-events-none" />

        <svg 
          width="150" 
          height="75" 
          viewBox="0 0 240 120" 
          className="relative drop-shadow-[0_0_20px_rgba(185,28,28,0.8)] transition-transform duration-500 hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Deep Blood Gradient */}
            <linearGradient id="bloodFlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: "#ff1a1a", stopOpacity: 1}} />
              <stop offset="40%" style={{stopColor: "#990000", stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: "#330000", stopOpacity: 1}} />
            </linearGradient>

            {/* Glossy Surface Filter */}
            <filter id="wetGloss" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur" />
              <feSpecularLighting in="blur" surfaceScale="6" specularConstant="1.2" specularExponent="35" lightingColor="#ffffff" result="spec">
                <fePointLight x="40" y="30" z="150" />
              </feSpecularLighting>
              <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
              <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
            </filter>
          </defs>

          {/* BRACKETS - Refined for "ChatGPT Image May 8, 2026, 10_09_35 PM.png" style */}
          <path d="M35 45 L15 60 L35 75" fill="none" stroke="#660000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M205 45 L225 60 L205 75" fill="none" stroke="#660000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

          {/* MAIN LETTERING GROUP */}
          <g filter="url(#wetGloss)">
            {/* ACCURATE 'A' - Sharp angles like watermarked_img_13803687532294525939.png */}
            <path d="M45 100 L95 25 L125 25 L100 100 H80 L88 75 H68 L60 100 Z" fill="url(#bloodFlow)" />
            <path d="M90 62 L94 48 L73 48 L78 62 Z" fill="#330000" opacity="0.4" />

            {/* ACCURATE 'Z' - Slanted and aggressive */}
            <path d="M115 25 H185 L185 38 L135 88 H185 V100 H110 V88 L160 38 H115 Z" fill="url(#bloodFlow)" />
            
            {/* LIQUID DRIP DETAIL */}
            <path d="M52 100 Q56 115 60 100" fill="#990000" />
            <circle cx="56" cy="102" r="3.5" fill="#770000">
               <animate attributeName="cy" from="102" to="135" dur="4s" repeatCount="indefinite" />
               <animate attributeName="opacity" from="1" to="0" dur="4s" repeatCount="indefinite" />
            </circle>

            {/* SECONDARY DRIP UNDER 'Z' */}
            <path d="M165 100 Q168 108 171 100" fill="#990000" />
          </g>
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
                className={`text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 ${isActive ? "text-white" : "text-white/40 hover:text-red-500"}`}
              >
                {link}
                {isActive && (
                  <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_12px_#ff0000]" />
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`block w-full h-0.5 bg-red-700 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-full h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-full h-0.5 bg-red-700 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-red-900/40 flex flex-col py-6 animate-in fade-in slide-in-from-top-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`px-8 py-4 text-left uppercase text-sm tracking-widest ${active === link.toLowerCase() ? "text-red-500 bg-white/5 border-l-4 border-red-600" : "text-white/60"}`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}