import { useEffect, useRef } from "react";
import { Typewriter } from "../utils";
import gsap from "gsap";

import profileImg from "../assets/me.png";

/* ─── SVG: Digital Globe ─────────────────────────────────────────── */
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

      {/* Glow background */}
      <circle cx="250" cy="250" r="230" fill="url(#globeGlow)" />

      {/* Outer ring */}
      <circle cx="250" cy="250" r="210" fill="none" stroke="#ff8c4240" strokeWidth="1" />
      <circle cx="250" cy="250" r="190" fill="none" stroke="#ff8c4220" strokeWidth="0.5" />

      {/* Network lines - horizontal arcs */}
      {[0.15, 0.3, 0.5, 0.7, 0.85].map((t, i) => {
        const y = 60 + t * 380;
        const halfW = Math.sqrt(Math.max(0, 210 * 210 - (y - 250) * (y - 250)));
        return halfW > 0 ? (
          <ellipse
            key={i}
            cx="250" cy={y}
            rx={halfW * 0.95} ry={halfW * 0.18}
            fill="none"
            stroke="#ff8c4228"
            strokeWidth="0.8"
          />
        ) : null;
      })}

      {/* Meridian lines */}
      {[-60, -30, 0, 30, 60].map((deg, i) => (
        <ellipse
          key={i}
          cx="250" cy="250"
          rx={Math.abs(Math.cos((deg * Math.PI) / 180) * 210)}
          ry="210"
          fill="none"
          stroke="#ff8c4228"
          strokeWidth="0.8"
          transform={`rotate(${deg}, 250, 250)`}
        />
      ))}

      {/* Network dot nodes */}
      {[
        [250, 70], [370, 155], [420, 290], [350, 410], [150, 420],
        [80, 290], [130, 155], [310, 130], [390, 220], [390, 350],
        [250, 430], [110, 350], [110, 210], [200, 100], [300, 460],
        [170, 200], [330, 200], [330, 310], [170, 310], [250, 250],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#ff8c42" opacity="0.7" />
      ))}

      {/* Network connecting lines */}
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
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ff8c4235" strokeWidth="0.8" />
      ))}

      {/* Center inner glow */}
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
      {/* Shield shape */}
      <path
        d="M60 8 L105 28 L105 72 Q105 108 60 130 Q15 108 15 72 L15 28 Z"
        fill="none"
        stroke="#ff8c42"
        strokeWidth="2.5"
        filter="url(#shieldGlow)"
        opacity="0.9"
      />
      <path
        d="M60 8 L105 28 L105 72 Q105 108 60 130 Q15 108 15 72 L15 28 Z"
        fill="rgba(255,140,66,0.07)"
      />
      {/* Lock body */}
      <rect x="43" y="68" width="34" height="28" rx="4" fill="none" stroke="#ff8c42" strokeWidth="2" opacity="0.85" />
      {/* Lock shackle */}
      <path
        d="M50 68 L50 58 Q50 46 60 46 Q70 46 70 58 L70 68"
        fill="none"
        stroke="#ff8c42"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Keyhole */}
      <circle cx="60" cy="79" r="4" fill="#ff8c42" opacity="0.8" />
      <rect x="58" y="79" width="4" height="8" rx="1" fill="#ff8c42" opacity="0.8" />
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

