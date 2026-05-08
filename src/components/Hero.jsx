import { useEffect, useRef } from "react";
import { Typewriter } from "../utils";
import gsap from "gsap";

import profileImg from "../assets/me.png";

/* ─── SVG DECORATIONS ───────────────────────────────────────────── */

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
      <circle cx="250" cy="250" r="190" fill="none" stroke="#ff8c4220" strokeWidth="0.5" />
      {[0.15, 0.3, 0.5, 0.7, 0.85].map((t, i) => {
        const y = 60 + t * 380;
        const halfW = Math.sqrt(Math.max(0, 210 * 210 - (y - 250) * (y - 250)));
        return halfW > 0 ? (
          <ellipse key={i} cx="250" cy={y} rx={halfW * 0.95} ry={halfW * 0.18} fill="none" stroke="#ff8c4228" strokeWidth="0.8" />
        ) : null;
      })}
      {[-60, -30, 0, 30, 60].map((deg, i) => (
        <ellipse key={i} cx="250" cy="250" rx={Math.abs(Math.cos((deg * Math.PI) / 180) * 210)} ry="210" fill="none" stroke="#ff8c4228" strokeWidth="0.8" transform={`rotate(${deg}, 250, 250)`} />
      ))}
    </svg>
  );
}

function ShieldLockSVG() {
  return (
    <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" className="w-20 h-24">
      <path d="M60 8 L105 28 L105 72 Q105 108 60 130 Q15 108 15 72 L15 28 Z" fill="none" stroke="#ff8c42" strokeWidth="2.5" opacity="0.9" />
      <rect x="43" y="68" width="34" height="28" rx="4" fill="none" stroke="#ff8c42" strokeWidth="2" opacity="0.85" />
      <path d="M50 68 L50 58 Q50 46 60 46 Q70 46 70 58 L70 68" fill="none" stroke="#ff8c42" strokeWidth="2" opacity="0.85" />
      <circle cx="60" cy="79" r="4" fill="#ff8c42" opacity="0.8" />
    </svg>
  );
}

function FingerprintSVG() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 opacity-60">
      <path d="M40 10 C22 10 10 22 10 40 M40 10 C58 10 70 22 70 40 M20 36 C20 24 29 16 40 16" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
      <path d="M26 40 C26 30 32 24 40 24 C48 24 54 30 54 40" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
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
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
      });

      gsap.to(".floating", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-alt", {
        y: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to(".hero-image", {
        scale: 1.05,
        duration: 10,
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
      className="relative w-full min-h-screen overflow-hidden bg-[#07111B] text-white flex items-center justify-center"
    >
      {/* ════════ BACKGROUND VISUALS ════════ */}
      
      <div className="absolute left-[-10%] top-0 w-[900px] h-[900px] bg-cyan-500/20 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute right-[-5%] top-[5%] w-[800px] h-[800px] bg-orange-400/10 blur-[200px] rounded-full pointer-events-none" />

      {/* FULLSCREEN IMAGE: Focuses on Head-to-Hand region */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={profileImg}
          alt="Azizul Islam"
          className="
            hero-image
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-[center_15%]  /* Precision focus: keeps head and torso in frame */
            opacity-[0.4]
            mix-blend-lighten
            pointer-events-none
            select-none
          "
        />
        {/* Readability Masks */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111B]/40 via-transparent to-[#07111B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111B] via-transparent to-transparent opacity-50" />
      </div>

      {/* ════════ FLOATING DECOR ════════ */}

      <div className="floating absolute top-[20%] left-[5%] hidden lg:block">
        <div className="w-[240px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 shadow-2xl">
          <pre className="text-cyan-400/50 text-[10px] font-mono leading-relaxed">
{`<html>
  <head>
    <title>Azizul</title>
  </head>
  <body>
    <!-- Focus: Head to Hand -->
  </body>
</html>`}
          </pre>
        </div>
      </div>

      <div className="floating-alt absolute bottom-[15%] left-[8%] hidden lg:block">
        <div className="w-[200px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 shadow-2xl">
          <pre className="text-orange-400/40 text-[10px] font-mono leading-relaxed">
{`.profile-img {
  object-position: 50% 15%;
  transition: all 0.5s ease;
}`}
          </pre>
        </div>
      </div>

      <div className="absolute right-[-10%] top-[15%] w-[550px] h-[550px] hidden lg:block opacity-30 pointer-events-none">
        <GlobeSVG />
      </div>

      <div className="floating absolute right-[12%] top-[40%] hidden lg:flex items-center justify-center w-[120px] h-[120px] rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-2xl">
        <ShieldLockSVG />
      </div>

      <div className="floating-alt absolute right-[10%] bottom-[12%] hidden lg:flex items-center justify-center w-[80px] h-[80px] rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <FingerprintSVG />
      </div>

      {/* ════════ MAIN CONTENT ════════ */}

      <div className="relative z-30 text-center px-6">
        <div className="hero-item inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl mb-10">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
          <span className="tracking-[0.3em] uppercase text-[10px] text-white/80 font-bold">
            Software Engineering • Cyber Security
          </span>
        </div>

        <h1 className="hero-item text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-[0.85] tracking-tighter mb-6">
          <span className="text-white/90">MD. AZIZUL</span>
          <br />
          <span 
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(to right, #7ee8f8, #22d3ee, #06b6d4)" }}
          >
            ISLAM
          </span>
        </h1>

        <div className="hero-item text-lg md:text-2xl text-white/50 font-light tracking-widest mb-12">
          <Typewriter
            words={[
              "Full Stack Web Developer",
              "Cyber Security Specialist",
              "Network Security Enthusiast",
              "Software Engineering Student",
            ]}
          />
        </div>

        <div className="hero-item flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-10 py-4 rounded-full bg-white text-black font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
          >
            Explore Projects
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-10 py-4 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-md text-white font-medium tracking-wide transition-all duration-300 hover:bg-white/[0.08] hover:border-white/40"
          >
            Get In Touch
            <span className="inline-block ml-2 opacity-50 group-hover:rotate-45 transition-transform">↗</span>
          </button>
        </div>
      </div>

    </section>
  );
}