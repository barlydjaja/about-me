import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from 'components/ui/button';
import { Badge } from 'components/ui/badge';
import { Link } from 'react-router';
import { pathName } from 'routes';
import projects from 'constants/projects';
import { cn } from 'lib/utils';

const allProjects = [
  {
    label: 'Featured Projects',
    projects: projects.featured,
  },
  {
    label: 'Web Development',
    projects: projects.webDevelopment,
  },
  {
    label: 'Mobile Development',
    projects: projects.mobileDevelopment,
  },
];

const ProjectsPage = () => {
  return (
    <div className="container py-12 max-w-6xl m-auto">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link to={pathName.Home}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-4">My Personal Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A collection of personal projects I&apos;ve worked on, not including my professional work &#58;&#41;.
        </p>
      </div>

      {allProjects.map(({ label, projects }) => (
        <div key={label} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b">{label}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted-foreground/10 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={cn(
                      'w-full h-full',
                      project.objectType === 'cover' ? 'object-cover' : 'object-contain'
                    )}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <Link to={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <Link to={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
