'use client';

import { useEffect, useLayoutEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FadeInSection from '@/components/FadeInSection';

export default function Home() {
  // Use layoutEffect to run before paint
  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    // Force scroll to top immediately and disable smooth scrolling temporarily
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    
    // Re-enable smooth scrolling after a brief delay
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 100);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <Hero />
      
      <FadeInSection delay={0.2}>
        <Projects />
      </FadeInSection>
      
      <FadeInSection delay={0.2}>
        <About />
      </FadeInSection>
      
      <FadeInSection delay={0.2}>
        <Contact />
      </FadeInSection>
    </main>
  );
}
