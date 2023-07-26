import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from '@/components/Layout';
import Button from '@/components/Button';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>404 | Markku Customs</title>
        <meta name="description" content="Markku Customs Official Website" />
      </Helmet>

      <Layout>
        <div className="container h-full flex flex-col justify-center items-center">
          <h1 className="font-heading text-8xl">404</h1>
          <p className="font-semibold">{t('404.subtitle')}</p>
          <Button as={Link} to="/" className="mt-8">
            {t('404.button')}
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
