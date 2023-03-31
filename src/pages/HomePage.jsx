import { Helmet } from "react-helmet";

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Store from '../components/Store'
import Contact from '../components/Contact'

const HomePage = () => {
    return (
    <>
        <Helmet>
            <title>Markku Customs - We Build. You Play.</title>
            <meta name="description" content="Markku Customs Official Website" />
         </Helmet>

        <Layout>
            <Hero />
            <Store />
            <Contact />
        </Layout>
    </>
    )
  };
  
  export default HomePage;
  