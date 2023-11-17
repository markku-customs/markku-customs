import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Container from '@/components/Container';
import Loading from '@/components/Loading';
import SectionHeading from '@/components/SectionHeading';

import StoreFeaturedItem from './StoreFeaturedItem';
import StoreItem from './StoreItem';

const Store = ({ products, error }) => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16" id="store">
      <Container>
        <SectionHeading className="mb-8">{t('links.store')}</SectionHeading>
        {!products ? (
          <Loading error={error} />
        ) : (
          <>
            {products.filter((p) => p.fields.isFeatured['en-US']).length >
              0 && (
              <div className="mb-8 flex flex-col gap-8">
                {products
                  .filter((p) => p.fields.isFeatured['en-US'])
                  .map((product) => {
                    const { id } = product.sys;

                    return <StoreFeaturedItem product={product} key={id} />;
                  })}
              </div>
            )}

            <div className="store-grid">
              {products
                .filter((p) => !p.fields.isFeatured['en-US'])
                .map((product) => {
                  const { id } = product.sys;

                  return (
                    <Link to={`/products/${id}`} key={id}>
                      <StoreItem product={product} />
                    </Link>
                  );
                })}
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default Store;
