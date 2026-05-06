import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register plugin (MUST be before usage)
gsap.registerPlugin(ScrollTrigger);

import CursorGlow from "./components/CursorGlow";
import SmoothScroll from "./components/SmoothScroll";
import Background from "./components/Background";

import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// OPTIONAL SYSTEMS (safe usage)
import StickySection from "./components/StickySection";
import HorizontalScroll from "./components/HorizontalScroll";
import Parallax from "./components/Parallax";

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

      {/* 🌌 GLOBAL CINEMATIC LAYERS */}
      <Background />
      <CursorGlow />
      <SmoothScroll />

      {/* NAV */}
      <Navbar active={activeSection} />

      {/* HERO */}
      <section id="home">
        <Parallax speed={0.15}>
          <Hero />
        </Parallax>
      </section>

      {/* ABOUT */}
      <section id="about">
        <StickySection>
          <About />
        </StickySection>
      </section>

      {/* PROJECTS (horizontal cinematic flow) */}
      <section id="projects">
        <HorizontalScroll>
          <Projects />
        </HorizontalScroll>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <StickySection>
          <Experience />
        </StickySection>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <StickySection>
          <Contact />
        </StickySection>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}