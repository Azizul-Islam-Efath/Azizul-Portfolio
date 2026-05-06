import { Reveal } from "../utils";

const TIMELINE = [
  {
    year: "2023 – Present",
    title: "B.Sc. in Computer Science & Engineering",
    place: "Leading University, Bangladesh",
    desc: "Studying core CS fundamentals: algorithms, data structures, networking, operating systems, and software engineering principles.",
    type: "edu",
  },
  {
    year: "2022",
    title: "Problem Solver — Competitive Programming",
    place: "Codeforces / LeetCode",
    desc: "Solved 300+ algorithmic problems. Participated in ICPC online contests and university internal programming competitions.",
    type: "exp",
  },
  {
    year: "2021",
    title: "Higher Secondary Certificate (HSC)",
    place: "Science Group — Bangladesh",
    desc: "Completed HSC with distinction in Physics, Chemistry, and Mathematics.",
    type: "edu",
  },
];

function TimelineItem({ item }) {
  const isEdu = item.type === "edu";
  return (
    <div className="relative">
      <div
        className="absolute -left-10 top-1.5 w-3 h-3 rounded-full border-2"
        style={{
          background: isEdu ? "#f97316" : "#38bdf8",
          borderColor: isEdu ? "#f97316" : "#38bdf8",
        }}
      />
      <span
        className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
        style={{
          background: isEdu ? "rgba(249,115,22,0.1)" : "rgba(56,189,248,0.1)",
          color: isEdu ? "#f97316" : "#38bdf8",
        }}
      >
        {item.year}
      </span>
      <h3 className="text-white font-bold text-lg leading-tight mb-1">{item.title}</h3>
      <p className="text-zinc-500 text-sm mb-3">{item.place}</p>
      <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-16 max-w-4xl mx-auto">
      <Reveal>
        <p className="text-orange-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          My Journey
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16">
          Experience &amp; Education
        </h2>
      </Reveal>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800" />
        <div className="space-y-12 pl-14">
          {TIMELINE.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <TimelineItem item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}