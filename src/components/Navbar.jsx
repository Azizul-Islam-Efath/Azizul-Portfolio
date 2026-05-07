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
          ? "rgba(255,255,255,0.08)"
          : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.12)"
          : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-500"
    >
      <span className="font-black text-2xl tracking-tight text-white">
        AZ<span className="text-[#E8C7B6]">.</span>
      </span>

      <ul className="hidden md:flex gap-10">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              className={`text-sm tracking-wide transition-all duration-300 ${
                active === link.toLowerCase()
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden text-white flex flex-col gap-1.5"
        onClick={() => setOpen(!open)}
      >
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 backdrop-blur-xl bg-white/10 border-b border-white/10 flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="px-8 py-3 text-left text-white/80 hover:text-white"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}