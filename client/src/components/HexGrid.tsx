import { useMemo } from "react";

/**
 * Futuristic hex-grid background: a honeycomb of connected hexagons with a
 * green-neon light sweep that glides across the mesh at shifting angles,
 * leaving a soft (diffuse) glow. Pure SVG + CSS, no deps.
 * The sweep is a single rotating gradient (cheap), not per-hex animation,
 * so it stays fluid even full-screen.
 * Meant to sit behind hero/CTA content (parent must be `relative overflow-hidden`).
 */

const HEX_SIZE = 22; // center-to-vertex radius — smaller cells
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
    const cols = 24;
    const rows = 15;
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
    const edges: { x1: number; y1: number; x2: number; y2: number }[] = [];
    cells.forEach((c, i) => {
      const right = cells[i + 1];
      const downRight = cells[i + cols + 1];
      if (right && i % cols !== cols - 1) {
        edges.push({ x1: c.x, y1: c.y, x2: right.x, y2: right.y });
      }
      if (downRight && i + cols + 1 < cells.length && i % cols !== cols - 1) {
        edges.push({ x1: c.x, y1: c.y, x2: downRight.x, y2: downRight.y });
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
              opacity: 0.18,
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
        className="h-full w-full"
        viewBox="0 0 760 620"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Soft base glow */}
          <radialGradient id="hexGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </radialGradient>

          {/* Neon sweep: a soft band of light that rotates across angles.
              Rotating a linearGradient via gradientTransform is GPU-cheap. */}
          <linearGradient id="hexSweep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
            <stop offset="42%" stopColor="#22c55e" stopOpacity="0" />
            <stop offset="50%" stopColor="#4ade80" stopOpacity="0.9" />
            <stop offset="58%" stopColor="#22c55e" stopOpacity="0" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>

          {/* Diffuse blur for the sweep so the light feels soft, not sharp */}
          <filter id="hexSoft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        <rect width="760" height="620" fill="url(#hexGlow)" />

        {/* Static mesh */}
        <g stroke="#22c55e" strokeOpacity="0.18" strokeWidth="0.8">
          {edges.map((e, i) => (
            <line key={`e${i}`} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} />
          ))}
        </g>
        <g fill="none" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.3">
          {cells.map((c, i) => (
            <polygon key={`c${i}`} points={hexPoints(c.x, c.y, HEX_SIZE - 2)} />
          ))}
        </g>

        {/* Neon sweep — one rotating gradient, blurred, screen-blended */}
        <rect
          width="760"
          height="620"
          fill="url(#hexSweep)"
          filter="url(#hexSoft)"
          style={{ mixBlendMode: "screen", animation: "hexSweep 9s linear infinite" }}
        />
      </svg>

      <style>{`
        @keyframes hexSweep {
          0%   { transform: rotate(0deg);   transform-origin: 50% 50%; }
          100% { transform: rotate(360deg); transform-origin: 50% 50%; }
        }
      `}</style>
    </div>
  );
}
