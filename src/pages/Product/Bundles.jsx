import { useTranslation } from 'react-i18next';

import Button from '@/components/Button';

import { getImageSrc } from '@/utils';

const Bundles = ({ bundles }) => {
  return (
    <section className="bundles-container">
      <h2 className="mb-4 text-2xl font-semibold">Bundles</h2>
      <div className="bundles-grid">
        {bundles['en-US'].map((bundle) => (
          <Bundle key={bundle.sys.id} bundle={bundle} />
        ))}
      </div>
    </section>
  );
};

export default Bundles;

const Bundle = ({ bundle }) => {
  const { name, bundleProducts, price } = bundle.fields;

  const { t, i18n } = useTranslation();

  const lng = i18n.language;

  return (
    <article className="flex gap-4">
      <div className="hidden md:block">
        {bundleProducts['en-US'][0].fields.image ? (
          <img
            className="aspect-square w-[6rem] max-w-[6rem] object-cover"
            src={`${getImageSrc(
              bundleProducts['en-US'][0].fields.image['en-US']
            )}?fm=webp&w=200`}
            alt=""
          />
        ) : (
          <div className="aspect-square w-[6rem] max-w-[6rem] bg-zinc-800"></div>
        )}
      </div>
      <div className="flex h-full flex-col gap-2">
        <h3 className="font-semibold">{name[lng]}</h3>
        {bundleProducts['en-US'].map((product) => (
          <a
            href={product.fields.link['en-US']}
            rel="noreferrer"
            target="_blank"
            className="text-sm text-zinc-400 underline"
            key={product.sys.id}
          >
            {product.fields.name['en-US']}
          </a>
        ))}
        <Button size="small" className="mt-2 w-max">
          {t('order')} — {price['en-US']}€
        </Button>
      </div>
    </article>
  );
};
