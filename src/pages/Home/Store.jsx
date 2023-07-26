import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SectionHeading from '../../components/SectionHeading';
import StoreItem from './StoreItem';

const Store = ({ products }) => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16" id="store">
      <div className="container">
        <SectionHeading className="mb-8">{t('links.store')}</SectionHeading>
        <div className="store-grid">
          {products.map((product) => {
            const { id } = product.sys;

            return (
              <Link to={`/products/${id}`} key={id}>
                <StoreItem product={product} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Store;
