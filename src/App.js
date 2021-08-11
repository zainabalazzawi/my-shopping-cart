import Products from "./components/Products/Products";
import MyCart from "./components/MyCart/MyCart";
import "./css/App.css";
import useMyCart from "./components/Hooks/useMyCart";
import useFetch from "./components/Hooks/useFetch";

function App() {
  const { data, isLoading } = useFetch("https://fakestoreapi.com/products");
  const { cart, addToCart, removeFromCart, cartTotal, totalSum } = useMyCart();

  return (
    <div className="main-container">
      <div className="content-container">
        <div className="container-title">
          Fancy products{" "}
          <span className="container-list-total">{data.length}</span>
        </div>
        <Products data={data} addToCart={addToCart} isLoading={isLoading} />
      </div>
      <MyCart
        cart={cart}
        removeFromCart={removeFromCart}
        totalSum={totalSum}
        cartTotal={cartTotal}
      />
    </div>
  );
}

export default App;
