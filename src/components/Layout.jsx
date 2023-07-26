import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Navbar';
import Footer from './Footer';

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
