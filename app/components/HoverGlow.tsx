'use client';

import React, { useState } from 'react';

interface HoverGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
}

const HoverGlow: React.FC<HoverGlowProps> = ({
  children,
  className = '',
  glowColor = '#ff6b35',
  intensity = 0.5
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? `0 0 30px ${glowColor}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}`
          : 'none'
      }}
    >
      {children}

      {/* Animated border effect */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-inherit transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `linear-gradient(45deg, transparent, ${glowColor}${Math.floor(intensity * 0.3 * 255).toString(16).padStart(2, '0')}, transparent)`,
          padding: '2px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'subtract'
        }}
      />
    </div>
  );
};

export default HoverGlow;
