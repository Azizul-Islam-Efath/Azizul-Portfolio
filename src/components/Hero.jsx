import { useEffect, useRef } from "react";
import { Typewriter } from "../utils";
import gsap from "gsap";

import profileImg from "../assets/me.png";

/* ─── SVG DECORATIONS (Globe, Shield, Fingerprint) ─── */
// (Maintaining your existing high-quality SVG assets)

function GlobeSVG() {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff8c42" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#ff6a00" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ff6a00" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="250" cy="250" r="230" fill="url(#globeGlow)" />
      <circle cx="250" cy="250" r="210" fill="none" stroke="#ff8c4240" strokeWidth="1" />
      {[0.15, 0.3, 0.5, 0.7, 0.85].map((t, i) => {
        const y = 60 + t * 380;
        const halfW = Math.sqrt(Math.max(0, 210 * 210 - (y - 250) * (y - 250)));
        return halfW > 0 ? (
          <ellipse key={i} cx="250" cy={y} rx={halfW * 0.95} ry={halfW * 0.18} fill="none" stroke="#ff8c4228" strokeWidth="0.8" />
        ) : null;
      })}
    </svg>
  );
}

/* ─── MAIN COMPONENT ────────────────────────────────────────────── */

export default function Hero() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        opacity: 0,
        y: 50,
        duration: 1.4,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.to(".hero-image", {
        scale: 1.12,
        duration: 18,
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
      className="relative w-full min-h-screen overflow-hidden bg-[#07111B] text-white flex items-center justify-center pt-20"
    >
      {/* ════════ BACKGROUND VISUALS ════════ */}
      <div className="absolute left-[-10%] top-0 w-[900px] h-[900px] bg-cyan-500/15 blur-[200px] rounded-full pointer-events-none" />
      
      {/* FULLSCREEN IMAGE: Maintained raised position */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={profileImg}
          alt="Azizul Islam"
          className="hero-image absolute inset-0 w-full h-full object-cover object-[center_55%] opacity-[0.42] mix-blend-lighten pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111B]/70 via-transparent to-[#07111B] opacity-95" />
      </div>

      {/* ════════ MAIN CONTENT (Lowered and Glossy) ════════ */}
      <div className="relative z-30 text-center px-6 mt-12">
        <div className="hero-item inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl mb-12">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
          <span className="tracking-[0.4em] uppercase text-[10px] text-white/70 font-bold">
            Software Engineering • Cyber Security
          </span>
        </div>

        <h1 className="hero-item text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black leading-[0.8] tracking-tighter mb-8">
          {/* GLOSSY MD. AZIZUL (Transparent with Shine) */}
          <span 
            className="text-transparent"
            style={{ 
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.5)",
              textStroke: "1px rgba(255, 255, 255, 0.5)",
              filter: "drop-shadow(0 0 15px rgba(255,255,255,0.1))"
            }}
          >
            MD. AZIZUL
          </span>
          <br />
          {/* GLOSSY ISLAM (Colored with Specular Highlight) */}
          <span 
            className="bg-clip-text text-transparent"
            style={{ 
              backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #7ee8f8 30%, #22d3ee 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              filter: "drop-shadow(0 10px 20px rgba(6,182,212,0.3))"
            }}
          >
            ISLAM
          </span>
        </h1>

        <div className="hero-item text-lg md:text-2xl text-white/40 font-light tracking-[0.2em] mb-14">
          <Typewriter
            words={[
              "Full Stack Web Developer",
              "Cyber Security Specialist",
              "Network Security Enthusiast",
              "Software Engineering Student",
            ]}
          />
        </div>

        <div className="hero-item flex flex-col sm:flex-row items-center justify-center gap-8">
          <button className="group relative px-12 py-4 rounded-full bg-white text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]">
            Explore Projects
          </button>
          
          <button className="group px-12 py-4 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white/80 transition-all hover:bg-white/[0.08]">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Decorative Globe */}
      <div className="absolute right-[-5%] bottom-[-5%] w-[500px] h-[500px] hidden lg:block opacity-20 pointer-events-none">
        <GlobeSVG />
      </div>
    </section>
  );
}