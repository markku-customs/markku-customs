import React from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

import NotFoundPage from '../NotFound';
import BasicInformation from './BasicInformation';
import GamePerformance from './GamePerformance';
import ImageCarousel from './ImageCarousel';
import Specifications from './Specifications';

const ProductPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const { data: product } = useSWR(`/.netlify/functions/getProduct?id=${id}`);

  if (product?.sys?.id === 'NotFound') {
    return <NotFoundPage />;
  }

  const name = product?.fields?.name;
  const description = product?.fields?.description;
  const price = product?.fields?.price;
  const stockable = product?.fields?.stockable;
  const itemsInStock = product?.fields?.itemsInStock;
  const specifications = product?.fields?.specifications;
  const images = product?.fields?.images;
  const gameNames = product?.fields?.gameNames;
  const gameFrameRates = product?.fields?.gameFrameRates;

  const lng = i18n.language;

  return (
    <>
      <SEO
        title={!product ? t('loading') : name[lng]}
        description={t('seo.description')}
      />

      <Layout>
        <div className="container">
          {!product ? (
            <div className="mt-8 grid h-32 place-items-center rounded-md bg-zinc-800 text-zinc-400">
              {t('loading')}
            </div>
          ) : (
            <div className="product-page-grid">
              <BasicInformation
                name={name[lng]}
                price={price}
                description={description[lng] || description['en-US']}
                stockable={stockable['en-US']}
                itemsInStock={itemsInStock['en-US']}
              />

              <ImageCarousel images={images} name={name[lng]} />

              {specifications && (
                <Specifications specifications={specifications[lng]} />
              )}

              {gameNames && gameFrameRates && (
                <GamePerformance
                  gameNames={gameNames}
                  gameFrameRates={gameFrameRates}
                />
              )}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;
