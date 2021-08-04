import Products from "./components/Products/Products";
import MyCart from "./components/MyCart/MyCart";
import "./css/App.css";
import useFetch from "./components/useFetch";

function App() {
  const { products } = useFetch("https://fakestoreapi.com/products");
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="container-title">
          Fancy products <span className="container-list-total">(29)</span>
        </div>
        <Products products={products} />
      </div>
      <MyCart products={products} />
    </div>
  );
}

export default App;
