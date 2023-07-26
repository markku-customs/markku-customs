import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Layout from '@/components/Layout';
import Button from '@/components/Button';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="my-2 leading-8 text-zinc-400">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h2 className="my-6 text-2xl font-semibold leading-8">{children}</h2>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h3 className="my-4 text-xl font-semibold leading-8">{children}</h3>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h4 className="my-2 text-lg font-semibold leading-8">{children}</h4>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h5 className="my-1 text-base font-semibold leading-8">{children}</h5>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="my-4 list-inside list-disc marker:text-zinc-600">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="my-4 list-inside list-decimal marker:text-zinc-600">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="list-item">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            className: `text-zinc-400 inline-block leading-8 my-0"`,
          })
        )}
      </li>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 h-px border-none bg-zinc-800" />,
    [BLOCKS.TABLE]: (node, children) => (
      <table className="my-4 w-full text-left text-sm">
        <tbody>{children}</tbody>
      </table>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => (
      <tr className="border-b border-zinc-700 bg-zinc-800">{children}</tr>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th className="bg-zinc-900 px-6 py-4">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            className: 'text-zinc-200 leading-8 my-0',
          })
        )}
      </th>
    ),
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="px-6 py-4">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            className: 'text-zinc-400 leading-8 my-0',
          })
        )}
      </td>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="my-4 border-l-4 border-red-600 bg-zinc-800 p-4">
        <p className="font-semibold italic">{children}</p>
      </blockquote>
    ),
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a
        href={data.uri}
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-red-600 hover:underline"
      >
        {children}
      </a>
    ),
  },
};

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

  // console.log(fields);

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
                  <p className="text-sm text-gray-400" key={text.slice(0, 32)}>
                    {text}
                  </p>
                ))}
              <Button as={Link} to="/#contact" className="w-fit">
                {t('order')}
              </Button>
            </section>

            <section className="store-product-main-image-container">
              <Carousel useKeyboardArrows dynamicHeight infiniteLoop>
                {images ? (
                  images['en-US'].map((image) => (
                    <img
                      src={`https:${image.fields.file['en-US'].url}`}
                      alt={name[lng]}
                      key={image.fields.file['en-US'].url}
                    />
                  ))
                ) : (
                  <img src="/product-default.png" alt={name[lng]} />
                )}
              </Carousel>
            </section>

            {specifications && (
              <section className="specifications-container">
                <div className="specifications">
                  {documentToReactComponents(specifications[lng], options)}
                </div>
              </section>
            )}

            {gameNames && gameFrameRates && (
              <section className="game-grid-container">
                <h2 className="mb-4 text-2xl font-bold">
                  {t('fps-performance')}
                </h2>
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
