
import { motion } from 'framer-motion';

/**
 * Azizul Islam's Cybernetic Project Background
 * Fixed JSX Parsing Error for <motion.g>
 */
export default function ProjectBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0a0c12]">
      {/* ── 3D Perspective Grid Floor ── */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(90deg, #d4700a 1px, transparent 1px), 
                              linear-gradient(180deg, #d4700a 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            transform: 'rotateX(65deg) translateY(-150px) scale(2.5)',
            transformOrigin: 'top'
          }}
        />
      </div>

      {/* ── Ambient Background Glows ── */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-orange-950/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-950/10 blur-[100px] rounded-full" />

      {/* ── Main SVG Layer ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="circuit-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dense Circuitry (Left) */}
        <g stroke="#d4700a" strokeWidth="1.5" fill="none" opacity="0.4" filter="url(#circuit-glow)">
          <path d="M0,150 L150,150 L220,220 L450,220 M180,150 L180,80 L320,40" />
          <path d="M50,700 L200,700 L280,780 L500,780" />
          <path d="M-20,450 L100,450 L140,490 L300,490" />
        </g>

        {/* ── Central Security Hub (Right Focal Point) ── */}
        <g transform="translate(1000, 450)">
          {/* Main Shield/Lock Area */}
          <motion.rect
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            x="-45" y="-45" width="90" height="90"
            fill="rgba(212, 112, 10, 0.08)"
            stroke="#ff8c00"
            strokeWidth="2"
          />
          {/* Lock Icon */}
          <g stroke="#ff8c00" strokeWidth="2.5" fill="none">
            <rect x="-15" y="2" width="30" height="22" rx="2" />
            <path d="M-9,2 V-8 A9,9 0 0,1 9,-8 V2" />
          </g>

          {/* Corrected Animated Radiating Connectors */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <motion.g 
              key={i} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transform={`rotate(${angle})`}
            >
              <line x1="70" y1="0" x2="190" y2="0" stroke="#ff8c00" strokeWidth="1.5" />
              <motion.circle
                animate={{ cx: [70, 190], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                cy="0" r="2.5" fill="#ff8c00"
              />
            </motion.g>
          ))}
        </g>
      </svg>

      {/* ── Data/Terminal Overlays ── */}
      <div className="absolute left-[12%] top-[25%] pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="p-5 border-l-2 border-orange-500/40 bg-[#0c101b]/60 backdrop-blur-sm space-y-2"
        >
          <p className="text-[11px] font-mono text-orange-400/90 tracking-tighter uppercase">
            &gt; Initializing Security Protocol
          </p>
          <div className="text-[10px] font-mono text-orange-200/40 leading-tight">
            <p>Scanning nodes...</p>
            <p className="text-green-500/50">ENC: SHA-256 ACTIVE</p>
            <p>PORT: 8080 [SECURE]</p>
          </div>
        </motion.div>
      </div>

      {/* ── Subsurface Detail Snippet ── */}
      <div className="absolute bottom-[15%] left-[8%] opacity-25">
        <div className="flex gap-4 items-end">
          <div className="h-20 w-[1px] bg-orange-500" />
          <div className="text-[9px] font-mono text-orange-500 uppercase vertical-text">
            System_Core_v.4.0
          </div>
        </div>
      </div>
    </div>
  );
}