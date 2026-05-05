import { useState, useEffect } from "react";

import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const NAV_LINKS = ["home", "about", "projects", "experience", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handler = () => {
      let current = "home";

      NAV_LINKS.forEach((id) => {
        const el = document.getElementById(id);

        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler(); // run once on load

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className="min-h-screen text-white relative overflow-x-hidden"
      style={{
        background: "#0a0a0e",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* Cursor glow */}
      <CursorGlow />

      {/* Google font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>

      {/* NAV */}
      <Navbar active={activeSection} />

      {/* SECTIONS */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <section id="about">
          <About />
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <section id="projects">
          <Projects />
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <section id="experience">
          <Experience />
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  );
}