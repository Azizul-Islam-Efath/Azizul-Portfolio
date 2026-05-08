import { useEffect, useRef } from "react";
import { Typewriter } from "../utils";
import gsap from "gsap";

import profileImg from "../assets/me.png";

/* ─── SVG: High-Detail Digital Globe ────────────────────────────── */
function GlobeSVG() {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff8c42" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#ff6a00" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ff6a00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb347" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
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
      {[-60, -30, 0, 30, 60].map((deg, i) => (
        <ellipse key={i} cx="250" cy="250" rx={Math.abs(Math.cos((deg * Math.PI) / 180) * 210)} ry="210" fill="none" stroke="#ff8c4228" strokeWidth="0.8" transform={`rotate(${deg}, 250, 250)`} />
      ))}
      {[250, 70, 370, 155, 420, 290, 350, 410, 150, 420, 80, 290, 130, 155, 250, 250].map((coord, i) => (
        <circle key={i} cx={coord} cy={coord} r="3" fill="#ff8c42" opacity="0.7" />
      ))}
      <circle cx="250" cy="250" r="90" fill="url(#innerGlow)" />
    </svg>
  );
}

/* ─── SVG: Shield Lock ───────────────────────────────────────────── */
function ShieldLockSVG() {
  return (
    <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" className="w-20 h-24">
      <defs>
        <filter id="shieldGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path d="M60 8 L105 28 L105 72 Q105 108 60 130 Q15 108 15 72 L15 28 Z" fill="rgba(255,140,66,0.07)" stroke="#ff8c42" strokeWidth="2.5" filter="url(#shieldGlow)" opacity="0.9" />
      <rect x="43" y="68" width="34" height="28" rx="4" fill="none" stroke="#ff8c42" strokeWidth="2" opacity="0.85" />
      <path d="M50 68 L50 58 Q50 46 60 46 Q70 46 70 58 L70 68" fill="none" stroke="#ff8c42" strokeWidth="2" opacity="0.85" />
      <circle cx="60" cy="79" r="4" fill="#ff8c42" />
    </svg>
  );
}

/* ─── SVG: Fingerprint ───────────────────────────────────────────── */
function FingerprintSVG() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 opacity-60">
      <path d="M40 10 C22 10 10 22 10 40 M40 10 C58 10 70 22 70 40" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
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
        y: 50,
        duration: 1.4,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.to(".floating", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-image", {
        scale: 1.12,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".globe-spin", {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
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
      <div className="absolute left-[-10%] top-0 w-[900px] h-[900px] bg-cyan-500/15 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute right-[-5%] top-[5%] w-[800px] h-[800px] bg-orange-400/10 blur-[200px] rounded-full pointer-events-none" />
      
      {/* FULLSCREEN IMAGE: Raised position */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={profileImg}
          alt="Azizul Islam"
          className="hero-image absolute inset-0 w-full h-full object-cover object-[center_55%] opacity-[0.38] mix-blend-lighten pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111B]/70 via-transparent to-[#07111B] opacity-95" />
      </div>

      {/* ════════ FLOATING SECURITY ELEMENTS ════════ */}
      <div className="globe-spin absolute right-[-10%] top-[10%] w-[600px] h-[600px] hidden lg:block opacity-30 pointer-events-none">
        <GlobeSVG />
      </div>

      <div className="floating absolute right-[12%] top-[40%] hidden lg:flex items-center justify-center w-[130px] h-[130px] rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-2xl">
        <ShieldLockSVG />
      </div>

      <div className="floating absolute left-[5%] top-[20%] hidden lg:block">
        <div className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-[#0a1929]/60 backdrop-blur-xl">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          <span className="text-white/75 text-xs font-semibold tracking-[0.18em] uppercase">Access Granted</span>
        </div>
      </div>

      <div className="absolute right-[4%] top-[8%] hidden lg:block text-white/10 text-xs tracking-[0.3em] leading-8 font-mono select-none">
        01001 10110 11101<br />10110 11101 01001<br />11101 01001 10110
      </div>

      <div className="floating absolute right-[10%] bottom-[12%] hidden lg:flex items-center justify-center w-[80px] h-[80px] rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <FingerprintSVG />
      </div>

      {/* ════════ MAIN CONTENT (Glossy Typography) ════════ */}
      <div className="relative z-30 text-center px-6 mt-10">
        <div className="hero-item inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl mb-12">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
          <span className="tracking-[0.4em] uppercase text-[10px] text-white/70 font-bold">
            Software Engineering • Cyber Security
          </span>
        </div>

        <h1 className="hero-item text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-[0.85] tracking-tighter mb-8">
          {/* GLOSSY MD. AZIZUL */}
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
          {/* GLOSSY ISLAM */}
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
          <button 
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-12 py-4 rounded-full bg-white text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
          >
            Explore Projects
          </button>
          
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-12 py-4 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white/80 transition-all hover:bg-white/[0.08]"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}