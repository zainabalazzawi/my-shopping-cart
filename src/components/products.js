import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img className="img" src={product.image} alt={product.title} />;
          <h1 className="price">{product.price}</h1>
          <p className="title">{product.title}</p>
          <span className="category">{product.category}</span>
          <p className="description">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
