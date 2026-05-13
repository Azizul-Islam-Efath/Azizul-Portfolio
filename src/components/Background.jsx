import { useEffect, useRef } from "react";

/**
 * EXACT cinematic cybersecurity motherboard background
 * Accurately rebuilt from the reference screenshot:
 * - Isometric-style dark PCB board with raised 3D blocks
 * - Orange neon circuit traces with right-angle routing
 * - Center-right security chip with padlock icon
 * - Floating code panels (left + center)
 * - Security icons: shields, globe, key, lock, database, atom
 * - Dot-node network connections on right side
 * - Flowing orange particles along traces
 * - Deep cinematic vignette + orange atmospheric glow
 */

export default function ProjectBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    let mouseX = w / 2;
    let mouseY = h / 2;

    const NEON = "#ff8a3d";
    const NEON2 = "#ffae42";

    // ─── PARTICLES ───────────────────────────────────────────
    const particles = Array.from({ length: 180 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.2,
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      o: Math.random() * 0.55 + 0.08,
    }));

    // ─── TRACE FLOW DOTS ─────────────────────────────────────
    // Dots travelling along the main horizontal trace paths
    const traceFlows = [
      // top horizontal band
      { progress: 0.1, speed: 0.0018, y: 0.24 },
      { progress: 0.4, speed: 0.0022, y: 0.24 },
      { progress: 0.7, speed: 0.0015, y: 0.24 },
      // mid horizontal band
      { progress: 0.2, speed: 0.002, y: 0.42 },
      { progress: 0.55, speed: 0.0025, y: 0.42 },
      { progress: 0.85, speed: 0.0019, y: 0.42 },
      // lower band
      { progress: 0.3, speed: 0.0017, y: 0.62 },
      { progress: 0.65, speed: 0.0023, y: 0.62 },
      // vertical right side
      { progress: 0.1, speed: 0.002, isVert: true, x: 0.72 },
      { progress: 0.5, speed: 0.0018, isVert: true, x: 0.72 },
      { progress: 0.8, speed: 0.0024, isVert: true, x: 0.72 },
    ];

    // ─── RESIZE ──────────────────────────────────────────────
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);

    // ─── DRAW FUNCTIONS ──────────────────────────────────────

    function neonStroke(color = NEON, blur = 8) {
      ctx.shadowColor = color;
      ctx.shadowBlur = blur;
      ctx.strokeStyle = color;
    }

    function neonFill(color = NEON, blur = 12) {
      ctx.shadowColor = color;
      ctx.shadowBlur = blur;
      ctx.fillStyle = color;
    }

    // subtle grid
    function drawGrid() {
      ctx.save();
      ctx.strokeStyle = "rgba(255,138,61,0.022)";
      ctx.lineWidth = 1;
      const sz = 64;
      for (let x = 0; x < w; x += sz) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += sz) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      ctx.restore();
    }

    // PCB raised blocks (dark matte tiles)
    function drawPCBBlocks() {
      ctx.save();
      const bw = 148, bh = 96, gx = 164, gy = 116;
      for (let row = 0; row * gy < h + gy; row++) {
        for (let col = 0; col * gx < w + gx; col++) {
          const x = col * gx;
          const y = row * gy;
          // bottom shadow for 3-D lift
          ctx.fillStyle = "rgba(0,0,0,0.55)";
          ctx.beginPath();
          ctx.roundRect(x + 4, y + 6, bw, bh, 7);
          ctx.fill();
          // face
          ctx.fillStyle = "rgba(10,16,26,0.88)";
          ctx.strokeStyle = "rgba(38,52,72,0.5)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(x, y, bw, bh, 7);
          ctx.fill();
          ctx.stroke();
          // subtle top-edge highlight
          ctx.strokeStyle = "rgba(255,138,61,0.06)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x + 7, y + 1);
          ctx.lineTo(x + bw - 7, y + 1);
          ctx.stroke();
        }
      }
      ctx.restore();
    }

    // The main neon circuit traces — matching screenshot routing
    function drawTraces(t) {
      ctx.save();
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      // helper: animated pulsing opacity
      const pulse = (base, amp, freq, offset = 0) =>
        base + amp * Math.sin(t * freq + offset);

      // ── FAR LEFT branch traces ───────────────────────────
      ctx.lineWidth = 2.5;
      neonStroke(NEON, 10);
      ctx.globalAlpha = pulse(0.7, 0.25, 0.8, 0);
      ctx.beginPath();
      ctx.moveTo(0, h * 0.28);
      ctx.lineTo(w * 0.06, h * 0.28);
      ctx.lineTo(w * 0.06, h * 0.18);
      ctx.lineTo(w * 0.14, h * 0.18);
      ctx.lineTo(w * 0.14, h * 0.12);
      ctx.lineTo(w * 0.22, h * 0.12);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, h * 0.38);
      ctx.lineTo(w * 0.04, h * 0.38);
      ctx.lineTo(w * 0.04, h * 0.48);
      ctx.lineTo(w * 0.1, h * 0.48);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, h * 0.55);
      ctx.lineTo(w * 0.08, h * 0.55);
      ctx.lineTo(w * 0.08, h * 0.65);
      ctx.lineTo(w * 0.18, h * 0.65);
      ctx.lineTo(w * 0.18, h * 0.72);
      ctx.stroke();

      // ── TOP HORIZONTAL MAIN TRACE ────────────────────────
      ctx.lineWidth = 4;
      neonStroke(NEON2, 14);
      ctx.globalAlpha = pulse(0.85, 0.12, 0.6, 1);
      ctx.beginPath();
      ctx.moveTo(w * 0.12, h * 0.22);
      ctx.lineTo(w * 0.28, h * 0.22);
      ctx.lineTo(w * 0.28, h * 0.14);
      ctx.lineTo(w * 0.48, h * 0.14);
      ctx.lineTo(w * 0.48, h * 0.22);
      ctx.lineTo(w * 0.58, h * 0.22);
      ctx.lineTo(w * 0.58, h * 0.16);
      ctx.lineTo(w * 0.72, h * 0.16);
      ctx.stroke();

      // branch down from 0.28
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(w * 0.28, h * 0.22);
      ctx.lineTo(w * 0.28, h * 0.36);
      ctx.lineTo(w * 0.35, h * 0.36);
      ctx.stroke();

      // ── LEFT CODE PANEL BOX OUTLINE ──────────────────────
      ctx.lineWidth = 2;
      neonStroke(NEON, 8);
      ctx.globalAlpha = pulse(0.65, 0.2, 0.5, 0.5);
      ctx.strokeRect(w * 0.04, h * 0.38, w * 0.22, h * 0.35);

      // inner detail lines
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.35;
      for (let i = 0; i < 10; i++) {
        const ly = h * 0.41 + i * (h * 0.03);
        ctx.beginPath();
        ctx.moveTo(w * 0.06, ly);
        ctx.lineTo(w * 0.06 + w * (0.04 + (i * 0.013) % 0.1), ly);
        ctx.stroke();
      }

      // ── CENTER CODE PANEL ────────────────────────────────
      ctx.lineWidth = 2;
      neonStroke(NEON, 9);
      ctx.globalAlpha = pulse(0.7, 0.18, 0.45, 1.2);
      ctx.strokeRect(w * 0.3, h * 0.22, w * 0.19, h * 0.48);

      // code lines inside center panel
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.38;
      for (let i = 0; i < 28; i++) {
        const ly = h * 0.255 + i * (h * 0.016);
        const lw = w * (0.05 + ((i * 37 + 13) % 70) / 700);
        ctx.beginPath();
        ctx.moveTo(w * 0.32, ly);
        ctx.lineTo(w * 0.32 + lw, ly);
        ctx.stroke();
      }

      // ── MID HORIZONTAL TRACES ────────────────────────────
      ctx.lineWidth = 3.5;
      neonStroke(NEON2, 12);
      ctx.globalAlpha = pulse(0.8, 0.15, 0.7, 2);
      ctx.beginPath();
      ctx.moveTo(w * 0.3, h * 0.44);
      ctx.lineTo(w * 0.52, h * 0.44);
      ctx.lineTo(w * 0.52, h * 0.52);
      ctx.lineTo(w * 0.62, h * 0.52);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(w * 0.3, h * 0.6);
      ctx.lineTo(w * 0.46, h * 0.6);
      ctx.lineTo(w * 0.46, h * 0.68);
      ctx.lineTo(w * 0.58, h * 0.68);
      ctx.stroke();

      // ── MAIN CHIP FEED TRACES (to center-right chip) ─────
      ctx.lineWidth = 4.5;
      neonStroke(NEON2, 16);
      ctx.globalAlpha = pulse(0.9, 0.08, 0.55, 0.3);

      // horizontal feeds to chip from left
      const chipX = w * 0.72;
      const chipY = h * 0.48;
      const feedYs = [-0.1, -0.07, -0.04, -0.01, 0.02, 0.05, 0.08, 0.11];
      feedYs.forEach((dy) => {
        ctx.beginPath();
        const startX = chipX - w * 0.12;
        ctx.moveTo(startX, chipY + h * dy);
        ctx.lineTo(chipX - w * 0.055, chipY + h * dy);
        ctx.stroke();
      });

      // horizontal feeds to chip from right
      const rightFeedYs = [-0.1, -0.07, -0.04, -0.01, 0.02, 0.05, 0.08, 0.11];
      rightFeedYs.forEach((dy) => {
        ctx.beginPath();
        ctx.moveTo(chipX + w * 0.055, chipY + h * dy);
        ctx.lineTo(chipX + w * 0.25, chipY + h * dy);
        ctx.stroke();
      });

      // vertical feed top + bottom
      ctx.beginPath();
      ctx.moveTo(chipX, chipY - h * 0.13);
      ctx.lineTo(chipX, chipY - h * 0.055);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(chipX, chipY + h * 0.14);
      ctx.lineTo(chipX, chipY + h * 0.055);
      ctx.stroke();

      // ── RIGHT SIDE BRANCH NETWORK ────────────────────────
      ctx.lineWidth = 2.5;
      neonStroke(NEON, 10);
      ctx.globalAlpha = pulse(0.65, 0.25, 0.9, 0.8);

      // top-right
      ctx.beginPath();
      ctx.moveTo(chipX + w * 0.17, chipY - h * 0.1);
      ctx.lineTo(w * 0.96, chipY - h * 0.1);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(chipX + w * 0.17, chipY - h * 0.07);
      ctx.lineTo(w * 0.98, chipY - h * 0.07);
      ctx.stroke();

      // bottom-right
      ctx.beginPath();
      ctx.moveTo(chipX + w * 0.17, chipY + h * 0.05);
      ctx.lineTo(w * 0.95, chipY + h * 0.05);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(chipX + w * 0.17, chipY + h * 0.08);
      ctx.lineTo(w * 0.97, chipY + h * 0.08);
      ctx.stroke();

      // right node dots
      const nodePts = [
        [w * 0.96, chipY - h * 0.1],
        [w * 0.98, chipY - h * 0.07],
        [w * 0.95, chipY + h * 0.05],
        [w * 0.97, chipY + h * 0.08],
      ];
      nodePts.forEach(([nx, ny]) => {
        const r = 4 + 2 * Math.sin(t * 1.8 + nx);
        ctx.beginPath();
        neonFill(NEON2, 14);
        ctx.arc(nx, ny, r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      ctx.restore();
    }

    // The main security chip
    function drawChip(t) {
      const cx = w * 0.72;
      const cy = h * 0.48;
      const side = Math.min(w, h) * 0.11;

      ctx.save();

      // outer glow halo
      const halo = ctx.createRadialGradient(cx, cy, side * 0.5, cx, cy, side * 2.2);
      halo.addColorStop(0, "rgba(255,138,61,0.22)");
      halo.addColorStop(0.5, "rgba(255,100,20,0.08)");
      halo.addColorStop(1, "transparent");
      ctx.fillStyle = halo;
      const haloR = side * 2.2 + 8 * Math.sin(t * 0.9);
      ctx.beginPath();
      ctx.arc(cx, cy, haloR, 0, Math.PI * 2);
      ctx.fill();

      // pulse ring
      const pulseR = side * 1.5 + 12 * Math.sin(t * 1.1);
      ctx.beginPath();
      ctx.arc(cx, cy, pulseR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,138,61,${0.18 + 0.12 * Math.sin(t * 1.1)})`;
      ctx.shadowColor = NEON;
      ctx.shadowBlur = 20;
      ctx.lineWidth = 2;
      ctx.stroke();

      // chip body shadow
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.beginPath();
      ctx.roundRect(cx - side + 5, cy - side + 7, side * 2, side * 2, 14);
      ctx.fill();

      // chip body
      ctx.fillStyle = "#0d1520";
      ctx.strokeStyle = NEON2;
      ctx.lineWidth = 3;
      ctx.shadowColor = NEON2;
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.roundRect(cx - side, cy - side, side * 2, side * 2, 14);
      ctx.fill();
      ctx.stroke();

      // inner chip face (darker inset)
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#070e18";
      ctx.beginPath();
      ctx.roundRect(cx - side * 0.78, cy - side * 0.78, side * 1.56, side * 1.56, 8);
      ctx.fill();

      // corner pin marks
      ctx.fillStyle = "rgba(255,174,66,0.55)";
      const pinPositions = [
        [-side * 0.62, -side * 0.62],
        [side * 0.62, -side * 0.62],
        [-side * 0.62, side * 0.62],
        [side * 0.62, side * 0.62],
      ];
      pinPositions.forEach(([px, py]) => {
        ctx.beginPath();
        ctx.arc(cx + px, cy + py, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // PADLOCK ICON
      const lw = side * 0.38;
      const lh = side * 0.3;
      const lx = cx - lw / 2;
      const ly = cy - lh * 0.1;

      // lock body
      ctx.fillStyle = NEON2;
      ctx.shadowColor = NEON2;
      ctx.shadowBlur = 22;
      ctx.beginPath();
      ctx.roundRect(lx, ly, lw, lh, 4);
      ctx.fill();

      // lock shackle
      ctx.strokeStyle = NEON2;
      ctx.lineWidth = side * 0.07;
      ctx.lineCap = "round";
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.moveTo(lx + lw * 0.28, ly);
      ctx.lineTo(lx + lw * 0.28, ly - lh * 0.65);
      ctx.arc(cx, ly - lh * 0.65, lw * 0.22, Math.PI, 0, false);
      ctx.lineTo(lx + lw * 0.72, ly);
      ctx.stroke();

      // keyhole
      ctx.fillStyle = "#0d1520";
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(cx, ly + lh * 0.38, lw * 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx - lw * 0.07, ly + lh * 0.45);
      ctx.lineTo(cx - lw * 0.04, ly + lh * 0.78);
      ctx.lineTo(cx + lw * 0.04, ly + lh * 0.78);
      ctx.lineTo(cx + lw * 0.07, ly + lh * 0.45);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    }

    // Security icons scattered around the design
    function drawSecurityIcons(t) {
      ctx.save();
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const iconData = [
        // Shield + gear (bottom-left area)
        { type: "shield", x: w * 0.08, y: h * 0.78, scale: 22, opacity: 0.7, phase: 0 },
        // Lock small (bottom-left)
        { type: "lock", x: w * 0.18, y: h * 0.82, scale: 16, opacity: 0.65, phase: 1 },
        // Globe (right network)
        { type: "globe", x: w * 0.88, y: h * 0.28, scale: 22, opacity: 0.7, phase: 0.5 },
        // Shield (right side)
        { type: "shield", x: w * 0.82, y: h * 0.22, scale: 20, opacity: 0.65, phase: 1.5 },
        // Key (far right)
        { type: "key", x: w * 0.94, y: h * 0.44, scale: 20, opacity: 0.7, phase: 2 },
        // Lock small (right bottom)
        { type: "lock", x: w * 0.78, y: h * 0.75, scale: 18, opacity: 0.65, phase: 0.8 },
        // Database (right side)
        { type: "database", x: w * 0.88, y: h * 0.6, scale: 20, opacity: 0.6, phase: 1.2 },
        // Atom / network (far right bottom)
        { type: "atom", x: w * 0.94, y: h * 0.7, scale: 22, opacity: 0.6, phase: 2.2 },
        // Shield with check (mid right)
        { type: "shield-gear", x: w * 0.84, y: h * 0.55, scale: 22, opacity: 0.65, phase: 0.3 },
        // Key small left
        { type: "key", x: w * 0.12, y: h * 0.68, scale: 16, opacity: 0.55, phase: 1.8 },
      ];

      iconData.forEach(({ type, x, y, scale: s, opacity, phase }) => {
        const alpha = opacity * (0.75 + 0.25 * Math.sin(t * 0.9 + phase));
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = NEON2;
        ctx.fillStyle = NEON2;
        ctx.shadowColor = NEON;
        ctx.shadowBlur = 14;

        ctx.save();
        ctx.translate(x, y);

        if (type === "shield") {
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.bezierCurveTo(s * 0.9, -s * 0.9, s * 0.9, s * 0.2, 0, s);
          ctx.bezierCurveTo(-s * 0.9, s * 0.2, -s * 0.9, -s * 0.9, 0, -s);
          ctx.closePath();
          ctx.stroke();
          // checkmark inside
          ctx.beginPath();
          ctx.moveTo(-s * 0.35, 0);
          ctx.lineTo(-s * 0.1, s * 0.3);
          ctx.lineTo(s * 0.4, -s * 0.3);
          ctx.stroke();
        }

        if (type === "shield-gear") {
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.bezierCurveTo(s * 0.9, -s * 0.9, s * 0.9, s * 0.2, 0, s);
          ctx.bezierCurveTo(-s * 0.9, s * 0.2, -s * 0.9, -s * 0.9, 0, -s);
          ctx.closePath();
          ctx.stroke();
          // gear-like inner ring
          ctx.beginPath();
          ctx.arc(0, 0, s * 0.38, 0, Math.PI * 2);
          ctx.stroke();
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * s * 0.38, Math.sin(a) * s * 0.38);
            ctx.lineTo(Math.cos(a) * s * 0.55, Math.sin(a) * s * 0.55);
            ctx.stroke();
          }
        }

        if (type === "globe") {
          ctx.beginPath();
          ctx.arc(0, 0, s, 0, Math.PI * 2);
          ctx.stroke();
          // latitude lines
          ctx.beginPath();
          ctx.ellipse(0, 0, s * 0.5, s, 0, 0, Math.PI * 2);
          ctx.stroke();
          // longitude line
          ctx.beginPath();
          ctx.moveTo(-s, 0); ctx.lineTo(s, 0);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(0, -s); ctx.lineTo(0, s);
          ctx.stroke();
        }

        if (type === "key") {
          ctx.beginPath();
          ctx.arc(-s * 0.2, 0, s * 0.45, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(s * 0.25, 0);
          ctx.lineTo(s, 0);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(s * 0.7, 0);
          ctx.lineTo(s * 0.7, s * 0.28);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(s * 0.9, 0);
          ctx.lineTo(s * 0.9, s * 0.2);
          ctx.stroke();
        }

        if (type === "lock") {
          const lw2 = s * 0.9, lh2 = s * 0.7;
          ctx.strokeRect(-lw2 / 2, -lh2 * 0.1, lw2, lh2);
          ctx.beginPath();
          ctx.moveTo(-lw2 * 0.25, -lh2 * 0.1);
          ctx.lineTo(-lw2 * 0.25, -lh2 * 0.6);
          ctx.arc(0, -lh2 * 0.6, lw2 * 0.25, Math.PI, 0, false);
          ctx.lineTo(lw2 * 0.25, -lh2 * 0.1);
          ctx.stroke();
        }

        if (type === "database") {
          ctx.beginPath();
          ctx.ellipse(0, -s * 0.55, s * 0.65, s * 0.22, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-s * 0.65, -s * 0.55);
          ctx.lineTo(-s * 0.65, s * 0.55);
          ctx.arc(0, s * 0.55, s * 0.65, Math.PI, 0, true);
          ctx.lineTo(s * 0.65, -s * 0.55);
          ctx.stroke();
          ctx.beginPath();
          ctx.ellipse(0, 0, s * 0.65, s * 0.22, 0, 0, Math.PI * 2);
          ctx.stroke();
        }

        if (type === "atom") {
          // center dot
          ctx.beginPath(); ctx.arc(0, 0, s * 0.15, 0, Math.PI * 2); ctx.fill();
          // three orbits
          for (let i = 0; i < 3; i++) {
            ctx.save();
            ctx.rotate((i / 3) * Math.PI);
            ctx.beginPath();
            ctx.ellipse(0, 0, s, s * 0.35, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          }
        }

        ctx.restore();
      });

      ctx.globalAlpha = 1;
      ctx.restore();
    }

    // Floating code lines in panels
    function drawCodeText() {
      ctx.save();
      ctx.font = `${Math.max(9, w * 0.008)}px 'Courier New', monospace`;
      ctx.fillStyle = "rgba(255,138,61,0.55)";
      ctx.shadowColor = NEON;
      ctx.shadowBlur = 6;

      const codeLines = [
        "const auth = require('secure');",
        "  validate(token) {",
        "    if (!this.secret) {",
        "      throw new Error('FAIL');",
        "    }",
        "    return jwt.verify(",
        "      token, this.secret",
        "    );",
        "  }",
        "function encrypt(data) {",
        "  return crypto.AES(",
        "    data, KEY_256",
        "  );",
        "}",
        "router.use(helmet());",
        "app.set('trust proxy', 1);",
        "  rateLimit({ max: 100 })",
        "  session.destroy();",
        "  return res.status(403)",
        "  .json({ error: 'Denied' });",
        "const hash = bcrypt(",
        "  password, saltRounds",
        ");",
        "db.query(SQL, [params]);",
        "  .then(sanitize)",
        "  .catch(logError);",
        "firewall.block(ip);",
      ];

      // Left panel
      codeLines.slice(0, 13).forEach((line, i) => {
        ctx.globalAlpha = i % 3 === 0 ? 0.7 : 0.35;
        ctx.fillText(line, w * 0.055, h * 0.42 + i * h * 0.028);
      });

      // Center panel
      codeLines.slice(0, 27).forEach((line, i) => {
        ctx.globalAlpha = i % 2 === 0 ? 0.65 : 0.28;
        ctx.fillText(line, w * 0.315, h * 0.255 + i * h * 0.017);
      });

      ctx.restore();
    }

    // Particles
    function drawParticles() {
      ctx.save();
      particles.forEach((p) => {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,138,61,${p.o})`;
        ctx.shadowColor = NEON;
        ctx.shadowBlur = 8;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }

    // Animated data dots flowing along traces
    function drawTraceFlows() {
      ctx.save();
      traceFlows.forEach((f) => {
        f.progress += f.speed;
        if (f.progress > 1) f.progress = 0;

        let x, y;
        if (f.isVert) {
          x = f.x * w;
          y = f.progress * h;
        } else {
          x = f.progress * w;
          y = f.y * h;
        }

        ctx.beginPath();
        ctx.fillStyle = "#ffd6a0";
        ctx.shadowColor = NEON2;
        ctx.shadowBlur = 22;
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }

    // ─── MAIN LOOP ───────────────────────────────────────────
    let frame;
    let startTime = null;

    const render = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const t = (timestamp - startTime) / 1000;

      ctx.clearRect(0, 0, w, h);

      const px = (mouseX - w / 2) * 0.006;
      const py = (mouseY - h / 2) * 0.006;

      ctx.save();
      ctx.translate(px, py);

      drawGrid();
      drawPCBBlocks();
      drawTraces(t);
      drawCodeText();
      drawSecurityIcons(t);
      drawChip(t);
      drawParticles();
      drawTraceFlows();

      ctx.restore();

      frame = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#04060d]">

      {/* BASE DARK BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 72% 48%, rgba(255,120,40,0.13), transparent 55%),
            radial-gradient(ellipse 50% 40% at 25% 18%, rgba(255,100,30,0.06), transparent 45%),
            radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,90,20,0.1), transparent 60%),
            linear-gradient(160deg, #081120 0%, #04060d 60%, #060a12 100%)
          `,
        }}
      />

      {/* CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* BOTTOM ORANGE ATMOSPHERIC GLOW */}
      <div
        className="absolute bottom-[-10%] left-[10%] w-[80%] h-[35%]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,120,40,0.22), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* RIGHT CHIP GLOW */}
      <div
        className="absolute"
        style={{
          right: "20%",
          top: "35%",
          width: "22%",
          height: "28%",
          background:
            "radial-gradient(circle at center, rgba(255,140,50,0.18), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* CINEMATIC VIGNETTE */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* TOP EDGE FADE */}
      <div
        className="absolute top-0 left-0 w-full h-[15%]"
        style={{
          background: "linear-gradient(to bottom, rgba(4,6,13,0.7), transparent)",
        }}
      />

      {/* BOTTOM EDGE FADE */}
      <div
        className="absolute bottom-0 left-0 w-full h-[15%]"
        style={{
          background: "linear-gradient(to top, rgba(4,6,13,0.8), transparent)",
        }}
      />
    </div>
  );
}