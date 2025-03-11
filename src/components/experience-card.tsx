
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  className?: string;
}

const ExperienceCard = ({
  company,
  position,
  duration,
  location,
  description,
  className,
}: ExperienceCardProps) => {
  return (
    <div 
      className={cn(
        "relative pl-8 pb-12 group",
        "before:absolute before:left-0 before:top-1 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neon-blue before:to-neon-orange",
        "after:absolute after:left-[-6px] after:top-1 after:h-3 after:w-3 after:rounded-full after:bg-neon-blue after:animate-glow-pulse",
        className
      )}
    >
      <div className="glass p-6 rounded-lg">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <div>
            <h3 className="text-xl font-bold">{position}</h3>
            <h4 className="text-neon-orange font-medium">{company}</h4>
          </div>
          <div className="mt-2 sm:mt-0 text-sm text-muted-foreground">
            <div>{duration}</div>
            <div>{location}</div>
          </div>
        </div>
        <ul className="space-y-2 text-foreground/90">
          {description.map((item, index) => (
            <li key={index} className="flex">
              <span className="text-neon-blue mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
