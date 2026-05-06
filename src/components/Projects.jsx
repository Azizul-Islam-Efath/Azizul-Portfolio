import { useState } from "react";
import { Reveal } from "../utils";

const PROJECTS = [
  {
    title: "Network Traffic Analyzer",
    description: "A real-time packet capture and analysis tool built with C and libpcap. Displays protocol breakdowns, bandwidth usage, and suspicious traffic patterns.",
    tech: ["C", "libpcap", "Linux", "ncurses"],
    github: "https://github.com/Azizul-Islam-Efath",
    demo: null,
    accent: "#f97316",
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive app that visualizes classic sorting and pathfinding algorithms step-by-step with speed controls and custom input support.",
    tech: ["Java", "JavaFX", "DSA"],
    github: "https://github.com/Azizul-Islam-Efath",
    demo: null,
    accent: "#38bdf8",
  },
  {
    title: "Chat Application",
    description: "Multi-threaded TCP chat server and client. Supports multiple concurrent users, private messaging, and command-based room management.",
    tech: ["Java", "Sockets", "Multithreading"],
    github: "https://github.com/Azizul-Islam-Efath",
    demo: null,
    accent: "#a78bfa",
  },
  {
    title: "File Compression Tool",
    description: "Command-line tool implementing Huffman coding for lossless file compression and decompression with detailed statistics output.",
    tech: ["C", "Huffman Coding", "Binary Trees"],
    github: "https://github.com/Azizul-Islam-Efath",
    demo: null,
    accent: "#34d399",
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? project.accent + "60" : "rgba(255,255,255,0.07)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 40px ${project.accent}18` : "none",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
      }}
      className="group relative flex flex-col bg-zinc-900/60 border rounded-2xl p-6 h-full overflow-hidden cursor-default"
    >
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-opacity duration-300"
        style={{ background: project.accent, opacity: hovered ? 0.12 : 0 }}
      />
      <div className="w-8 h-1 rounded-full mb-5" style={{ background: project.accent }} />
      <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400">{t}</span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            ↗ Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-16 max-w-6xl mx-auto">
      <Reveal>
        <p className="text-orange-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16">Things I've Built</h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}