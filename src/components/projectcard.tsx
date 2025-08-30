// src/components/ProjectCard.tsx
import type { Project } from "../data/project";

export default function ProjectCard({ title, image, description, link }: Project) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded transition-colors duration-200 text-center"
        >
          Lihat Proyek →
        </a>
      </div>
    </div>
  );
}
