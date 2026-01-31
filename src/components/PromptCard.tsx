import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PromptCardProps {
  title: string;
  tags: string[];
  body: string;
}

export const PromptCard = ({ title, tags, body }: PromptCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="hover:shadow-md transition-all duration-300 bg-card border-border">
      <CardContent className="p-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-left w-full group"
        >
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          )}
          <h3 className="text-lg font-semibold text-primary group-hover:underline">
            {title}
          </h3>
        </button>
        <div className="flex flex-wrap gap-2 mt-3 ml-7">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {isExpanded && (
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap mt-4 ml-7">
            {body}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
