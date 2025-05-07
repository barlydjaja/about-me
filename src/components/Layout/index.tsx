import { Outlet } from 'react-router';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SpritesAnimation from 'components/SpritesAnimation';
import ToggleDarkMode from 'components/ToggleDarkMode';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-dvh selection:bg-primary selection:text-primary-foreground">
      <SpritesAnimation />
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <ToggleDarkMode />
    </div>
  );
};

export default Layout;
