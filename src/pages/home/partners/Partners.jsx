import { useTranslation } from 'react-i18next';

import Loading from '@/components/Loading';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';

import { usePartners } from '@/hooks';

import PartnerItem from './PartnerItem';

const Partners = () => {
  const { t } = useTranslation();

  const { partners, error } = usePartners();

  return (
    <section className="py-12 md:py-16" id="partners">
      <Container>
        <SectionHeading className="mb-8">{t('links.partners')}</SectionHeading>
        {!partners ? (
          <Loading error={error} />
        ) : (
          <div className="partners-grid">
            {partners?.items.map((partner) => {
              return <PartnerItem key={partner.sys.id} partner={partner} />;
            })}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Partners;
