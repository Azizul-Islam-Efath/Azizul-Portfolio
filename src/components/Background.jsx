export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0a1016]">

      {/* =========================
          MAIN GRADIENT
      ========================== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1F97B4 0%, #6EA6AC 45%, #D8C7BC 100%)",
        }}
      />

      {/* =========================
          DARK OVERLAY
      ========================== */}
      <div className="absolute inset-0 bg-black/30" />

      {/* =========================
          ANIMATED CYAN AURORA
      ========================== */}
      <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] rounded-full bg-cyan-400/20 blur-[180px] animate-auroraOne" />

      {/* =========================
          PEACH AURORA
      ========================== */}
      <div className="absolute bottom-[-30%] right-[-10%] w-[900px] h-[900px] rounded-full bg-orange-200/20 blur-[180px] animate-auroraTwo" />

      {/* =========================
          CENTER LIGHT
      ========================== */}
      <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[140px]" />

      {/* =========================
          CYBER GRID
      ========================== */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0 animate-gridMove"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =========================
          RADIAL RING
      ========================== */}
      <div className="absolute left-1/2 top-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-spinSlow" />

      {/* =========================
          SCANLINES
      ========================== */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(255,255,255,0.08) 3px)",
        }}
      />

      {/* =========================
          FLOATING PARTICLES
      ========================== */}
      <div className="absolute inset-0 overflow-hidden">

        <span className="particle left-[10%] top-[20%]" />
        <span className="particle left-[25%] top-[70%]" />
        <span className="particle left-[40%] top-[30%]" />
        <span className="particle left-[60%] top-[80%]" />
        <span className="particle left-[75%] top-[25%]" />
        <span className="particle left-[85%] top-[60%]" />

      </div>

      {/* =========================
          NOISE TEXTURE
      ========================== */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* =========================
          STYLES
      ========================== */}
      <style>{`

        .particle{
          position:absolute;
          width:4px;
          height:4px;
          border-radius:9999px;
          background:white;
          opacity:0.4;
          animation: floatParticle 10s ease-in-out infinite;
          box-shadow:0 0 12px rgba(255,255,255,0.6);
        }

        @keyframes auroraOne {
          0%{
            transform:translate(0px,0px) scale(1);
          }
          50%{
            transform:translate(80px,40px) scale(1.1);
          }
          100%{
            transform:translate(0px,0px) scale(1);
          }
        }

        @keyframes auroraTwo {
          0%{
            transform:translate(0px,0px) scale(1);
          }
          50%{
            transform:translate(-60px,-40px) scale(1.08);
          }
          100%{
            transform:translate(0px,0px) scale(1);
          }
        }

        @keyframes gridMove {
          0%{
            transform:translateY(0px);
          }
          100%{
            transform:translateY(80px);
          }
        }

        @keyframes floatParticle {
          0%{
            transform:translateY(0px);
            opacity:0.2;
          }
          50%{
            transform:translateY(-40px);
            opacity:0.8;
          }
          100%{
            transform:translateY(0px);
            opacity:0.2;
          }
        }

        @keyframes spinSlow {
          from{
            transform:translate(-50%,-50%) rotate(0deg);
          }
          to{
            transform:translate(-50%,-50%) rotate(360deg);
          }
        }

        .animate-auroraOne{
          animation:auroraOne 12s ease-in-out infinite;
        }

        .animate-auroraTwo{
          animation:auroraTwo 14s ease-in-out infinite;
        }

        .animate-gridMove{
          animation:gridMove 12s linear infinite;
        }

        .animate-spinSlow{
          animation:spinSlow 60s linear infinite;
        }

      `}</style>
    </div>
  );
}