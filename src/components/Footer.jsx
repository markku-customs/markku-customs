import { Trans, useTranslation } from 'react-i18next';

import { ArrowOutwardIcon } from '@/icons';

const links = [
  {
    key: 'footer.privacy',
    href: 'https://www.iubenda.com/privacy-policy/59126036',
  },
  {
    key: 'footer.terms',
    href: 'https://www.termsfeed.com/live/cf5f6825-5ec1-4164-a2f4-c2dae01df582',
  },
];

const Footer = () => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-zinc-950">
      <div className="container flex flex-col gap-4 py-4">
        <div className="flex justify-center">
          <a href="https://turku.4h.fi/" target="_blank" rel="noreferrer">
            <img
              src="/4H-yritys-logo.webp"
              alt="4H-yritys"
              className="h-6"
              height={24}
              width={74}
            />
          </a>
        </div>
        <div className="flex justify-center gap-6">
          {links.map(({ key, href }) => (
            <a
              key={key}
              className="flex items-center gap-1 text-xs font-semibold text-zinc-200"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {t(key)}
              <ArrowOutwardIcon className="h-4 w-4 text-red-600" />
            </a>
          ))}
        </div>
      </div>
      <hr className="h-px border-0 bg-zinc-800" />
      <div className="container py-4 text-center text-xs text-zinc-400">
        <Trans i18nKey="footer.copyright" year={year}>
          © {{ year }} Markku Customs. All rights reserved.
        </Trans>
      </div>
    </footer>
  );
};

export default Footer;
