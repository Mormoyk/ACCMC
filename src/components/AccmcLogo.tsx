import React from 'react';

interface AccmcLogoProps {
  size?: number | string;
  className?: string;
  showGlow?: boolean;
}

export const AccmcLogo: React.FC<AccmcLogoProps> = ({
  size = 64,
  className = '',
  showGlow = false,
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      style={{ width: pixelSize, height: pixelSize }}
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${
        showGlow ? 'drop-shadow-[0_0_20px_rgba(2,132,199,0.5)]' : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Blue gradient for outer ring */}
          <linearGradient id="accmcBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B56A4" />
            <stop offset="50%" stopColor="#084282" />
            <stop offset="100%" stopColor="#042C5C" />
          </linearGradient>

          {/* Curved path for top text: ADAMJEE CANTONMENT COLLEGE */}
          {/* Arc starts at ~185 deg to ~-5 deg */}
          <path
            id="topTextPath"
            d="M 52,200 A 148,148 0 1,1 348,200"
            fill="none"
          />

          {/* Curved path for bottom text: MATHEMATICS CLUB */}
          {/* Bottom arc from left to right along bottom rim */}
          <path
            id="bottomTextPath"
            d="M 334,222 A 146,146 0 0,1 66,222"
            fill="none"
          />

          {/* Filter for subtle 3D highlight */}
          <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Outer subtle shadow & boundary */}
        <circle cx="200" cy="200" r="196" fill="#04234c" />

        {/* Outer Royal Blue Ring */}
        <circle
          cx="200"
          cy="200"
          r="192"
          fill="url(#accmcBlueGrad)"
          stroke="#FFFFFF"
          strokeWidth="6"
        />

        {/* Outer Text: ADAMJEE CANTONMENT COLLEGE */}
        <text
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="24"
          fontWeight="800"
          letterSpacing="4"
        >
          <textPath
            href="#topTextPath"
            startOffset="50%"
            textAnchor="middle"
          >
            ADAMJEE CANTONMENT COLLEGE
          </textPath>
        </text>

        {/* Left Star */}
        <polygon
          points="200,10 203,17 211,18 205,23 207,31 200,27 193,31 195,23 189,18 197,17"
          transform="translate(-142, 226) rotate(-22) scale(0.9)"
          fill="#FFFFFF"
        />

        {/* Right Star */}
        <polygon
          points="200,10 203,17 211,18 205,23 207,31 200,27 193,31 195,23 189,18 197,17"
          transform="translate(176, 76) rotate(22) scale(0.9)"
          fill="#FFFFFF"
        />

        {/* Bottom Text: MATHEMATICS CLUB */}
        <text
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="26"
          fontWeight="800"
          letterSpacing="4"
        >
          <textPath
            href="#bottomTextPath"
            startOffset="50%"
            textAnchor="middle"
          >
            MATHEMATICS CLUB
          </textPath>
        </text>

        {/* Inner White Ring Separator */}
        <circle
          cx="200"
          cy="200"
          r="138"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="8"
        />

        {/* Inner 4 Quadrants Clip Path */}
        <g clipPath="url(#quadrantClip)">
          <clipPath id="quadrantClip">
            <circle cx="200" cy="200" r="134" />
          </clipPath>

          {/* Top-Left Quadrant: Orange (#F57C00) */}
          <path d="M 200,200 L 60,200 A 134,134 0 0,1 200,66 Z" fill="#F57C00" />
          {/* Top-Right Quadrant: Cyan (#00A8E8) */}
          <path d="M 200,200 L 200,66 A 134,134 0 0,1 334,200 Z" fill="#00A8E8" />
          {/* Bottom-Left Quadrant: Maroon (#78183E) */}
          <path d="M 200,200 L 60,200 A 134,134 0 0,0 200,334 Z" fill="#78183E" />
          {/* Bottom-Right Quadrant: Lime Green (#A7D129) */}
          <path d="M 200,200 L 200,334 A 134,134 0 0,0 334,200 Z" fill="#A7D129" />

          {/* Mathematical Symbols */}
          {/* + (Plus in Top-Left Orange quadrant) */}
          <g transform="translate(142, 142)">
            <rect x="-6" y="-30" width="12" height="60" rx="3" fill="#FFFFFF" />
            <rect x="-30" y="-6" width="60" height="12" rx="3" fill="#FFFFFF" />
          </g>

          {/* − (Minus in Top-Right Cyan quadrant) */}
          <g transform="translate(258, 142)">
            <rect x="-30" y="-6" width="60" height="12" rx="3" fill="#FFFFFF" />
          </g>

          {/* ÷ (Division in Bottom-Left Maroon quadrant) */}
          <g transform="translate(142, 258)">
            <rect x="-30" y="-6" width="60" height="12" rx="3" fill="#FFFFFF" />
            <circle cx="0" cy="-20" r="8" fill="#FFFFFF" />
            <circle cx="0" cy="20" r="8" fill="#FFFFFF" />
          </g>

          {/* × (Multiplication in Bottom-Right Lime quadrant) */}
          <g transform="translate(258, 258) rotate(45)">
            <rect x="-6" y="-30" width="12" height="60" rx="3" fill="#FFFFFF" />
            <rect x="-30" y="-6" width="60" height="12" rx="3" fill="#FFFFFF" />
          </g>

          {/* White cross divider between quadrants */}
          <line x1="60" y1="200" x2="340" y2="200" stroke="#FFFFFF" strokeWidth="8" />
          <line x1="200" y1="60" x2="200" y2="340" stroke="#FFFFFF" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
};
