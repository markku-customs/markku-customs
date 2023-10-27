import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import SectionHeading from '@/components/SectionHeading';

import StoreFeaturedItem from './StoreFeaturedItem';
import StoreItem from './StoreItem';

const Store = ({ products, error }) => {
  const { t, i18n } = useTranslation();

  const lng = i18n.language;

  return (
    <section className="py-12 md:py-16" id="store">
      <div className="container">
        <SectionHeading className="mb-8">{t('links.store')}</SectionHeading>
        {!products ? (
          <div className="grid min-h-[8rem] place-items-center rounded-md bg-zinc-800 p-4 text-zinc-400">
            {error ? (
              <div className="text-center">
                <p>{`${error.status} – ${error.info.message[lng]}`}</p>
                <p className="mt-2 text-sm text-zinc-500">
                  {t('automatic-retry')}
                </p>
              </div>
            ) : (
              t('loading')
            )}
          </div>
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
      </div>
    </section>
  );
};

export default Store;
