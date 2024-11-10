import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

import Button from '@/components/ui/Button';

import { formatPrice, getImageSrc } from '@/utils';

import { LNG } from '@/constants';

const Bundles = ({ bundles }) => {
  const { t } = useTranslation();

  return (
    <section className="bundles-container">
      <h2 className="mb-4 text-2xl font-semibold">{t('bundles')}</h2>
      <div className="bundles-grid">
        {bundles[LNG.en].map((bundle) => (
          <Bundle key={bundle.sys.id} bundle={bundle} />
        ))}
      </div>
    </section>
  );
};

export default Bundles;

const Bundle = ({ bundle }) => {
  const { name, bundleProducts, price, paymentLink } = bundle.fields;

  const { t, i18n } = useTranslation();

  const lng = i18n.language;

  return (
    <article className="flex gap-6 bg-zinc-900 p-6">
      <div className="hidden md:block">
        <img
          className="aspect-square w-[6rem] max-w-[6rem] object-cover"
          src={
            bundleProducts[LNG.en][0].fields.image
              ? `${getImageSrc(
                  bundleProducts[LNG.en][0].fields.image[LNG.en]
                )}?fm=webp&w=180`
              : '/product-default.png'
          }
          alt={name[lng]}
          height={96}
          width={96}
        />
      </div>
      <div className="flex h-full flex-col gap-2">
        <h3 className="font-semibold">{name[lng]}</h3>
        <p className="text-2xl font-semibold">
          {formatPrice({ price: price[LNG.en], locale: lng })}
        </p>
        {bundleProducts[LNG.en].map((product) => (
          <a
            href={product.fields.link[LNG.en]}
            rel="noreferrer"
            target="_blank"
            className="text-sm text-zinc-400 hover:underline"
            key={product.sys.id}
          >
            {product.fields.name[LNG.en]}
          </a>
        ))}
        {paymentLink ? (
          <Button
            size="small"
            className="mt-2 w-max"
            as="a"
            href={paymentLink[LNG.en]}
            target="_blank"
            rel="noreferrer"
          >
            {t('order')}
          </Button>
        ) : (
          <Button size="small" className="mt-2 w-max" as={Link} to="/#contact">
            {t('inquire')}
          </Button>
        )}
      </div>
    </article>
  );
};
