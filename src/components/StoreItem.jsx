const StoreItem = ({ item }) => {
  return (
    <article className="bg-zinc-900 hover:bg-zinc-800 transition duration-400">
      <img src="/hero.png" alt="" />
      <div className="p-4">
        <h2 className="font-heading">{item.name}</h2>
        <p className="font-heading text-3xl">{item.price} €</p>
      </div>
    </article>
  );
};

export default StoreItem;
