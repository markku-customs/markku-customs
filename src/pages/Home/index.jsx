import { useTranslation } from 'react-i18next';
import useSWR from 'swr';

import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

import Contact from './Contact';
import Hero from './Hero';
import Reviews from './Reviews';
import Store from './Store';

const HomePage = () => {
  const { t } = useTranslation();

  const { data: products, error: productsError } = useSWR(
    '/.netlify/functions/getProducts'
  );
  const { data: reviews, error: reviewsError } = useSWR(
    '/.netlify/functions/getReviews'
  );

  return (
    <>
      <SEO title={t('seo.title')} description={t('seo.description')} />

      <Layout>
        <Hero />
        <Store products={products?.items} error={productsError} />
        <Reviews reviews={reviews?.items} error={reviewsError} />
        <Contact />
      </Layout>
    </>
  );
};

export default HomePage;
