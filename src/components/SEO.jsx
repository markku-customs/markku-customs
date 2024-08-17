import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SEO = ({
  title,
  description = null,
  url = '/',
  image = '/img/hero/hero-2xl-1536.webp',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      {description && <meta name="description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://markkucustoms.com${url}`} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={`https://markkucustoms.com${image}`} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://markkucustoms.com${url}`}
      />
      <meta property="twitter:title" content={title} />
      {description && (
        <meta property="twitter:description" content={description} />
      )}
      <meta
        property="twitter:image"
        content={`https://markkucustoms.com${image}`}
      />

      <meta name="geo.position" content="60.451753;22.267052" />
      <meta name="ICBM" content="60.451753, 22.267052" />
      <meta name="geo.region" content="FI" />
      <meta name="geo.placename" content="Turku" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
