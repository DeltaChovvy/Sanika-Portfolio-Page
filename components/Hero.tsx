'use client';

import Image from 'next/image';
import FadeInSection from './FadeInSection';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 lg:px-16 pt-24 md:pt-32 lg:pt-[152px] pb-12 md:pb-20 bg-white">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Main Heading with inline images matching reference */}
        <FadeInSection delay={0.2}>
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          {/* Line 1: Hello, I am Sanika; with profile pic */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-1 md:mb-2 flex-wrap">
            <h1 className="text-2xl md:text-3xl lg:text-[48px] leading-tight font-poppins font-light">
              Hello, I am <span className="italic font-medium">Sanika</span>;
            </h1>
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] flex-shrink-0">
              <Image 
                src="/love.svg" 
                alt="Sanika"
                width={60}
                height={60}
                className="w-full h-full"
                unoptimized
                priority
                style={{ 
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
          </div>

          {/* Line 2: former interior designer with tape */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-1 md:mb-2 flex-wrap">
            <h1 className="text-2xl md:text-3xl lg:text-[48px] leading-tight font-poppins font-light">
              former interior designer
            </h1>
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] flex-shrink-0">
              <Image 
                src="/tape.svg" 
                alt=""
                width={60}
                height={60}
                className="w-full h-full"
                unoptimized
                priority
                style={{ 
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
          </div>

          {/* Line 3: turned user experience designer with phone */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-1 md:mb-2 flex-wrap">
            <h1 className="text-2xl md:text-3xl lg:text-[48px] leading-tight font-poppins font-light">
              turned <span className="italic font-medium">user experience designer</span>
            </h1>
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] flex-shrink-0">
              <Image 
                src="/phone.svg" 
                alt=""
                width={60}
                height={60}
                className="w-full h-full"
                unoptimized
                priority
                style={{ 
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
          </div>

          {/* Line 4: in the making. */}
          <h1 className="text-2xl md:text-3xl lg:text-[48px] leading-tight font-poppins font-light">
            in the making.
          </h1>
        </div>
        </FadeInSection>

        {/* Description */}
        <FadeInSection delay={0.4}>
        <div className="text-center mb-12 md:mb-16 lg:mb-20 w-full px-2">
          <p className="text-base md:text-lg lg:text-[24px] text-black font-poppins font-light leading-relaxed">
            Blending my <span className="italic font-medium">background in interior design</span> with a growing passion for digital experiences,<br className="hidden lg:block" />
            I'm driven by a deep love for structure, clarity, and human-centred design that <span className="italic font-medium">just makes sense.</span>
          </p>
        </div>
        </FadeInSection>

        {/* Down arrow button */}
        <FadeInSection delay={0.6}>
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <button 
            onClick={scrollToProjects}
            className="flex items-center justify-center hover:opacity-80 transition-all"
            aria-label="Scroll to projects"
          >
            <Image 
              src="/arrow.svg" 
              alt="Scroll down"
              width={300}
              height={300}
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"
              unoptimized
              style={{ 
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                imageRendering: 'crisp-edges'
              }}
            />
          </button>
          
          <p className="text-lg md:text-xl lg:text-[24px] text-black font-poppins font-normal">
            Go through some projects..
          </p>
        </div>
        </FadeInSection>
      </div>
    </section>
  );
}
