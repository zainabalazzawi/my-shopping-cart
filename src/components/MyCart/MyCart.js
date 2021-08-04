import React from "react";
import "./MyCart.css";
const MyCart = ({ products }) => {
  return (
    <div className="my-cart-container">
      <h1 className="cart-word">My Cart</h1>
      <div className="circle">
        <span className="amount">0</span>
      </div>
      <p className="no-products">
        No products added yet, add items to continue.
      </p>
      {/* <div className="list-of-products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img className="img" src={product.image} alt={product.title} />
            <p className="title">{product.title}</p>
            <h1 className="price">${product.price}</h1>
          </div>
        ))}
      </div>*/}

      <div className="line"></div>
      <div className="total">Total</div>
      <div className="total-price">$00.00</div>
      <button className="pay-btn">Pay</button>
    </div>
  );
};

export default MyCart;
