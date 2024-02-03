import { useTranslation } from 'react-i18next';

import SEO from '@/components/SEO';

import Contact from './contact/Contact';
import Hero from './hero/Hero';
import Partners from './partners/Partners';
import Reviews from './reviews/Reviews';
import Store from './store/Store';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('seo.title')} description={t('seo.description')} />

      <Hero />
      <Store />
      <Reviews />
      <Partners />
      <Contact />
    </>
  );
};

export default HomePage;
