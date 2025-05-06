import { Button } from 'components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { pathName } from 'routes';
import { cn } from 'lib/utils';
import projects from 'constants/projects';

const featuredProjects = projects.featured;

const HomeProjects = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container m-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <div key={idx} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
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
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`${pathName.Projects}`}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link to={pathName.Projects}>
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
