import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Button from '@/components/Button';
import Layout from '@/components/Layout';

import ImageCarousel from './ImageCarousel';
import Specifications from './Specifications';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch(`/.netlify/functions/getProduct?id=${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        navigate('/', { replace: true });
        console.log(err);
      });
  }, []);

  if (!product) return null;

  const { fields } = product;

  const {
    name,
    price,
    description,
    specifications,
    images,
    gameNames,
    gameFrameRates,
  } = fields;

  const lng = i18n.language;

  const desc = description[lng] || description['en-US'];

  return (
    <>
      <Helmet>
        <title>{fields.name[lng]} | Markku Customs</title>
        <meta
          name="description"
          content="Markku Customs on tietokonekauppa Turussa. Rakennamme räätälöityjä pelitietokoneita käyttämällä sekä uusia että kunnostettuja korkealaatuisia komponentteja."
        />
      </Helmet>

      <Layout>
        <div className="container">
          <div className="product-page-grid">
            <section className="store-product-heading-text gap-4">
              <h1 className="font-heading text-4xl">{name[lng]}</h1>
              <p className="text-2xl">
                {price ? `${price['en-US']}€` : t('variable')}
              </p>
              {desc
                .split(/\n/g)
                .filter((e) => e)
                .map((text) => (
                  <p className="text-sm text-zinc-400" key={text.slice(0, 32)}>
                    {text}
                  </p>
                ))}
              <Button as={Link} to="/#contact" className="w-fit">
                {t('order')}
              </Button>
            </section>

            <ImageCarousel images={images} name={name[lng]} />

            {specifications && (
              <Specifications specifications={specifications[lng]} />
            )}

            {gameNames && gameFrameRates && (
              <section className="game-grid-container">
                <h2 className="mb-4 text-2xl font-bold">
                  {t('fps-performance')}
                </h2>
                <p className="mb-4 text-sm text-zinc-400">{t('fps-note')}</p>
                <div className="game-grid">
                  {gameNames['en-US'].map((game, idx) => (
                    <div className="game-grid-box" key={game.sys.id}>
                      <img
                        className="aspect-square w-full object-cover"
                        src={
                          game.fields.image['en-US'].fields.file['en-US'].url
                        }
                        alt={game.fields.name['en-US']}
                      />
                      <span className="mt-2 block text-sm text-zinc-400">
                        {game.fields.name['en-US']}
                      </span>
                      <span className="fps-text mt-1 block font-semibold">
                        {gameFrameRates['en-US'][idx] || '000'} FPS
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;
