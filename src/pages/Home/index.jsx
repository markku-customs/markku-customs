import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';

import Layout from '@/components/Layout';

import Contact from './Contact';
import Hero from './Hero';
import Reviews from './Reviews';
import Store from './Store';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/.netlify/functions/getProducts')
      .then((res) => res.json())
      .then((data) => setProducts(data.items))
      .catch((err) => {
        console.log(err);
      });
    fetch('/.netlify/functions/getReviews')
      .then((res) => res.json())
      .then((data) => setReviews(data.items))
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <Store products={products} />
        <Reviews reviews={reviews} />
        <Contact />
      </Layout>
    </>
  );
};

export default HomePage;
