import { Reveal, useInView } from "../utils";

const SKILLS = [
  { name: "C / C++", level: 85 },
  { name: "Java", level: 80 },
  { name: "Python", level: 75 },
  { name: "JavaScript", level: 70 },
  { name: "Networking", level: 78 },
  { name: "Data Structures", level: 82 },
  { name: "Linux / Shell", level: 72 },
  { name: "Git / GitHub", level: 88 },
];

function SkillBar({ skill, delay }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div ref={ref} className="space-y-2 group">
      <div className="flex justify-between text-xs">
        <span className="text-zinc-300 font-medium group-hover:text-white transition">
          {skill.name}
        </span>
        <span className="text-zinc-600">{skill.level}%</span>
      </div>

      {/* Bar background */}
      <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        
        {/* Glow layer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition blur-md bg-orange-500/30"></div>

        {/* Progress */}
        <div
          className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 rounded-full relative z-10"
          style={{
            width: inView ? `${skill.level}%` : "0%",
            transition: `width 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${delay + 0.2}s`,
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-16 max-w-6xl mx-auto">

      {/* 🔥 Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] -z-10"></div>

      <Reveal>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tight">
          Who I Am
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT TEXT */}
        <Reveal delay={0.1}>
          <div className="space-y-6 text-zinc-400 leading-relaxed text-[15px]">
            
            <p>
              I'm <span className="text-white font-medium">Md. Azizul Islam</span>, a Computer Science & Engineering student from Bangladesh with a deep passion for building efficient software and solving complex problems.
            </p>

            <p>
              I enjoy working close to the system level—writing optimized C programs, designing concurrent applications in Java, and exploring how networks function at a protocol level.
            </p>

            <p>
              My goal is to contribute to impactful systems and open-source infrastructure used by millions.
            </p>

            <div className="pt-6 flex gap-6">
              <a
                href="https://github.com/Azizul-Islam-Efath"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-orange-400 hover:text-orange-300 underline underline-offset-4 transition"
              >
                GitHub →
              </a>

              <a
                href="https://www.linkedin.com/in/azizul-islam-efath/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-orange-400 hover:text-orange-300 underline underline-offset-4 transition"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SKILLS */}
        <Reveal delay={0.2}>
          <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            
            {/* Glow border */}
            <div className="absolute inset-0 rounded-2xl border border-orange-500/10 pointer-events-none"></div>

            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-6">
              Skills & Technologies
            </p>

            <div className="space-y-5">
              {SKILLS.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.05} />
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}