import { useTranslation } from 'react-i18next';

import Badge from '@/components/ui/Badge';
import Circle from '@/components/ui/Circle';

import { formatPrice, getImageSrc, getPlural } from '@/utils';

import { LNG } from '@/constants';

const StoreItem = ({ product }) => {
  const { t, i18n } = useTranslation();

  const { fields } = product;

  const {
    name,
    price,
    normalPrice,
    featuredImage,
    bundles,
    stockable,
    itemsInStock,
  } = fields;

  const lng = i18n.language;

  return (
    <article className="duration-400 flex h-full flex-col bg-zinc-900 transition hover:bg-zinc-800">
      <div className="image-container relative max-h-64">
        {bundles && (
          <span className="absolute left-4 top-4 z-20 bg-red-600 px-3 py-1.5 text-xs font-semibold">
            {getPlural(
              bundles[LNG.en].length,
              t('bundle-plural'),
              t('bundle-singular')
            )}
          </span>
        )}

        <img
          src={
            featuredImage
              ? `${getImageSrc(featuredImage[LNG.en])}?fm=webp&w=400`
              : '/product-default.png'
          }
          alt={name[lng]}
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading">{name[lng]}</h3>

          {stockable[LNG.en] && (
            <div
              className="flex items-center gap-2 text-xs font-semibold"
              title={
                itemsInStock[LNG.en] > 0
                  ? `${itemsInStock[LNG.en]} ${t('in-stock')}`
                  : t('sold-out')
              }
            >
              {itemsInStock[LNG.en]}
              <Circle
                className={`w-1.5 ${
                  itemsInStock[LNG.en] > 0 ? 'bg-green-500' : 'bg-red-500'
                }`}
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="font-heading text-3xl">
            {price ? formatPrice(price[LNG.en], lng) : t('variable')}
          </p>
          {price && normalPrice && (
            <Badge variant="green" size="small">
              {formatPrice(price[LNG.en] - normalPrice[LNG.en], lng)}
            </Badge>
          )}
        </div>
      </div>
    </article>
  );
};

export default StoreItem;
