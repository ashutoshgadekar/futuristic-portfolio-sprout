
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number; // 1-10
  className?: string;
}

const SkillCard = ({ icon: Icon, name, level, className }: SkillCardProps) => {
  return (
    <div 
      className={cn(
        "p-5 rounded-lg glass hover:bg-muted/40 transition-all-300 group", 
        className
      )}
    >
      <div className="flex items-center mb-3">
        <Icon className="text-neon-blue mr-3" size={24} />
        <h3 className="font-medium text-lg">{name}</h3>
      </div>
      <div className="h-2 bg-muted rounded-full w-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-neon-blue to-neon-orange rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${level * 10}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
