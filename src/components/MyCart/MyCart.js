import React from "react";
import BackToStore from "../BackToStore/BackToStore";
import Pay from "../Pay/Pay";
import "./MyCart.css";
const MyCart = ({
  cart,
  removeFromCart,
  totalSum,
  submitPay,
  isPaying,
  setShowCart,
  showCart,
}) => {
  console.log(cart);

  return (
    <div className={`my-cart-container ${showCart ? "active" : ""}`}>
      <h1 className="cart-word">My Cart</h1>
      {cart.length === 0 && (
        <p className="no-products">
          No products added yet, add items to continue.
        </p>
      )}
      {cart.length > 0 && (
        <div className="list-of-products">
          {cart.map((product) => (
            <div className="product-cart" key={product.id}>
              <div
                className="image-container-cart"
                onClick={() => removeFromCart(product)}
              >
                {" "}
                <div className="remove-label">remove</div>
                <div
                  className="with-background-image-cart"
                  title={product.title}
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
              </div>
              <div className="count">X{product.quantity}</div>

              <p className="title-cart">{product.title}</p>
              <h1 className="price-cart">${product.price}</h1>
            </div>
          ))}
        </div>
      )}

      <div className="line"></div>
      <div className="total">Total</div>
      <div className="total-price">${parseFloat(totalSum.toFixed(2))}</div>
      <Pay cart={cart} submitPay={submitPay} isPaying={isPaying} />
      <BackToStore setShowCart={setShowCart} />
    </div>
  );
};

export default MyCart;
