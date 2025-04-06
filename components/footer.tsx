import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Shubham Wankar. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/shubham-wankar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/shubhamwankar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/shubhamwankar10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
