import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Button from '@/components/ui/Button';

import { formatPrice, getImageSrc } from '@/utils';

import { TimerIcon } from '@/icons';

const StoreFeaturedItem = ({ product }) => {
  const { t, i18n } = useTranslation();

  const { fields } = product;

  const { name, description, price, featuredImage } = fields;

  const lng = i18n.language;

  return (
    <article className="featured-item-container bg-zinc-900">
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
        <span className="flex w-max items-center gap-2 bg-zinc-950 px-4 py-2 text-sm font-semibold">
          {t('limited-time')}
          <TimerIcon className="h-4 w-4" />
        </span>
        <h3 className="font-heading text-xl md:text-2xl">{name[lng]}</h3>
        <p className="font-heading text-4xl md:text-5xl">
          {price ? formatPrice(price['en-US'], lng) : t('variable')}
        </p>
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
