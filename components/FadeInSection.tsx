'use client';

import { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mark as loaded immediately to ensure layout calculates properly
    setHasLoaded(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000); // Convert seconds to milliseconds
        }
      },
      {
        threshold: 0.15,
        rootMargin: '-100px 0px -50px 0px' // Only trigger when scrolled into view
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
      className={`block transition-opacity duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isVisible 
          ? 'opacity-100' 
          : 'opacity-0'
      }`}
      style={{ 
        margin: 0, 
        padding: 0,
        willChange: 'opacity'
      }}
    >
      {children}
    </div>
  );
}

