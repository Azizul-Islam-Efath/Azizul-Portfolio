export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#07070a]">

      {/* soft base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.04),transparent_45%)]" />

      {/* cinematic color glow (Circle-style) */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 blur-[180px] animate-pulse" />

      {/* subtle moving light */}
      <div className="absolute inset-0 opacity-[0.05] animate-pulse bg-[radial-gradient(circle_at_center,white,transparent_60%)]" />

      {/* grain texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}