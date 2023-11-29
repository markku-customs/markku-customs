import { Suspense } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

import Loading from '@/components/Loading';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';

import StoreFeaturedItem from './StoreFeaturedItem';
import StoreItem from './StoreItem';

const Store = () => {
  const { t } = useTranslation();

  const { data: products, error } = useSWR('/.netlify/functions/getProducts');

  return (
    <section className="py-12 md:py-16" id="store">
      <Container>
        <SectionHeading className="mb-8">{t('links.store')}</SectionHeading>
        <Suspense fallback={<Loading error={error} />}>
          {products?.items.filter((p) => p.fields.isFeatured['en-US']).length >
            0 && (
            <div className="mb-8 flex flex-col gap-8">
              {products?.items
                .filter((p) => p.fields.isFeatured['en-US'])
                .map((product) => {
                  const { id } = product.sys;

                  return <StoreFeaturedItem product={product} key={id} />;
                })}
            </div>
          )}

          <div className="store-grid">
            {products?.items
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
        </Suspense>
      </Container>
    </section>
  );
};

export default Store;
