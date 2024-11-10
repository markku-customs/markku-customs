import { Trans, useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

import Badge from '@/components/ui/Badge';
import BadgeGroup from '@/components/ui/BadgeGroup';
import Button from '@/components/ui/Button';
import ButtonGroup from '@/components/ui/ButtonGroup';
import Circle from '@/components/ui/Circle';
import HorizontalSeparator from '@/components/ui/HorizontalSeparator';

import { formatPrice, splitLineBreaks } from '@/utils';

import { LNG } from '@/constants';

const BasicInformation = ({
  name,
  description,
  price,
  normalPrice,
  stockable,
  itemsInStock,
  paymentLink,
  tags,
  klarnaPayment,
  klarnaMonths,
}) => {
  const { t, i18n } = useTranslation();

  const lng = i18n.language;

  const months = klarnaMonths ? klarnaMonths[LNG.en] : undefined;
  const payment = klarnaPayment
    ? formatPrice({
        price: klarnaPayment[LNG.en],
        locale: lng,
        maximumFractionDigits: 2,
      })
    : undefined;

  return (
    <section className="basic-information-container flex flex-col gap-4">
      <h1 className="font-heading text-4xl">{name}</h1>
      <div>
        <p className="text-3xl font-semibold">
          {price
            ? formatPrice({ price: price[LNG.en], locale: lng })
            : t('variable')}
        </p>
        {price && <p className="mt-1 text-sm text-zinc-400">{t('alv')}</p>}
      </div>

      {price && normalPrice && (
        <div className="flex items-center gap-2">
          <p className="text-zinc-400">
            Norm. {formatPrice({ price: normalPrice[LNG.en], locale: lng })}
          </p>
          <Badge variant="green" size="small">
            {formatPrice({
              price: price[LNG.en] - normalPrice[LNG.en],
              locale: lng,
            })}
          </Badge>
        </div>
      )}

      {tags && (
        <BadgeGroup>
          {tags[lng].map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </BadgeGroup>
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
        <Badge className="w-max gap-2">
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
        </Badge>
      ) : (
        <Badge className="w-max">{t('made-on-order')}</Badge>
      )}

      <ButtonGroup>
        {paymentLink ? (
          <>
            <Button
              as="a"
              href={paymentLink[LNG.en]}
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
      </ButtonGroup>

      {klarnaPayment && klarnaMonths && (
        <div className="bg-zinc-900 p-4">
          <img src="/klarna.png" alt="" height={20} width={48} />
          <p className="mt-2 text-sm text-zinc-400">
            <Trans
              i18nKey="klarna"
              months={klarnaMonths[LNG.en]}
              payment={formatPrice({
                price: klarnaPayment[LNG.en],
                locale: lng,
                maximumFractionDigits: 2,
              })}
            >
              {{ months }} monthly payments of
              {{ payment }}
            </Trans>
          </p>
        </div>
      )}
    </section>
  );
};

export default BasicInformation;
