import { useEffect, useRef } from "react";
import { Typewriter } from "../utils";
import gsap from "gsap";

export default function Hero() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
      });

      gsap.from(".hero-title", {
        opacity: 0,
        scale: 0.9,
        duration: 1.4,
        ease: "power4.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🌌 CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(249,115,22,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(56,189,248,0.08) 0%, transparent 60%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_100%)] opacity-60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        <p className="hero-item text-orange-400 text-sm font-semibold tracking-[0.25em] uppercase mb-6">
          Hello, it's 👋
        </p>

        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-4">
          MD. AZIZUL
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
            ISLAM
          </span>
        </h1>

        <p className="hero-item text-lg sm:text-xl text-zinc-400 mb-10 font-light">
          <Typewriter
            words={[
              "Software Developer",
              "Problem Solver",
              "Networking Enthusiast",
              "Open Source Contributor",
            ]}
          />
        </p>

        {/* BUTTONS */}
        <div className="hero-item flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:-translate-y-1"
          >
            View Projects
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">
              →
            </span>
          </button>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1"
          >
            Get in Touch
          </button>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="hero-item absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent animate-pulse" />
        </div>

      </div>
    </section>
  );
}