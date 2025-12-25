export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Sanika Stalavdekar. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#about" className="text-gray-400 hover:text-white transition">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

