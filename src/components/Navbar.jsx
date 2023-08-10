import { Fragment, useState } from 'react';

import { Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

import finlandFlag from '@/assets/finland-flag.svg';
import unitedKingdomFlag from '@/assets/united-kingdom-flag.svg';

import { MenuCloseIcon, MenuOpenIcon } from '@/icons';

const links = [
  { key: 'links.home', to: '/#home' },
  { key: 'links.store', to: '/#store' },
  { key: 'links.reviews', to: '/#reviews' },
  { key: 'links.contact', to: '/#contact' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className="relative z-50 border-b-2 border-red-600 bg-zinc-950 py-4">
        <div className="container flex justify-between gap-4">
          <Link to="/" className="flex items-center gap-4">
            <img
              className="h-8 w-8"
              src="/logo.svg"
              alt=""
              height={32}
              width={32}
            />
            <span className="font-heading text-xl">Markku Customs</span>
          </Link>
          <div className="hidden gap-6 md:flex">
            <ul className="-my-4 flex">
              {links.map(({ key, to }) => (
                <li
                  key={key}
                  className="text-xs font-semibold uppercase tracking-[.30em]"
                >
                  <Link
                    to={to}
                    className="flex h-full w-full items-center px-4 transition duration-200 hover:bg-zinc-900 lg:px-6"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <button
                className="w-10 rounded bg-zinc-950 px-2 py-1 transition hover:bg-zinc-900"
                type="button"
                onClick={() => i18n.changeLanguage('en-US')}
                title="Translate into English"
                aria-label="translate into english"
              >
                <img src={unitedKingdomFlag} alt="" aria-hidden="true" />
              </button>
              <button
                className="w-10 rounded bg-zinc-950 px-2 py-1 transition hover:bg-zinc-900"
                type="button"
                onClick={() => i18n.changeLanguage('fi-FI')}
                title="Käännä suomeksi"
                aria-label="käännä suomeksi"
              >
                <img src={finlandFlag} alt="" aria-hidden="true" />
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
              <MenuOpenIcon />
            </button>
            <button
              type="button"
              className={isMenuOpen ? 'block' : 'hidden'}
              onClick={() => setIsMenuOpen(false)}
              aria-label="close menu"
            >
              <MenuCloseIcon />
            </button>
          </div>
        </div>
      </nav>
      <Transition
        as={Fragment}
        show={isMenuOpen}
        enter="transition-all ease-out duration-500"
        enterFrom="opacity-0 -translate-y-6"
        enterTo="opacity-100 translate-x-0"
        leave="transition-all duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <nav
          aria-controls="menu"
          className="mobile-nav absolute w-full border-b-2 border-red-600 bg-zinc-950"
        >
          <ul className="flex flex-col" role="menu">
            {links.map(({ key, to }) => (
              <li
                key={key}
                className="text-sm font-semibold uppercase tracking-[.30em]"
              >
                <Link
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-full w-full justify-center py-6 transition duration-200 hover:bg-zinc-900"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-2 p-4">
            <button
              className="w-10 rounded bg-zinc-950 px-2 py-1 transition hover:bg-zinc-900"
              type="button"
              onClick={() => i18n.changeLanguage('en-US')}
              title="Translate into English"
              aria-label="translate into english"
            >
              <img src={unitedKingdomFlag} alt="" aria-hidden="true" />
            </button>
            <button
              className="w-10 rounded bg-zinc-950 px-2 py-1 transition hover:bg-zinc-900"
              type="button"
              onClick={() => i18n.changeLanguage('fi-FI')}
              title="Käännä suomeksi"
              aria-label="käännä suomeksi"
            >
              <img src={finlandFlag} alt="" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </Transition>
    </div>
  );
};

export default Navbar;
