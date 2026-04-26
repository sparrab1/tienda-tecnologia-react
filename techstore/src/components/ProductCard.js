function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={product.image} alt={product.title} />
      </div>

      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;