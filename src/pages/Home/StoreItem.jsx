import { useTranslation } from 'react-i18next';

const StoreItem = ({ product }) => {
  const { t, i18n } = useTranslation();

  const { fields } = product;

  const { name, price, featuredImage } = fields;

  const lng = i18n.language;

  return (
    <article className="duration-400 bg-zinc-900 transition hover:bg-zinc-800">
      <div className="image-container max-h-64">
        <img
          src={
            featuredImage
              ? `https:${featuredImage['en-US'].fields.file['en-US'].url}?fm=webp&w=600`
              : '/product-default.png'
          }
          alt={name[lng]}
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading">{name[lng]}</h3>
        <p className="mt-1 font-heading text-3xl">
          {price ? `${price['en-US']}€` : t('variable')}
        </p>
      </div>
    </article>
  );
};

export default StoreItem;
