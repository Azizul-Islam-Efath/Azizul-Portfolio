import { useRef, useEffect, useState } from "react";

const PROJECTS = [
  {
    title: "Network Traffic Analyzer",
    description: "Real-time packet capture tool with protocol analysis.",
    tech: ["C", "libpcap", "Linux"],
    github: "https://github.com/Azizul-Islam-Efath",
    accent: "#f97316",
  },
  {
    title: "Algorithm Visualizer",
    description: "Visualizes sorting & pathfinding step-by-step.",
    tech: ["Java", "JavaFX"],
    github: "https://github.com/Azizul-Islam-Efath",
    accent: "#38bdf8",
  },
  {
    title: "Chat Application",
    description: "Multi-user TCP chat with rooms & commands.",
    tech: ["Java", "Sockets"],
    github: "https://github.com/Azizul-Islam-Efath",
    accent: "#a78bfa",
  },
  {
    title: "File Compression Tool",
    description: "Huffman coding based CLI compressor.",
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
      className="relative min-w-[360px] max-w-[360px] h-[420px] rounded-2xl p-6 border backdrop-blur-xl overflow-hidden"
      style={{
        background: "rgba(24,24,27,0.6)",
        borderColor: hovered ? project.accent : "rgba(255,255,255,0.08)",
        transform: hovered ? "translateY(-10px) scale(1.02)" : "none",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        boxShadow: hovered
          ? `0 30px 80px ${project.accent}30`
          : "0 10px 30px rgba(0,0,0,0.2)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl"
        style={{
          background: project.accent,
          opacity: hovered ? 0.25 : 0,
          transition: "0.4s",
        }}
      />

      {/* Accent line */}
      <div
        className="w-10 h-1 rounded-full mb-6"
        style={{ background: project.accent }}
      />

      <h3 className="text-white text-xl font-bold mb-3">
        {project.title}
      </h3>

      <p className="text-zinc-400 text-sm mb-6 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 bg-zinc-800/80 rounded-full text-zinc-300"
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
  );
}

export default function Projects() {
  const scrollRef = useRef();

  // 🔥 Vertical scroll → horizontal scroll
  useEffect(() => {
    const el = scrollRef.current;

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.2;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section id="projects" className="py-32 pl-16">

      {/* HEADER */}
      <div className="mb-20">
        <p className="text-orange-400 text-xs tracking-[0.3em] uppercase mb-3">
          02 — Projects
        </p>
        <h2 className="text-5xl font-black text-white">
          Things I've Built
        </h2>
      </div>

      {/* 🔥 HORIZONTAL SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto no-scrollbar pr-16"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}