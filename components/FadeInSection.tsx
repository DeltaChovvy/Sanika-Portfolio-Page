'use client';

import { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000); // Convert seconds to milliseconds
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`block transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isVisible 
          ? 'opacity-100 translate-y-0 md:scale-100' 
          : 'opacity-0 translate-y-10 md:translate-y-20 md:scale-95'
      }`}
      style={{ margin: 0, padding: 0 }}
    >
      {children}
    </div>
  );
}

