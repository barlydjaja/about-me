import { Button } from 'components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { pathName } from 'routes';

// TODO: use from routes
const HeaderNavigations = [
  {
    name: 'Home',
    path: pathName.Home,
  },
  {
    name: 'Projects',
    path: pathName.Projects,
  },
  {
    name: 'About',
    path: pathName.About,
  },
  {
    name: 'Contact',
    path: pathName.Contact,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-1 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between m-auto px-4">
        <div className="flex items-center gap-2">
          <Link to={pathName.Home} className="font-bold text-xl">
            Barly
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {HeaderNavigations.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-foreground' : 'text-muted-foreground'
                }`
              }
            >
              {route.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="md:hidden border-b px-4 z-50 bg-background/95 backdrop-blur supports-[backdrop-blur]:bg-background/90 absolute top-16 left-0 w-full"
        >
          <nav className="container py-4 flex flex-col space-y-4">
            {HeaderNavigations.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary py-2 ${
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
