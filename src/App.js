import Products from "./components/Products/Products";
import MyCart from "./components/MyCart/MyCart";
import "./css/App.css";
import useFetch from "./components/useFetch";

function App() {
  const { data } = useFetch("https://fakestoreapi.com/products");
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="container-title">
          Fancy products <span className="container-list-total">(29)</span>
        </div>
        <Products data={data} />
      </div>
      <MyCart data={data} />
    </div>
  );
}

export default App;
