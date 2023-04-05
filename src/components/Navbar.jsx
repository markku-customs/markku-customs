import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import React, {useRef} from "react"

import englishFlag from '../assets/english-flag.svg'
import finnishFlag from '../assets/finnish-flag.svg'

const Navbar = ({ open, setOpen }) => {
  const { t, i18n } = useTranslation();

  const openMenuRef = useRef();
  const MenuRef = useRef();
  const MobileNavRef = useRef();

  const openMobileMenu = () =>{
    MenuRef.current.style.display = "none";
    openMenuRef.current.style.display = "block";
    MobileNavRef.current.style.display = "block";
  }

  const closeMobileMenu = () =>{
    MenuRef.current.style.display = "block";
    openMenuRef.current.style.display = "none";
    MobileNavRef.current.style.display = "none";
  }


  return (
    <>
      <div className="sticky top-0 z-50">
        <nav className="bg-zinc-950 py-4 border-b-2 border-red-600">
          <div className="container flex gap-4 justify-between">
            <Link to="/" className="flex">
                <img className="mr-4" src="/logo.svg" alt="" />
                <span className="text-xl font-heading">{t("markku-customs")}</span>
            </Link>
            <div className="hidden sm:flex gap-6">
              <ul className="nav-bar-items grow flex gap-8 justify-between items-center -my-4">
                <li className="text-xs uppercase tracking-[.30em] font-semibold hover:text-red-600">
                  <Link to="/#home">
                    {t("home")}
                  </Link>
                </li>
                <li className="text-xs uppercase tracking-[.30em] font-semibold hover:text-red-600">
                  <Link to="/#store">
                    {t("store")}
                  </Link>
                </li>
                <li className="text-xs uppercase tracking-[.30em] font-semibold hover:text-red-600">
                  <Link to="/#contact">
                    {t("contact")}
                  </Link>
                </li>
              </ul>
              <div className="nav-bar-items grow flex gap-4 items-center">
                <img
                  onClick={() => i18n.changeLanguage("en")}
                  className="hover:scale-110 h-4 transition duration-100"
                  src={englishFlag}
                  alt="English"
                />
                <img
                  onClick={() => i18n.changeLanguage("fi")}
                  className="hover:scale-110 h-4 transition duration-100"
                  src={finnishFlag}
                  alt="Finnish"
                />
              </div>
            </div>
            <div className="menu-container">
              <img ref={MenuRef} onClick={openMobileMenu} className="closed-menu"  src="/menu.png" alt="" />
              <img ref={openMenuRef} onClick={closeMobileMenu} className="open-menu" src="/menu-open.png" alt="" />
            </div>
          </div>
        </nav>
        <nav ref={MobileNavRef} className="mobile-nav border-b-2 bg-zinc-950 border-red-600">
            <ul className="flex gap-4 flex-col justify-between items-center p-3">
              <Link to="/#home">
                <li className="text-base hover:text-red-600 hover:scale-110">
                  {t("home")}
                </li>
              </Link>
              <Link to="/#store">
                <li className="text-base hover:text-red-600 hover:scale-110">
                  {t("store")}
                </li>
              </Link>
              <Link to="/#contact">
                <li className="text-base hover:text-red-600 hover:scale-110">
                  {t("contact")}
                </li>
              </Link>
                  <li>
                      <div className="grow flex gap-4 items-center">
                          <img
                          onClick={() => i18n.changeLanguage("en")}
                          className="hover:scale-110 h-4 transition duration-100"
                          src={englishFlag}
                          alt="English"
                          />
                          <img
                          onClick={() => i18n.changeLanguage("fi")}
                          className="hover:scale-110 h-4 transition duration-100"
                          src={finnishFlag}
                          alt="Finnish"
                          />
                      </div>
                  </li>
            </ul>
          </nav>
        </div>
    </>
  );
};

export default Navbar;
