import { ToastContainer } from 'react-toastify';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ScrollToTop from '@/components/layout/ScrollToTop';

import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex grow flex-col">
        <Navbar />
        <main className="grow">{children}</main>
      </div>
      <Footer />
      <ScrollToTop />
      <ToastContainer />
    </div>
  );
};

export default Layout;
