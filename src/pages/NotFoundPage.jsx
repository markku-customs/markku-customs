import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';

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
          <Link
            to="/"
            className="button | bg-red-600 hover:brightness-125 inline-block mt-4"
          >
            Return Home
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
