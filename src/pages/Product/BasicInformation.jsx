import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

import Badge from '@/components/Badge';
import Button from '@/components/Button';

import { splitLineBreaks } from '@/utils';

const BasicInformation = ({
  name,
  description,
  price,
  stockable,
  itemsInStock,
}) => {
  const { t } = useTranslation();

  return (
    <section className="basic-information-container flex flex-col gap-4">
      <h1 className="font-heading text-4xl">{name}</h1>
      <p className="text-2xl font-semibold">
        {price ? `${price['en-US']}€` : t('variable')}
      </p>
      <div className="flex flex-wrap gap-2">
        <div className="flex gap-2">
          <Badge>{`${t('tabs.pickup')}: 0€`}</Badge>
          <Badge title={t('tabs.turku-region')}>{`${t(
            'tabs.home-delivery'
          )}: 15€`}</Badge>
        </div>
        <div className="flex gap-2">
          <Badge>{t('money-back')}</Badge>
          <Badge>{t('warranty')}</Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {splitLineBreaks(description, (text, key) => (
          <p className="text-sm text-zinc-400" key={key}>
            {text}
          </p>
        ))}
      </div>
      <hr className="h-px border-0 bg-zinc-800" />

      {stockable ? (
        itemsInStock > 0 ? (
          <span className="flex w-max items-center bg-zinc-800 px-3 py-1.5 text-xs font-semibold">
            {itemsInStock} {t('in-stock')}
            <span className="ml-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
          </span>
        ) : (
          <span className="w-max bg-zinc-800 px-3 py-1.5 text-xs font-semibold">
            {t('sold-out')}
          </span>
        )
      ) : (
        <span className="w-max bg-zinc-800 px-3 py-1.5 text-xs font-semibold">
          {t('made-on-order')}
        </span>
      )}

      <Button as={Link} to="/#contact" className="w-fit">
        {stockable && itemsInStock > 0 ? t('buy') : t('order')}
      </Button>
    </section>
  );
};

export default BasicInformation;
