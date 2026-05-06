import { useState } from "react";
import useMagnetic from "./useMagnetic"; // 👈 add this file (I gave earlier)

const PROJECTS = [
  {
    title: "Network Traffic Analyzer",
    description: "A real-time packet capture and analysis tool built with C and libpcap.",
    tech: ["C", "libpcap", "Linux", "ncurses"],
    github: "https://github.com/Azizul-Islam-Efath",
    accent: "#f97316",
    video: "/videos/project1.mp4", // optional
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive app that visualizes sorting and pathfinding algorithms.",
    tech: ["Java", "JavaFX", "DSA"],
    github: "https://github.com/Azizul-Islam-Efath",
    accent: "#38bdf8",
    video: "/videos/project2.mp4",
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
  const magneticRef = useMagnetic(25); // 👈 magnetic effect

  return (
    <div
      ref={magneticRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative min-w-[340px] max-w-[340px] h-[400px] flex flex-col bg-zinc-900/60 border rounded-2xl p-6 overflow-hidden backdrop-blur-xl transition-all duration-300"
      style={{
        borderColor: hovered ? project.accent : "rgba(255,255,255,0.07)",
        boxShadow: hovered ? `0 30px 60px ${project.accent}30` : "none",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      {/* 🔥 VIDEO PREVIEW */}
      {hovered && project.video && (
        <video
          src={project.video}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      )}

      {/* glow blob */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl"
        style={{ background: project.accent, opacity: hovered ? 0.2 : 0 }}
      />

      {/* content */}
      <div className="relative z-10">
        <div
          className="w-8 h-1 rounded-full mb-5"
          style={{ background: project.accent }}
        />

        <h3 className="text-white font-bold text-lg mb-2">
          {project.title}
        </h3>

        <p className="text-zinc-400 text-sm mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 bg-zinc-800 rounded-full"
            >
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
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-16">

      {/* HEADER */}
      <div className="mb-16">
        <p className="text-orange-400 text-xs uppercase tracking-[0.3em] mb-3">
          Projects
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