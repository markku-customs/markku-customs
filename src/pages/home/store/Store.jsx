import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import Loading from '@/components/Loading';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';

import { useProducts } from '@/hooks';

import StoreFeaturedItem from './StoreFeaturedItem';
import StoreItem from './StoreItem';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

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

  return (
    <section className="py-12 md:py-16" id="store">
      <Container>
        <SectionHeading className="mb-8">{t('links.store')}</SectionHeading>
        {!products ? (
          <Loading error={error} />
        ) : (
          <>
            {products?.items.filter((p) => p.fields.isFeatured['en-US'])
              .length > 0 && (
              <div className="mb-8 flex flex-col gap-8">
                {products?.items
                  .filter((p) => p.fields.isFeatured['en-US'])
                  .map((product) => {
                    const { id } = product.sys;

                    return <StoreFeaturedItem product={product} key={id} />;
                  })}
              </div>
            )}

            <Slider {...settings} className="store-slider">
              {products?.items
                .filter((p) => !p.fields.isFeatured['en-US'])
                .map((product) => {
                  const { id } = product.sys;

                  return (
                    <div key={id}>
                      <Link to={`/products/${id}`}>
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
