import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Markku Customs</title>
        <meta name="description" content="Markku Customs Official Website" />
      </Helmet>

      <Layout>
        <div className="container h-full flex flex-col justify-center items-center">
          <h1 className="font-heading text-8xl">404</h1>
          <p className="font-semibold">Page Not Found</p>
          <Button as={Link} to="/" className="mt-8">
            Return Home
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
