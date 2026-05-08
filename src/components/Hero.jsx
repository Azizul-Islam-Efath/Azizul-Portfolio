import { useEffect, useRef } from "react";
import { Typewriter } from "../utils";
import gsap from "gsap";

import profileImg from "../assets/me.png";

/* ─── SVG Helpers ────────────────────────────────────────────────── */
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
      {[
        [250, 70], [370, 155], [420, 290], [350, 410], [150, 420], [80, 290], [130, 155], [310, 130], [390, 220], [390, 350],
        [250, 430], [110, 350], [110, 210], [200, 100], [300, 460], [170, 200], [330, 200], [330, 310], [170, 310], [250, 250],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#ff8c42" opacity="0.7" />
      ))}
      <circle cx="250" cy="250" r="90" fill="url(#innerGlow)" />
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

export default function Hero() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", { opacity: 0, y: 40, duration: 1, stagger: 0.12, ease: "power3.out" });
      gsap.to(".floating", { y: -18, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".floating-alt", { y: -12, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
      gsap.to(".hero-image", { scale: 1.03, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="home" className="relative w-full min-h-screen overflow-hidden bg-[#07111B] text-white">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-[-10%] top-0 w-[900px] h-[900px] bg-cyan-500/25 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute right-[-5%] top-[5%] w-[800px] h-[800px] bg-orange-400/15 blur-[200px] rounded-full pointer-events-none" />

      {/* FULLSCREEN HERO IMAGE */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={profileImg}
          alt="Azizul"
          className="hero-image absolute left-1/2 top-0 -translate-x-1/2 h-full w-auto min-w-[768px] max-w-none object-cover object-top opacity-[0.32] mix-blend-lighten pointer-events-none select-none"
        />
      </div>

      {/* DECOR RINGS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1350px] h-[1350px] rounded-full border border-white/[0.06]" />
        <div className="absolute w-[900px] h-[900px] rounded-full border border-white/[0.07]" />
      </div>

      {/* LEFT FLOATING PANELS */}
      <div className="floating absolute top-[17%] left-[2%] hidden lg:block">
        <div className="w-[235px] rounded-2xl border border-cyan-200/10 bg-[#0a1929]/70 backdrop-blur-2xl p-5 shadow-[0_0_40px_rgba(0,255,255,0.04)]">
          <pre className="text-cyan-300/55 text-[11px] leading-[1.9] font-mono">
{`<html>
  <head>
    <title>Portfolio</title>
  </head>
</html>`}
          </pre>
        </div>
      </div>

      <div className="floating-alt absolute bottom-[26%] left-[2%] hidden lg:block">
        <div className="w-[220px] rounded-2xl border border-cyan-200/10 bg-[#0a1929]/70 backdrop-blur-2xl p-5">
          <pre className="text-cyan-100/45 text-[11px] leading-[1.9] font-mono">
{`.hero {
 display: flex;
 align-items: center;
}`}
          </pre>
        </div>
      </div>

      {/* RIGHT ELEMENTS */}
      <div className="absolute right-[-12%] top-[14%] w-[600px] h-[600px] hidden lg:block pointer-events-none">
        <GlobeSVG />
      </div>

      <div className="floating absolute right-[11%] top-[42%] hidden lg:flex items-center justify-center w-[130px] h-[130px] rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl">
        <ShieldLockSVG />
      </div>

      <div className="floating absolute right-[8%] bottom-[10%] hidden lg:flex items-center justify-center w-[80px] h-[80px] rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <FingerprintSVG />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 w-full min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">
          <div className="hero-item inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-cyan-100/10 bg-white/[0.04] backdrop-blur-xl mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            <span className="tracking-[0.26em] uppercase text-xs text-[#F3DDD0]/90 font-medium">
              Cyber Security • Web Developer
            </span>
          </div>

          <h1 className="hero-item text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black leading-[0.88] tracking-tight">
            <span className="text-white/92">MD. AZIZUL</span>
            <br />
            <span style={{ background: "linear-gradient(90deg, #7ee8f8 0%, #38bdf8 40%, #22d3ee 70%, #67e8f9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              ISLAM
            </span>
          </h1>

          <div className="hero-item mt-7 text-xl md:text-2xl text-white/60 font-light tracking-wide">
            <Typewriter words={["Full Stack Web Developer", "Cyber Security Enthusiast", "Networking Specialist", "Open Source Contributor"]} />
          </div>

          <div className="hero-item mt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="group px-10 py-4 rounded-full bg-[#F3DDD0] text-black font-semibold transition-all duration-500 hover:scale-105">
              View Projects →
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="group px-10 py-4 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-2xl text-white transition-all duration-500 hover:scale-105">
              Contact Me ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}