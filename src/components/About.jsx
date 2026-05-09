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
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #c0392b, #e67e22)",
            width: inView ? `${skill.level}%` : "0%",
            transition: `width 1.2s ${delay}s ease`,
          }}
        />
      </div>
    </div>
  );
}

/* ── Inline SVG background that mirrors the screenshot ── */
function AboutBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {/* Base dark navy */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #0a0e1a 0%, #0d1530 50%, #0a0e1a 100%)",
        }}
      />

      {/* Topographic arc lines */}
      <svg
        viewBox="0 0 1400 800"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          <radialGradient id="glow-orange" cx="70%" cy="75%" r="45%">
            <stop offset="0%" stopColor="#c0580a" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#8b3a0a" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-orange2" cx="85%" cy="55%" r="30%">
            <stop offset="0%" stopColor="#d4700a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-blue" cx="15%" cy="30%" r="35%">
            <stop offset="0%" stopColor="#1a3a6b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient glows */}
        <rect x="0" y="0" width="1400" height="800" fill="url(#glow-blue)" />
        <rect x="0" y="0" width="1400" height="800" fill="url(#glow-orange)" />
        <rect x="0" y="0" width="1400" height="800" fill="url(#glow-orange2)" />

        {/* Concentric arcs – origin roughly bottom-left, fanning right like topography */}
        {[180, 250, 320, 390, 460, 530, 600, 670, 740, 810, 880, 950, 1020, 1090, 1160].map(
          (r, i) => (
            <ellipse
              key={i}
              cx="120"
              cy="820"
              rx={r * 1.55}
              ry={r}
              fill="none"
              stroke="#3a5a8a"
              strokeWidth="0.7"
              strokeOpacity={0.28 - i * 0.01}
            />
          )
        )}

        {/* Second set of arcs from upper-right corner */}
        {[200, 300, 400, 500, 600, 700, 800, 900].map((r, i) => (
          <ellipse
            key={`r2-${i}`}
            cx="1350"
            cy="-20"
            rx={r * 1.3}
            ry={r}
            fill="none"
            stroke="#2a4070"
            strokeWidth="0.6"
            strokeOpacity={0.2 - i * 0.01}
          />
        ))}

        {/* Bokeh dots */}
        {[
          { cx: 130, cy: 120, r: 3, op: 0.7 },
          { cx: 980, cy: 320, r: 2.5, op: 0.5 },
          { cx: 320, cy: 680, r: 2, op: 0.45 },
          { cx: 1100, cy: 680, r: 3.5, op: 0.6 },
          { cx: 660, cy: 180, r: 2, op: 0.4 },
          { cx: 200, cy: 430, r: 1.5, op: 0.35 },
          { cx: 1250, cy: 200, r: 2, op: 0.3 },
        ].map((d, i) => (
          <circle
            key={`dot-${i}`}
            cx={d.cx}
            cy={d.cy}
            r={d.r}
            fill="white"
            opacity={d.op}
          />
        ))}

        {/* Large soft bokeh orbs */}
        <circle cx="1050" cy="650" r="160" fill="#d4620a" opacity="0.12" />
        <circle cx="1150" cy="580" r="90" fill="#e07820" opacity="0.18" />
        <circle cx="950" cy="720" r="110" fill="#b84a08" opacity="0.13" />
        <circle cx="1080" cy="490" r="60" fill="#f09030" opacity="0.10" />
      </svg>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{ position: "relative", overflow: "hidden" }}
      className="py-20 px-6 md:px-16"
    >
      {/* Background layer */}
      <AboutBackground />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto" style={{ zIndex: 1 }}>
        <Reveal>
          <h2 className="text-5xl font-black text-white mb-16">About Me</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16">
          <Reveal>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                I'm{" "}
                <span className="text-white font-semibold">Md. Azizul Islam</span>, a
                passionate software engineering student from Bangladesh.
              </p>

              <p>
                I love creating modern systems, elegant user experiences, networking
                applications, and scalable software.
              </p>

              <div className="flex flex-wrap gap-5 pt-6">
                {[
                  { label: "GitHub", href: "https://github.com/Azizul-Islam-Efath" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/azizulislamefath/" },
                  { label: "Facebook", href: "https://facebook.com/" },
                  { label: "Instagram", href: "https://instagram.com/" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#F3DDD0] hover:text-white transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            {/* Skills card – border & accents aligned with AZ red-orange logo */}
            <div
              className="p-8 rounded-[28px] backdrop-blur-xl"
              style={{
                background: "rgba(15, 20, 40, 0.55)",
                border: "1px solid rgba(192, 88, 43, 0.35)",
                boxShadow: "0 0 40px rgba(192, 88, 43, 0.08), inset 0 0 30px rgba(0,0,0,0.2)",
              }}
            >
              <p
                className="uppercase text-xs tracking-[0.2em] mb-8"
                style={{ color: "rgba(230, 126, 34, 0.7)" }}
              >
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
      </div>
    </section>
  );
}