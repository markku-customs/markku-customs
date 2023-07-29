import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import Layout from '@/components/Layout';

import NotFoundPage from '../NotFound';
import BasicInformation from './BasicInformation';
import Games from './Games';
import ImageCarousel from './ImageCarousel';
import Specifications from './Specifications';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch(`/.netlify/functions/getProduct?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.sys.id === 'NotFound') {
          setNotFound(true);
          throw new Error(data);
        }
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (notFound) return <NotFoundPage />;

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
            <BasicInformation
              name={name[lng]}
              price={price}
              description={description[lng] || description['en-US']}
            />

            <ImageCarousel images={images} name={name[lng]} />

            {specifications && (
              <Specifications specifications={specifications[lng]} />
            )}

            {gameNames && gameFrameRates && (
              <Games gameNames={gameNames} gameFrameRates={gameFrameRates} />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;
