import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade'
  delay = 0,
  duration = 700,
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return 'opacity-0 translate-y-12';
        case 'fade-left':
          return 'opacity-0 -translate-x-12';
        case 'fade-right':
          return 'opacity-0 translate-x-12';
        case 'scale':
          return 'opacity-0 scale-95';
        case 'fade':
        default:
          return 'opacity-0';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={`transition-all ease-out will-change-transform ${getAnimationStyles()} ${className}`}
    >
      {children}
    </div>
  );
}

