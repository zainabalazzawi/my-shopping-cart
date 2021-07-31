import "./App.css";
import Mycart from "./components/myCart";
import Products from "./components/products";
function App() {
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="header">Fancy products</div>
        <h1 className="number">(29)</h1>
        <Products />
      </div>
      <Mycart />
    </div>
  );
}

export default App;
