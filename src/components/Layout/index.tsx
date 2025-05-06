import { Outlet } from 'react-router';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col h-dvh overflow-auto">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
