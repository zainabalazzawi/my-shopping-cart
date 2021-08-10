import { useState } from "react";

const useMyCart = () => {
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);

  //addToCart
  const addToCart = (product) => {
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
    setCart(newCart);
  };

  //removeFromCart
  const removeFromCart = (product) => {
    let itemInCart = cart.find((cartItem) => cartItem.id === product.id);
    let newCart = [...cart];
    if (itemInCart.quantity > 1) {
      itemInCart.quantity--;
    } else if (itemInCart.quantity === 1) {
      newCart = cart.filter((cartItem) => cartItem.id !== product.id);
    }
    setCart(newCart);
  };

  //getTotalPrice
  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };
  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  return { cart, addToCart, removeFromCart, getCartTotal, getTotalSum };
};

export default useMyCart;
