'use client';

import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';

interface TiltedCardProps {
  imageSrc: string;
  altText: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: ReactNode;
}

export default function TiltedCard({
  imageSrc,
  altText,
  captionText,
  containerHeight = '300px',
  containerWidth = '300px',
  imageHeight = '300px',
  imageWidth = '300px',
  rotateAmplitude = 14,
  scaleOnHover = 1.04,
  showMobileWarning = false,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent,
}: TiltedCardProps) {
  const [transform, setTransform] = useState('perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)');
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  const isTouchDevice = useMemo(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia('(pointer: coarse)').matches;
  }, []);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;
    const rotateY = (relativeX - 0.5) * rotateAmplitude * 2;
    const rotateX = (0.5 - relativeY) * rotateAmplitude * 2;

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleOnHover})`
    );
  };

  const resetTransform = () => {
    setIsHovered(false);
    setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  return (
    <div
      className="group/tilt relative"
      style={{ height: containerHeight, width: containerWidth }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMove}
      onMouseLeave={resetTransform}
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out will-change-transform"
        style={{ transform }}
      >
        {imageLoaded ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={altText}
            className="h-full w-full object-cover"
            style={{ height: imageHeight, width: imageWidth }}
            onError={() => setImageLoaded(false)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.9),rgba(0,0,0,0.06))] p-6 text-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/45">Project</p>
              <p className="mt-3 text-2xl font-semibold text-[#111111]">{altText}</p>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_30%),linear-gradient(to_top,rgba(0,0,0,0.65),transparent_50%)] opacity-80" />

        {displayOverlayContent ? (
          <div className="absolute inset-0 flex items-end justify-start p-5">
            <div className="pointer-events-auto w-full rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-md">
              {overlayContent}
            </div>
          </div>
        ) : null}
      </div>

      {showTooltip && captionText ? (
        <div
          className={`pointer-events-none absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          {captionText}
        </div>
      ) : null}

      {showMobileWarning && isTouchDevice ? (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/75 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
          Tilt disabled on touch
        </div>
      ) : null}
    </div>
  );
}
