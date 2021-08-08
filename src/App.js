import Products from "./components/Products/Products";
import MyCart from "./components/MyCart/MyCart";
import "./css/App.css";
import useFetch from "./components/useFetch";
import { useState } from "react";

function App() {
  const { data, isLoading } = useFetch("https://fakestoreapi.com/products");

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // if (cart.find((cartItem) => cartItem.id === product.id)) return;
    let itemInCart = cart.find((cartItem) => cartItem.id === product.id);
    let newCart = [...cart];
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }

    // setCart([...cart, product]);
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((cartItem) => cartItem.id !== product.id));
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };
  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="container-title">
          Fancy products <span className="container-list-total">(29)</span>
        </div>
        <Products data={data} addToCart={addToCart} isLoading={isLoading} />
      </div>
      <MyCart
        cart={cart}
        removeFromCart={removeFromCart}
        getCartTotal={getCartTotal}
        getTotalSum={getTotalSum}
      />
    </div>
  );
}

export default App;