export default function Hero() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".nav-item", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.to(".floating", {
        y: -18,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-alt", {
        y: -12,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      gsap.to(".hero-image", {
        scale: 1.03,
        duration: 5,
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
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-[#07111B]
        text-white
      "
    >
      {/* ═══════════════ BACKGROUND GLOWS ═══════════════ */}

      <div className="absolute left-[-10%] top-0 w-[900px] h-[900px] bg-cyan-500/25 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute right-[-5%] top-[5%] w-[800px] h-[800px] bg-orange-400/15 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_55%)] pointer-events-none" />

      {/* ═══════════════ FULLSCREEN HERO IMAGE ═══════════════ */}

      <div className="absolute inset-0 w-full h-full overflow-hidden">
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
            w-[1100px]
            md:w-[1300px]
            lg:w-[1500px]
            xl:w-[1700px]
            max-w-none
            object-cover
            opacity-[0.28]
            mix-blend-lighten
            pointer-events-none
            select-none
          "
        />
        {/* Gradients over image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111B]/95 via-[#07111B]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#ffdcc2]/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111B]/60 via-transparent to-[#07111B]/50" />
      </div>

      {/* ═══════════════ DECOR RINGS ═══════════════ */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1350px] h-[1350px] rounded-full border border-white/[0.06]" />
        <div className="absolute w-[900px] h-[900px] rounded-full border border-white/[0.07]" />
      </div>

      {/* ═══════════════ NAVBAR ═══════════════ */}

      <nav className="relative z-30 w-full flex items-center justify-between px-8 lg:px-14 pt-7">
        {/* Logo */}
        <div className="nav-item flex items-center gap-1">
          <span className="text-2xl font-black text-white tracking-tight">AZ</span>
          <span className="text-2xl font-black text-orange-400 leading-none">.</span>
        </div>

        {/* Nav Links */}
        <ul className="nav-item hidden md:flex items-center gap-10">
          {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() =>
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  item === "Home"
                    ? "text-white font-semibold border-b border-white/60 pb-0.5"
                    : "text-white/50 hover:text-white/90"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ═══════════════ LEFT FLOATING PANELS ═══════════════ */}

      {/* HTML CODE BOX */}
      <div className="floating absolute top-[17%] left-[2%] hidden lg:block">
        <div className="w-[235px] rounded-2xl border border-cyan-200/10 bg-[#0a1929]/70 backdrop-blur-2xl p-5 shadow-[0_0_40px_rgba(0,255,255,0.04)]">
          <pre className="text-cyan-300/55 text-[11px] leading-[1.9] whitespace-pre-wrap font-mono">
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

      {/* CSS BOX */}
      <div className="floating-alt absolute bottom-[26%] left-[2%] hidden lg:block">
        <div className="w-[220px] rounded-2xl border border-cyan-200/10 bg-[#0a1929]/70 backdrop-blur-2xl overflow-hidden">
          <div className="px-5 pt-3 pb-1">
            <span className="text-xs font-semibold text-cyan-400/60 tracking-widest uppercase">CSS</span>
          </div>
          <div className="px-5 pb-4">
            <pre className="text-cyan-100/45 text-[11px] leading-[1.9] whitespace-pre-wrap font-mono">
{`.hero {
 min-height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* TERMINAL */}
      <div className="floating absolute bottom-[7%] left-[2%] hidden lg:block">
        <div className="w-[245px] rounded-2xl border border-cyan-200/10 bg-[#0a1929]/70 backdrop-blur-2xl p-5">
          <pre className="text-cyan-100/40 text-[11px] leading-[1.9] whitespace-pre-wrap font-mono">
{`$ npm run dev

> my-portfolio@1.0.0 dev
> vite

✓ Local:  localhost:5173
✓ Network: use --host
  to expose
▌`}
          </pre>
        </div>
      </div>

      {/* </> ICON */}
      <div className="floating-alt absolute top-[30%] left-[27%] hidden lg:flex items-center justify-center w-[72px] h-[72px] rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white/60 text-xl font-mono font-bold">
        {"</>"}
      </div>

      {/* {} ICON */}
      <div className="floating absolute bottom-[20%] left-[24%] hidden lg:flex items-center justify-center w-[72px] h-[72px] rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white/60 text-2xl font-mono font-bold">
        {"{}"}
      </div>

      {/* 🌐 ICON */}
      <div className="floating-alt absolute bottom-[8%] left-[18%] hidden lg:flex items-center justify-center w-[72px] h-[72px] rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-3xl">
        🌐
      </div>

      {/* ═══════════════ RIGHT: GLOBE + SECURITY ELEMENTS ═══════════════ */}

      {/* DIGITAL GLOBE */}
      <div className="absolute right-[-12%] top-[14%] w-[600px] h-[600px] hidden lg:block pointer-events-none">
        <GlobeSVG />
      </div>

      {/* SHIELD LOCK — centered on globe */}
      <div className="floating absolute right-[11%] top-[42%] hidden lg:flex items-center justify-center w-[130px] h-[130px] rounded-full border border-orange-100/10 bg-white/[0.02] backdrop-blur-xl">
        <ShieldLockSVG />
      </div>

      {/* ACCESS GRANTED */}
      <div className="floating-alt absolute right-[10%] top-[27%] hidden lg:block">
        <div className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-[#0a1929]/60 backdrop-blur-xl">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          <span className="text-white/75 text-xs font-semibold tracking-[0.18em] uppercase">Access Granted</span>
        </div>
      </div>

      {/* BINARY TEXT */}
      <div className="absolute right-[4%] top-[8%] hidden lg:block text-white/18 text-xs tracking-[0.3em] leading-8 font-mono select-none">
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

      {/* FINGERPRINT — bottom right */}
      <div className="floating absolute right-[8%] bottom-[10%] hidden lg:flex items-center justify-center w-[80px] h-[80px] rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <FingerprintSVG />
      </div>

      {/* ═══════════════ MAIN CONTENT ═══════════════ */}

      <div className="relative z-20 w-full min-h-screen flex items-center justify-center px-6 -mt-10">
        <div className="text-center max-w-5xl">

          {/* BADGE */}
          <div className="hero-item inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-cyan-100/10 bg-white/[0.04] backdrop-blur-xl mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)] animate-pulse" />
            <span className="tracking-[0.26em] uppercase text-xs text-[#F3DDD0]/90 font-medium">
              Cyber Security • Web Developer
            </span>
          </div>

          {/* NAME */}
          <h1
            className="
              hero-item
              text-6xl
              sm:text-7xl
              md:text-8xl
              lg:text-[8.5rem]
              font-black
              leading-[0.88]
              tracking-tight
              drop-shadow-[0_0_40px_rgba(255,255,255,0.12)]
            "
          >
            <span className="text-white/92">MD. AZIZUL</span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #7ee8f8 0%, #38bdf8 40%, #22d3ee 70%, #67e8f9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ISLAM
            </span>
          </h1>

          {/* TYPEWRITER */}
          <div className="hero-item mt-7 text-xl md:text-2xl text-white/60 font-light tracking-wide">
            <Typewriter
              words={[
                "Full Stack Web Developer",
                "Cyber Security Enthusiast",
                "Networking Specialist",
                "Open Source Contributor",
              ]}
            />
          </div>

          {/* THIN DIVIDER LINE */}
          <div className="hero-item mt-8 flex justify-center">
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-orange-300/50 to-transparent" />
          </div>

          {/* BUTTONS */}
          <div className="hero-item mt-6 flex flex-col sm:flex-row items-center justify-center gap-5">

            {/* PRIMARY */}
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                group
                px-10 py-4
                rounded-full
                bg-[#F3DDD0]
                text-black
                font-semibold
                text-base
                tracking-wide
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_0_50px_rgba(243,221,208,0.35)]
              "
            >
              <span className="flex items-center gap-3">
                View Projects
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>

            {/* SECONDARY */}
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                group
                px-10 py-4
                rounded-full
                border border-white/20
                bg-white/[0.04]
                backdrop-blur-2xl
                text-white
                text-base
                tracking-wide
                transition-all
                duration-500
                hover:bg-white/[0.08]
                hover:scale-105
                hover:border-white/30
              "
            >
              <span className="flex items-center gap-3">
                Contact Me
                <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
              </span>
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}