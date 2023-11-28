import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Container from '@/components/layout/Container';
import HorizontalSeparator from '@/components/ui/HorizontalSeparator';

import { ArrowOutwardIcon } from '@/icons';

const Footer = () => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-zinc-950">
      <Container className="py-4">
        <div className="flex justify-center gap-6">
          <Link
            to="/privacy"
            className="flex items-center gap-1 text-xs font-semibold text-zinc-200"
          >
            {t('footer.privacy')}
            <ArrowOutwardIcon className="h-4 w-4 text-red-600" />
          </Link>
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
