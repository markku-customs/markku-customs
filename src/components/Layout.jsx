import { useState } from "react"

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar open={open} setOpen={setOpen} />
        <main className="relative">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
