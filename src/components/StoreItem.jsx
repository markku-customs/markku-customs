const StoreItem = ({item}) => {
    return (
        <article className="py-4 hover:scale-105">
            <img src="/hero.png" alt="" />
            <h2 className="ff-heading">{item.name}</h2>
            <p className="ff-heading text-2xl">{item.price} €</p>
        </article>
    )
}

export default StoreItem