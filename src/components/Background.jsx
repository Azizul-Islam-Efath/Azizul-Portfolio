import { useEffect, useRef } from "react";

/**
 * Ultra Cybersecurity Background
 * Exact-inspired recreation of the provided screenshot
 * Vite + React + Tailwind compatible
 */

export default function ProjectBackground() {
  const canvasRef = useRef(null);

  // ─────────────────────────────────────────────
  // Animated floating particles
  // ─────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
      o: Math.random() * 0.5 + 0.1,
    }));

    let animationFrame;

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,140,0,${p.o})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ff8c00";
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#070b13]">
      {/* ─────────────────────────────────────────────
          Deep background gradient
      ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 75% 45%, rgba(255,140,0,0.08), transparent 35%),
            radial-gradient(circle at 20% 20%, rgba(255,140,0,0.04), transparent 30%),
            linear-gradient(to bottom, #09111c 0%, #05070d 100%)
          `,
        }}
      />

      {/* Animated particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />

      {/* ─────────────────────────────────────────────
          Main SVG
      ───────────────────────────────────────────── */}
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          {/* Orange Glow */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Thin Circuit Gradient */}
          <linearGradient id="trace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9a1f" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ff6600" stopOpacity="0.2" />
          </linearGradient>

          {/* Chip Glow */}
          <radialGradient id="chipGlow">
            <stop offset="0%" stopColor="#ff9a1f" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff9a1f" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ─────────────────────────────────────────────
            Background Geometry Panels
        ───────────────────────────────────────────── */}
        <g opacity="0.2">
          {Array.from({ length: 18 }).map((_, i) => (
            <rect
              key={i}
              x={(i % 6) * 260 - 40}
              y={Math.floor(i / 6) * 220}
              width="220"
              height="140"
              rx="10"
              fill="#111826"
              stroke="#1d2b3c"
              strokeWidth="2"
            />
          ))}
        </g>

        {/* ─────────────────────────────────────────────
            LEFT LARGE CIRCUIT PATH
        ───────────────────────────────────────────── */}
        <g
          stroke="url(#trace)"
          strokeWidth="4"
          fill="none"
          opacity="0.9"
          filter="url(#glow)"
        >
          <path d="M40 170 H260 V110 H470 V180" />
          <path d="M470 180 V280 H640" />
          <path d="M640 280 V390 H780" />
        </g>

        {/* ─────────────────────────────────────────────
            LEFT TRANSPARENT CODE PANEL
        ───────────────────────────────────────────── */}
        <g opacity="0.9">
          <rect
            x="500"
            y="220"
            width="250"
            height="350"
            rx="12"
            fill="rgba(12,16,27,0.45)"
            stroke="rgba(255,140,0,0.18)"
            strokeWidth="1.5"
          />

          {/* Fake code lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1="530"
              y1={250 + i * 14}
              x2={600 + ((i * 37) % 90)}
              y2={250 + i * 14}
              stroke="#ff9a1f"
              strokeOpacity={i % 2 === 0 ? 0.5 : 0.22}
              strokeWidth="2"
            />
          ))}
        </g>

        {/* ─────────────────────────────────────────────
            MAIN SECURITY CHIP
        ───────────────────────────────────────────── */}
        <g transform="translate(1080 430)">
          {/* Outer Glow */}
          <circle r="110" fill="url(#chipGlow)" opacity="0.3">
            <animate
              attributeName="r"
              values="100;115;100"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Main Chip */}
          <rect
            x="-55"
            y="-55"
            width="110"
            height="110"
            rx="10"
            fill="#0f1725"
            stroke="#ff9a1f"
            strokeWidth="3"
            filter="url(#glow)"
          />

          {/* Lock */}
          <rect
            x="-18"
            y="-2"
            width="36"
            height="28"
            rx="4"
            fill="#ff9a1f"
          />

          <path
            d="M-12 -2 V-18 A12 12 0 0 1 12 -18 V-2"
            fill="none"
            stroke="#ff9a1f"
            strokeWidth="4"
          />

          {/* Pulsing */}
          <animateTransform
            attributeName="transform"
            type="scale"
            additive="sum"
            values="1;1.015;1"
            dur="3s"
            repeatCount="indefinite"
          />
        </g>

        {/* ─────────────────────────────────────────────
            RIGHT CIRCUIT NETWORK
        ───────────────────────────────────────────── */}
        <g
          stroke="url(#trace)"
          fill="none"
          strokeWidth="3"
          filter="url(#glow)"
        >
          {[
            "M1135 380 H1350",
            "M1135 410 H1420",
            "M1135 440 H1380",
            "M1135 470 H1450",
            "M1135 500 H1320",

            "M1025 380 H860",
            "M1025 410 H770",
            "M1025 440 H720",
            "M1025 470 H810",
            "M1025 500 H880",

            "M1080 320 V180",
            "M1080 540 V700",
          ].map((d, i) => (
            <path key={i} d={d}>
              <animate
                attributeName="stroke-opacity"
                values="0.3;1;0.3"
                dur={`${2 + i * 0.2}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}

          {/* Nodes */}
          {[
            [1360, 380],
            [1430, 410],
            [1390, 440],
            [1460, 470],
            [1330, 500],
            [850, 380],
            [760, 410],
            [710, 440],
            [800, 470],
            [870, 500],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="5" fill="#ff9a1f">
              <animate
                attributeName="r"
                values="4;7;4"
                dur={`${1.8 + i * 0.2}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        {/* ─────────────────────────────────────────────
            Small security icons
        ───────────────────────────────────────────── */}
        <g
          stroke="#ff9a1f"
          strokeWidth="2"
          fill="none"
          opacity="0.65"
        >
          <circle cx="900" cy="300" r="28" />
          <path d="M890 300 h20" />
          <path d="M900 290 v20" />

          <circle cx="1280" cy="560" r="28" />
          <path d="M1270 560 h20" />
          <path d="M1280 550 v20" />
        </g>
      </svg>

      {/* ─────────────────────────────────────────────
          Floating bottom orange haze
      ───────────────────────────────────────────── */}
      <div
        className="absolute bottom-[-10%] left-0 w-full h-[40%] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,140,0,0.18), transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* ─────────────────────────────────────────────
          Ambient overlay grain
      ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />
    </div>
  );
}