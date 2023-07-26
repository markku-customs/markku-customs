import { useTranslation, Trans } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 mt-auto">
      <div className="container text-center text-xs py-4 text-zinc-400">
        <Trans i18nKey="footer.copyright" year={year}>
          © {{ year }} Markku Customs. All rights reserved.
        </Trans>
      </div>
      <hr className="h-px border-0 bg-zinc-800" />
      <div className="container flex justify-center py-4 gap-6">
        <a
          className="text-xs font-semibold flex items-center gap-1"
          href="https://www.iubenda.com/privacy-policy/59126036"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-zinc-200">{t('footer.privacy')}</span>
          <img src="/arrow-outward-red.svg" alt="" height={24} width={24} />
        </a>
        <a
          className="text-xs font-semibold flex items-center gap-1"
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
