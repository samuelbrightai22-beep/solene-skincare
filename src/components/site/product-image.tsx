import { cn } from "@/lib/utils";

type ProductImageProps = {
  shape: "bottle" | "jar" | "tube" | "dropper";
  color: string;
  accent: string;
  className?: string;
  label?: string;
};

// SVG-based "product photo" — represents a bottle/jar/tube with the brand color,
// rendered against a soft tinted backdrop. Reliable (no external image deps).
export function ProductImage({
  shape,
  color,
  accent,
  className,
  label,
}: ProductImageProps) {
  return (
    <div
      className={cn(
        "relative aspect-square w-full overflow-hidden rounded-md",
        className,
      )}
      style={{
        backgroundColor: hexWithAlpha(accent, 0.18),
        backgroundImage: `radial-gradient(circle at 30% 25%, ${hexWithAlpha(color, 0.18)} 0%, transparent 55%), radial-gradient(circle at 75% 80%, ${hexWithAlpha(color, 0.12)} 0%, transparent 55%)`,
      }}
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {shape === "bottle" && <BottleShape color={color} accent={accent} />}
        {shape === "jar" && <JarShape color={color} accent={accent} />}
        {shape === "tube" && <TubeShape color={color} accent={accent} />}
        {shape === "dropper" && <DropperShape color={color} accent={accent} />}
      </svg>

      {label && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <span className="font-serif text-xs uppercase tracking-[0.2em] text-foreground/60">
            {label}
          </span>
        </div>
      )}

      {/* subtle highlight */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.05) 100%)",
        }}
      />
    </div>
  );
}

function BottleShape({ color, accent }: { color: string; accent: string }) {
  return (
    <g>
      <rect x="84" y="32" width="32" height="16" rx="2" fill={accent} />
      <rect x="88" y="48" width="24" height="8" fill={accent} opacity="0.7" />
      <rect
        x="60"
        y="56"
        width="80"
        height="112"
        rx="6"
        fill={color}
        stroke={accent}
        strokeWidth="1"
      />
      <rect
        x="70"
        y="96"
        width="60"
        height="50"
        fill={accent}
        opacity="0.9"
        rx="1"
      />
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="10"
        fill={color}
        letterSpacing="2"
      >
        SOLÈNE
      </text>
      <line
        x1="80"
        y1="126"
        x2="120"
        y2="126"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.5"
      />
      <text
        x="100"
        y="138"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="5"
        fill={color}
        letterSpacing="1"
      >
        COLD-PRESSED
      </text>
    </g>
  );
}

function JarShape({ color, accent }: { color: string; accent: string }) {
  return (
    <g>
      <rect x="58" y="42" width="84" height="14" rx="2" fill={accent} />
      <rect x="62" y="36" width="76" height="6" rx="1" fill={accent} opacity="0.8" />
      <path
        d="M 58 56 L 58 158 Q 58 168 68 168 L 132 168 Q 142 168 142 158 L 142 56 Z"
        fill={color}
        stroke={accent}
        strokeWidth="1"
      />
      <rect
        x="68"
        y="92"
        width="64"
        height="56"
        fill={accent}
        opacity="0.9"
        rx="1"
      />
      <text
        x="100"
        y="114"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="11"
        fill={color}
        letterSpacing="2"
      >
        SOLÈNE
      </text>
      <line
        x1="80"
        y1="122"
        x2="120"
        y2="122"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.5"
      />
      <text
        x="100"
        y="134"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="5"
        fill={color}
        letterSpacing="1"
      >
        COLD-PRESSED
      </text>
    </g>
  );
}

function TubeShape({ color, accent }: { color: string; accent: string }) {
  return (
    <g>
      <rect x="84" y="34" width="32" height="14" rx="2" fill={accent} />
      <path
        d="M 70 48 L 130 48 L 134 168 L 66 168 Z"
        fill={color}
        stroke={accent}
        strokeWidth="1"
      />
      <rect
        x="74"
        y="92"
        width="52"
        height="48"
        fill={accent}
        opacity="0.9"
        rx="1"
      />
      <text
        x="100"
        y="114"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="10"
        fill={color}
        letterSpacing="2"
      >
        SOLÈNE
      </text>
      <line
        x1="84"
        y1="122"
        x2="116"
        y2="122"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.5"
      />
      <text
        x="100"
        y="132"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="4.5"
        fill={color}
        letterSpacing="0.8"
      >
        COLD-PRESSED
      </text>
    </g>
  );
}

function DropperShape({ color, accent }: { color: string; accent: string }) {
  return (
    <g>
      <rect x="86" y="20" width="28" height="14" rx="2" fill={accent} />
      <rect x="90" y="34" width="20" height="6" fill={accent} opacity="0.8" />
      <rect
        x="56"
        y="40"
        width="88"
        height="128"
        rx="5"
        fill={color}
        stroke={accent}
        strokeWidth="1"
      />
      <rect
        x="58"
        y="80"
        width="84"
        height="86"
        fill={accent}
        opacity="0.25"
        rx="3"
      />
      <rect
        x="68"
        y="96"
        width="64"
        height="50"
        fill={accent}
        opacity="0.9"
        rx="1"
      />
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="11"
        fill={color}
        letterSpacing="2"
      >
        SOLÈNE
      </text>
      <line
        x1="80"
        y1="126"
        x2="120"
        y2="126"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.5"
      />
      <text
        x="100"
        y="138"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="5"
        fill={color}
        letterSpacing="1"
      >
        COLD-PRESSED
      </text>
    </g>
  );
}

function hexWithAlpha(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  let r = 0,
    g = 0,
    b = 0;
  if (clean.length === 3) {
    r = parseInt(clean[0] + clean[0], 16);
    g = parseInt(clean[1] + clean[1], 16);
    b = parseInt(clean[2] + clean[2], 16);
  } else if (clean.length === 6) {
    r = parseInt(clean.slice(0, 2), 16);
    g = parseInt(clean.slice(2, 4), 16);
    b = parseInt(clean.slice(4, 6), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
