import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { StoreItemsContext } from "../contexts/StoreItemsContext";

import Layout from "../components/Layout";

const ProductPage = () => {
  const items = useContext(StoreItemsContext);
  const { id } = useParams();

  const item = items[id];

  return (
    <>
      <Helmet>
        <title>{item.name} | Markku Customs</title>
        <meta name="description" content="Markku Customs Official Website" />
      </Helmet>

      <Layout>
        <div className="container">
          <div className="flex">
            <div className="store-item-left gap-2">
              <h3 className="text-4xl font-heading">{item.name}</h3>
              <p className="text-2xl">{item.price} €</p>
              <p>{item.description}</p>
            </div>
            <div className="store-item-right">
              <img src="/hero.png" alt="" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;
