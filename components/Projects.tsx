'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto space-y-8 md:space-y-12 lg:space-y-16">
        
        {/* Yonder Wonder Card */}
        <div className="bg-white rounded-2xl md:rounded-[32px] shadow-lg overflow-visible border border-gray-100 w-full max-w-[1200px] mx-auto p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Text Content - Left Top */}
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-[36.36px] font-poppins font-medium text-black leading-tight">
                  Yonder Wonder LLC
                </h2>
                
                <p className="text-lg md:text-2xl lg:text-[36.36px] font-poppins font-normal text-black leading-tight">
                  Enhancing User Trust & Interaction in Generative AI driven B2C platform.
                </p>
              </div>
              
              {/* Button - Bottom Left */}
              <Link 
                href="/case-study-yonder-wonder" 
                className="self-start px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 bg-black text-white rounded-full text-lg md:text-xl lg:text-[24px] font-poppins font-medium hover:bg-gray-800 transition mt-6 md:mt-8"
              >
                View Case Study
              </Link>
            </div>

            {/* Image/Mockup */}
            <div className="flex justify-center items-center flex-shrink-0 lg:order-last order-first">
              <div className="relative w-full max-w-[248px] md:max-w-[280px] lg:w-[312px] aspect-[312/424]">
                <Image 
                  src="/yonder wonder.svg" 
                  alt="Yonder Wonder LLC Project"
                  width={312}
                  height={424}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        {/* Edgewise Card */}
        <div className="bg-white rounded-2xl md:rounded-[32px] shadow-lg overflow-visible border border-gray-100 w-full max-w-[1200px] mx-auto p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Text Content - Left Top */}
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-[36.36px] font-poppins font-normal text-black leading-tight">
                  Rethinking Academic Outreach: A UX Case Study on Student-Educator Communication Barriers
                </h2>
              </div>
              
              {/* Button - Bottom Left */}
              <Link 
                href="/case-study-edgewise" 
                className="self-start px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 bg-black text-white rounded-full text-lg md:text-xl lg:text-[24px] font-poppins font-medium hover:bg-gray-800 transition mt-6 md:mt-8"
              >
                View Case Study
              </Link>
            </div>

            {/* Image/Mockup */}
            <div className="flex justify-center items-center flex-shrink-0 lg:order-last order-first">
              <div className="relative w-full max-w-[248px] md:max-w-[280px] lg:w-[312px] aspect-[312/424]">
                <Image 
                  src="/edgewise.svg" 
                  alt="Edgewise Academic Outreach Project"
                  width={312}
                  height={424}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
