'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import FadeInSection from '@/components/FadeInSection';
import { useState, useEffect } from 'react';

export default function EdgewiseCaseStudy() {
  const totalImages = 8;
  const [loadedCount, setLoadedCount] = useState(0);
  const [isStuck, setIsStuck] = useState(false);
  const [startTime] = useState(Date.now());
  const allImagesLoaded = loadedCount >= totalImages;

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
    setIsStuck(false);
  };

  const handleRetry = () => {
    window.location.reload();
  };

  // Check if loading is stuck (no progress for 30 seconds)
  useEffect(() => {
    const checkInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (!allImagesLoaded && elapsed > 30000 && loadedCount < totalImages) {
        setIsStuck(true);
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(checkInterval);
  }, [allImagesLoaded, loadedCount, startTime, totalImages]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      
      {/* Full Page Loading Overlay */}
      {!allImagesLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="text-center">
            {!isStuck ? (
              <>
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-900 mx-auto mb-6"></div>
                <p className="text-xl text-gray-900 font-medium mb-2">Loading Case Study</p>
                <p className="text-gray-600 mb-2">{loadedCount} / {totalImages} images loaded</p>
                <p className="text-sm text-gray-500">This may take a while for large images...</p>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xl text-gray-900 font-medium mb-2">Loading seems stuck</p>
                <p className="text-gray-600 mb-6">{loadedCount} / {totalImages} images loaded</p>
                <button
                  onClick={handleRetry}
                  className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition"
                >
                  Retry Loading
                </button>
              </>
            )}
          </div>
        </div>
      )}
      
      {/* Case Study Content - hidden until all loaded */}
      <main className={`pt-20 md:pt-24 block m-0 leading-none overflow-x-hidden transition-opacity duration-500 ${allImagesLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ margin: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
        {/* Section 1 */}
        <FadeInSection delay={0.1}>
          <section className="w-full block m-0 p-0 leading-none overflow-hidden">
            <Image
              src="/case study2/1.svg"
              alt="Edgewise Case Study - Section 1"
              width={1920}
              height={1080}
              className="w-full max-w-full h-auto block m-0 p-0"
              style={{ display: 'block', verticalAlign: 'top', maxWidth: '100%', height: 'auto' }}
              priority
              unoptimized
              onLoad={handleImageLoad}
            />
          </section>
        </FadeInSection>

        {/* Section 2 */}
        <FadeInSection delay={0.1}>
          <section className="w-full block m-0 p-0 leading-none overflow-hidden">
            <Image
              src="/case study2/2.svg"
              alt="Edgewise Case Study - Section 2"
              width={1920}
              height={1080}
              className="w-full max-w-full h-auto block m-0 p-0"
              style={{ display: 'block', verticalAlign: 'top', maxWidth: '100%', height: 'auto' }}
              unoptimized
              onLoad={handleImageLoad}
            />
          </section>
        </FadeInSection>

        {/* Section 3 */}
        <FadeInSection delay={0.1}>
          <section className="w-full block m-0 p-0 leading-none overflow-hidden">
            <Image
              src="/case study2/3.svg"
              alt="Edgewise Case Study - Section 3"
              width={1920}
              height={1080}
              className="w-full max-w-full h-auto block m-0 p-0"
              style={{ display: 'block', verticalAlign: 'top', maxWidth: '100%', height: 'auto' }}
              unoptimized
              onLoad={handleImageLoad}
            />
          </section>
        </FadeInSection>

        {/* Section 4 */}
        <FadeInSection delay={0.1}>
          <section className="w-full block m-0 p-0 leading-none overflow-hidden">
            <Image
              src="/case study2/4.svg"
              alt="Edgewise Case Study - Section 4"
              width={1920}
              height={1080}
              className="w-full max-w-full h-auto block m-0 p-0"
              style={{ display: 'block', verticalAlign: 'top', maxWidth: '100%', height: 'auto' }}
              unoptimized
              onLoad={handleImageLoad}
            />
          </section>
        </FadeInSection>

        {/* Section 5 */}
        <FadeInSection delay={0.1}>
          <section className="w-full block m-0 p-0 leading-none overflow-hidden">
            <Image
              src="/case study2/5.svg"
              alt="Edgewise Case Study - Section 5"
              width={1920}
              height={1080}
              className="w-full max-w-full h-auto block m-0 p-0"
              style={{ display: 'block', verticalAlign: 'top', maxWidth: '100%', height: 'auto' }}
              unoptimized
              onLoad={handleImageLoad}
            />
          </section>
        </FadeInSection>

        {/* Section 6 */}
        <FadeInSection delay={0.1}>
          <section className="w-full block m-0 p-0 leading-none overflow-hidden">
            <Image
              src="/case study2/6.svg"
              alt="Edgewise Case Study - Section 6"
              width={1920}
              height={1080}
              className="w-full max-w-full h-auto block m-0 p-0"
              style={{ display: 'block', verticalAlign: 'top', maxWidth: '100%', height: 'auto' }}
              unoptimized
              onLoad={handleImageLoad}
            />
          </section>
        </FadeInSection>

        {/* Section 7 */}
        <FadeInSection delay={0.1}>
          <section className="w-full block m-0 p-0 leading-none overflow-hidden">
            <Image
              src="/case study2/7.svg"
              alt="Edgewise Case Study - Section 7"
              width={1920}
              height={1080}
              className="w-full max-w-full h-auto block m-0 p-0"
              style={{ display: 'block', verticalAlign: 'top', maxWidth: '100%', height: 'auto' }}
              unoptimized
              onLoad={handleImageLoad}
            />
          </section>
        </FadeInSection>

        {/* Section 8 */}
        <FadeInSection delay={0.1}>
          <section className="w-full block m-0 p-0 leading-none overflow-hidden">
            <Image
              src="/case study2/8.svg"
              alt="Edgewise Case Study - Section 8"
              width={1920}
              height={1080}
              className="w-full max-w-full h-auto block m-0 p-0"
              style={{ display: 'block', verticalAlign: 'top', maxWidth: '100%', height: 'auto' }}
              unoptimized
              onLoad={handleImageLoad}
            />
          </section>
        </FadeInSection>
      </main>

      <div className="m-0 p-0">
        <Contact />
      </div>
    </div>
  );
}

