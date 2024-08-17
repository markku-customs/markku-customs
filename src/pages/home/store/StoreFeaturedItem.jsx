import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Circle from '@/components/ui/Circle';

import { formatPrice, getImageSrc, getPercentageDifference } from '@/utils';

import { TimerIcon } from '@/icons';

const StoreFeaturedItem = ({ product }) => {
  const { t, i18n } = useTranslation();

  const { fields } = product;

  const {
    name,
    description,
    price,
    normalPrice,
    featuredImage,
    stockable,
    itemsInStock,
    noLimitedTag,
  } = fields;

  const lng = i18n.language;

  return (
    <article className="featured-item-container relative bg-zinc-900">
      <img
        className="featured-image"
        src={
          featuredImage
            ? `${getImageSrc(featuredImage['en-US'])}?fm=webp&w=640`
            : '/product-default.png'
        }
        alt={name[lng]}
        loading="lazy"
      />
      <div className="flex flex-col gap-4 p-4 md:p-8">
        {!noLimitedTag['en-US'] && (
          <span className="border-l-1 absolute inset-2 left-4 top-4 flex h-min w-max items-center gap-2 border-l-4 border-l-red-600 bg-zinc-800 px-4 py-2 text-sm font-semibold text-white md:relative md:inset-0">
            {t('limited-time')}
            <TimerIcon className="h-4 w-4" />
          </span>
        )}
        <div>
          <h3 className="font-heading text-xl md:text-2xl">{name[lng]}</h3>
          <p className="mt-2 font-heading text-4xl md:text-5xl">
            {price ? formatPrice(price['en-US'], lng) : t('variable')}
          </p>
          {price && normalPrice && (
            <div className="mt-1 flex items-center gap-2">
              <p className="text-zinc-400">
                Norm. {normalPrice && formatPrice(normalPrice['en-US'], lng)}
              </p>
              <Badge variant="green" size="small">
                {getPercentageDifference(normalPrice['en-US'], price['en-US'])}%
              </Badge>
            </div>
          )}
        </div>

        {stockable['en-US'] ? (
          <Badge className="w-max gap-2">
            {itemsInStock['en-US'] > 0 ? (
              <>
                {itemsInStock['en-US']} {t('in-stock')}
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

        <p className="line-clamp-3 text-sm text-zinc-400">{description[lng]}</p>
        <Button
          as={Link}
          to={`/products/${product.sys.id}`}
          className="mt-2 w-max"
        >
          {t('view-product')}
        </Button>
      </div>
    </article>
  );
};

export default StoreFeaturedItem;
