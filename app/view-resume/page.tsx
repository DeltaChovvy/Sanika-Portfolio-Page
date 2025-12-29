'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { useState, useEffect } from 'react';

export default function ViewResume() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const [startTime] = useState(Date.now());

  const handleRetry = () => {
    window.location.reload();
  };

  // Check if loading is stuck (no progress for 20 seconds)
  useEffect(() => {
    const checkInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (!isLoaded && elapsed > 20000) {
        setIsStuck(true);
      }
    }, 5000);

    return () => clearInterval(checkInterval);
  }, [isLoaded, startTime]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      
      {/* Full Page Loading Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="text-center">
            {!isStuck ? (
              <>
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-900 mx-auto mb-6"></div>
                <p className="text-xl text-gray-900 font-medium">Loading Resume</p>
                <p className="text-sm text-gray-500 mt-2">Please wait...</p>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xl text-gray-900 font-medium mb-2">Loading seems stuck</p>
                <p className="text-gray-600 mb-6">The resume is taking longer than expected</p>
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

