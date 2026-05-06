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

// ✅ NEW SYSTEMS
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
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handler);
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">

      {/* 🔥 GLOBAL SYSTEM */}
      <SmoothScroll />
      <Background />
      <CursorGlow />

      {/* NAV */}
      <Navbar active={activeSection} />

      {/* HERO (parallax entry) */}
      <Parallax speed={0.2}>
        <Hero />
      </Parallax>

      {/* ABOUT (sticky section) */}
      <StickySection>
        <About />
      </StickySection>

      {/* PROJECTS (horizontal scroll) */}
      <HorizontalScroll>
        <Projects />
      </HorizontalScroll>

      {/* EXPERIENCE */}
      <StickySection>
        <Experience />
      </StickySection>

      {/* CONTACT */}
      <StickySection>
        <Contact />
      </StickySection>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}