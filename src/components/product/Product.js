import React from "react";
import "../Products/Products.css";
const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <div key={product.id}>
        {/* As style backgroundImage */}
        <div
          className="image-container with-background-image"
          title={product.title}
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
        <h1 className="price">${product.price}</h1>
        <p className="title">{product.title}</p>
        <span className="category">{product.category}</span>
      </div>
      <button
        type="button"
        className="add-to-cart"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
