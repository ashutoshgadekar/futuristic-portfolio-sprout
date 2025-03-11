
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-10 text-center", className)}>
      <div className="inline-block">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">{title}</h2>
        <div className="h-1 w-1/3 rounded-full bg-neon-blue mx-auto"></div>
      </div>
      {subtitle && <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
