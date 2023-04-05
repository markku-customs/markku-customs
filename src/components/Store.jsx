import { Link } from "react-router-dom";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StoreItemsContext } from "../contexts/StoreItemsContext";
import StoreItem from "./StoreItem";

const Store = () => {
  const { t } = useTranslation();
  const products = useContext(StoreItemsContext);

  return (
    <section className="py-12 sm:py-16" id="store">
      <div className="container mx-auto">
        <h2 className="font-heading text-4xl md:text-6xl mb-8"><span className="text-red-600 mr-4">#</span>{t("store")}</h2>
        <div className="store-grid">
          {products.map((product) => (
            <Link to={`/products/${product.sys.id}`}>
              <StoreItem product={product} key={product.sys.id} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;
