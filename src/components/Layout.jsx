import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
        <main className="relative">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
