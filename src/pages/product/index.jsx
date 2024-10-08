import React from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import Loading from '@/components/Loading';
import SEO from '@/components/SEO';
import Container from '@/components/layout/Container';

import { useProduct } from '@/hooks';

import { LNG } from '@/constants';

import NotFoundPage from '../not-found';
import BasicInformation from './BasicInformation';
import Bundles from './Bundles';
import GamePerformance from './GamePerformance';
import ImageCarousel from './ImageCarousel';
import Specifications from './Specifications';

const ProductPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const { product, error } = useProduct(id);

  if (error?.info?.error?.sys?.id === 'NotFound') {
    return <NotFoundPage />;
  }

  const name = product?.fields?.name;
  const description = product?.fields?.description;
  const price = product?.fields?.price;
  const normalPrice = product?.fields?.normalPrice;
  const stockable = product?.fields?.stockable;
  const itemsInStock = product?.fields?.itemsInStock;
  const specifications = product?.fields?.specifications;
  const tags = product?.fields?.tags;
  const images = product?.fields?.images;
  const gameNames = product?.fields?.gameNames;
  const gameFrameRates = product?.fields?.gameFrameRates;
  const paymentLink = product?.fields?.paymentLink;
  const bundles = product?.fields?.bundles;
  const klarnaPayment = product?.fields?.klarnaPayment;
  const klarnaMonths = product?.fields?.klarnaMonths;

  const lng = i18n.language;

  return (
    <>
      <SEO title={`${!product ? t('loading') : name[lng]} | Markku Customs`} />

      <Container>
        {!product ? (
          <Loading className="mt-8" error={error} />
        ) : (
          <div className="product-page-grid">
            <BasicInformation
              name={name[lng]}
              price={price}
              normalPrice={normalPrice}
              description={description[lng] || description[LNG.en]}
              stockable={stockable[LNG.en]}
              itemsInStock={itemsInStock[LNG.en]}
              paymentLink={paymentLink}
              tags={tags}
              klarnaPayment={klarnaPayment}
              klarnaMonths={klarnaMonths}
            />

            <ImageCarousel images={images} />

            {bundles && <Bundles bundles={bundles} />}

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
      </Container>
    </>
  );
};

export default ProductPage;
