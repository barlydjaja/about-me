import { Outlet } from 'react-router';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SpritesAnimation from 'components/SpritesAnimation';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <SpritesAnimation />
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
