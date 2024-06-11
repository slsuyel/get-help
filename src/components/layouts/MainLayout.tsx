import { Outlet } from 'react-router-dom';
import Header from '../reusable/Header';
import Footer from '../reusable/Footer';
import ScrollToTop from '@/utils/ScrollToTop';

const MainLayout = () => {
  return (
    <ScrollToTop>
      <Header />
      <Outlet />

      <Footer />
    </ScrollToTop>
  );
};

export default MainLayout;
