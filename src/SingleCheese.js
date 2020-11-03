function SingleCheese({ product }) {
  return (
    <>
      <div className="Cheese">
        <h1>{product.title}</h1>
        <img alt="cheese" src={product.imageUrl} />
        <p>Description: {product.description}</p>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.likes}</p>
        <button>Add Like</button>
      </div>
    </>
  );
}
export default SingleCheese;
