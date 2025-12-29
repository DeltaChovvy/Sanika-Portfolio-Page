'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { useState } from 'react';

export default function ViewResume() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      
      {/* Full Page Loading Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-900 mx-auto mb-6"></div>
            <p className="text-xl text-gray-900 font-medium">Loading Resume</p>
          </div>
        </div>
      )}
      
      {/* Resume Content - hidden until loaded */}
      <main className={`pt-20 md:pt-24 pb-12 md:pb-16 lg:pb-20 px-4 md:px-6 lg:px-16 min-h-screen flex items-center justify-center transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full max-w-[900px] mx-auto flex items-center justify-center">
          <div className="w-full bg-white rounded-lg shadow-xl p-4 md:p-6 lg:p-8">
            <Image
              src="/resume/resume.svg"
              alt="Sanika Talavdekar Resume"
              width={850}
              height={1100}
              className="w-full h-auto object-contain"
              priority
              unoptimized
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
      </main>

      <div className="m-0 p-0">
        <Contact />
      </div>
    </div>
  );
}

