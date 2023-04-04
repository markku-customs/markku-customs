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
          <div className="product-page-grid">
            <div className="store-product-heading-text gap-2">
              <h3 className="text-4xl font-heading">{fields.name}</h3>
              <p className="text-2xl">{fields.price} €</p>
              <p>{fields.description}</p>
              <a
                href=""
                className="p-2 border-2 border-red-600 w-40 text-center hover:scale-110 rounded "
              >
                Contact us now
              </a>
            </div>

            <div className="store-product-main-image-container">
              <img
                className="store-product-main-image"
                src="/store-item-dummy-pic.png"
                alt=""
              />
            </div>

            <div className="store-product-specific-description"></div>

            <div className="game-grid-container">
              <div>
                <h1 className="game-grid-heading text-lg text-bold">
                  Games You Can Play With This PC
                </h1>
              </div>
              <div className="game-grid">
                <div className="game-grid-box">
                  <img
                    className="h-30 w-32 object-cover"
                    src="/game-1.png"
                    alt=""
                  />
                  <pre className="fps-text text-sm font-bold">190FPS</pre>
                </div>
                <div className="game-grid-box">
                  <img
                    className="h-30 w-32 object-cover"
                    src="/game-2.png"
                    alt=""
                  />
                  <pre className="fps-text text-sm font-bold">120FPS</pre>
                </div>
                <div className="game-grid-box">
                  <img
                    className="h-30 w-32 object-cover"
                    src="/game-3.png"
                    alt=""
                  />
                  <pre className="fps-text text-sm font-bold">250FPS</pre>
                </div>{" "}
                <div className="game-grid-box">
                  <img
                    className="h-30 w-32 object-cover"
                    src="/game-4.png"
                    alt=""
                  />
                  <pre className="fps-text text-sm font-bold">300FPS</pre>
                </div>
                <div className="game-grid-box">
                  <img
                    className="h-30 w-32 object-cover"
                    src="/game-5.png"
                    alt=""
                  />
                  <pre className="fps-text text-sm font-bold">520FPS</pre>
                </div>
                <div className="game-grid-box">
                  <img
                    className="h-30 w-32 object-cover"
                    src="/game-6.png"
                    alt=""
                  />
                  <pre className="fps-text text-sm font-bold">95FPS</pre>
                </div>
              </div>
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
