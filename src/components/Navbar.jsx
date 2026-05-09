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
        background: scrolled ? "rgba(5, 5, 10, 0.6)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(220, 38, 38, 0.15)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-4 flex items-center justify-between transition-all duration-500"
    >
      {/* BLOODY GLOSSY LOGO */}
      <div className="relative group cursor-pointer select-none flex items-center">
        
        {/* DEEP RED GLOW */}
        <div className="absolute inset-0 blur-[40px] opacity-60 bg-red-900/40 rounded-full animate-pulse pointer-events-none" />

        <svg 
          width="140" 
          height="70" 
          viewBox="0 0 200 120" 
          className="relative drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] transition-transform duration-500 hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Liquid Blood Gradient */}
            <linearGradient id="bloodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#ff3e3e", stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: "#8b0000", stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: "#4a0404", stopOpacity: 1}} />
            </linearGradient>

            {/* Glossy Overlay Filter */}
            <filter id="gloss">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
              <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.9" specularExponent="25" lightingColor="#ff9999" result="specOut">
                <fePointLight x="-50" y="-100" z="200" />
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
              <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
            </filter>
          </defs>

          <g filter="url(#gloss)">
            {/* Coding Brackets with Red Tint */}
            <path d="M40 50 L25 60 L40 70" fill="none" stroke="#8b0000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
            <path d="M160 50 L175 60 L160 70" fill="none" stroke="#8b0000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>

            {/* Stylized 'A' */}
            <path d="M55 80 L85 40 L95 40 L80 80 Z" fill="url(#bloodGradient)" />
            <path d="M78 65 L105 65 L100 72 L75 72 Z" fill="url(#bloodGradient)" />

            {/* Stylized 'Z' */}
            <path d="M100 40 L155 40 L155 48 L115 72 L155 72 L155 80 L100 80 L100 72 L140 48 L100 48 Z" fill="url(#bloodGradient)" />
            
            {/* Animated Blood Drip */}
            <circle cx="58" cy="80" r="4" fill="#8b0000">
               <animate attributeName="cy" from="80" to="110" dur="3s" repeatCount="indefinite" />
               <animate attributeName="opacity" from="1" to="0" dur="3s" repeatCount="indefinite" />
            </circle>
            <path d="M54 80 Q58 95 62 80" fill="#8b0000" />
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
                className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${isActive ? "text-white" : "text-white/50 hover:text-red-400"}`}
              >
                {link}
                {isActive && (
                  <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-red-600 shadow-[0_0_10px_#ff0000] rounded-full" />
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button className="md:hidden text-white flex flex-col gap-1.5" onClick={() => setOpen(!open)}>
        <span className={`block w-6 h-0.5 bg-red-600 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-red-600 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-red-900/30 flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`px-8 py-4 text-left uppercase tracking-widest ${active === link.toLowerCase() ? "text-red-500 bg-red-500/10" : "text-white/70"}`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}