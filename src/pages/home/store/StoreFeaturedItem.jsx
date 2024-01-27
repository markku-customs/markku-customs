import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Button from '@/components/ui/Button';

import { formatPrice, getImageSrc } from '@/utils';

import { TimerIcon } from '@/icons';

const StoreFeaturedItem = ({ product }) => {
  const { t, i18n } = useTranslation();

  const { fields } = product;

  const {
    name,
    description,
    price,
    featuredImage,
    stockable,
    itemsInStock,
    noLimitedTag,
  } = fields;

  console.log(itemsInStock);

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
        </div>

        {stockable['en-US'] ? (
          itemsInStock['en-US'] > 0 ? (
            <span className="flex w-max items-center bg-zinc-800 px-3 py-1.5 text-xs font-semibold">
              {itemsInStock['en-US']} {t('in-stock')}
              <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-green-500"></span>
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
