import React from "react";
import "./MyCart.css";
const MyCart = ({ cart, removeFromCart, getCartTotal, getTotalSum }) => {
  console.log(cart);

  return (
    <div className="my-cart-container">
      <h1 className="cart-word">My Cart</h1>
      <div className="circle">
        <span className="amount">{getCartTotal()}</span>
      </div>
      {cart.length === 0 && (
        <p className="no-products">
          No products added yet, add items to continue.
        </p>
      )}
      {cart.length > 0 && (
        <div className="list-of-products">
          {cart.map((product) => (
            <div className="product-cart" key={product.id}>
              <div className="image-container-cart">
                <div
                  className="with-background-image-cart"
                  title={product.title}
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
              </div>
              <div className="count" onClick={() => removeFromCart(product)}>
                X{product.quantity}
              </div>

              <p className="title-cart">{product.title}</p>
              <h1 className="price-cart">${product.price}</h1>
            </div>
          ))}
        </div>
      )}

      <div className="line"></div>
      <div className="total">Total</div>
      <div className="total-price">${parseFloat(getTotalSum().toFixed(2))}</div>
      <button className="pay-btn">Pay</button>
    </div>
  );
};

export default MyCart;
