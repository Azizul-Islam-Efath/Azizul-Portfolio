import { Typewriter } from "../utils";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(249,115,22,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(56,189,248,0.08) 0%, transparent 60%)",
          }}
          className="absolute inset-0"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-orange-400 text-sm font-semibold tracking-[0.25em] uppercase mb-6"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}
        >
          Hello,It's-👋
        </p>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-4"
          style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}
        >
          MD. AZIZUL
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
            ISLAM
          </span>
        </h1>
        <p
          className="text-lg sm:text-xl text-zinc-400 mb-10 font-light"
          style={{ animation: "fadeSlideUp 0.6s ease 0.2s both" }}
        >
          <Typewriter words={["Software Developer", "Problem Solver", "Networking Enthusiast", "Open Source Contributor"]} />
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: "fadeSlideUp 0.6s ease 0.3s both" }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
          >
            View Projects
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in Touch
          </button>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
          style={{ animation: "fadeSlideUp 0.6s ease 0.6s both" }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}