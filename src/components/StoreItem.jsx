const StoreItem = ({ item }) => {
  return (
    <article className="bg-neutral-900 hover:bg-neutral-800 transition duration-400">
      <img src="/hero.png" alt="" />
      <div className="p-4">
        <h2 className="ff-heading">{item.name}</h2>
        <p className="ff-heading text-3xl">{item.price} €</p>
      </div>
    </article>
  );
};

export default StoreItem;
