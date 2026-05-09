export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      {/* ── Base dark navy ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, #080c18 0%, #0d1530 55%, #080c18 100%)",
      }} />

      {/* ── Animated orange bloom – bottom-right ── */}
      <div className="bg-anim-bloom1" style={{
        position: "absolute",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(192,88,10,0.45) 0%, rgba(139,58,10,0.15) 50%, transparent 75%)",
        bottom: "-200px",
        right: "-100px",
        filter: "blur(60px)",
      }} />

      {/* ── Animated orange orb – right-centre ── */}
      <div className="bg-anim-bloom2" style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,112,10,0.35) 0%, transparent 70%)",
        bottom: "100px",
        right: "80px",
        filter: "blur(45px)",
      }} />

      {/* ── Animated blue glow – upper-left ── */}
      <div className="bg-anim-blue" style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,58,107,0.5) 0%, transparent 70%)",
        top: "-150px",
        left: "-100px",
        filter: "blur(70px)",
      }} />

      {/* ── Subtle centre shimmer ── */}
      <div className="bg-anim-shimmer" style={{
        position: "absolute",
        width: "800px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(192,88,10,0.07) 0%, transparent 70%)",
        top: "40%",
        left: "30%",
        filter: "blur(80px)",
      }} />

      {/* ── SVG layer: arcs + bokeh ── */}
      <svg
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        {/* Topographic arcs from bottom-left */}
        {[180,260,340,420,500,580,660,740,820,900,980,1060,1140,1220,1300].map((r, i) => (
          <ellipse
            key={`a1-${i}`}
            cx="100" cy="920"
            rx={r * 1.6} ry={r}
            fill="none"
            stroke="#3a5a8a"
            strokeWidth="0.75"
            strokeOpacity={Math.max(0.03, 0.28 - i * 0.016)}
            style={{
              animation: `arcPulse ${7 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}

        {/* Topographic arcs from top-right */}
        {[200,310,420,530,640,750,860,970,1080].map((r, i) => (
          <ellipse
            key={`a2-${i}`}
            cx="1400" cy="-10"
            rx={r * 1.35} ry={r}
            fill="none"
            stroke="#c0580a"
            strokeWidth="0.6"
            strokeOpacity={Math.max(0.02, 0.18 - i * 0.018)}
            style={{
              animation: `arcPulse ${8 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2 + 1}s`,
            }}
          />
        ))}

        {/* Floating sparkle dots */}
        {[
          { cx: 128,  cy: 118, r: 3,   op: 0.7,  dur: 6  },
          { cx: 985,  cy: 310, r: 2.5, op: 0.5,  dur: 8  },
          { cx: 315,  cy: 685, r: 2,   op: 0.45, dur: 7  },
          { cx: 1110, cy: 670, r: 3.5, op: 0.6,  dur: 9  },
          { cx: 660,  cy: 175, r: 2,   op: 0.4,  dur: 5  },
          { cx: 195,  cy: 425, r: 1.5, op: 0.35, dur: 11 },
          { cx: 1260, cy: 195, r: 2,   op: 0.3,  dur: 7  },
          { cx: 540,  cy: 550, r: 1.5, op: 0.25, dur: 10 },
          { cx: 780,  cy: 820, r: 2,   op: 0.3,  dur: 8  },
          { cx: 420,  cy: 280, r: 1.5, op: 0.3,  dur: 6  },
          { cx: 860,  cy: 480, r: 2,   op: 0.25, dur: 9  },
        ].map((d, i) => (
          <circle
            key={`d-${i}`}
            cx={d.cx} cy={d.cy} r={d.r}
            fill="white"
            opacity={d.op}
            style={{
              animation: `twinkle ${d.dur}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </svg>

      {/* ── Animated noise grain overlay ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        opacity: 0.035,
        pointerEvents: "none",
      }} />

      <style>{`
        @keyframes arcPulse {
          0%   { opacity: 1; }
          50%  { opacity: 0.4; }
          100% { opacity: 1; }
        }

        @keyframes twinkle {
          0%   { opacity: 0.1; r: 1.5; }
          50%  { opacity: 0.9; r: 3;   }
          100% { opacity: 0.1; r: 1.5; }
        }

        .bg-anim-bloom1 {
          animation: bloomDrift1 14s ease-in-out infinite;
        }
        .bg-anim-bloom2 {
          animation: bloomDrift2 18s ease-in-out infinite;
        }
        .bg-anim-blue {
          animation: blueDrift 16s ease-in-out infinite;
        }
        .bg-anim-shimmer {
          animation: shimmerPulse 10s ease-in-out infinite;
        }

        @keyframes bloomDrift1 {
          0%   { transform: translate(0px,   0px)   scale(1);    }
          33%  { transform: translate(-60px, -40px) scale(1.12); }
          66%  { transform: translate(40px,  -70px) scale(0.95); }
          100% { transform: translate(0px,   0px)   scale(1);    }
        }

        @keyframes bloomDrift2 {
          0%   { transform: translate(0px,  0px)  scale(1);    }
          40%  { transform: translate(-80px,50px) scale(1.15); }
          70%  { transform: translate(30px, 80px) scale(0.9);  }
          100% { transform: translate(0px,  0px)  scale(1);    }
        }

        @keyframes blueDrift {
          0%   { transform: translate(0px, 0px)  scale(1);    }
          50%  { transform: translate(70px,60px) scale(1.1);  }
          100% { transform: translate(0px, 0px)  scale(1);    }
        }

        @keyframes shimmerPulse {
          0%   { opacity: 0.4; transform: scale(1);    }
          50%  { opacity: 1;   transform: scale(1.15); }
          100% { opacity: 0.4; transform: scale(1);    }
        }
      `}</style>
    </div>
  );
}