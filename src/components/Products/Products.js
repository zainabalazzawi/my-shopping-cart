import React from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = ({ data, addToCart }) => {
  return (
    <div className="products">
      {data.map((product) => (
        <Product product={product} key={product.id} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
