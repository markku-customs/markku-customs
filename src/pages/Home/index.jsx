import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout';
import Hero from './Hero';
import Store from './Store';
import Contact from './Contact';

const HomePage = () => {
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
        <Contact />
      </Layout>
    </>
  );
};

export default HomePage;
