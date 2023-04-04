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
          <div className="product-page-grid">
              <div className="store-product-heading-text gap-2">
                <h3 className="text-4xl font-heading">{item.name}</h3>
                <p className="text-2xl">{item.price} €</p>
                <p>{item.description}</p>
                <a href="" className="p-2 border-2 border-red-600 w-40 text-center hover:scale-110 rounded ">Contact us now</a>
              </div>

              <div className="store-product-main-image-container">
                <img className="store-product-main-image" src="/store-item-dummy-pic.png" alt="" />
              </div>

              <div className="store-product-specific-description">

              </div>

              <div className="game-grid-container">
                <div>
                  <h1 className="game-grid-heading text-lg text-bold">Games You Can Play With This PC</h1>
                </div>
                <div className="game-grid">
                    <div className="game-grid-box">
                      <img className="h-30 w-32 object-cover" src="/game-1.png" alt="" />
                      <pre className="fps-text text-sm font-bold">190FPS</pre>
                    </div> 
                    <div className="game-grid-box">
                      <img className="h-30 w-32 object-cover" src="/game-2.png" alt="" />
                      <pre className="fps-text text-sm font-bold">120FPS</pre>
                    </div> 
                    <div className="game-grid-box">
                      <img className="h-30 w-32 object-cover" src="/game-3.png" alt="" />
                      <pre className="fps-text text-sm font-bold">250FPS</pre>
                    </div>                 <div className="game-grid-box">
                      <img className="h-30 w-32 object-cover" src="/game-4.png" alt="" />
                      <pre className="fps-text text-sm font-bold">300FPS</pre>
                    </div> 
                    <div className="game-grid-box">
                      <img className="h-30 w-32 object-cover" src="/game-5.png" alt="" />
                      <pre className="fps-text text-sm font-bold">520FPS</pre>
                    </div> 
                    <div className="game-grid-box">
                      <img className="h-30 w-32 object-cover" src="/game-6.png" alt="" />
                      <pre className="fps-text text-sm font-bold">95FPS</pre>
                    </div> 
                  </div>
                </div>
            </div>
          </div>
      </Layout>
    </>
  );
};

export default ProductPage;
