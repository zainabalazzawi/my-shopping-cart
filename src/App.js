import "./App.css";
//import Products from "./components/products";

function App() {
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="header">Fancy products</div>
        <span>(29)</span>
      </div>
      {/*<Products />*/}

      <div className="cart-container">my cart </div>
    </div>
  );
}

export default App;
