import { Trans, useTranslation } from 'react-i18next';

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
      <div className="container py-4 text-center text-xs text-zinc-400">
        <Trans i18nKey="footer.copyright" year={year}>
          © {{ year }} Markku Customs. All rights reserved.
        </Trans>
      </div>
      <hr className="h-px border-0 bg-zinc-800" />
      <div className="container flex justify-center gap-6 py-4">
        {links.map(({ key, href }) => (
          <a
            key={key}
            className="flex items-center gap-1 text-xs font-semibold"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-zinc-200">{t(key)}</span>
            <img src="/arrow-outward-red.svg" alt="" height={24} width={24} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
