import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Cart from "../components/Cart";

function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const techProducts = data.filter(product =>
        product.category === "electronics"
      );
      setProducts(techProducts);
      setFiltered(techProducts);
    });
}, []);

  const searchProduct = (query) => {
    const results = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Tienda de Tecnología 💻</h2>

      {/* 🛒 Carrito */}
      <Cart cart={cart} />

      {/* 🔎 Buscador */}
      <SearchBar onSearch={searchProduct} />

      {/* 🛍️ Productos */}
      <div className="container">
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;