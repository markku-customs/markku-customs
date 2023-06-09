import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import React, { useRef } from 'react';

import englishFlag from '../assets/english-flag.svg';
import finnishFlag from '../assets/finnish-flag.svg';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const openMenuRef = useRef();
  const closeMenuRef = useRef();
  const mobileNavRef = useRef();

  const openMobileMenu = () => {
    closeMenuRef.current.style.display = 'none';
    openMenuRef.current.style.display = 'block';
    mobileNavRef.current.style.display = 'block';
  };

  const closeMobileMenu = () => {
    closeMenuRef.current.style.display = 'block';
    openMenuRef.current.style.display = 'none';
    mobileNavRef.current.style.display = 'none';
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-zinc-950 py-4 border-b-2 border-red-600">
        <div className="container flex gap-4 justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img
              className="h-8 w-8"
              src="/logo.svg"
              alt=""
              height={32}
              width={32}
            />
            <span className="font-heading text-xl">{t('markku-customs')}</span>
          </Link>
          <div className="hidden sm:flex gap-6">
            <ul className="flex -my-4">
              <li className="text-xs uppercase tracking-[.30em] font-semibold">
                <Link
                  to="/#home"
                  className="w-full h-full px-4 md:px-6 flex items-center hover:bg-zinc-900 transition duration-200"
                >
                  {t('links.home')}
                </Link>
              </li>
              <li className="text-xs uppercase tracking-[.30em] font-semibold">
                <Link
                  to="/#store"
                  className="w-full h-full px-4 md:px-6 flex items-center hover:bg-zinc-900 transition duration-200"
                >
                  {t('links.store')}
                </Link>
              </li>
              <li className="text-xs uppercase tracking-[.30em] font-semibold">
                <Link
                  to="/#contact"
                  className="w-full h-full px-4 md:px-6 flex items-center hover:bg-zinc-900 transition duration-200"
                >
                  {t('links.contact')}
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 items-center">
              <button
                type="button"
                onClick={() => i18n.changeLanguage('en-US')}
              >
                <img
                  className="hover:scale-110 h-4 transition duration-100"
                  src={englishFlag}
                  alt="English"
                />
              </button>
              <button
                type="button"
                onClick={() => i18n.changeLanguage('fi-FI')}
              >
                <img
                  className="hover:scale-110 h-4 transition duration-100"
                  src={finnishFlag}
                  alt="Suomi"
                />
              </button>
            </div>
          </div>
          <div className="block sm:hidden">
            <button
              type="button"
              onClick={openMobileMenu}
              aria-label="open menu"
            >
              <img
                ref={closeMenuRef}
                className="closed-menu"
                src="/menu-open.svg"
                alt=""
                height={32}
                width={32}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="close menu"
            >
              <img
                ref={openMenuRef}
                className="open-menu"
                src="/menu-close.svg"
                alt=""
                height={32}
                width={32}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </nav>
      <nav
        ref={mobileNavRef}
        aria-controls="menu"
        className="mobile-nav border-b-2 bg-zinc-950 border-red-600"
      >
        <ul className="flex flex-col" role="menu">
          <li className="text-xs uppercase tracking-[.30em] font-semibold">
            <Link
              to="/#home"
              className="w-full h-full py-6 flex justify-center hover:bg-zinc-900 transition duration-200"
            >
              {t('links.home')}
            </Link>
          </li>
          <li className="text-xs uppercase tracking-[.30em] font-semibold">
            <Link
              to="/#store"
              className="w-full h-full py-6 flex justify-center hover:bg-zinc-900 transition duration-200"
            >
              {t('links.store')}
            </Link>
          </li>
          <li className="text-xs uppercase tracking-[.30em] font-semibold">
            <Link
              to="/#contact"
              className="w-full h-full py-6 flex justify-center hover:bg-zinc-900 transition duration-200"
            >
              {t('links.contact')}
            </Link>
          </li>
        </ul>
        <div className="p-4 flex gap-4 justify-center">
          <button type="button" onClick={() => i18n.changeLanguage('en-US')}>
            <img
              className="hover:scale-110 h-4 transition duration-100"
              src={englishFlag}
              alt="English"
            />
          </button>
          <button type="button" onClick={() => i18n.changeLanguage('fi-FI')}>
            <img
              className="hover:scale-110 h-4 transition duration-100"
              src={finnishFlag}
              alt="Finnish"
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
