const StoreItem = ({ product }) => {
  const { fields } = product;

  console.log(fields);

  return (
    <article className="bg-zinc-900 hover:bg-zinc-800 transition duration-400">
      <div className="image-container max-h-48">
        <img
          src={
            fields.images
              ? `https:${fields.images[0].fields.file.url}`
              : "/store-item-dummy-pic.png"
          }
          alt={fields.images ? fields.images[0].fields.title : fields.name}
        />
      </div>
      <div className="p-4">
        <h2 className="font-heading">{fields.name}</h2>
        <p className="font-heading text-3xl mt-1">{fields.price} €</p>
      </div>
    </article>
  );
};

export default StoreItem;
