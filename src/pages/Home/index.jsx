// import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useSWR from 'swr';

import Layout from '@/components/Layout';

import Contact from './Contact';
import Hero from './Hero';
import Reviews from './Reviews';
import Store from './Store';

const HomePage = () => {
  const { data: products } = useSWR('/.netlify/functions/getProducts');
  const { data: reviews } = useSWR('/.netlify/functions/getReviews');

  return (
    <>
      <Helmet>
        <title>Markku Customs: High-Quality Custom Gaming PCs</title>
        <meta
          name="description"
          content="Markku Customs on tietokonekauppa Turussa. Rakennamme räätälöityjä pelitietokoneita käyttämällä sekä uusia että kunnostettuja korkealaatuisia komponentteja."
        />
      </Helmet>

      <Layout>
        <Hero />
        <Store products={products?.items} />
        <Reviews reviews={reviews?.items} />
        <Contact />
      </Layout>
    </>
  );
};

export default HomePage;
