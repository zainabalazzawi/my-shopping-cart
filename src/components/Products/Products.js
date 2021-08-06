import React from "react";
import Product from "../product/Product";
import "./Products.css";
const Products = ({ isLoading, data, addToCart }) => {
  return (
    <div className="products">
      {isLoading && <div> Loading...</div>}
      {data.map((product) => (
        <Product product={product} key={product.id} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
