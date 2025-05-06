import { Button } from 'components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { pathName } from 'routes';

const links = [
  {
    label: 'GitHub',
    icon: Github,
    href: import.meta.env.VITE_GITHUB_LINK,
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: import.meta.env.VITE_LINKEDIN_LINK,
  },
  {
    label: 'Email',
    icon: Mail,
    href: import.meta.env.VITE_EMAIL_LINK,
  },
];

const HomeHero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 md:py-32 text-center">
      <div className="container max-w-4xl m-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">Hi, I'm </span>
          <span className="block text-primary mt-2">Barly Djaja</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          I fell in love with frontend.
          <br />
          It's really fun to see our product being used by others.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Button asChild size="lg">
            <Link to={pathName.Projects}>
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to={pathName.Contact}>Get in Touch</Link>
          </Button>
        </div>
        <div className="flex justify-center gap-6 mt-10">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon className="h-6 w-6" />
              <span className="sr-only">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>);
};

export default HomeHero;
