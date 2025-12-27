'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-poppins font-light leading-tight">
            Get to <span className="italic font-medium">know</span> me
          </h2>
        </div>

        {/* Description */}
        <div className="mb-8 md:mb-12 lg:mb-16 w-full">
          <p className="text-base md:text-lg lg:text-xl xl:text-[24px] font-poppins font-normal text-black leading-relaxed">
            What am I doing when I'm not designing? Here's a brief peek into what piques my interest and keeps me up and going otherwise!
          </p>
        </div>

        {/* Image Cards Container */}
        <div className="w-full max-w-[1070px] mx-auto flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center justify-center">
          {/* Oil Painting Card */}
          <div className="relative w-full md:w-auto flex-shrink-0">
            <Image 
              src="/oilpainting.svg" 
              alt="Oil paint enthusiast"
              width={374}
              height={420}
              className="w-full md:w-[280px] lg:w-[340px] xl:w-[374px] h-auto object-contain mx-auto"
              unoptimized
            />
          </div>

          {/* Avid Traveller Card */}
          <div className="relative w-full md:w-auto flex-shrink-0">
            <Image 
              src="/avidtraveller.svg" 
              alt="An avid traveller"
              width={632}
              height={459}
              className="w-full md:w-[400px] lg:w-[550px] xl:w-[632px] h-auto object-contain mx-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
