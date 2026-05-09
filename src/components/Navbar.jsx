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
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      style={{
        background: scrolled ? "rgba(0,0,0,0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(220, 38, 38, 0.2)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-500 group/nav"
    >
      {/* ANIMATION & FILTER DEFINITIONS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blood-fall {
          0%   { transform: translateY(0) scale(1);   opacity: 0;   }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(50px) scale(0.4); opacity: 0; }
        }
        .blood-drop {
          position: absolute;
          background: #8b0000;
          border-radius: 50%;
          filter: blur(1px);
          animation: blood-fall infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }

        /* When any sibling nav item is hovered, fade non-hovered + non-active items */
        .nav-list:has(.nav-btn:hover) .nav-btn:not(:hover):not(.nav-btn--active) {
          opacity: 0.25;
          color: rgba(255,255,255,0.25);
        }
        .nav-btn {
          transition: opacity 0.3s, color 0.3s;
        }
      `}} />

      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="ultraBloodyGloss">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.8" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="goo" />
          <feSpecularLighting in="goo" surfaceScale="8" specularConstant="1.8" specularExponent="30" lightingColor="#ffcccc" result="spec">
            <fePointLight x="60" y="-50" z="180" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>
      </svg>

      {/* LOGO */}
      <div className="relative group cursor-pointer select-none">
        <div className="absolute inset-0 blur-[60px] opacity-30 bg-red-700 rounded-full animate-pulse pointer-events-none" />
        <div className="relative flex items-center">
          <span
            className="font-[1000] text-5xl tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-600 via-red-950 to-black"
            style={{ filter: "url(#ultraBloodyGloss)" }}
          >
            AZ
          </span>
          <span className="text-red-700 font-[1000] text-5xl">.</span>
          <div className="blood-drop w-2 h-2 left-[10px] bottom-0"        style={{ animationDuration: "2.5s", animationDelay: "0.2s"  }} />
          <div className="blood-drop w-[6px] h-[6px] left-[25px] bottom-[-5px]"  style={{ animationDuration: "3.2s", animationDelay: "1.5s"  }} />
          <div className="blood-drop w-[7px] h-[7px] left-[45px] bottom-0"        style={{ animationDuration: "2.8s", animationDelay: "0.8s"  }} />
          <div className="blood-drop w-[5px] h-[5px] left-[65px] bottom-[-2px]"  style={{ animationDuration: "3.5s", animationDelay: "2.2s"  }} />
          <div className="blood-drop w-[4px] h-[4px] left-[80px] bottom-[-8px]"  style={{ animationDuration: "2.2s", animationDelay: "0.5s"  }} />
        </div>
      </div>

      {/* DESKTOP NAV */}
      <ul className="nav-list hidden md:flex gap-10">
        {NAV_LINKS.map((link) => {
          const isActive = active === link.toLowerCase();
          return (
            <li key={link} className="relative">
              <button
                onClick={() => scrollTo(link)}
                className={`nav-btn ${isActive ? "nav-btn--active" : ""} text-sm font-bold tracking-widest uppercase ${
                  isActive
                    ? "text-white opacity-100"
                    : "text-white/50 hover:text-red-400 hover:opacity-100"
                }`}
              >
                {link}
                <span className={`absolute left-0 -bottom-2 h-[2px] transition-all duration-500 ${
                  isActive ? "w-full bg-red-600 shadow-[0_0_12px_#ff0000]" : "w-0"
                }`} />
              </button>
            </li>
          );
        })}
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-white flex flex-col gap-1.5 z-[60]"
        onClick={() => setOpen(!open)}
      >
        <span className={`block w-6 h-0.5 bg-red-600 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-red-600 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 z-[55] ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className={`text-2xl uppercase tracking-widest font-black transition-colors ${
              active === link.toLowerCase() ? "text-red-600" : "text-white/70 hover:text-white"
            }`}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}