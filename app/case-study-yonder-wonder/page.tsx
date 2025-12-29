'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import FadeInSection from '@/components/FadeInSection';
import { useState } from 'react';

export default function YonderWonderCaseStudy() {
  const totalImages = 4;
  const [loadedCount, setLoadedCount] = useState(0);
  const allImagesLoaded = loadedCount >= totalImages;

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      
      {/* Full Page Loading Overlay */}
      {!allImagesLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-900 mx-auto mb-6"></div>
            <p className="text-xl text-gray-900 font-medium mb-2">Loading Case Study</p>
            <p className="text-gray-600">{loadedCount} / {totalImages} images loaded</p>
          </div>
        </div>
      )}
      
      {/* Case Study Content - hidden until all loaded */}
      <main className={`pt-20 md:pt-24 block m-0 leading-none overflow-x-hidden transition-opacity duration-500 ${allImagesLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ margin: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
        {/* Section 1 */}
        <FadeInSection delay={0.1}>
          <section className="w-full block m-0 p-0 leading-none overflow-hidden">
            <Image
              src="/casestudy1/1.svg"
              alt="Yonder Wonder Case Study - Section 1"
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
              src="/casestudy1/2.svg"
              alt="Yonder Wonder Case Study - Section 2"
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
              src="/casestudy1/3.svg"
              alt="Yonder Wonder Case Study - Section 3"
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
              src="/casestudy1/4.svg"
              alt="Yonder Wonder Case Study - Section 4"
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

