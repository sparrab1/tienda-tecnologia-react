function Cart({ cart }) {
  return (
    <div className="cart">
      <h3>🛒 Carrito</h3>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>El carrito está vacío</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;