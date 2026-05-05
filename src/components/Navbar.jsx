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
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      style={{
        background: scrolled ? "rgba(10,10,14,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-4 flex items-center justify-between"
    >
      <span className="font-black text-xl tracking-tight text-white">
        AZ<span className="text-orange-400">.</span>
      </span>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                active === link.toLowerCase()
                  ? "text-orange-400"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white flex flex-col gap-1.5 p-1"
        onClick={() => setOpen(!open)}
      >
        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="px-8 py-3 text-left text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}