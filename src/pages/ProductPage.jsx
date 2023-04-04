import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/Layout";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    client
      .getEntries({ content_type: "product", "sys.id": id })
      .then((entries) => setProduct(entries.items[0]))
      .catch((err) => console.log(err));
  }, []);

  if (!product) return null;

  const { fields } = product;

  return (
    <>
      <Helmet>
        <title>{fields.name} | Markku Customs</title>
        <meta name="description" content="Markku Customs Official Website" />
      </Helmet>

      <Layout>
        <div className="container">
          <div className="flex">
            <div className="store-item-left gap-2">
              <h3 className="text-4xl font-heading">{fields.name}</h3>
              <p className="text-2xl">{fields.price} €</p>
              <p>{fields.description}</p>
            </div>
            <div className="store-item-right">
              <img src="/hero.png" alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Specifications</h4>
            {documentToReactComponents(fields.specifications)}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;
