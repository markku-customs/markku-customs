import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

import Button from '@/components/Button';

import { formatPrice, getImageSrc } from '@/utils';

const Bundles = ({ bundles }) => {
  const { t } = useTranslation();

  return (
    <section className="bundles-container">
      <h2 className="mb-4 text-2xl font-semibold">{t('bundles')}</h2>
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
  const { name, bundleProducts, price, paymentLink } = bundle.fields;

  const { t, i18n } = useTranslation();

  const lng = i18n.language;

  return (
    <article className="flex gap-4">
      <div className="hidden md:block">
        <img
          className="aspect-square w-[6rem] max-w-[6rem] object-cover"
          src={
            bundleProducts['en-US'][0].fields.image
              ? `${getImageSrc(
                  bundleProducts['en-US'][0].fields.image['en-US']
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
        {paymentLink ? (
          <Button
            size="small"
            className="mt-2 w-max"
            as="a"
            href={paymentLink['en-US']}
            target="_blank"
            rel="noreferrer"
          >
            {t('order')} — {formatPrice(price['en-US'], lng)}
          </Button>
        ) : (
          <Button size="small" className="mt-2 w-max" as={Link} to="/#contact">
            {t('inquire')} — {formatPrice(price['en-US'], lng)}
          </Button>
        )}
      </div>
    </article>
  );
};
