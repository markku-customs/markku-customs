import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Circle from '@/components/ui/Circle';
import HorizontalSeparator from '@/components/ui/HorizontalSeparator';

import { formatPrice, splitLineBreaks } from '@/utils';

const BasicInformation = ({
  name,
  description,
  price,
  stockable,
  itemsInStock,
  paymentLink,
  tags,
}) => {
  const { t, i18n } = useTranslation();

  const lng = i18n.language;

  return (
    <section className="basic-information-container flex flex-col gap-4">
      <h1 className="font-heading text-4xl">{name}</h1>
      <p className="text-2xl font-semibold">
        {price ? formatPrice(price['en-US'], lng) : t('variable')}
      </p>

      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags[lng].map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-2">
        {splitLineBreaks(description, (text, key) => (
          <p className="text-sm text-zinc-400" key={key}>
            {text}
          </p>
        ))}
      </div>

      <HorizontalSeparator />

      {stockable ? (
        <span className="flex w-max items-center gap-2 rounded bg-zinc-800 px-3 py-1.5 text-xs font-semibold">
          {itemsInStock > 0 ? (
            <>
              {itemsInStock} {t('in-stock')}
              <Circle className="w-1.5 bg-green-500" />
            </>
          ) : (
            <>
              {t('sold-out')}
              <Circle className="w-1.5 bg-red-500" />
            </>
          )}
        </span>
      ) : (
        <span className="w-max rounded bg-zinc-800 px-3 py-1.5 text-xs font-semibold">
          {t('made-on-order')}
        </span>
      )}

      <div className="flex flex-wrap gap-4">
        {paymentLink ? (
          <>
            <Button
              as="a"
              href={paymentLink['en-US']}
              target="_blank"
              rel="noreferrer"
            >
              {stockable && itemsInStock > 0 ? t('buy') : t('order')}
            </Button>
            <Button as={Link} to="/#contact" variant="secondary">
              {t('inquire')}
            </Button>
          </>
        ) : (
          <Button as={Link} to="/#contact">
            {t('inquire')}
          </Button>
        )}
      </div>
    </section>
  );
};

export default BasicInformation;
