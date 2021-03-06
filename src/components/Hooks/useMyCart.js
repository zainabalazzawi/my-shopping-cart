import { useEffect, useState } from "react";

const useMyCart = () => {
  const [cart, setCart] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [isPaying, setIsPaying] = useState(true);
  const [showCart, setShowCart] = useState(false);

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

  useEffect(() => {
    setCartTotal(cart.reduce((sum, { quantity }) => sum + quantity, 0));
    setTotalSum(
      cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
    );
  }, [cart]);

  // submitPay

  const submitPay = () => {
    setTimeout(() => {
      setIsPaying(true);
      setCart([]);
      console.log("cleared");
    }, 5000);
    setIsPaying(false);
  };

  //ShowCart
  useEffect(() => {
    setShowCart(false);
  }, []);

  return {
    cart,
    addToCart,
    removeFromCart,
    cartTotal,
    totalSum,
    submitPay,
    isPaying,
    showCart,
    setShowCart,
  };
};

export default useMyCart;
