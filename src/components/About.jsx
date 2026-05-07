import { Reveal, useInView } from "../utils";

const SKILLS = [
  { name: "C / C++", level: 85 },
  { name: "Java", level: 80 },
  { name: "Python", level: 75 },
  { name: "JavaScript", level: 70 },
  { name: "Networking", level: 78 },
  { name: "Data Structures", level: 82 },
];

function SkillBar({ skill, delay }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white/80">{skill.name}</span>
        <span className="text-white/50">{skill.level}%</span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#9FD5D9] to-[#E8C7B6]"
          style={{
            width: inView ? `${skill.level}%` : "0%",
            transition: `1.2s ${delay}s`,
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="relative py-20 px-6 md:px-16 max-w-6xl mx-auto">

      <Reveal>
        <h2 className="text-5xl font-black text-white mb-16">
          About Me
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-16">

        <Reveal>
          <div className="space-y-6 text-white/70 leading-relaxed">

            <p>
              I'm <span className="text-white font-semibold">Md. Azizul Islam</span>,
              a passionate software engineering student from Bangladesh.
            </p>

            <p>
              I love creating modern systems, elegant user experiences,
              networking applications, and scalable software.
            </p>

            <div className="flex flex-wrap gap-5 pt-6">

              <a
                href="https://github.com/Azizul-Islam-Efath"
                target="_blank"
                rel="noreferrer"
                className="text-[#F3DDD0] hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/azizulislamefath/"
                target="_blank"
                rel="noreferrer"
                className="text-[#F3DDD0] hover:text-white transition"
              >
                LinkedIn
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#F3DDD0] hover:text-white transition"
              >
                Facebook
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#F3DDD0] hover:text-white transition"
              >
                Instagram
              </a>

            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="p-8 rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/10">
            <p className="text-white/50 uppercase text-xs tracking-[0.2em] mb-8">
              Skills
            </p>

            <div className="space-y-5">
              {SKILLS.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}