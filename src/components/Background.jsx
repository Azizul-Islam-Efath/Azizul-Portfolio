export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      {/* MAIN SOFT GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, #1F97B4 0%, #6EA6AC 45%, #D8C7BC 100%)",
        }}
      />

      {/* LEFT TEAL GLOW */}
      <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-cyan-400/20 blur-[180px]" />

      {/* RIGHT PEACH GLOW */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-orange-200/20 blur-[180px]" />

      {/* SOFT CENTER LIGHT */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,white,transparent_60%)]" />

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

    </div>
  );
}