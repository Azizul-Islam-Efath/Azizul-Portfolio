/**
 * Azizul Islam's Cybernetic Project Background
 * Designed for Vite/React environments.
 */
export default function ProjectBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0c101b]">
      {/* ── Base Dark Gradient ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 75% 40%, #1e1208 0%, #0c101b 100%)"
        }}
      />

      {/* ── Cybernetic Circuitry & Security Visuals (SVG) ── */}
      <svg
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          <filter id="orange-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4700a" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8b3a0a" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* ── Background Circuit Traces ── */}
        <g stroke="url(#circuit-grad)" fill="none" strokeWidth="1" opacity="0.3">
          <path d="M0,200 L200,200 L250,250 L500,250 M150,200 L150,120 L300,120" />
          <path d="M1400,600 L1200,600 L1100,700 L800,700 M1250,600 L1250,800 L1000,800" />
          <circle cx="450" cy="150" r="3" fill="#d4700a" />
          <circle cx="950" cy="750" r="3" fill="#d4700a" />
        </g>

        {/* ── Main Security Hub (Right-Center) ── */}
        <g transform="translate(1050, 420)" filter="url(#orange-glow)">
          <path 
            d="M0,-50 L40,-35 V15 C40,40 0,60 0,60 C0,60 -40,40 -40,15 V-35 Z" 
            stroke="#ff8c00" 
            strokeWidth="2.5" 
            fill="rgba(212, 112, 10, 0.05)"
          />
          <rect x="-12" y="-5" width="24" height="20" rx="2" fill="#ff8c00" />
          <path d="M-8,-5 V-15 A8,8 0 0,1 8,-15 V-5" stroke="#ff8c00" strokeWidth="2.5" fill="none" />
          
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              <line x1="70" y1="0" x2="160" y2="0" stroke="#ff8c00" strokeWidth="1" opacity="0.5" />
              <circle cx="170" cy="0" r="3" fill="#ff8c00" opacity="0.8" />
            </g>
          ))}
        </g>
      </svg>

      {/* ── Floating Visual Code Card ── */}
      <div
        className="absolute left-[12%] top-[25%] p-5 rounded-lg border border-orange-500/20"
        style={{
          background: "rgba(12, 16, 27, 0.75)",
          backdropFilter: "blur(10px)",
          fontFamily: "'Fira Code', monospace",
          width: "320px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        }}
      >
        <div className="text-orange-400/80 text-xs leading-relaxed">
          <p><span className="text-blue-400">const</span> <span className="text-yellow-400">SecurityEngine</span> = () =&gt; &#123;</p>
          <p className="pl-4">useEffect(() =&gt; &#123;</p>
          <p className="pl-8 text-green-400/60">// Initializing Network Security...</p>
          <p className="pl-8">monitorTraffic(<span className="text-orange-300">'0.0.0.0/0'</span>);</p>
          <p className="pl-4">&#125;, []);</p>
          <p>&#125;;</p>
        </div>
      </div>

      {/* System Status Snippet */}
      <div
        className="absolute bottom-[20%] left-[8%] p-3 opacity-40"
        style={{
          borderLeft: "2px solid #d4700a",
          color: "#d4700a",
          fontSize: "10px",
          fontFamily: "monospace",
          letterSpacing: "1px"
        }}
      >
        <p>DECRYPT_STATUS: SUCCESS</p>
        <p>ENCRYPTION: AES-256</p>
        <p>FIREWALL: ACTIVE</p>
      </div>

      {/* Subtle Bottom Glow */}
      <div 
        className="absolute bottom-0 w-full h-1/3 opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #d4700a, transparent)"
        }}
      />
    </div>
  );
}