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
        y: 40,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.to(".floating-orb", {
        y: -25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-image", {
        scale: 1.03,
        duration: 5,
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
      className="relative min-h-screen overflow-hidden bg-[#07111A]"
    >

      {/* ================= NAVBAR SPACE ================= */}
      <div className="absolute inset-0">

        {/* BACKGROUND IMAGE */}
        <img
          src={profileImg}
          alt="Azizul"
          className="
            hero-image
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            md:w-[850px]
            lg:w-[950px]
            xl:w-[1050px]
            object-cover
            opacity-35
            blur-[1px]
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#07111A]/45" />

        {/* LEFT BLUE GLOW */}
        <div className="floating-orb absolute left-[-10%] top-[15%] w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />

        {/* RIGHT ORANGE GLOW */}
        <div className="floating-orb absolute right-[-10%] bottom-[10%] w-[500px] h-[500px] rounded-full bg-orange-200/20 blur-[140px]" />

        {/* CENTER LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      </div>

      {/* ================= DECORATIONS ================= */}

      {/* BIG CIRCLE */}
      <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute left-1/2 top-1/2 w-[650px] h-[650px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* CODE CARD */}
      <div className="hidden lg:block absolute top-[18%] left-[3%] border border-cyan-300/10 bg-white/5 backdrop-blur-xl rounded-3xl p-6 text-cyan-200/40 text-sm leading-8">

        {"<html>"} <br />
        {"<head>"} <br />
        {"<title>Azizul Portfolio</title>"} <br />
        {"</head>"} <br />
        {"<body>"} <br />
        {"<div class='hero'>"} <br />
        {"<h1>Building Secure"} <br />
        {"& Scalable Web</h1>"} <br />
        {"</div>"} <br />
        {"</body>"} <br />
        {"</html>"}

      </div>

      {/* CSS CARD */}
      <div className="hidden lg:block absolute bottom-[22%] left-[3%] border border-cyan-300/10 bg-white/5 backdrop-blur-xl rounded-3xl p-6 text-cyan-200/40 text-sm leading-8">

        .hero {"{"} <br />
        &nbsp;&nbsp;min-height: 100vh; <br />
        &nbsp;&nbsp;display: flex; <br />
        &nbsp;&nbsp;align-items: center; <br />
        &nbsp;&nbsp;justify-content: center; <br />
        {"}"}

      </div>

      {/* ACCESS */}
      <div className="hidden lg:flex absolute top-[35%] right-[8%] px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white/70 items-center gap-3">

        <div className="w-3 h-3 rounded-full bg-white/70" />

        ACCESS GRANTED

      </div>

      {/* FINGERPRINT */}
      <div className="hidden lg:flex absolute bottom-[15%] right-[20%] w-24 h-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl items-center justify-center text-5xl text-white/60">

        ⌘

      </div>

      {/* BINARY */}
      <div className="hidden lg:block absolute top-[10%] right-[5%] text-white/30 text-sm leading-10 tracking-[0.2em]">

        01001 10110 11101 <br />
        10110 11101 01001 <br />
        11101 01001 10110 <br />
        01001 10110 11101

      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <div className="text-center max-w-5xl">

          {/* TAG */}
          <div className="hero-item inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-sm tracking-[0.25em] uppercase text-[#F3DDD0]">
              Cyber Security • Web Developer
            </span>

          </div>

          {/* TITLE */}
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
              text-white/80
            "
          >

            MD. AZIZUL

            <br />

            <span className="text-white/85">
              ISLAM
            </span>

          </h1>

          {/* TYPEWRITER */}
          <p className="hero-item text-xl md:text-3xl text-white/60 mt-8 mb-12">

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

            {/* PRIMARY */}
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                px-10
                py-5
                rounded-full
                bg-[#F3DDD0]
                text-black
                font-semibold
                text-lg
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
              "
            >
              View Projects →
            </button>

            {/* SECONDARY */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                px-10
                py-5
                rounded-full
                border
                border-white/15
                bg-white/5
                backdrop-blur-xl
                text-white
                text-lg
                transition-all
                duration-500
                hover:bg-white/10
                hover:scale-105
              "
            >
              Contact Me ↗
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}