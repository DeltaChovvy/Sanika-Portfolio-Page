interface ProjectCardProps {
  title: string;
  description: string;
  imageAlt: string;
  link?: string;
}

export default function ProjectCard({ title, description, imageAlt, link }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Project Image */}
      <div className="aspect-video bg-gray-100 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
          <span className="text-sm">{imageAlt}</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-700 mb-6 line-clamp-3">
          {description}
        </p>
        {link && (
          <a
            href={link}
            className="inline-flex items-center text-gray-900 font-medium hover:gap-3 gap-2 transition-all group"
          >
            View Case Study
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

