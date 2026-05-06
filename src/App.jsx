import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register plugin (MUST be before usage)
gsap.registerPlugin(ScrollTrigger);

import CursorGlow from "./components/CursorGlow";
import Background from "./components/Background";

import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const NAV_LINKS = ["Home", "About", "Projects", "Experience", "Contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.toLowerCase());

    const handler = () => {
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.4 &&
          rect.bottom >= window.innerHeight * 0.4
        ) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
  <div className="min-h-screen text-white relative overflow-x-hidden">

    <Background />
    <CursorGlow />

    <Navbar active={activeSection} />

    <main>

      <section id="home" className="min-h-screen flex items-center">
        <Hero />
      </section>

      <section id="about" className="min-h-screen flex items-center">
        <About />
      </section>

      <section id="projects" className="min-h-screen flex items-center">
        <Projects />
      </section>

      <section id="experience" className="min-h-screen flex items-center">
        <Experience />
      </section>

      <section id="contact" className="min-h-screen flex items-center">
        <Contact />
      </section>

      <Footer />

    </main>
  </div>
);
}