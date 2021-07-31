import React from "react";

const Mycart = () => {
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
      <p className="total">Total</p>
      <p className="price">$00.00</p>
      <button className="pay-btn">Pay</button>
    </div>
  );
};

export default Mycart;
