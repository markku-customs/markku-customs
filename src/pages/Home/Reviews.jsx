import { useTranslation } from 'react-i18next';

import SectionHeading from '../../components/SectionHeading';

const Reviews = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16" id="reviews">
      <div className="container">
        <SectionHeading className="mb-8">{t('links.reviews')}</SectionHeading>
        {/* <div className="store-grid">
          {products.map((product) => {
            const { id } = product.sys;

            return (
              <Link to={`/products/${id}`} key={id}>
                <StoreItem product={product} />
              </Link>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default Reviews;
