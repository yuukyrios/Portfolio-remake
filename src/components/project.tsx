import React from "react";
import type { Project } from "../data/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="max-w-sm rounded-xl bg-gray-800 p-4 shadow-lg hover:scale-105 transition-transform cursor-pointer">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="rounded-md object-cover w-full h-48"
      />
      <h3 className="mt-3 text-xl font-semibold text-green-400">{project.title}</h3>
      <p className="mt-2 text-gray-300">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.techStack?.map((tech) => (
          <span key={tech} className="bg-green-600 text-black px-2 py-1 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex space-x-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-black font-semibold text-sm"
          >
            View Project
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-green-400 font-semibold text-sm"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
