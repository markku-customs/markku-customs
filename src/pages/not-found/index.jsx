import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import Container from '@/components/Container';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>404 | Markku Customs</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Container className="flex h-full flex-col items-center justify-center">
        <h1 className="font-heading text-8xl">404</h1>
        <p className="mt-2 font-semibold">{t('404.subtitle')}</p>
        <Button as={Link} to="/" className="mt-8">
          {t('404.button')}
        </Button>
      </Container>
    </>
  );
};

export default NotFoundPage;
