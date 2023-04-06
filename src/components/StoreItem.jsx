import { useTranslation } from "react-i18next";

const StoreItem = ({ product }) => {
  const { i18n } = useTranslation();

  const { fields } = product;

  const { name, price, images } = fields;

  const lng = i18n.language;

  console.log(fields);

  return (
    <article className="bg-zinc-900 hover:bg-zinc-800 transition duration-400">
      <div className="image-container max-h-48">
        <img
          src={
            images
              ? `https:${images["en-US"][0].fields.file["en-US"].url}`
              : "/store-item-dummy-pic.png"
          }
          alt={name[lng]}
        />
      </div>
      <div className="p-4">
        <h2 className="font-heading">{name[lng]}</h2>
        <p className="font-heading text-3xl mt-1">{price["en-US"]} €</p>
      </div>
    </article>
  );
};

export default StoreItem;
