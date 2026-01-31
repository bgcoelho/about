import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Mail, Linkedin, Github, Home } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="mailto:bgracacoelho@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bgracacoelho/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/bgcoelho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          <Link
            to="/"
            className={cn(
              "transition-colors hover:text-primary",
              location.pathname === "/"
                ? "text-primary"
                : "text-muted-foreground"
            )}
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
