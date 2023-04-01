import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreItemsContext } from "../contexts/StoreItemsContext";
import StoreItem from "./StoreItem";

const Store = () => {
  const items = useContext(StoreItemsContext);

  return (
    <section className="py-16" id="store">
      <div className="container mx-auto">
        <h2 className="ff-heading text-4xl md:text-6xl mb-8">Store</h2>
        <div className="store-grid">
          {items.map((item, idx) => (
            <Link to={`/products/${idx}`}>
              <StoreItem item={item} key={idx} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;
