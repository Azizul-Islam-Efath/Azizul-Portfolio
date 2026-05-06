import { useEffect, useState } from "react";

export default function Background() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      {/* base */}
      <div className="absolute inset-0 bg-[#0a0a0e]" />

      {/* MAIN ORANGE GLOW (moves slightly) */}
      <div
        className="absolute top-[-20%] left-[20%] w-[650px] h-[650px] bg-orange-500/20 blur-[160px] rounded-full"
        style={{
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />

      {/* BLUE GLOW (counter movement) */}
      <div
        className="absolute bottom-[-20%] right-[20%] w-[650px] h-[650px] bg-blue-500/20 blur-[160px] rounded-full"
        style={{
          transform: `translateY(${-scrollY * 0.06}px)`,
        }}
      />

      {/* floating center glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full"
        style={{
          transform: `translate(-50%, -50%) translateY(${scrollY * 0.03}px)`,
        }}
      />

      {/* noise layer */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* vignette (important for premium feel) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_100%)] opacity-40" />
    </div>
  );
}