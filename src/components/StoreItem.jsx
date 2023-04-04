const StoreItem = ({ product }) => {
  const { fields } = product;

  return (
    <article className="bg-zinc-900 hover:bg-zinc-800 transition duration-400">
      <img src="/hero.png" alt="" />
      <div className="p-4">
        <h2 className="font-heading">{fields.name}</h2>
        <p className="font-heading text-3xl">{fields.price} €</p>
      </div>
    </article>
  );
};

export default StoreItem;
