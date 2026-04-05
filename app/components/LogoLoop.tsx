'use client';

import type { ReactNode } from 'react';

type LogoItem =
  | {
      node: ReactNode;
      title: string;
      href?: string;
      src?: never;
      alt?: never;
    }
  | {
      src: string;
      alt: string;
      href?: string;
      node?: never;
      title?: never;
    };

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  useCustomRender?: boolean;
}

export default function LogoLoop({
  logos,
  speed = 100,
  direction = 'left',
  logoHeight = 52,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Technology logos',
}: LogoLoopProps) {
  const animationDuration = Math.max(18, 6000 / Math.max(speed, 1));
  const loopItems = [...logos, ...logos];

  return (
    <div
      className="relative w-full overflow-hidden"
      aria-label={ariaLabel}
      style={
        fadeOut
          ? {
              maskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
              WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
              background: `linear-gradient(to right, ${fadeOutColor}00, ${fadeOutColor}00)`,
            }
          : undefined
      }
    >
      <div
        className="flex w-max items-center"
        style={{
          gap: `${gap}px`,
          animation: `logo-loop ${animationDuration}s linear infinite`,
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
          animationPlayState: hoverSpeed === 0 ? 'paused' : 'running',
        }}
        onMouseEnter={(event) => {
          if (hoverSpeed === 0) {
            event.currentTarget.style.animationPlayState = 'paused';
          } else {
            event.currentTarget.style.animationDuration = `${Math.max(18, 6000 / hoverSpeed)}s`;
          }
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.animationDuration = `${animationDuration}s`;
          event.currentTarget.style.animationPlayState = 'running';
        }}
      >
        {loopItems.map((logo, index) => {
          const content = 'node' in logo ? (
            <span
              className="flex items-center justify-center text-[#111111]"
              style={{ height: `${logoHeight}px`, width: `${logoHeight}px` }}
              title={logo.title}
            >
              {logo.node}
            </span>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ height: `${logoHeight}px` }}
              className="w-auto"
            />
          );

          const wrapperClass = scaleOnHover
            ? 'transition-transform duration-300 hover:scale-110'
            : '';

          return logo.href ? (
            <a
              key={`${'title' in logo ? logo.title : logo.alt}-${index}`}
              href={logo.href}
              target="_blank"
              rel="noreferrer"
              className={wrapperClass}
            >
              {content}
            </a>
          ) : (
            <div
              key={`${'title' in logo ? logo.title : logo.alt}-${index}`}
              className={wrapperClass}
            >
              {content}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes logo-loop {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
