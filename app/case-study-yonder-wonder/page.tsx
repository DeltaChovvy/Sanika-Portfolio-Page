'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import FadeInSection from '@/components/FadeInSection';

export default function YonderWonderCaseStudy() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      
      {/* Case Study Content */}
      <main className="pt-20 md:pt-24 block m-0 leading-none overflow-x-hidden" style={{ margin: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
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

