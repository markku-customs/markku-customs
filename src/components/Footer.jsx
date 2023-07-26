import { useTranslation, Trans } from 'react-i18next';

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
        <a
          className="flex items-center gap-1 text-xs font-semibold"
          href="https://www.iubenda.com/privacy-policy/59126036"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-zinc-200">{t('footer.privacy')}</span>
          <img src="/arrow-outward-red.svg" alt="" height={24} width={24} />
        </a>
        <a
          className="flex items-center gap-1 text-xs font-semibold"
          href="https://www.termsfeed.com/live/cf5f6825-5ec1-4164-a2f4-c2dae01df582"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-zinc-200">{t('footer.terms')}</span>
          <img src="/arrow-outward-red.svg" alt="" height={24} width={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
