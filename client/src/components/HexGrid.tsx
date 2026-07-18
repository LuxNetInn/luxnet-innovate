import { useMemo } from "react";

/**
 * Futuristic hex-grid background: a honeycomb of connected hexagons with a
 * green-neon energy pulse traveling through the mesh. Pure SVG + CSS, no deps.
 * Meant to sit behind hero/CTA content (parent must be `relative overflow-hidden`).
 */

const HEX_SIZE = 34; // center-to-vertex radius
const HEX_W = HEX_SIZE * Math.sqrt(3); // horizontal spacing
const HEX_H = HEX_SIZE * 1.5; // vertical spacing (pointy-top rows)

function hexPoints(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 90); // pointy-top
    pts.push(`${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`);
  }
  return pts.join(" ");
}

export default function HexGrid({
  className = "",
  global = false,
}: {
  className?: string;
  /** Fixed, full-page background (behind all content). */
  global?: boolean;
}) {
  const { cells, edges } = useMemo(() => {
    const cols = 16;
    const rows = 10;
    const cells: { x: number; y: number; id: number }[] = [];
    let id = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * HEX_W + (row % 2 ? HEX_W / 2 : 0) + HEX_W / 2;
        const y = row * HEX_H + HEX_H / 2;
        cells.push({ x, y, id: id++ });
      }
    }
    // Connect each cell to its right neighbor and lower-right neighbor (honeycomb edges).
    const edges: { x1: number; y1: number; x2: number; y2: number; k: number }[] = [];
    cells.forEach((c, i) => {
      const right = cells[i + 1];
      const downRight = cells[i + cols - (i % cols === cols - 1 ? 0 : 0) + (i % cols === cols - 1 ? 0 : 1)];
      if (right && i % cols !== cols - 1) {
        edges.push({ x1: c.x, y1: c.y, x2: right.x, y2: right.y, k: i });
      }
      if (downRight && i + cols + 1 < cells.length && i % cols !== cols - 1) {
        edges.push({ x1: c.x, y1: c.y, x2: downRight.x, y2: downRight.y, k: i + cols });
      }
    });
    return { cells, edges };
  }, []);

  return (
    <div
      className={`pointer-events-none ${global ? "fixed inset-0 z-0" : "absolute inset-0 overflow-hidden"} ${className}`}
      style={
        global
          ? {
              opacity: 0.16,
              maskImage:
                "radial-gradient(ellipse 75% 65% at 50% 40%, transparent 0%, transparent 35%, black 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 65% at 50% 40%, transparent 0%, transparent 35%, black 100%)",
            }
          : undefined
      }
      aria-hidden="true"
    >
      <svg
        className="h-full w-full opacity-70"
        viewBox="0 0 700 560"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="hexGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </radialGradient>
          <filter id="hexBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        </defs>

        <rect width="700" height="560" fill="url(#hexGlow)" />

        <g stroke="#22c55e" strokeOpacity="0.22" strokeWidth="1" filter="url(#hexBlur)">
          {edges.map((e, i) => (
            <line key={`e${i}`} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} />
          ))}
        </g>

        <g
          fill="none"
          stroke="#22c55e"
          strokeWidth="1.4"
          className="hex-cells"
          style={{ animation: "hexBreath 6s ease-in-out infinite" }}
        >
          {cells.map((c, i) => (
            <polygon
              key={`c${i}`}
              points={hexPoints(c.x, c.y, HEX_SIZE - 3)}
              strokeOpacity={0.35}
              className="hex-pulse"
              style={{ animationDelay: `${(i % 12) * 0.4}s` }}
            />
          ))}
        </g>
      </svg>

      <style>{`
        @keyframes hexBreath {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        @keyframes hexPulseNode {
          0%, 100% { stroke-opacity: 0.15; }
          50% { stroke-opacity: 0.9; filter: drop-shadow(0 0 4px #22c55e); }
        }
        .hex-pulse { animation: hexPulseNode 3.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
