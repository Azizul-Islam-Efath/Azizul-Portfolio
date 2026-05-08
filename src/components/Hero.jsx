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
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(".floating", {
        y: -20,
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
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-[#07111B]
        text-white
      "
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      {/* LEFT BLUE GLOW */}
      <div className="absolute left-[-10%] top-0 w-[900px] h-[900px] bg-cyan-500/30 blur-[180px] rounded-full" />

      {/* RIGHT PEACH GLOW */}
      <div className="absolute right-[-10%] top-[10%] w-[900px] h-[900px] bg-orange-200/20 blur-[180px] rounded-full" />

      {/* CENTER LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

      {/* ================= FULLSCREEN HERO IMAGE ================= */}

      <div className="absolute inset-0 w-full h-full overflow-hidden">

        {/* IMAGE */}
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
            w-[1200px]
            md:w-[1400px]
            lg:w-[1600px]
            xl:w-[1800px]
            max-w-none
            object-cover
            opacity-[0.23]
            mix-blend-lighten
            pointer-events-none
            select-none
          "
        />

        {/* LEFT DARK GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111B]/90 via-[#07111B]/35 to-transparent" />

        {/* RIGHT PEACH LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#ffdcc2]/20 via-transparent to-transparent" />

        {/* CENTER SOFT LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      </div>

      {/* ================= DECOR CIRCLES ================= */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <div className="w-[1400px] h-[1400px] rounded-full border border-white/10" />

        <div className="absolute w-[950px] h-[950px] rounded-full border border-white/10" />

      </div>

      {/* ================= FLOATING UI ELEMENTS ================= */}

      {/* CODE BOX */}
      <div className="floating absolute top-[16%] left-[3%] hidden lg:block">

        <div className="w-[280px] rounded-3xl border border-cyan-200/10 bg-white/[0.03] backdrop-blur-2xl p-6 shadow-[0_0_40px_rgba(0,255,255,0.05)]">

          <pre className="text-cyan-200/50 text-sm leading-8 whitespace-pre-wrap">
{`<html>
<head>
<title>Azizul Portfolio</title>
</head>

<body>
  <div class="hero">
    <h1>Building Secure
    & Scalable Web</h1>
  </div>
</body>
</html>`}
          </pre>

        </div>

      </div>

      {/* CSS BOX */}
      <div className="floating absolute bottom-[24%] left-[4%] hidden lg:block">

        <div className="w-[240px] rounded-3xl border border-cyan-200/10 bg-white/[0.03] backdrop-blur-2xl p-6">

          <pre className="text-cyan-100/40 text-sm leading-7 whitespace-pre-wrap">
{`.hero {
 min-height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
}`}
          </pre>

        </div>

      </div>

      {/* TERMINAL */}
      <div className="floating absolute bottom-[8%] left-[3%] hidden lg:block">

        <div className="w-[260px] rounded-3xl border border-cyan-200/10 bg-white/[0.03] backdrop-blur-2xl p-5">

          <pre className="text-cyan-100/40 text-xs leading-7 whitespace-pre-wrap">
{`$ npm run dev

> my-portfolio@1.0.0 dev
> vite

✓ Local: localhost:5173`}
          </pre>

        </div>

      </div>

      {/* FLOATING ICON */}
      <div className="floating absolute top-[28%] left-[30%] hidden lg:flex items-center justify-center w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-4xl text-white/70">
        {"</>"}
      </div>

      {/* FLOATING ICON */}
      <div className="floating absolute bottom-[18%] left-[26%] hidden lg:flex items-center justify-center w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-4xl text-white/70">
        {"{}"}
      </div>

      {/* FLOATING ICON */}
      <div className="floating absolute bottom-[10%] left-[20%] hidden lg:flex items-center justify-center w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-4xl text-white/70">
        🌐
      </div>

      {/* RIGHT SECURITY GLOBE */}
      <div className="absolute right-[-8%] top-[28%] w-[650px] h-[650px] rounded-full border border-orange-100/10 opacity-60">

        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,220,180,0.18),transparent_70%)]" />

      </div>

      {/* LOCK ICON */}
      <div className="floating absolute right-[13%] top-[48%] hidden lg:flex items-center justify-center w-40 h-40 rounded-full border border-orange-100/10 bg-white/[0.03] backdrop-blur-xl">

        <div className="text-7xl opacity-80">
          🔒
        </div>

      </div>

      {/* ACCESS */}
      <div className="floating absolute right-[12%] top-[32%] hidden lg:block">

        <div className="px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-white/70">
          ● ACCESS GRANTED
        </div>

      </div>

      {/* BINARY */}
      <div className="absolute right-[5%] top-[10%] hidden lg:block text-white/20 text-sm tracking-[0.3em] leading-8">

        01001 10110 11101
        <br />
        10110 11101 01001
        <br />
        11101 01001 10110
        <br />
        01001 10110 11101

      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-20 w-full min-h-screen flex items-center justify-center px-6">

        <div className="text-center max-w-5xl">

          {/* TAG */}
          <div className="hero-item inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-100/10 bg-white/[0.04] backdrop-blur-xl mb-8">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="tracking-[0.28em] uppercase text-sm text-[#F3DDD0]">
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
              lg:text-[8rem]
              font-black
              leading-[0.9]
              tracking-tight
              text-white/90
              drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]
            "
          >

            MD. AZIZUL

            <br />

            <span className="text-white/85">
              ISLAM
            </span>

          </h1>

          {/* TYPEWRITER */}
          <div className="hero-item mt-8 text-xl md:text-3xl text-white/65 font-light">

            <Typewriter
              words={[
                "Full Stack Web Developer",
                "Cyber Security Enthusiast",
                "Networking Specialist",
                "Open Source Contributor",
              ]}
            />

          </div>

          {/* BUTTONS */}
          <div className="hero-item mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">

            {/* PRIMARY BUTTON */}
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                group
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
                hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]
              "
            >

              <span className="flex items-center gap-3">

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
                px-10
                py-5
                rounded-full
                border
                border-white/20
                bg-white/[0.03]
                backdrop-blur-2xl
                text-white
                text-lg
                transition-all
                duration-500
                hover:bg-white/[0.06]
                hover:scale-105
              "
            >

              <span className="flex items-center gap-3">

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