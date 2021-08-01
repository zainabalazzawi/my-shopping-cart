import React from "react";
import "./MyCart.css";
const MyCart = () => {
  return (
    <div className="my-cart-container">
      <h1 className="cart-word">My Cart</h1>
      <div className="circle">
        <span className="amount">0</span>
      </div>
      <p className="no-products">
        No products added yet, add items to continue.
      </p>
      <div className="line"></div>
      <div className="total">Total</div>
      <div className="total-price">$00.00</div>
      <button className="pay-btn">Pay</button>
    </div>
  );
};

export default MyCart;
