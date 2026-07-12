import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Janashri. Built with purpose.
        </p>
        
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/janashri-n" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary dark:hover:text-white transition-colors p-2">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:njanashri@gmail.com" className="text-muted-foreground hover:text-primary dark:hover:text-white transition-colors p-2">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
