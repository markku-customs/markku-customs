import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

import englishFlag from '../assets/english-flag.svg';
import finnishFlag from '../assets/finnish-flag.svg';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              className={isMenuOpen ? 'hidden' : 'block'}
              onClick={() => setIsMenuOpen(true)}
              aria-label="open menu"
            >
              <img
                src="/menu-open.svg"
                alt=""
                height={32}
                width={32}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className={isMenuOpen ? 'block' : 'hidden'}
              onClick={() => setIsMenuOpen(false)}
              aria-label="close menu"
            >
              <img
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
        aria-controls="menu"
        className={`mobile-nav border-b-2 bg-zinc-950 border-red-600 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
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
