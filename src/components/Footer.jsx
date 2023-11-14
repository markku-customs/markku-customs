import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Container from '@/components/Container';
import HorizontalSeparator from '@/components/HorizontalSeparator';

import { ArrowOutwardIcon } from '@/icons';

const links = [
  {
    key: 'footer.privacy',
    href: 'https://www.iubenda.com/privacy-policy/59126036',
  },
];

const Footer = () => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-zinc-950">
      <Container className="py-4">
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
          <Link
            to="/terms"
            className="flex items-center gap-1 text-xs font-semibold text-zinc-200"
          >
            {t('footer.terms')}
            <ArrowOutwardIcon className="h-4 w-4 text-red-600" />
          </Link>
        </div>
      </Container>

      <HorizontalSeparator />

      <Container className="py-4 text-center text-xs text-zinc-400">
        <Trans i18nKey="footer.copyright" year={year}>
          © {{ year }} Markku Customs. All rights reserved.
        </Trans>
      </Container>
    </footer>
  );
};

export default Footer;
