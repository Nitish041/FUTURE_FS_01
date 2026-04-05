'use client';

import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';

interface ScrollFloatProps {
  children: ReactNode;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  className?: string;
}

const resolveEase = (ease: string) => {
  const normalized = ease.toLowerCase();

  if (normalized === 'back.inout(2)') {
    return 'cubic-bezier(0.68, -0.6, 0.32, 1.6)';
  }

  if (normalized === 'power2.easeout') {
    return 'cubic-bezier(0.22, 1, 0.36, 1)';
  }

  return 'cubic-bezier(0.22, 1, 0.36, 1)';
};

export default function ScrollFloat({
  children,
  animationDuration = 1,
  ease = 'back.inOut(2)',
  stagger = 0.01,
  className = '',
}: ScrollFloatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const text = typeof children === 'string' ? children : '';
  const chars = useMemo(() => text.split(''), [text]);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -18% 0px',
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  if (typeof children !== 'string') {
    return (
      <span ref={ref} className={className}>
        {children}
      </span>
    );
  }

  return (
    <span ref={ref} className={`inline-block ${className}`} aria-label={text}>
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          aria-hidden="true"
          className="inline-block whitespace-pre"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(1.15em) rotate(4deg)',
            filter: isVisible ? 'blur(0px)' : 'blur(6px)',
            transitionProperty: 'opacity, transform, filter',
            transitionDuration: `${animationDuration}s`,
            transitionTimingFunction: resolveEase(ease),
            transitionDelay: `${index * stagger}s`,
            willChange: 'transform, opacity, filter',
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
