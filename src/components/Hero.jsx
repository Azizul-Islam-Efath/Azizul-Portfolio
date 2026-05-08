import { useEffect, useRef } from "react";
import { Typewriter } from "../utils";
import gsap from "gsap";

import profileImg from "../assets/me.png";

/* ─── SVG: Digital Globe (Enhanced Visibility) ──────────────────── */
function GlobeSVG() {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full globe-element">
      <defs>
        <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff8c42" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#ff6a00" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ff6a00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb347" stopOpacity="0.4" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <filter id="dotGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <circle cx="250" cy="250" r="230" fill="url(#globeGlow)" />
      <circle cx="250" cy="250" r="210" fill="none" stroke="#ff8c4260" strokeWidth="1.5" />
      <circle cx="250" cy="250" r="190" fill="none" stroke="#ff8c4230" strokeWidth="0.8" />

      {/* Network lines - horizontal arcs */}
      {[0.15, 0.3, 0.5, 0.7, 0.85].map((t, i) => {
        const y = 60 + t * 380;
        const halfW = Math.sqrt(Math.max(0, 210 * 210 - (y - 250) * (y - 250)));
        return halfW > 0 ? (
          <ellipse key={i} cx="250" cy={y} rx={halfW * 0.95} ry={halfW * 0.18} fill="none" stroke="#ff8c4240" strokeWidth="1" />
        ) : null;
      })}

      {/* Meridian lines */}
      {[-60, -30, 0, 30, 60].map((deg, i) => (
        <ellipse key={i} cx="250" cy="250" rx={Math.abs(Math.cos((deg * Math.PI) / 180) * 210)} ry="210" fill="none" stroke="#ff8c4240" strokeWidth="1" transform={`rotate(${deg}, 250, 250)`} />
      ))}

      {/* Network connecting lines (Increased opacity) */}
      {[
        [250, 70, 310, 130], [310, 130, 370, 155], [370, 155, 420, 290],
        [420, 290, 390, 350], [390, 350, 350, 410], [350, 410, 250, 430],
        [250, 430, 150, 420], [150, 420, 110, 350], [110, 350, 80, 290],
        [80, 290, 110, 210], [110, 210, 130, 155], [130, 155, 200, 100],
        [200, 100, 250, 70], [250, 70, 390, 220], [390, 220, 330, 310],
        [330, 310, 250, 430], [170, 200, 330, 200], [170, 200, 170, 310],
        [170, 310, 330, 310], [250, 70, 170, 200], [310, 130, 330, 200],
        [390, 220, 330, 200], [420, 290, 330, 310], [110, 210, 170, 200],
        [80, 290, 170, 310], [150, 420, 170, 310], [300, 460, 250, 430],
        [300, 460, 350, 410], [250, 250, 170, 200], [250, 250, 330, 200],
        [250, 250, 330, 310], [250, 250, 170, 310],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ff8c4260" strokeWidth="1.2" />
      ))}

      {/* Network dot nodes (Glowing and brighter) */}
      {[
        [250, 70], [370, 155], [420, 290], [350, 410], [150, 420],
        [80, 290], [130, 155], [310, 130], [390, 220], [390, 350],
        [250, 430], [110, 350], [110, 210], [200, 100], [300, 460],
        [170, 200], [330, 200], [330, 310], [170, 310], [250, 250],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#ff8c42" filter="url(#dotGlow)" className="globe-node" />
      ))}

      <circle cx="250" cy="250" r="90" fill="url(#innerGlow)" />
    </svg>
  );
}

