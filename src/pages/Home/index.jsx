import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout';
import Hero from './Hero';
import Store from './Store';
import Contact from './Contact';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Markku Customs</title>
        <meta name="description" content="Markku Customs Official Website" />
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
