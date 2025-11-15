import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  icon?: string;
}

export const ProjectCard = ({ title, description, link, icon }: ProjectCardProps) => {
  const isExternal = link.startsWith("http");

  const content = (
    <div className="flex items-start gap-3">
      {icon && (
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
          <img src={icon} alt="" className="w-6 h-6 object-contain" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {isExternal && (
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <CardContent className="p-6">
        {isExternal ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {content}
          </a>
        ) : (
          <Link to={link} className="block">
            {content}
          </Link>
        )}
      </CardContent>
    </Card>
  );
};
