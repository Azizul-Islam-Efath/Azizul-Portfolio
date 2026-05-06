export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-[#0a0a0e]" />

      {/* big gradients */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-orange-500/20 blur-[140px]" />
      <div className="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] bg-blue-500/20 blur-[140px]" />

      {/* subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:30px_30px]" />
    </div>
  );
}