import { useState, useEffect } from "react";

// The section names you requested
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
    const targetId = id === "Experience" ? "experience" : id.toLowerCase();
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-6 flex items-center justify-between transition-all duration-500 bg-transparent"
    >
      {/* YOUR ORIGINAL LOGO EFFECTS */}
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

      {/* LEFT: YOUR ORIGINAL LOGO */}
      <div className="flex-1">
        <div className="relative group cursor-pointer select-none w-fit px-4 py-2 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-md border border-transparent hover:border-white/10">
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
            <div className="blood-drop w-[6px] h-[6px] left-[65px] bottom-[-2px]"  style={{ animationDuration: "3.5s", animationDelay: "2.2s"  }} />
          </div>
        </div>
      </div>

      {/* CENTER: GLOSSY PILL NAV */}
      <div className="hidden md:block">
        <ul className={`flex items-center gap-1 px-2 py-2 rounded-full border border-white/10 transition-all duration-500 shadow-2xl ${
          scrolled ? "bg-black/40 backdrop-blur-2xl border-white/20" : "bg-white/5 backdrop-blur-lg"
        }`}>
          {NAV_LINKS.map((link) => {
            const isActive = active === (link === "Experience" ? "experience" : link.toLowerCase());
            return (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className={`px-5 py-2 text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-full ${
                    isActive
                      ? "bg-white/10 text-red-500 shadow-[inset_0_0_10px_rgba(220,38,38,0.2)]"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* RIGHT: CTA BUTTON */}
      <div className="flex-1 flex justify-end">
        <button className={`hidden md:block group relative px-8 py-2.5 rounded-full overflow-hidden border border-red-900/30 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md" : ""
        }`}>
          <div className="absolute inset-0 bg-red-950/40 group-hover:bg-red-600 transition-colors duration-300" />
          <span className="relative z-10 text-white text-[10px] font-bold uppercase tracking-widest">
            Start a project
          </span>
        </button>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-white bg-white/5 p-3 rounded-xl backdrop-blur-md border border-white/10" onClick={() => setOpen(!open)}>
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`h-0.5 bg-red-600 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-white ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-red-600 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 transition-all duration-500 z-[55] ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className={`text-2xl font-black uppercase tracking-widest transition-colors ${
              active === (link === "Experience" ? "experience" : link.toLowerCase()) ? "text-red-600" : "text-white/60 hover:text-white"
            }`}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}