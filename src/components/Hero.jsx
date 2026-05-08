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
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-image", {
        scale: 1.03,
        duration: 6,
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

      <div className="absolute left-[-10%] top-[-10%] w-[900px] h-[900px] bg-cyan-500/25 blur-[180px] rounded-full" />

      <div className="absolute right-[-10%] top-[0%] w-[900px] h-[900px] bg-orange-200/20 blur-[180px] rounded-full" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* ================= HERO IMAGE ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* IMAGE */}
        <img
          src={profileImg}
          alt="Azizul"
          className="
            hero-image
            absolute
            left-1/2
            top-[52%]
            -translate-x-1/2
            -translate-y-1/2
            w-[900px]
            md:w-[1050px]
            lg:w-[1150px]
            xl:w-[1250px]
            object-contain
            opacity-[0.38]
            brightness-[0.85]
            contrast-[1.05]
            saturate-[1.05]
            pointer-events-none
            select-none
          "
        />

        {/* LEFT DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111B]/92 via-[#07111B]/45 to-transparent" />

        {/* RIGHT ORANGE LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#ffdcc2]/20 via-transparent to-transparent" />

      </div>

      {/* ================= MAIN RINGS ================= */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <div className="w-[1500px] h-[1500px] rounded-full border border-white/10" />

        <div className="absolute w-[1100px] h-[1100px] rounded-full border border-white/10" />

      </div>

      {/* ================= LEFT CODE PANELS ================= */}

      {/* HTML PANEL */}
      <div className="floating absolute top-[15%] left-[3%] hidden lg:block">

        <div className="w-[260px] rounded-[30px] border border-cyan-300/20 bg-[#071824]/60 backdrop-blur-3xl p-7 shadow-[0_0_60px_rgba(0,255,255,0.08)]">

          <pre className="text-cyan-200/70 text-[15px] leading-9 whitespace-pre-wrap font-mono">
{`<html>

<head>
<title>Azizul
Portfolio</title>
</head>

<body>
</body>

</html>`}
          </pre>

        </div>

      </div>

      {/* CSS PANEL */}
      <div className="floating absolute top-[44%] left-[3%] hidden lg:block">

        <div className="w-[260px] rounded-[30px] border border-cyan-300/20 bg-[#071824]/60 backdrop-blur-3xl p-7 shadow-[0_0_60px_rgba(0,255,255,0.06)]">

          <pre className="text-cyan-100/60 text-[15px] leading-9 whitespace-pre-wrap font-mono">
{`CSS

.hero {
 min-height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
}`}
          </pre>

        </div>

      </div>

      {/* TERMINAL PANEL */}
      <div className="floating absolute bottom-[5%] left-[3%] hidden lg:block">

        <div className="w-[300px] rounded-[30px] border border-cyan-300/20 bg-[#071824]/60 backdrop-blur-3xl p-7 shadow-[0_0_60px_rgba(0,255,255,0.06)]">

          <pre className="text-cyan-100/50 text-[14px] leading-8 whitespace-pre-wrap font-mono">
{`$ npm run dev

> my-portfolio@1.0.0 dev
> vite

✓ Local:
localhost:5173

✓ Network:
use --host to expose`}
          </pre>

        </div>

      </div>

      {/* ================= FLOATING ICONS ================= */}

      {/* </> */}
      <div className="floating absolute top-[26%] left-[26%] hidden lg:flex items-center justify-center w-20 h-20 rounded-[24px] border border-cyan-300/20 bg-white/[0.04] backdrop-blur-2xl text-4xl text-white/80 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
        {"</>"}
      </div>

      {/* {} */}
      <div className="floating absolute bottom-[28%] left-[24%] hidden lg:flex items-center justify-center w-20 h-20 rounded-[24px] border border-cyan-300/20 bg-white/[0.04] backdrop-blur-2xl text-4xl text-white/80 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
        {"{}"}
      </div>

      {/* 🌐 */}
      <div className="floating absolute bottom-[10%] left-[25%] hidden lg:flex items-center justify-center w-20 h-20 rounded-[24px] border border-cyan-300/20 bg-white/[0.04] backdrop-blur-2xl text-4xl text-white/80 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
        🌐
      </div>

      {/* ================= RIGHT SIDE ================= */}

      {/* ACCESS */}
      <div className="floating absolute right-[10%] top-[30%] hidden lg:block">

        <div className="px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-white/80 text-lg shadow-[0_0_40px_rgba(255,255,255,0.06)]">
          🟢 ACCESS GRANTED
        </div>

      </div>

      {/* SECURITY GLOBE */}
      <div className="absolute right-[-8%] top-[35%] hidden lg:block">

        <div className="relative w-[650px] h-[650px] rounded-full border border-orange-100/10">

          {/* glow */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,210,170,0.18),transparent_70%)]" />

          {/* dots */}
          <div className="absolute inset-0 rounded-full border border-dashed border-orange-100/10 animate-spin [animation-duration:30s]" />

          {/* shield */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="relative">

              {/* shield glow */}
              <div className="absolute inset-0 blur-[60px] bg-orange-200/30 rounded-full scale-150" />

              {/* shield */}
              <div className="relative text-[140px] drop-shadow-[0_0_40px_rgba(255,220,180,0.8)]">
                🛡️
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FINGERPRINT */}
      <div className="floating absolute bottom-[10%] right-[18%] hidden lg:flex items-center justify-center w-24 h-24 rounded-[26px] border border-orange-100/10 bg-white/[0.04] backdrop-blur-2xl text-5xl shadow-[0_0_40px_rgba(255,255,255,0.06)]">
        🌀
      </div>

      {/* BINARY */}
      <div className="absolute right-[4%] top-[10%] hidden lg:block text-white/25 text-sm tracking-[0.35em] leading-9">

        01001 10110 11101
        <br />
        10110 11101 01001
        <br />
        11101 01001 10110
        <br />
        01001 10110 11101
        <br />
        10110 11101 01001

      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-20 w-full min-h-screen flex items-center justify-center px-6">

        <div className="text-center max-w-6xl">

          {/* TOP TAG */}
          <div className="hero-item inline-flex items-center gap-3 px-8 py-4 rounded-full border border-cyan-100/10 bg-white/[0.04] backdrop-blur-2xl mb-10 shadow-[0_0_40px_rgba(255,255,255,0.04)]">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="tracking-[0.30em] uppercase text-sm text-[#F3DDD0]">
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
              xl:text-[9rem]
              font-black
              leading-[0.88]
              tracking-tight
              text-white/95
              drop-shadow-[0_0_35px_rgba(255,255,255,0.12)]
            "
          >

            MD. AZIZUL

            <br />

            <span className="text-white/92">
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

            {/* PRIMARY */}
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                group
                px-12
                py-5
                rounded-full
                bg-[#F3DDD0]
                text-black
                font-semibold
                text-lg
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]
              "
            >

              <span className="flex items-center gap-3">

                View Projects

                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>

              </span>

            </button>

            {/* SECONDARY */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                group
                px-12
                py-5
                rounded-full
                border
                border-white/20
                bg-white/[0.04]
                backdrop-blur-2xl
                text-white
                text-lg
                transition-all
                duration-500
                hover:bg-white/[0.08]
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