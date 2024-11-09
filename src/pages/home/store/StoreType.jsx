import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import Alert from '@/components/ui/Alert';

import { LNG } from '@/constants';

import StoreFeaturedItem from './StoreFeaturedItem';
import StoreItem from './StoreItem';

const settings = {
  slidesToShow: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const StoreType = ({ products, type }) => {
  const { t } = useTranslation();

  const filteredProducts = products.items.filter(
    (p) => p.fields.type[LNG.en] === type
  );

  const featuredProducts = filteredProducts.filter(
    (p) => p.fields.isFeatured[LNG.en]
  );

  const normalProducts = filteredProducts.filter(
    (p) => !p.fields.isFeatured[LNG.en]
  );

  if (filteredProducts.length === 0) {
    return (
      <Alert title={t('no-stock-title')} subtitle={t('no-stock-subtitle')} />
    );
  }

  return (
    <>
      {featuredProducts.length > 0 && (
        <div className="mb-8 flex flex-col gap-8">
          {featuredProducts.map((product) => {
            return <StoreFeaturedItem product={product} key={product.sys.id} />;
          })}
        </div>
      )}

      {normalProducts.length >= 3 ? (
        <Slider {...settings} className="store-slider">
          {normalProducts.map((product) => {
            return (
              <div key={product.sys.id}>
                <Link to={`/products/${product.sys.id}`}>
                  <StoreItem product={product} />
                </Link>
              </div>
            );
          })}
        </Slider>
      ) : (
        <div className="store-grid">
          {normalProducts.map((product) => {
            return (
              <div key={product.sys.id}>
                <Link to={`/products/${product.sys.id}`}>
                  <StoreItem product={product} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default StoreType;
