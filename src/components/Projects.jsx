import { useState } from "react";

const PROJECTS = [
  {
    title: "Network Traffic Analyzer",
    description: "Real-time packet analysis tool.",
    tech: ["C", "libpcap"],
    github: "#",
    accent: "#f97316",
  },
  {
    title: "Algorithm Visualizer",
    description: "Visual sorting & pathfinding system.",
    tech: ["Java", "DSA"],
    github: "#",
    accent: "#38bdf8",
  },
  {
    title: "Chat App",
    description: "Multi-user TCP chat system.",
    tech: ["Java", "Sockets"],
    github: "#",
    accent: "#a78bfa",
  },
];

function Card({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="min-w-[320px] h-[360px] bg-zinc-900/60 border border-white/10 rounded-2xl p-6 shrink-0 transition"
      style={{
        transform: hover ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      <div className="w-8 h-1 mb-4 rounded-full" style={{ background: project.accent }} />

      <h3 className="text-white text-lg font-bold">{project.title}</h3>

      <p className="text-zinc-400 text-sm mt-3 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="text-xs bg-zinc-800 px-2 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>

      <a className="text-orange-400 text-sm" href={project.github}>
        View →
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="w-full px-6 md:px-16">

      <h2 className="text-4xl font-black mb-10">Projects</h2>

      {/* 🔥 horizontal scroll */}
      <div className="flex gap-6 overflow-x-auto pb-6">
        {PROJECTS.map((p) => (
          <Card key={p.title} project={p} />
        ))}
      </div>

    </div>
  );
}