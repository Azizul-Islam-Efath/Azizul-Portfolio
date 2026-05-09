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
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Closes mobile menu after click
  };

  return (
    <nav
      style={{
        background: scrolled ? "rgba(0,0,0,0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(220, 38, 38, 0.2)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-500"
    >
      {/* 1. ANIMATION & FILTER DEFINITIONS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blood-drip-anim {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 0.8; }
          100% { transform: translateY(40px) scale(0.6); opacity: 0; }
        }
        .blood-drip-particle {
          animation: blood-drip-anim 3s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }
      `}} />

      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="bloodyGloss">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feSpecularLighting in="goo" surfaceScale="6" specularConstant="1.5" specularExponent="35" lightingColor="#ffffff" result="spec">
            <fePointLight x="40" y="-40" z="150" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>
      </svg>

      {/* 2. LOGO WITH BLOODY EFFECT */}
      <div className="relative group cursor-pointer select-none">
        <div className="absolute inset-0 blur-3xl opacity-30 bg-red-600 rounded-full animate-pulse pointer-events-none" />
        
        <div className="relative flex items-center">
          <span
            className="font-[1000] text-5xl tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-800 to-black"
            style={{ filter: "url(#bloodyGloss)" }}
          >
            AZ
          </span>
          <span className="text-red-600 font-black text-5xl">.</span>
          
          {/* DRIPPING ANIMATION ELEMENT */}
          <div className="absolute left-4 bottom-0 w-[6px] h-[6px] bg-red-700 rounded-full blood-drip-particle" />
        </div>
      </div>

      {/* 3. DESKTOP NAV (FIXED ACTIVE ERROR) */}
      <ul className="hidden md:flex gap-10">
        {NAV_LINKS.map((link) => {
          const isActive = active === link.toLowerCase();
          return (
            <li key={link} className="relative">
              <button
                onClick={() => scrollTo(link)}
                className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                  isActive ? "text-white" : "text-white/50 hover:text-red-500"
                }`}
              >
                {link}
                {/* ACTIVE UNDERLINE */}
                <span className={`absolute left-0 -bottom-2 h-[2px] transition-all duration-500 ${
                  isActive ? "w-full bg-red-600 shadow-[0_0_10px_#ff0000]" : "w-0"
                }`} />
              </button>
            </li>
          );
        })}
      </ul>

      {/* 4. MOBILE MENU BUTTON (FIXED CLOSE ERROR) */}
      <button
        className="md:hidden text-white flex flex-col gap-1.5 z-[60]"
        onClick={() => setOpen(!open)}
      >
        <span className={`block w-6 h-0.5 bg-red-600 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-red-600 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* 5. MOBILE MENU (FIXED VISIBILITY) */}
      <div className={`absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className={`text-2xl uppercase tracking-widest font-black ${
              active === link.toLowerCase() ? "text-red-600" : "text-white/70"
            }`}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}