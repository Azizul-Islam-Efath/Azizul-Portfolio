import { useState, useEffect } from "react";

const NAV_LINKS = ["Projects", "Services", "About", "Contact"];

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "py-4" : "py-6"}`}>
      
      {/* LEFT: BRANDING */}
      <div className="flex-1">
        <div 
          onClick={() => scrollTo('home')}
          className="flex items-center gap-1 group cursor-pointer w-fit"
        >
          <span className="font-black text-3xl tracking-tighter text-white transition-transform group-hover:scale-105">
            AZ
          </span>
          <span className="text-[#00f2ff] font-black text-4xl animate-pulse">.</span>
        </div>
      </div>

      {/* CENTER: GLOSSY PILL NAV */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-2 px-2 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.toLowerCase();
            return (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className={`px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-full ${
                    isActive
                      ? "bg-white/10 text-[#00f2ff] shadow-[inset_0_0_10px_rgba(0,242,255,0.15)]"
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

      {/* RIGHT: GLOWING CTA */}
      <div className="flex-1 flex justify-end">
        <div className="hidden md:block relative group">
          {/* Outer Glow Layer */}
          <div className="absolute inset-0 bg-[#00f2ff] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
          
          <button 
            className="relative z-10 px-8 py-3 rounded-full bg-[#008b94] hover:bg-[#00f2ff] transition-all duration-300 overflow-hidden shadow-lg border border-white/10"
          >
            <span className="text-white text-[10px] font-black uppercase tracking-widest">
              Start a project
            </span>
            {/* Subtle gloss shine overlay */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[100%] transition-all duration-700" />
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white p-2 z-[60]"
          onClick={() => setOpen(!open)}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`h-0.5 bg-[#00f2ff] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-white transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-0.5 bg-[#00f2ff] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <div className={`fixed inset-0 bg-black/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 transition-all duration-500 z-[50] ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className={`text-2xl font-black uppercase tracking-[0.3em] transition-colors ${
              active === link.toLowerCase() ? "text-[#00f2ff]" : "text-white/40 hover:text-white"
            }`}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}