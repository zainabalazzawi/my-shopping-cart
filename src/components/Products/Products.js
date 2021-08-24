import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./Products.css";
const Products = ({ data, addToCart }) => {
  return (
    <div className="products">
      {data.map((product) => (
        <ProductItem product={product} key={product.id} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
