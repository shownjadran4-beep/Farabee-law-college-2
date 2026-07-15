import React, { useId } from 'react';

interface MonogramProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export default function FarabeeMonogram({ size = 200, className = "", glow = true }: MonogramProps) {
  const reactId = useId();
  const safeId = reactId.replace(/:/g, "-");
  
  const goldGradId = `gold-grad-${safeId}`;
  const goldShadowId = `gold-shadow-${safeId}`;
  const textPathTopId = `text-path-top-${safeId}`;
  const textPathBottomId = `text-path-bottom-${safeId}`;
  const textPathRibbonId = `text-path-ribbon-${safeId}`;

  // Luxury dark background for ribbon fill to mask lines behind it
  const darkNavyBg = "#050d21";

  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Background Gold Glow */}
      {glow && (
        <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-2xl animate-pulse" />
      )}
      
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Gold / Bronze Burnished Gradient */}
          <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cf9f3b" />
            <stop offset="22%" stopColor="#fef1c9" />
            <stop offset="45%" stopColor="#b1832d" />
            <stop offset="68%" stopColor="#fef1c9" />
            <stop offset="85%" stopColor="#8d5e16" />
            <stop offset="100%" stopColor="#d2a23e" />
          </linearGradient>

          {/* Antique Bronze Deep Shadow Gradient for Ribbon Folds */}
          <linearGradient id={goldShadowId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#54370c" />
            <stop offset="100%" stopColor="#251602" />
          </linearGradient>

          {/* Top text path - arching upward inside the gold band (center radius ~58.5 to center 9px font) */}
          <path
            id={textPathTopId}
            d="M 43.5 69.9 A 58.5 58.5 0 0 1 156.5 69.9"
            fill="none"
          />

          {/* Bottom text path - arching downward inside the gold band (center radius ~67.5 to center 8px font) */}
          <path
            id={textPathBottomId}
            d="M 34.8 102.5 A 67.5 67.5 0 0 0 165.2 102.5"
            fill="none"
          />

          {/* Curved path for the Ribbon text "HAFIZABAD" (center radius ~83 to center 7.5px font between radius 74 and 86) */}
          <path
            id={textPathRibbonId}
            d="M 58.5 156.88 A 83 83 0 0 0 141.5 156.88"
            fill="none"
          />
        </defs>

        {/* 1. Concentric Circular Borders with 3D Gold Stroke (Centered at 100, 85) */}
        <g stroke={`url(#${goldGradId})`} fill="none">
          {/* Outer Ring */}
          <circle cx="100" cy="85" r="72" strokeWidth="2.2" />
          {/* Inner ring of the text channel */}
          <circle cx="100" cy="85" r="54" strokeWidth="1.8" />
          {/* Fine interior ring framing the central emblems */}
          <circle cx="100" cy="85" r="50" strokeWidth="0.8" opacity="0.85" />
        </g>

        {/* 2. Laurel Wreaths flanking the left and right sides of the central smaller circle (Fitted precisely inside r=50 circle without overlap) */}
        <g opacity="0.95" stroke={`url(#${goldGradId})`} strokeWidth="0.4" fill={`url(#${goldGradId})`}>
          {/* Left Laurel Wreath Branch */}
          <g transform="translate(100, 85) translate(9.5, -4) scale(1.45)">
            <path d="M -30,22 C -35,15 -35,5 -30,-5" fill="none" strokeWidth="0.5" />
            <path d="M -32,18 C -36,17 -38,13 -36,10 C -34,11 -32,14 -32,18 Z" />
            <path d="M -34,10 C -38,9 -40,4 -37,1 C -35,2 -34,6 -34,10 Z" />
            <path d="M -33,2 C -36,1 -37,-4 -34,-7 C -32,-6 -32,-2 -33,2 Z" />
            <path d="M -30,-5 C -33,-7 -33,-12 -30,-15 C -28,-13 -29,-9 -30,-5 Z" />
          </g>

          {/* Right Laurel Wreath Branch */}
          <g transform="translate(100, 85) translate(-9.5, -4) scale(1.45)">
            <path d="M 30,22 C 35,15 35,5 30,-5" fill="none" strokeWidth="0.5" />
            <path d="M 32,18 C 36,17 38,13 36,10 C 34,11 32,14 32,18 Z" />
            <path d="M 34,10 C 38,9 40,4 37,1 C 35,2 34,6 34,10 Z" />
            <path d="M 33,2 C 36,1 37,-4 34,-7 C 32,-6 32,-2 33,2 Z" />
            <path d="M 30,-5 C 33,-7 33,-12 30,-15 C 28,-13 29,-9 30,-5 Z" />
          </g>
        </g>

        {/* 3. Curved Circular Texts styled with Metallic Gold Gradient */}
        <text className="font-cinzel text-[9px] font-bold tracking-[0.24em]" fill={`url(#${goldGradId})`}>
          <textPath href={`#${textPathTopId}`} startOffset="50%" textAnchor="middle">
            FARABEE LAW COLLEGE
          </textPath>
        </text>

        <text className="font-cinzel text-[8px] font-bold tracking-[0.16em]" fill={`url(#${goldGradId})`}>
          <textPath href={`#${textPathBottomId}`} startOffset="50%" textAnchor="middle">
            JUSTICE BRINGS HARMONY
          </textPath>
        </text>

        {/* 4. Central Emblems: Scales of Justice, Graduation Cap (all in gold gradient) */}
        <g transform="translate(100, 85) scale(0.75)" fill={`url(#${goldGradId})`}>

          {/* Scales of Justice */}
          <g transform="translate(0, 4)">
            {/* Base */}
            <path d="M -15,22 L 15,22 L 10,20 L -10,20 Z" />
            <path d="M -8,20 L 8,20 L 6,17 L -6,17 Z" />
            
            {/* Main Pillar */}
            <rect x="-2" y="-22" width="4" height="39" rx="1" />
            <circle cx="0" cy="-22" r="3.5" />

            {/* Crossbeam */}
            <path d="M -26,-15 C -15,-18 15,-18 26,-15 L 26,-13 C 15,-16 -15,-16 -26,-13 Z" />
            <circle cx="-25" cy="-14" r="2" />
            <circle cx="25" cy="-14" r="2" />

            {/* Scale Pans Left */}
            <line x1="-25" y1="-12" x2="-32" y2="4" stroke={`url(#${goldGradId})`} strokeWidth="0.75" />
            <line x1="-25" y1="-12" x2="-18" y2="4" stroke={`url(#${goldGradId})`} strokeWidth="0.75" />
            <line x1="-25" y1="-12" x2="-25" y2="4" stroke={`url(#${goldGradId})`} strokeWidth="0.5" />
            <path d="M -34,4 C -34,10 -16,10 -16,4 Z" />
            
            {/* Scale Pans Right */}
            <line x1="25" y1="-12" x2="18" y2="4" stroke={`url(#${goldGradId})`} strokeWidth="0.75" />
            <line x1="25" y1="-12" x2="32" y2="4" stroke={`url(#${goldGradId})`} strokeWidth="0.75" />
            <line x1="25" y1="-12" x2="25" y2="4" stroke={`url(#${goldGradId})`} strokeWidth="0.5" />
            <path d="M 16,4 C 16,10 34,10 34,4 Z" />
          </g>

          {/* Graduation Cap (mortarboard) */}
          <g transform="translate(0, -22) scale(0.95)">
            <polygon points="0,-10 16,-4 0,2 -16,-4" stroke={`url(#${goldGradId})`} strokeWidth="0.5" />
            <path d="M -8,-2 L -8,3 C -8,5 8,5 8,3 L 8,-2 C 8,1 -8,1 -8,-2 Z" />
            <path d="M 0,-4 L 11,2 L 12,9" fill="none" stroke={`url(#${goldGradId})`} strokeWidth="0.75" />
            <polygon points="11,8 13,8 12,12" />
          </g>
        </g>

        {/* 5. Bottom Ribbon / Banner "HAFIZABAD" (Curved around bottom of outer circle) */}
        {/* Ribbon Tails with Gold Stroke and Dark Navy Fill, seamlessly integrated with the outer fold edges */}
        <g fill={darkNavyBg} stroke={`url(#${goldGradId})`} strokeWidth="1.2">
          {/* Left Tail + Fold Outer Outline */}
          <path d="M 60 147.25 L 52 154 Q 38 145 24 140 L 31 148 L 20 157 Q 39 161 58 160.05 Z" />
          {/* Right Tail + Fold Outer Outline */}
          <path d="M 140 147.25 L 148 154 Q 162 145 176 140 L 169 148 L 180 157 Q 161 161 142 160.05 Z" />
        </g>

        {/* Ribbon Shadow Back Folds (Overlay on top of tails to cover junction and create clean depth) */}
        <g fill={`url(#${goldShadowId})`}>
          <path d="M 60 147.25 L 52 154 L 58 160.05 Z" />
          <path d="M 140 147.25 L 148 154 L 142 160.05 Z" />
        </g>

        {/* Ribbon Center Board with Gold Stroke and Dark Navy Fill */}
        <path
          d="M 60 147.25 A 74 74 0 0 0 140 147.25 L 142 160.05 A 86 86 0 0 1 58 160.05 Z"
          fill={darkNavyBg}
          stroke={`url(#${goldGradId})`}
          strokeWidth="1.5"
        />

        {/* Curved Banner Text "HAFIZABAD" in Gold, placed in global coordinates to align perfectly with textPathRibbonId */}
        <text
          className="font-cinzel text-[7.5px] font-bold tracking-[0.24em]"
          fill={`url(#${goldGradId})`}
        >
          <textPath href={`#${textPathRibbonId}`} startOffset="50%" textAnchor="middle">
            HAFIZABAD
          </textPath>
        </text>
      </svg>
    </div>
  );
}