/* ─── SVG: Shield Lock (Enhanced Visibility) ────────────────────── */
function ShieldLockSVG() {
  return (
    <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" className="w-24 h-28">
      <defs>
        <filter id="shieldGlowStrong">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path
        d="M60 8 L105 28 L105 72 Q105 108 60 130 Q15 108 15 72 L15 28 Z"
        fill="rgba(255,140,66,0.12)"
        stroke="#ff8c42"
        strokeWidth="3"
        filter="url(#shieldGlowStrong)"
      />
      <rect x="43" y="68" width="34" height="28" rx="4" fill="none" stroke="#ff8c42" strokeWidth="2.5" />
      <path d="M50 68 L50 58 Q50 46 60 46 Q70 46 70 58 L70 68" fill="none" stroke="#ff8c42" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="60" cy="79" r="4.5" fill="#ff8c42" />
      <rect x="58" y="79" width="4" height="8" rx="1" fill="#ff8c42" />
    </svg>
  );
} 
/* ─── SVG: Fingerprint ───────────────────────────────────────────── */
function FingerprintSVG() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 opacity-60">
      <path d="M40 10 C22 10 10 22 10 40" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
      <path d="M40 10 C58 10 70 22 70 40" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 36 C20 24 29 16 40 16 C51 16 60 24 60 36" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
      <path d="M26 40 C26 30 32 24 40 24 C48 24 54 30 54 40 C54 50 48 58 40 64" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 40 C32 34 35 30 40 30 C45 30 48 34 48 40 C48 46 45 52 40 58" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
      <path d="M38 40 C38 38 39 36 40 36 C41 36 42 38 42 40 C42 44 41 48 40 52" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 46 C14 44 14 42 14 40" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
      <path d="M66 40 C66 48 64 56 60 62" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
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

      gsap.to(".floating-alt", {
        y: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to(".hero-image", {
        scale: 1.12,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Subtle rotation for the globe
      gsap.to(".globe-spin", {
        rotation: 360,
        duration: 80,
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
      className="relative w-full min-h-screen overflow-hidden bg-[#07111B] text-white flex items-center justify-center pt-20"
    >
      {/* ════════ BACKGROUND VISUALS ════════ */}
      <div className="absolute left-[-10%] top-0 w-[900px] h-[900px] bg-cyan-500/15 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute right-[-5%] top-[5%] w-[800px] h-[800px] bg-orange-400/10 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={profileImg}
          alt="Azizul Islam"
          className="hero-image absolute inset-0 w-full h-full object-cover object-[center_55%] opacity-[0.42] mix-blend-lighten pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111B]/70 via-transparent to-[#07111B] opacity-95" />
      </div>

      {/* ════════ LEFT FLOATING PANELS ════════ */}
      <div className="floating absolute top-[20%] left-[4%] hidden lg:block">
        <div className="w-[230px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 shadow-2xl">
          <pre className="text-cyan-400/50 text-[10px] font-mono leading-relaxed">
{`<html>
  <head>
    <title>Azizul</title>
  </head>
  <body>
    <!-- Secure UI -->
  </body>
</html>`}
          </pre>
        </div>
      </div>

      <div className="floating-alt absolute bottom-[20%] left-[6%] hidden lg:block">
        <div className="w-[200px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 shadow-2xl">
          <pre className="text-orange-400/40 text-[10px] font-mono leading-relaxed">
{`.profile-mask {
  filter: glossy;
  mix-blend-mode: lighten;
}`}
          </pre>
        </div>
      </div>

      {/* ════════ RIGHT FLOATING PANELS (PROPER GLOBE PLACEMENT) ════════ */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] hidden lg:block opacity-30 pointer-events-none z-10">
        <GlobeSVG />
      </div>

      <div className="floating absolute right-[10%] top-[42%] hidden lg:flex items-center justify-center w-[130px] h-[130px] rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-2xl z-20">
        <ShieldLockSVG />
      </div>

      <div className="floating-alt absolute right-[8%] bottom-[15%] hidden lg:flex items-center justify-center w-[85px] h-[85px] rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl z-20">
        <FingerprintSVG />
      </div>

      {/* ════════ MAIN CONTENT ════════ */}
      <div className="relative z-30 text-center px-6 mt-12">
        <div className="hero-item inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl mb-12">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
          <span className="tracking-[0.4em] uppercase text-[10px] text-white/70 font-bold">
            Ideate • Develop • Secure
          </span>
        </div>

        <h1 className="hero-item text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black leading-[0.8] tracking-tighter mb-8">
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
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-12 py-4 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white/80 transition-all hover:bg-white/[0.08]"
          >
            Get In Touch
            <span className="inline-block ml-2 opacity-50 group-hover:rotate-45 transition-transform">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}