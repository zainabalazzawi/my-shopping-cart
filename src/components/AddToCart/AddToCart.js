import React from "react";
import "./AddToCart.css";
const AddToCart = ({ product }) => {
  const handleAdd = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <button
        type="button"
        value={product.title}
        className="add-to-cart"
        onClick={handleAdd}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
