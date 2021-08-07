import Products from "./components/Products/Products";
import MyCart from "./components/MyCart/MyCart";
import "./css/App.css";
import useFetch from "./components/useFetch";
import { useState } from "react";

function App() {
  const { data, isLoading } = useFetch("https://fakestoreapi.com/products");

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.find((cartItem) => cartItem.id === product.id)) return;
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((cartItem) => cartItem.id !== product.id));
  };

  return (
    <div className="main-container">
      <div className="content-container">
        <div className="container-title">
          Fancy products <span className="container-list-total">(29)</span>
        </div>
        <Products data={data} addToCart={addToCart} isLoading={isLoading} />
      </div>
      <MyCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
