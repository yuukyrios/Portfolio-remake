export interface Project {
  id: number;
  title: string;
  description: string;
  category: "coding" | "design" | "all";
  imageUrl: string;
  link?: string;
  github?: string;
  techStack?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "This is a cool coding project",
    category: "coding",
    imageUrl: "/assets/project1.png",
    link: "https://example.com/project1",
    github: "https://github.com/example/project1",
    techStack: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Design Masterpiece",
    description: "A beautiful design project",
    category: "design",
    imageUrl: "/assets/project2.png",
    link: "https://example.com/project2",
    techStack: ["Figma", "Photoshop"],
  },
  // Add more projects as you want
];
