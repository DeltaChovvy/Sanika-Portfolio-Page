'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-16">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Left side - Icons */}
          <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
            {/* Home Icon */}
            <Link href="/" className="text-black hover:text-gray-600 transition">
              <Image 
                src="/Home.svg" 
                alt="Home"
                width={28}
                height={28}
                className="w-6 h-6"
              />
            </Link>

            {/* LinkedIn Icon */}
            <a 
              href="https://www.linkedin.com/in/sanikatalavdekar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            {/* Behance Icon */}
            <a 
              href="https://www.behance.net/sanikatalavdekar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </a>
          </div>

          {/* Right side - Text Links (Desktop only) */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <Link 
              href="/view-resume"
              className="text-black hover:text-gray-600 transition font-medium text-2xl"
            >
              View Resume
            </Link>
            <a 
              href="#projects" 
              className="text-black hover:text-gray-600 transition font-medium text-2xl"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-black hover:text-gray-600 transition font-medium text-2xl"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
