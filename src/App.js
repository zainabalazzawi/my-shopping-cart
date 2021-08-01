import { useEffect, useState } from "react";
import MyCart from "./components/MyCart";
import Products from "./components/Products/Products";

import "./css/App.css";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="main-container">
      <div className="content-container">
        <div className="container-title">
          Fancy products <span className="container-list-total">(29)</span>
        </div>
        <Products products={products} />
      </div>
      <MyCart />
    </div>
  );
}

export default App;
