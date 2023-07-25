import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout';
import Hero from './Hero';
import Store from './Store';
import Reviews from './Reviews';
import Contact from './Contact';

const HomePage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/.netlify/functions/getReviews')
      .then((res) => res.json())
      .then((data) => setReviews(data.items))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(reviews);

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
        <Store />
        <Reviews reviews={reviews} />
        <Contact />
      </Layout>
    </>
  );
};

export default HomePage;
