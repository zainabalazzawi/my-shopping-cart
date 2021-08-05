import Products from "./components/Products/Products";
import MyCart from "./components/MyCart/MyCart";
import "./css/App.css";
import useFetch from "./components/useFetch";
import { useState } from "react";

function App() {
  const { data } = useFetch("https://fakestoreapi.com/products");

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log(product);
    if (cart.find(cartItem => cartItem.id === product.id)) return;
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    console.log(product);
  };

  return (
    <div className="main-container">
      <div className="content-container">
        <div className="container-title">
          Fancy products <span className="container-list-total">(29)</span>
        </div>

        <Products
          data={data}
          addToCart={addToCart}
          removeFromCart={addToCart}
        />
        
      </div>

      <MyCart cart={cart}   />
    </div>
  );
}

export default App;
