
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
  className,
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-lg overflow-hidden group transition-all-300 hover:-translate-y-2",
        className
      )}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all-300 flex items-end p-5">
          <div className="flex space-x-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-2 rounded-full hover:bg-neon-blue/20 transition-all-300"
                aria-label="GitHub Repository"
              >
                <Github size={18} className="text-white" />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-2 rounded-full hover:bg-neon-blue/20 transition-all-300"
                aria-label="Live Project"
              >
                <ExternalLink size={18} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="glass p-5 border-t border-white/5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-muted text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
