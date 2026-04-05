'use client';

import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'typewriter' | 'bounce';
  delay?: number;
  duration?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 1000
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.animation = `${animation} ${duration}ms ease-out forwards`;
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animation, delay, duration]);

  const getAnimationStyles = () => {
    switch (animation) {
      case 'fadeIn':
        return `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `;
      case 'slideUp':
        return `
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `;
      case 'bounce':
        return `
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
        `;
      case 'typewriter':
        return `
          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }
        `;
      default:
        return '';
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: getAnimationStyles() }} />
      <div
        ref={elementRef}
        className={`opacity-0 ${className}`}
        style={{
          animationFillMode: 'forwards',
          whiteSpace: animation === 'typewriter' ? 'nowrap' : 'normal',
          overflow: animation === 'typewriter' ? 'hidden' : 'visible'
        }}
      >
        {text}
      </div>
    </>
  );
};

export default AnimatedText;