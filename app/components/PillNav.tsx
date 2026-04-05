'use client';

import { CSSProperties, useEffect, useMemo, useState } from 'react';

interface PillNavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  logo?: string;
  logoAlt?: string;
  logoText?: string;
  items: PillNavItem[];
  activeHref: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  theme?: 'light' | 'dark';
  initialLoadAnimation?: boolean;
  onItemClick?: (href: string) => void;
}

const DEFAULT_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const resolveEase = (ease?: string) => {
  if (!ease) {
    return DEFAULT_EASE;
  }

  const normalized = ease.trim().toLowerCase();

  if (normalized === 'power2.easeout') {
    return DEFAULT_EASE;
  }

  return ease;
};

export default function PillNav({
  logo,
  logoAlt = 'Logo',
  logoText = 'NK',
  items,
  activeHref,
  className = '',
  ease,
  baseColor = '#000000',
  pillColor = '#ffffff',
  hoveredPillTextColor = '#ffffff',
  pillTextColor = '#000000',
  theme = 'dark',
  initialLoadAnimation = false,
  onItemClick,
}: PillNavProps) {
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [mounted, setMounted] = useState(!initialLoadAnimation);

  useEffect(() => {
    if (!initialLoadAnimation) {
      return;
    }

    const timeout = window.setTimeout(() => setMounted(true), 80);

    return () => window.clearTimeout(timeout);
  }, [initialLoadAnimation]);

  const visibleHref = hoveredHref ?? activeHref;
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.href === visibleHref)
  );

  const navStyle = useMemo(
    () =>
      ({
        '--pill-base': baseColor,
        '--pill-surface': pillColor,
        '--pill-active-text': pillTextColor,
        '--pill-hover-text': hoveredPillTextColor,
        '--pill-border':
          theme === 'dark' ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.12)',
        '--pill-idle-text':
          theme === 'dark' ? 'rgba(229,231,235,0.88)' : 'rgba(17,24,39,0.82)',
        '--pill-shadow':
          theme === 'dark'
            ? '0 24px 60px rgba(0, 0, 0, 0.28)'
            : '0 20px 45px rgba(15, 23, 42, 0.16)',
        '--pill-ease': resolveEase(ease),
      }) as CSSProperties,
    [baseColor, ease, hoveredPillTextColor, pillColor, pillTextColor, theme]
  );

  return (
    <nav
      className={`rounded-full border px-3 py-3 shadow-2xl backdrop-blur-xl ${className}`}
      style={{
        ...navStyle,
        backgroundColor: 'color-mix(in srgb, var(--pill-base) 72%, transparent)',
        borderColor: 'var(--pill-border)',
        boxShadow: 'var(--pill-shadow)',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(-16px)',
        transition: 'opacity 500ms var(--pill-ease), transform 500ms var(--pill-ease)',
      }}
    >
      <div className="flex items-center gap-2 md:gap-3">
        <a
          href="#home"
          aria-label={logoAlt}
          className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white/70 text-sm font-semibold text-[#111111]"
          onClick={(event) => {
            event.preventDefault();
            onItemClick?.('#home');
          }}
        >
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} alt={logoAlt} className="h-full w-full object-cover" />
          ) : (
            <span>{logoText}</span>
          )}
        </a>

        <div className="relative grid auto-cols-fr grid-flow-col items-center gap-1 rounded-full bg-black/[0.03] p-1">
          <div
            className="pointer-events-none absolute inset-y-1 left-1 rounded-full"
            style={{
              width: `calc((100% - 0.5rem) / ${Math.max(items.length, 1)})`,
              transform: `translateX(calc(${activeIndex} * 100%))`,
              backgroundColor: 'var(--pill-surface)',
              boxShadow: '0 12px 30px rgba(255, 255, 255, 0.14)',
              transition: 'transform 420ms var(--pill-ease), background-color 220ms ease',
            }}
          />

          {items.map((item) => {
            const isActive = item.href === activeHref;
            const isHovered = item.href === hoveredHref;

            return (
              <button
                key={item.href}
                type="button"
                className="relative z-10 min-w-[88px] rounded-full px-4 py-3 text-sm font-medium transition-colors duration-300"
                style={{
                  color: isActive || isHovered ? 'var(--pill-active-text)' : 'var(--pill-idle-text)',
                }}
                onMouseEnter={() => setHoveredHref(item.href)}
                onMouseLeave={() => setHoveredHref(null)}
                onFocus={() => setHoveredHref(item.href)}
                onBlur={() => setHoveredHref(null)}
                onClick={() => onItemClick?.(item.href)}
              >
                <span
                  style={{
                    color: isHovered && !isActive ? 'var(--pill-hover-text)' : undefined,
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
