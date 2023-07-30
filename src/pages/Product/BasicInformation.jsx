import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

import Badge from '@/components/Badge';
import Button from '@/components/Button';

import { splitLineBreaks } from '@/utils';

const BasicInformation = ({ name, description, price }) => {
  const { t } = useTranslation();

  return (
    <section className="store-product-heading-text gap-4">
      <h1 className="font-heading text-4xl">{name}</h1>
      <p className="text-2xl">{price ? `${price['en-US']}€` : t('variable')}</p>
      <div className="flex flex-wrap gap-2">
        <Badge>{t('money-back')}</Badge>
        <Badge>{t('warranty')}</Badge>
      </div>
      <div className="flex flex-col gap-2">
        {splitLineBreaks(description, (text, key) => (
          <p className="text-sm text-zinc-400" key={key}>
            {text}
          </p>
        ))}
      </div>
      <Button as={Link} to="/#contact" className="w-fit">
        {t('order')}
      </Button>
    </section>
  );
};

export default BasicInformation;
