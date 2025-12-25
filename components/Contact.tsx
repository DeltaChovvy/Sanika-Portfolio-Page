export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 px-4 md:px-6 lg:px-16 bg-[#2B2B2B] text-white min-h-[400px] md:min-h-[600px] flex items-center">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="w-full">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-extralight leading-tight mb-8 md:mb-12 lg:whitespace-nowrap">
            Let's <span className="italic font-medium">collaborate</span> on ideas
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-poppins font-normal mb-8 md:mb-12 leading-relaxed w-full">
            Got a <span className="italic">project brewing?</span> I'd love to hear about it! I am always open to nit picking at decisions and building something solid.
          </p>
          
          {/* CTA Button */}
          <a 
            href="mailto:contact@example.com"
            className="inline-block px-6 md:px-10 py-3 md:py-4 border-2 border-white text-white rounded-full text-base md:text-lg lg:text-xl font-medium hover:bg-white hover:text-black transition mb-8 md:mb-16"
          >
            Connect via email
          </a>
          
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-6 mt-8 md:mt-16">
            <a 
              href="https://www.linkedin.com/in/sanikatalavdekar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="md:w-12 md:h-12">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.behance.net/sanikatalavdekar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="md:w-12 md:h-12">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
