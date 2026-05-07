import { useState } from "react";

const PROJECTS = [
  {
    title: "Network Traffic Analyzer",
    description: "Real-time packet analysis tool.",
    tech: ["C", "libpcap"],
  },
  {
    title: "Algorithm Visualizer",
    description: "Visual sorting & pathfinding system.",
    tech: ["Java", "DSA"],
  },
  {
    title: "Chat App",
    description: "Multi-user TCP chat system.",
    tech: ["Java", "Sockets"],
  },
];

function Card({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="min-w-[320px] rounded-[30px] p-8 bg-white/10 border border-white/10 backdrop-blur-xl transition-all duration-500"
      style={{
        transform: hover ? "translateY(-8px)" : "translateY(0px)",
      }}
    >
      <h3 className="text-2xl font-bold text-white mb-4">
        {project.title}
      </h3>

      <p className="text-white/70 mb-6">
        {project.description}
      </p>

      <div className="flex gap-2 flex-wrap mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/70"
          >
            {t}
          </span>
        ))}
      </div>

      <button className="text-[#F3DDD0]">
        View Project →
      </button>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="px-6 md:px-16 max-w-7xl mx-auto">

      <h2 className="text-5xl font-black text-white mb-16">
        Projects
      </h2>

      <div className="flex gap-8 overflow-x-auto no-scrollbar pb-6">
        {PROJECTS.map((p) => (
          <Card key={p.title} project={p} />
        ))}
      </div>

    </section>
  );
}