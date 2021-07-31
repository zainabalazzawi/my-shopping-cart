import { useEffect, useState } from "react";
import Mycart from "./components/myCart";
import Products from "./components/products";

import "../src/css/App.css";
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
        <div className="header">Fancy products</div>
        <h1 className="number">(29)</h1>
        <Products products={products} />
      </div>
      <Mycart />
    </div>
  );
}

export default App;
