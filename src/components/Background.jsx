export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#07070a]">

      {/* glowing blobs */}
      <div className="absolute w-[700px] h-[700px] bg-orange-500/20 blur-[160px] top-[-200px] left-[-200px]" />
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[160px] bottom-[-200px] right-[-200px]" />

      {/* noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:40px_40px]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,black_100%)]" />
    </div>
  );
}