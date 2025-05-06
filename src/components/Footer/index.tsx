import { Mail } from 'lucide-react';

import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router';
import { pathName } from 'routes';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Barly</h3>
            <p className="text-muted-foreground max-w-xs">
              A frontend developer
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to={pathName.Home} className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to={pathName.Projects} className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link to={pathName.About} className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to={pathName.Contact} className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                to={import.meta.env.VITE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                to={import.meta.env.VITE_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                to={import.meta.env.VITE_TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                to={import.meta.env.VITE_EMAIL_URL}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 Barly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
