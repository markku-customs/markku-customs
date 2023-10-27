import { ToastContainer } from 'react-toastify';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex grow flex-col">
        <Navbar />
        <main className="grow">{children}</main>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
