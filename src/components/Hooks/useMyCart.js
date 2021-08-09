import { useState } from "react";

const useMyCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // if (cart.find((cartItem) => cartItem.id === product.id)) return;
    let itemInCart = cart.find((cartItem) => cartItem.id === product.id);
    const newCart = [...cart];
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
  return { addToCart, removeFromCart, cart };
};

export default useMyCart;
