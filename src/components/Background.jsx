import { useEffect, useRef } from "react";

/**
 * Ultra Premium Cybersecurity Background
 * Hybrid version:
 * - Keeps your SVG motherboard structure
 * - Adds cinematic canvas animation system
 * - Adds parallax
 * - Adds flowing particles
 * - Adds holographic ambient effects
 * - Production-ready for Vite + React
 */

export default function ProjectBackground() {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const neon = "#ff8a3d";

    // ─────────────────────────────────────────────
    // PARTICLES
    // ─────────────────────────────────────────────
    const particles = Array.from({ length: 180 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.3,
      dx: (Math.random() - 0.5) * 0.12,
      dy: (Math.random() - 0.5) * 0.12,
      alpha: Math.random() * 0.6 + 0.15,
    }));

    // ─────────────────────────────────────────────
    // RANDOM CIRCUITS
    // ─────────────────────────────────────────────
    const paths = [];

    for (let i = 0; i < 45; i++) {
      const horizontal = Math.random() > 0.5;

      paths.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: 120 + Math.random() * 280,
        horizontal,
        speed: 0.002 + Math.random() * 0.005,
        offset: Math.random() * 100,
      });
    }

    // ─────────────────────────────────────────────
    // FLOWING DATA
    // ─────────────────────────────────────────────
    const dataFlows = [];

    for (let i = 0; i < 35; i++) {
      const path = paths[Math.floor(Math.random() * paths.length)];

      dataFlows.push({
        path,
        progress: Math.random(),
        speed: 0.0015 + Math.random() * 0.004,
      });
    }

    // ─────────────────────────────────────────────
    // GRID
    // ─────────────────────────────────────────────
    function drawGrid() {
      ctx.save();

      ctx.strokeStyle = "rgba(255,138,61,0.03)";
      ctx.lineWidth = 1;

      const size = 70;

      for (let x = 0; x < width; x += size) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += size) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.restore();
    }

    // ─────────────────────────────────────────────
    // DRAW CIRCUITS
    // ─────────────────────────────────────────────
    function drawCircuits(time) {
      ctx.save();

      paths.forEach((p) => {
        const glow =
          0.25 + Math.sin(time * p.speed + p.offset) * 0.25;

        ctx.strokeStyle = `rgba(255,138,61,${0.15 + glow})`;

        ctx.shadowColor = neon;
        ctx.shadowBlur = 12;

        ctx.lineWidth = 2;

        ctx.beginPath();

        if (p.horizontal) {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.length * 0.5, p.y);
          ctx.lineTo(p.x + p.length * 0.5, p.y + 35);
          ctx.lineTo(p.x + p.length, p.y + 35);
        } else {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + p.length * 0.5);
          ctx.lineTo(p.x + 35, p.y + p.length * 0.5);
          ctx.lineTo(p.x + 35, p.y + p.length);
        }

        ctx.stroke();

        // Nodes
        ctx.fillStyle = neon;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
    }

    // ─────────────────────────────────────────────
    // DATA FLOW DOTS
    // ─────────────────────────────────────────────
    function drawDataFlows() {
      ctx.save();

      dataFlows.forEach((d) => {
        d.progress += d.speed;

        if (d.progress > 1) d.progress = 0;

        const p = d.path;

        let px;
        let py;

        if (p.horizontal) {
          px = p.x + p.length * d.progress;
          py = p.y + (d.progress > 0.5 ? 35 : 0);
        } else {
          px = p.x + (d.progress > 0.5 ? 35 : 0);
          py = p.y + p.length * d.progress;
        }

        ctx.fillStyle = "#ffd4b3";

        ctx.shadowColor = neon;
        ctx.shadowBlur = 20;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
    }

    // ─────────────────────────────────────────────
    // PARTICLES
    // ─────────────────────────────────────────────
    function drawParticles() {
      ctx.save();

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();

        ctx.fillStyle = `rgba(255,138,61,${p.alpha})`;

        ctx.shadowColor = neon;
        ctx.shadowBlur = 10;

        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        ctx.fill();
      });

      ctx.restore();
    }

    // ─────────────────────────────────────────────
    // FLOATING PANELS
    // ─────────────────────────────────────────────
    function drawPanels(time) {
      const float = Math.sin(time * 0.0015) * 8;

      const panels = [
        {
          x: width * 0.18,
          y: height * 0.22 + float,
          w: 220,
          h: 150,
        },
        {
          x: width * 0.72,
          y: height * 0.16 - float,
          w: 240,
          h: 170,
        },
      ];

      ctx.save();

      panels.forEach((p) => {
        ctx.fillStyle = "rgba(255,138,61,0.03)";
        ctx.strokeStyle = "rgba(255,138,61,0.18)";

        ctx.shadowColor = neon;
        ctx.shadowBlur = 20;

        ctx.lineWidth = 1.2;

        ctx.beginPath();
        ctx.roundRect(p.x, p.y, p.w, p.h, 12);
        ctx.fill();
        ctx.stroke();

        // fake code lines
        for (let i = 0; i < 12; i++) {
          ctx.strokeStyle = `rgba(255,138,61,${
            0.08 + Math.random() * 0.25
          })`;

          ctx.beginPath();

          ctx.moveTo(p.x + 18, p.y + 20 + i * 11);

          ctx.lineTo(
            p.x + 60 + Math.random() * 120,
            p.y + 20 + i * 11
          );

          ctx.stroke();
        }
      });

      ctx.restore();
    }

    // ─────────────────────────────────────────────
    // ANIMATION LOOP
    // ─────────────────────────────────────────────
    let animationFrame;

    function animate(time) {
      ctx.clearRect(0, 0, width, height);

      const parallaxX = (mouseX - width / 2) * 0.01;
      const parallaxY = (mouseY - height / 2) * 0.01;

      ctx.save();

      ctx.translate(parallaxX, parallaxY);

      drawGrid();
      drawCircuits(time);
      drawDataFlows();
      drawParticles();
      drawPanels(time);

      ctx.restore();

      animationFrame = requestAnimationFrame(animate);
    }

    animate(0);

    // ─────────────────────────────────────────────
    // EVENTS
    // ─────────────────────────────────────────────
    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function handleMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 -z-50 overflow-hidden bg-[#070b13]"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 75% 45%, rgba(255,140,0,0.10), transparent 35%),
            radial-gradient(circle at 20% 20%, rgba(255,140,0,0.05), transparent 30%),
            linear-gradient(to bottom, #09111c 0%, #05070d 100%)
          `,
        }}
      />

      {/* Animated Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-90"
      />

      {/* SVG LAYER */}
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="trace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9a1f" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ff6600" stopOpacity="0.2" />
          </linearGradient>

          <radialGradient id="chipGlow">
            <stop offset="0%" stopColor="#ff9a1f" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff9a1f" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* BACKGROUND PANELS */}
        <g opacity="0.16">
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

        {/* LEFT CIRCUIT */}
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

        {/* HOLOGRAM PANEL */}
        <g opacity="0.9">
          <rect
            x="500"
            y="220"
            width="250"
            height="350"
            rx="12"
            fill="rgba(12,16,27,0.4)"
            stroke="rgba(255,140,0,0.18)"
            strokeWidth="1.5"
          />

          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1="530"
              y1={250 + i * 14}
              x2={600 + ((i * 37) % 90)}
              y2={250 + i * 14}
              stroke="#ff9a1f"
              strokeOpacity={i % 2 === 0 ? 0.45 : 0.18}
              strokeWidth="2"
            />
          ))}
        </g>

        {/* CENTER CHIP */}
        <g transform="translate(1080 430)">
          <circle r="120" fill="url(#chipGlow)" opacity="0.25">
            <animate
              attributeName="r"
              values="110;125;110"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          <rect
            x="-55"
            y="-55"
            width="110"
            height="110"
            rx="12"
            fill="#0f1725"
            stroke="#ff9a1f"
            strokeWidth="3"
            filter="url(#glow)"
          />

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

          <animateTransform
            attributeName="transform"
            type="scale"
            additive="sum"
            values="1;1.015;1"
            dur="3s"
            repeatCount="indefinite"
          />
        </g>
      </svg>

      {/* Bottom Glow */}
      <div
        className="absolute bottom-[-10%] left-0 w-full h-[40%] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,140,0,0.16), transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Cinematic Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,138,61,0.05), transparent 55%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}