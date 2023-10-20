import { useTranslation } from 'react-i18next';

import { getImageSrc } from '@/utils';

const StoreItem = ({ product }) => {
  const { t, i18n } = useTranslation();

  const { fields } = product;

  const { name, price, featuredImage, bundles } = fields;

  const lng = i18n.language;

  return (
    <article className="duration-400 flex h-full flex-col bg-zinc-900 transition hover:bg-zinc-800">
      <div className="image-container relative max-h-64">
        {bundles && (
          <span className="absolute z-20 bg-red-600 px-4 py-2 text-xs font-semibold">
            {bundles['en-US'].length} Bundle(s)
          </span>
        )}
        <img
          src={
            featuredImage
              ? `${getImageSrc(featuredImage['en-US'])}?fm=webp&w=500`
              : '/product-default.png'
          }
          alt={name[lng]}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2 p-4">
        <h3 className="font-heading">{name[lng]}</h3>
        <p className="font-heading text-3xl">
          {price ? `${price['en-US']}€` : t('variable')}
        </p>
      </div>
    </article>
  );
};

export default StoreItem;
