import { useState } from "react";

const PROJECTS = [
  {
    title: "Network Traffic Analyzer",
    description: "A real-time packet capture and analysis tool built with C and libpcap.",
    tech: ["C", "libpcap", "Linux", "ncurses"],
    github: "https://github.com/Azizul-Islam-Efath",
    accent: "#f97316",
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive app that visualizes sorting and pathfinding algorithms.",
    tech: ["Java", "JavaFX", "DSA"],
    github: "https://github.com/Azizul-Islam-Efath",
    accent: "#38bdf8",
  },
  {
    title: "Chat Application",
    description: "Multi-threaded TCP chat server with multiple users and rooms.",
    tech: ["Java", "Sockets"],
    github: "https://github.com/Azizul-Islam-Efath",
    accent: "#a78bfa",
  },
  {
    title: "File Compression Tool",
    description: "Huffman coding based compression CLI tool.",
    tech: ["C", "Algorithms"],
    github: "https://github.com/Azizul-Islam-Efath",
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
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 30px 60px ${project.accent}20` : "none",
        transition: "all 0.3s ease",
      }}
      className="min-w-[340px] max-w-[340px] flex flex-col bg-zinc-900/60 border rounded-2xl p-6 h-[380px] backdrop-blur-xl"
    >
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl"
        style={{ background: project.accent, opacity: hovered ? 0.15 : 0 }}
      />

      <div className="w-8 h-1 rounded-full mb-5" style={{ background: project.accent }} />

      <h3 className="text-white font-bold text-lg mb-2">
        {project.title}
      </h3>

      <p className="text-zinc-400 text-sm mb-5 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-zinc-800 rounded-full">
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-zinc-400 hover:text-white transition"
      >
        View Project →
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-16">
      
      {/* HEADER */}
      <div className="mb-16">
        <p className="text-orange-400 text-xs uppercase tracking-[0.3em] mb-3">
          02 — Projects
        </p>
        <h2 className="text-5xl font-black text-white">
          Things I've Built
        </h2>
      </div>

      {/* 🔥 HORIZONTAL ROW */}
      <div className="flex gap-10">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

    </section>
  );
}