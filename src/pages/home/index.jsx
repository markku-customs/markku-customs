import { useTranslation } from 'react-i18next';

import SEO from '@/components/SEO';

import Contact from './contact/Contact';
import Hero from './hero/Hero';
import Reviews from './reviews/Reviews';
import Store from './store/Store';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('seo.title')} description={t('seo.description')} />

      <Hero />
      <Store />
      <Reviews />
      <Contact />
    </>
  );
};

export default HomePage;
