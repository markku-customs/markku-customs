import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import clsx from 'clsx';

import englishFlag from '../assets/english-flag.svg';
import finnishFlag from '../assets/finnish-flag.svg';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className="border-b-2 border-red-600 bg-zinc-950 py-4">
        <div className="container flex justify-between gap-4">
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
          <div className="hidden gap-6 md:flex">
            <ul className="-my-4 flex">
              <li className="text-xs font-semibold uppercase tracking-[.30em]">
                <Link
                  to="/#home"
                  className="flex h-full w-full items-center px-4 transition duration-200 hover:bg-zinc-900 lg:px-6"
                >
                  {t('links.home')}
                </Link>
              </li>
              <li className="text-xs font-semibold uppercase tracking-[.30em]">
                <Link
                  to="/#store"
                  className="flex h-full w-full items-center px-4 transition duration-200 hover:bg-zinc-900 lg:px-6"
                >
                  {t('links.store')}
                </Link>
              </li>
              <li className="text-xs font-semibold uppercase tracking-[.30em]">
                <Link
                  to="/#reviews"
                  className="flex h-full w-full items-center px-4 transition duration-200 hover:bg-zinc-900 lg:px-6"
                >
                  {t('links.reviews')}
                </Link>
              </li>
              <li className="text-xs font-semibold uppercase tracking-[.30em]">
                <Link
                  to="/#contact"
                  className="flex h-full w-full items-center px-4 transition duration-200 hover:bg-zinc-900 lg:px-6"
                >
                  {t('links.contact')}
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <button
                className="w-6"
                type="button"
                onClick={() => i18n.changeLanguage('en-US')}
              >
                <img
                  className="transition duration-100 hover:scale-110"
                  src={englishFlag}
                  alt="English"
                />
              </button>
              <button
                className="w-6"
                type="button"
                onClick={() => i18n.changeLanguage('fi-FI')}
              >
                <img
                  className="transition duration-100 hover:scale-110"
                  src={finnishFlag}
                  alt="Suomi"
                />
              </button>
            </div>
          </div>
          <div className="block md:hidden">
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
        className={clsx(
          'mobile-nav border-b-2 border-red-600 bg-zinc-950',
          isMenuOpen ? 'block' : 'hidden'
        )}
      >
        <ul className="flex flex-col" role="menu">
          <li className="text-xs font-semibold uppercase tracking-[.30em]">
            <Link
              to="/#home"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-full w-full justify-center py-6 transition duration-200 hover:bg-zinc-900"
            >
              {t('links.home')}
            </Link>
          </li>
          <li className="text-xs font-semibold uppercase tracking-[.30em]">
            <Link
              to="/#store"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-full w-full justify-center py-6 transition duration-200 hover:bg-zinc-900"
            >
              {t('links.store')}
            </Link>
          </li>
          <li className="text-xs font-semibold uppercase tracking-[.30em]">
            <Link
              to="/#reviews"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-full w-full justify-center py-6 transition duration-200 hover:bg-zinc-900"
            >
              {t('links.reviews')}
            </Link>
          </li>
          <li className="text-xs font-semibold uppercase tracking-[.30em]">
            <Link
              to="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-full w-full justify-center py-6 transition duration-200 hover:bg-zinc-900"
            >
              {t('links.contact')}
            </Link>
          </li>
        </ul>
        <div className="flex justify-center gap-4 p-4">
          <button type="button" onClick={() => i18n.changeLanguage('en-US')}>
            <img
              className="h-4 transition duration-100 hover:scale-110"
              src={englishFlag}
              alt="English"
            />
          </button>
          <button type="button" onClick={() => i18n.changeLanguage('fi-FI')}>
            <img
              className="h-4 transition duration-100 hover:scale-110"
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
