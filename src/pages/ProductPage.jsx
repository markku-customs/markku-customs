import { useState, useEffect, Children, cloneElement } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { createClient } from "contentful";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/Layout";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const options = {
  // renderMark: {
  //   [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  // },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-zinc-400 leading-8 my-2">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="leading-8 text-2xl font-semibold my-6">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="leading-8 text-xl font-semibold my-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="leading-8 text-xl my-4">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="leading-8 text-lg font-semibold my-2">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="leading-8 text-lg my-2">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="leading-8 text-base font-semibold my-1">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-inside marker:text-zinc-600 my-4">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-inside marker:text-zinc-600 my-4">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="list-item">
        {Children.map(children, (child) =>
          cloneElement(child, {
            className: `text-zinc-400 inline-block leading-8 my-0"`,
          })
        )}
      </li>
    ),
    [BLOCKS.HR]: () => <hr className="h-px my-8 bg-zinc-800 border-none" />,
    [BLOCKS.TABLE]: (node, children) => (
      <table className="w-full text-sm text-left my-4">
        <tbody>{children}</tbody>
      </table>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => (
      <tr className="border-b bg-zinc-800 border-zinc-700">{children}</tr>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th className="px-6 py-4 bg-zinc-900">
        {Children.map(children, (child) =>
          cloneElement(child, {
            className: "text-zinc-200 leading-8 my-0",
          })
        )}
      </th>
    ),
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="px-6 py-4">
        {Children.map(children, (child) =>
          cloneElement(child, {
            className: "text-zinc-400 leading-8 my-0",
          })
        )}
      </td>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
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
            <div className="store-product-heading-text gap-4">
              <h3 className="text-4xl font-heading">{fields.name}</h3>
              <p className="text-2xl">{fields.price} €</p>
              <p className="text-sm text-gray-400">{fields.description}</p>
              <Link
                to="/#contact"
                className="button | bg-red-600 hover:brightness-125 w-fit"
              >
                Order Now
              </Link>
            </div>

            <div className="store-product-main-image-container">
              <img
                className="store-product-main-image"
                src={
                  fields.images
                    ? `https:${fields.images[0].fields.file.url}`
                    : "/store-product-dummy-picture.jpeg"
                }
                alt={
                  fields.images ? fields.images[0].fields.title : fields.name
                }
              />
            </div>

            <div className="specifications-container">
              <div className="specifications">
                {documentToReactComponents(fields.specifications, options)}
              </div>
            </div>

            <div className="game-grid-container">
              <div>
                <h1 className="game-grid-heading text-2xl font-bold">
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
                  <pre className="fps-text text-sm font-bold">100FPS</pre>
                </div>
                <div className="game-grid-box">
                  <img
                    className="h-30 w-32 object-cover"
                    src="/game-2.png"
                    alt=""
                  />
                  <pre className="fps-text text-sm font-bold">240FPS</pre>
                </div>
                <div className="game-grid-box">
                  <img
                    className="h-30 w-32 object-cover"
                    src="/game-3.png"
                    alt=""
                  />
                  <pre className="fps-text text-sm font-bold">175FPS</pre>
                </div>{" "}
                <div className="game-grid-box">
                  <img
                    className="h-30 w-32 object-cover"
                    src="/game-4.png"
                    alt=""
                  />
                  <pre className="fps-text text-sm font-bold">200FPS</pre>
                </div>
                <div className="game-grid-box">
                  <img
                    className="h-30 w-32 object-cover"
                    src="/game-5.png"
                    alt=""
                  />
                  <pre className="fps-text text-sm font-bold">185FPS</pre>
                </div>
                <div className="game-grid-box">
                  <img
                    className="h-30 w-32 object-cover"
                    src="/game-6.png"
                    alt=""
                  />
                  <pre className="fps-text text-sm font-bold">175FPS</pre>
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
