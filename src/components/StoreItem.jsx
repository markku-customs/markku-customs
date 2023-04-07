import { useTranslation } from "react-i18next";

const StoreItem = ({ product }) => {
  const { i18n } = useTranslation();

  const { fields } = product;

  const { name, price, featuredImage } = fields;

  const lng = i18n.language;

  return (
    <article className="bg-zinc-900 hover:bg-zinc-800 transition duration-400">
      <div className="image-container max-h-64">
        <img
          src={
            featuredImage
              ? `https:${featuredImage["en-US"].fields.file["en-US"].url}`
              : "/product-default.png"
          }
          alt={name[lng]}
        />
      </div>
      <div className="p-4">
        <h2 className="font-heading">{name[lng]}</h2>
        <p className="font-heading text-3xl mt-1">
          {price ? `${price["en-US"]}€` : "Variable"}
        </p>
      </div>
    </article>
  );
};

export default StoreItem;
