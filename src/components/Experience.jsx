import { Reveal } from "../utils";

const TIMELINE = [
  {
    year: "2023 – Present",
    title: "B.Sc. in Computer Science & Engineering",
    place: "Leading University, Bangladesh",
    desc: "Studying core computer science fundamentals including algorithms, networking, operating systems, software engineering, and scalable system design.",
    type: "edu",
  },

  {
    year: "2022",
    title: "Competitive Programming & Problem Solving",
    place: "Codeforces / LeetCode / ICPC",
    desc: "Solved 300+ algorithmic problems and participated in online programming contests focused on data structures and problem-solving.",
    type: "exp",
  },

  {
    year: "2021",
    title: "Higher Secondary Certificate (HSC)",
    place: "Science Group — Bangladesh",
    desc: "Completed higher secondary education with strong academic performance in Physics, Chemistry, and Mathematics.",
    type: "edu",
  },
];

function TimelineItem({ item }) {
  const isEdu = item.type === "edu";

  return (
    <div className="relative group">

      {/* TIMELINE DOT */}
      <div
        className="
          absolute
          -left-11
          top-2
          w-4
          h-4
          rounded-full
          border-2
          transition-all
          duration-300
          group-hover:scale-125
        "
        style={{
          background: isEdu ? "#E8C7B6" : "#9FD5D9",
          borderColor: isEdu ? "#E8C7B6" : "#9FD5D9",
          boxShadow: isEdu
            ? "0 0 25px rgba(232,199,182,0.35)"
            : "0 0 25px rgba(159,213,217,0.35)",
        }}
      />

      {/* YEAR BADGE */}
      <span
        className="
          inline-flex
          items-center
          px-4
          py-1.5
          rounded-full
          text-xs
          font-semibold
          tracking-wide
          mb-4
          border
          backdrop-blur-md
        "
        style={{
          background: isEdu
            ? "rgba(232,199,182,0.12)"
            : "rgba(159,213,217,0.12)",

          borderColor: isEdu
            ? "rgba(232,199,182,0.2)"
            : "rgba(159,213,217,0.2)",

          color: isEdu ? "#F3DDD0" : "#C7EEF2",
        }}
      >
        {item.year}
      </span>

      {/* CONTENT CARD */}
      <div
        className="
          p-6
          rounded-[28px]
          bg-white/10
          border
          border-white/10
          backdrop-blur-xl
          transition-all
          duration-500
          hover:bg-white/15
          hover:-translate-y-1
        "
      >

        <h3 className="text-white text-xl font-bold leading-tight mb-2">
          {item.title}
        </h3>

        <p className="text-white/50 text-sm mb-4 tracking-wide">
          {item.place}
        </p>

        <p className="text-white/70 text-sm leading-relaxed">
          {item.desc}
        </p>

      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-6 md:px-16 max-w-5xl mx-auto"
    >

      {/* HEADING */}
      <Reveal>
        <p className="text-[#F3DDD0] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          My Journey
        </p>

        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-20">
          Experience & Education
        </h2>
      </Reveal>

      {/* TIMELINE */}
      <div className="relative">

        {/* LINE */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-white/15" />

        {/* ITEMS */}
        <div className="space-y-14 pl-16">

          {TIMELINE.map((item, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <TimelineItem item={item} />
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}