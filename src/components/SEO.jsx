import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://markkucustoms.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/hero.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://markkucustoms.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/hero.png" />

      <meta name="geo.position" content="60.451753;22.267052" />
      <meta name="ICBM" content="60.451753, 22.267052" />
      <meta name="geo.region" content="FI" />
      <meta name="geo.placename" content="Turku" />
    </Helmet>
  );
};

export default SEO;
