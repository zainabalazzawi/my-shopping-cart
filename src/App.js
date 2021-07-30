import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductsList(data));
  }, []);
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="header">Fancy products</div>
        <h1 className="number">(29)</h1>
        <div className="products">
          {productsList.map((product) => (
            <div className="product" key={product}>
              <img className="img" src={product.image} alt={product.title} />;
              <h1 className="price">{product.price}</h1>
              <p className="title">{product.title}</p>
              <span className="category">{product.category}</span>
              <p className="description">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-cart-container">
        <h1 className="cart-word">My Cart</h1>
        <div className="circle">
          <span className="amount">0</span>
        </div>
        <p className="no-products">
          No products added yet, add items to continue.
        </p>
        <div className="line"></div>
        <p className="total">Total</p>
        <p className="price">$00.00</p>
        <button className="pay-btn">Pay</button>
      </div>
    </div>
  );
}

export default App;
