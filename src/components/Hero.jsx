import { useEffect, useRef } from "react";
import { Typewriter } from "../utils";
import gsap from "gsap";

import profileImg from "../assets/me.png";

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
        duration: 4,
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
      {/* FLOATING LIGHTS */}
      <div className="floating-orb absolute top-[20%] left-[10%] w-40 h-40 rounded-full bg-cyan-300/10 blur-[100px]" />

      <div className="floating-orb absolute bottom-[15%] right-[10%] w-52 h-52 rounded-full bg-orange-200/10 blur-[120px]" />

      {/* CINEMATIC CENTER GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(120,220,255,0.18),transparent_55%)]
        "
      />

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        {/* MAIN IMAGE */}
        <img
          src={profileImg}
          alt="Azizul"
          className="
            profile-glow
            w-[700px]
            md:w-[850px]
            lg:w-[950px]
            xl:w-[1050px]
            object-contain
            opacity-40
            scale-110
            select-none
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111a]/80 via-transparent to-[#07111a]/70" />

      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-7xl w-full flex items-center justify-center">

        <div className="text-center max-w-5xl">

          {/* SMALL TAG */}
          <div className="hero-item inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-xs tracking-[0.25em] uppercase text-[#F3DDD0]">
              Cyber Security • Web Developer
            </span>

          </div>

          {/* MAIN TITLE */}
          <h1
            className="
              hero-item
              text-6xl
              sm:text-7xl
              md:text-8xl
              lg:text-[9rem]
              font-black
              leading-none
              tracking-tight
              text-white/70
              backdrop-blur-sm
            "
          >

            MD. AZIZUL

            <br />

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-white/80
                via-[#F3DDD0]/70
                to-[#9FE7F5]/70
              "
            >
              ISLAM
            </span>

          </h1>

          {/* TYPEWRITER */}
          <p
            className="
              hero-item
              text-lg
              md:text-2xl
              text-white/60
              mt-8
              mb-10
              leading-relaxed
              max-w-xl
              mx-auto
            "
          >

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
          <div className="hero-item flex flex-col sm:flex-row gap-6 justify-center">

            {/* PRIMARY BUTTON */}
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                group
                relative
                overflow-hidden
                px-10
                py-4
                rounded-full
                bg-gradient-to-r
                from-[#F3DDD0]
                to-[#E8C7B6]
                text-black
                font-semibold
                tracking-wide
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_0_50px_rgba(255,255,255,0.35)]
              "
            >

              {/* glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_70%)]
                "
              />

              {/* shine */}
              <div
                className="
                  absolute
                  top-0
                  -left-[120%]
                  w-[60%]
                  h-full
                  rotate-12
                  bg-white/40
                  blur-xl
                  group-hover:left-[130%]
                  transition-all
                  duration-1000
                "
              />

              <span className="relative z-10 flex items-center gap-3">

                View Projects

                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>

              </span>

            </button>

            {/* SECONDARY BUTTON */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                group
                relative
                overflow-hidden
                px-10
                py-4
                rounded-full
                border
                border-white/15
                bg-white/5
                backdrop-blur-2xl
                text-white
                font-medium
                transition-all
                duration-500
                hover:bg-white/10
                hover:border-white/30
                hover:scale-105
              "
            >

              {/* border glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  border
                  border-cyan-200/40
                  shadow-[0_0_30px_rgba(150,220,255,0.25)]
                "
              />

              <span className="relative z-10 flex items-center gap-3">

                Contact Me

                <span className="group-hover:translate-x-1 transition-transform">
                  ↗
                </span>

              </span>

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}