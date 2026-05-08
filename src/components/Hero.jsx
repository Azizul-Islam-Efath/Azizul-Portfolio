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
        stagger: 0.12,
      });

      gsap.to(".floating-orb", {
        y: -30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".profile-glow", {
        scale: 1.08,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* FLOATING LIGHT */}
      <div className="floating-orb absolute top-[20%] left-[10%] w-40 h-40 rounded-full bg-cyan-300/10 blur-[100px]" />

      <div className="floating-orb absolute bottom-[15%] right-[10%] w-52 h-52 rounded-full bg-orange-200/10 blur-[120px]" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="text-center lg:text-left">

          {/* SMALL TAG */}
          <div className="hero-item inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-xs tracking-[0.25em] uppercase text-[#F3DDD0]">
              Cyber Security • Web Developer
            </span>

          </div>

          {/* NAME */}
          <h1 className="hero-item text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight text-white">

            MD. AZIZUL

            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F3DDD0] to-[#9FE7F5]">
              ISLAM
            </span>

          </h1>

          {/* TYPEWRITER */}
          <p className="hero-item text-lg md:text-2xl text-white/70 mt-8 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">

            <Typewriter
              words={[
                "Full Stack Web Developer",
                "Cyber Security Enthusiast",
                "Networking Specialist",
                "Open Source Contributor",
              ]}
            />

          </p>

          {/* BUTTONS */}
          <div className="hero-item flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative overflow-hidden px-10 py-4 rounded-full bg-[#E8C7B6] text-black font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.25)]"
            >
              <span className="relative z-10">View Projects</span>

              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-10 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </button>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hero-item relative flex justify-center lg:justify-end">

          {/* OUTER GLOW */}
          <div className="profile-glow absolute w-[420px] h-[420px] rounded-full bg-cyan-300/10 blur-[120px]" />

          {/* GLASS CARD */}
          <div className="relative group w-[320px] h-[420px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

            {/* TOP LIGHT */}
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />

            {/* IMAGE */}
            <img
              src="/profile.png"
              alt="Azizul"
              className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">

              <p className="text-white font-semibold text-lg">
                Azizul Islam
              </p>

              <p className="text-white/60 text-sm mt-1">
                Building modern web experiences & secure systems.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}