import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import StoreItemsContext from '../contexts/StoreItemsContext';

import SectionHeading from './SectionHeading';
import StoreItem from './StoreItem';

const Store = () => {
  const { t } = useTranslation();
  const products = useContext(StoreItemsContext);

  return (
    <section className="py-12 md:py-16" id="store">
      <div className="container">
        <SectionHeading heading={t('links.store')} />
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
