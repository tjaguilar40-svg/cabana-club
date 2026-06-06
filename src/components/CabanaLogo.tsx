/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface CabanaLogoProps {
  className?: string;
  variant?: "full" | "icon" | "footer";
}

export default function CabanaLogo({ className = "", variant = "full" }: CabanaLogoProps) {
  // Ultra-detailed, realistic vector palm tree resembling the hand-sketched classic logo
  const PalmTreeSVG = (
    <div className="relative flex items-center justify-center select-none mx-0.5" id="palm-tree-container">
      <svg
        viewBox="0 0 120 130"
        className="w-12 h-14 md:w-16 md:h-18 flex-shrink-0 text-cabana-rust select-none"
        fill="currentColor"
        id="svg-palm-tree"
      >
        {/* Palm Trunk with horizontal ringed bark texture */}
        <g id="trunk-detailed" className="text-cabana-rust">
          {/* Main trunk base and curve */}
          <path
            d="M58,118 C56.5,95 57,70 58.5,45 C59.5,45 60.5,45 61,45 C59.8,70 59.5,95 61,118 Z"
            fill="currentColor"
          />
          {/* Bark ring lines matching the biological woodblock print detail */}
          <path d="M57.8,110 Q59.5,108.5 61.2,110" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.8" />
          <path d="M58.0,102 Q59.5,100.5 61.0,102" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.8" />
          <path d="M58.2,94  Q59.6,92.5  61.0,94"  stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.8" />
          <path d="M58.4,86  Q59.7,84.5  61.0,86"  stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.8" />
          <path d="M58.6,78  Q59.8,76.5  61.0,78"  stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.8" />
          <path d="M58.8,70  Q59.9,68.5  61.0,70"  stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.8" />
          <path d="M59.0,62  Q60.0,60.5  61.0,62"  stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.8" />
          <path d="M59.2,54  Q60.1,52.5  61.0,54"  stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.8" />
          <path d="M59.4,47  Q60.2,45.5  61.0,47"  stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.8" />
        </g>

        {/* Dense, magnificent radiating fronds with individual hand-crafted leaflets */}
        <g id="crown-detailed">
          {/* Central top spikes */}
          <path d="M59.5,45 Q59.5,15 62,10 Q64,15 59.5,45 Z" />
          <path d="M59.5,45 Q56,17 51,12 Q56,20 59.5,45 Z" />
          <path d="M59.5,45 Q63,17 68,12 Q63,20 59.5,45 Z" />

          {/* Upper arching fronds */}
          {/* Frond Left 1 */}
          <path d="M59.5,45 Q35,22 15,26 C28,29 42,36 59.5,45 Z" />
          {/* Leaflets for Frond Left 1 */}
          <path d="M55,42 Q40,26 22,25 M52,43 Q36,29 26,30 M48,44 Q32,32 30,35" stroke="currentColor" strokeWidth="0.8" fill="none" />

          {/* Frond Right 1 */}
          <path d="M59.5,45 Q84,22 104,26 C91,29 77,36 59.5,45 Z" />
          {/* Leaflets for Frond Right 1 */}
          <path d="M64,42 Q79,26 97,25 M67,43 Q83,29 93,30 M71,44 Q87,32 89,35" stroke="currentColor" strokeWidth="0.8" fill="none" />

          {/* Mid-upper arching fronds */}
          {/* Frond Left 2 */}
          <path d="M59.5,45 Q28,33 10,43 C24,44 39,46 59.5,45 Z" />
          <path d="M54,45 Q36,36 14,40 M50,45 Q32,38 18,43 M46,45 Q28,40 22,46" stroke="currentColor" strokeWidth="0.8" fill="none" />

          {/* Frond Right 2 */}
          <path d="M59.5,45 Q91,33 109,43 C95,44 80,46 59.5,45 Z" />
          <path d="M65,45 Q83,36 105,40 M69,45 Q87,38 101,43 M73,45 Q91,40 97,46" stroke="currentColor" strokeWidth="0.8" fill="none" />

          {/* Horizontal fronds */}
          {/* Frond Left 3 */}
          <path d="M59.5,45 Q25,45 8,61 C22,57 37,53 59.5,45 Z" />
          <path d="M53,45 Q31,47 11,56 M48,45 Q28,47 16,59 M43,45 Q25,47 21,62" stroke="currentColor" strokeWidth="0.8" fill="none" />

          {/* Frond Right 3 */}
          <path d="M59.5,45 Q94,45 111,61 C97,57 82,53 59.5,45 Z" />
          <path d="M66,45 Q88,47 108,56 M71,45 Q91,47 103,59 M76,45 Q94,47 98,62" stroke="currentColor" strokeWidth="0.8" fill="none" />

          {/* Drooping lower fronds */}
          {/* Frond Left 4 */}
          <path d="M59.5,45 Q26,57 11,76 C25,68 39,60 59.5,45 Z" />
          <path d="M51,47 Q32,54 14,70 M46,48 Q30,56 19,74 M41,49 Q28,58 24,77" stroke="currentColor" strokeWidth="0.8" fill="none" />

          {/* Frond Right 4 */}
          <path d="M59.5,45 Q93,57 108,76 C94,68 80,60 59.5,45 Z" />
          <path d="M68,47 Q87,54 105,70 M73,48 Q89,56 100,74 M78,49 Q91,58 95,77" stroke="currentColor" strokeWidth="0.8" fill="none" />

          {/* Lowest cascading fronds */}
          {/* Frond Left 5 */}
          <path d="M59.5,45 Q34,70 18,91 C31,81 43,67 59.5,45 Z" />
          <path d="M50,51 Q37,67 21,85 M45,54 Q34,70 25,88 M40,56 Q31,73 29,91" stroke="currentColor" strokeWidth="0.8" fill="none" />

          {/* Frond Right 5 */}
          <path d="M59.5,45 Q85,70 101,91 C88,81 76,67 59.5,45 Z" />
          <path d="M69,51 Q82,67 98,85 M74,54 Q85,70 94,88 M79,56 Q88,73 90,91" stroke="currentColor" strokeWidth="0.8" fill="none" />
        </g>
      </svg>
    </div>
  );

  // Exquisite calligraphic cursive text with synthetic bold stroke matching the high-end brush script
  const cursiveTextStyle = {
    fontFamily: 'var(--font-logo)',
    fontWeight: "normal",
    // Premium text stroke and subtle shadow to replicate the luxurious thick ink brush stroke from the uploaded image
    WebkitTextStroke: "1.1px currentColor",
    textShadow: "0.3px 0 0.1px currentColor, -0.3px 0 0.1px currentColor, 0 0.3px 0.1px currentColor, 0 -0.3px 0.1px currentColor",
  };

  if (variant === "icon") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {PalmTreeSVG}
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`} id="cabana-footer-logo-layout">
        {PalmTreeSVG}
        <div className="flex items-center justify-center gap-1.5 md:gap-2.5 mt-2">
          <span 
            style={cursiveTextStyle}
            className="text-4xl md:text-5xl text-cabana-rust leading-none select-none tracking-tight"
          >
            Cabana
          </span>
          <span 
            style={cursiveTextStyle}
            className="text-4xl md:text-5xl text-cabana-rust leading-none select-none tracking-tight"
          >
            Club
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-1.5 md:gap-2.5 cursor-pointer select-none ${className}`} id="cabana-brand-logo-root">
      {/* Cursive "Cabana" on the left */}
      <span 
        style={cursiveTextStyle}
        className="text-[34px] sm:text-[38px] md:text-[44px] text-cabana-rust leading-none select-none tracking-tight"
      >
        Cabana
      </span>

      {/* Center red palm tree SVG */}
      {PalmTreeSVG}

      {/* Cursive "Club" on the right */}
      <span 
        style={cursiveTextStyle}
        className="text-[34px] sm:text-[38px] md:text-[44px] text-cabana-rust leading-none select-none tracking-tight"
      >
        Club
      </span>
    </div>
  );
}
