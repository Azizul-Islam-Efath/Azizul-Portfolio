export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      {/* ── Base dark navy ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #0a0e1a 0%, #0d1530 50%, #0a0e1a 100%)",
        }}
      />

      {/* ── SVG: topographic arcs + glows + bokeh ── */}
      <svg
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          {/* Big orange bloom – bottom-right */}
          <radialGradient id="bg-orange1" cx="75%" cy="80%" r="45%">
            <stop offset="0%"   stopColor="#c0580a" stopOpacity="0.6" />
            <stop offset="55%"  stopColor="#8b3a0a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0"  />
          </radialGradient>

          {/* Secondary orange – right-centre */}
          <radialGradient id="bg-orange2" cx="88%" cy="50%" r="28%">
            <stop offset="0%"   stopColor="#d4700a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0"  />
          </radialGradient>

          {/* Soft blue – upper-left */}
          <radialGradient id="bg-blue" cx="12%" cy="22%" r="40%">
            <stop offset="0%"   stopColor="#1a3a6b" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0"   />
          </radialGradient>
        </defs>

        {/* Colour washes */}
        <rect x="0" y="0" width="1400" height="900" fill="url(#bg-blue)"    />
        <rect x="0" y="0" width="1400" height="900" fill="url(#bg-orange1)" />
        <rect x="0" y="0" width="1400" height="900" fill="url(#bg-orange2)" />

        {/* ── Topographic arcs from bottom-left ── */}
        {[180,260,340,420,500,580,660,740,820,900,980,1060,1140,1220,1300].map((r, i) => (
          <ellipse
            key={`a1-${i}`}
            cx="100" cy="920"
            rx={r * 1.6} ry={r}
            fill="none"
            stroke="#3a5a8a"
            strokeWidth="0.75"
            strokeOpacity={Math.max(0.04, 0.3 - i * 0.016)}
          />
        ))}

        {/* ── Topographic arcs from top-right ── */}
        {[200,310,420,530,640,750,860,970,1080].map((r, i) => (
          <ellipse
            key={`a2-${i}`}
            cx="1400" cy="-10"
            rx={r * 1.35} ry={r}
            fill="none"
            stroke="#2a4070"
            strokeWidth="0.65"
            strokeOpacity={Math.max(0.03, 0.22 - i * 0.022)}
          />
        ))}

        {/* ── Soft bokeh orbs ── */}
        <circle cx="1080" cy="720" r="180" fill="#d4620a" opacity="0.13" />
        <circle cx="1200" cy="600" r="100" fill="#e07820" opacity="0.20" />
        <circle cx="970"  cy="800" r="130" fill="#b84a08" opacity="0.14" />
        <circle cx="1110" cy="500" r="70"  fill="#f09030" opacity="0.11" />

        {/* ── Sparkle dots ── */}
        {[
          { cx: 128,  cy: 118, r: 3,   op: 0.75 },
          { cx: 985,  cy: 310, r: 2.5, op: 0.5  },
          { cx: 315,  cy: 685, r: 2,   op: 0.45 },
          { cx: 1110, cy: 670, r: 3.5, op: 0.6  },
          { cx: 660,  cy: 175, r: 2,   op: 0.4  },
          { cx: 195,  cy: 425, r: 1.5, op: 0.35 },
          { cx: 1260, cy: 195, r: 2,   op: 0.3  },
          { cx: 540,  cy: 550, r: 1.5, op: 0.25 },
          { cx: 780,  cy: 820, r: 2,   op: 0.3  },
        ].map((d, i) => (
          <circle key={`d-${i}`} cx={d.cx} cy={d.cy} r={d.r} fill="white" opacity={d.op} />
        ))}
      </svg>

    </div>
  );
}