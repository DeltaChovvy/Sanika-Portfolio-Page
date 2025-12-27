'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';

export default function ViewResume() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      
      {/* Resume Content */}
      <main className="pt-20 md:pt-24 pb-12 md:pb-16 lg:pb-20 px-4 md:px-6 lg:px-16 min-h-screen flex items-center justify-center">
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

