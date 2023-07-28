import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

import Button from '@/components/Button';

const Information = ({ name, description, price }) => {
  const { t } = useTranslation();

  return (
    <section className="store-product-heading-text gap-4">
      <h1 className="font-heading text-4xl">{name}</h1>
      <p className="text-2xl">{price ? `${price['en-US']}€` : t('variable')}</p>
      <div className="flex flex-col gap-2">
        {description
          .split(/\n/g)
          .filter((e) => e.trim().length > 0)
          .map((text) => (
            <p className="text-sm text-zinc-400" key={text.slice(0, 16)}>
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

export default Information;
