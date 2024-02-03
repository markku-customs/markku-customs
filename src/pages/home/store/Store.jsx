import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import Loading from '@/components/Loading';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';

import { useProducts } from '@/hooks';

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

const Store = () => {
  const { t } = useTranslation();

  const { products, error } = useProducts();

  const featuredItems = products?.items.filter(
    (p) => p.fields.isFeatured['en-US']
  );
  const normalItems = products?.items.filter(
    (p) => !p.fields.isFeatured['en-US']
  );

  return (
    <section className="py-12 md:py-16" id="store">
      <Container>
        <SectionHeading className="mb-8">{t('links.store')}</SectionHeading>
        {!products ? (
          <Loading error={error} />
        ) : (
          <>
            {featuredItems.length > 0 && (
              <div className="mb-8 flex flex-col gap-8">
                {featuredItems.map((product) => {
                  return (
                    <StoreFeaturedItem product={product} key={product.sys.id} />
                  );
                })}
              </div>
            )}

            <Slider {...settings} className="store-slider">
              {normalItems.map((product) => {
                return (
                  <div key={product.sys.id}>
                    <Link to={`/products/${product.sys.id}`}>
                      <StoreItem product={product} />
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </>
        )}
      </Container>
    </section>
  );
};

export default Store;
