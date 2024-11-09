import { useTranslation } from 'react-i18next';

import Loading from '@/components/Loading';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';

import { useProducts } from '@/hooks';

import { PRODUCT_TYPE } from '@/constants';

import StoreType from './StoreType';

const Store = () => {
  const { t } = useTranslation();

  const { products, error } = useProducts();

  return (
    <>
      <section className="py-12 md:py-16" id="computers">
        <Container>
          <SectionHeading className="mb-8">
            {t('links.computers')}
          </SectionHeading>
          {!products ? (
            <Loading error={error} />
          ) : (
            <StoreType products={products} type={PRODUCT_TYPE.computer} />
          )}
        </Container>
      </section>
      <section className="py-12 md:py-16" id="components">
        <Container>
          <SectionHeading className="mb-8">
            {t('links.components')}
          </SectionHeading>
          {!products ? (
            <Loading error={error} />
          ) : (
            <StoreType products={products} type={PRODUCT_TYPE.component} />
          )}
        </Container>
      </section>
    </>
  );
};

export default Store;
