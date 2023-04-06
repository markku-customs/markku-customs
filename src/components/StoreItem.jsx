const StoreItem = ({ product }) => {
  const { fields } = product;

  return (
    <article className="bg-zinc-900 hover:bg-zinc-800 transition duration-400">
      <div className="image-container max-h-48">
        <img src="/hero.png" alt="" />
      </div>
      <div className="p-4">
        <h2 className="font-heading">{fields.name}</h2>
        <p className="font-heading text-3xl mt-1">{fields.price} €</p>
      </div>
    </article>
  );
};

export default StoreItem;
