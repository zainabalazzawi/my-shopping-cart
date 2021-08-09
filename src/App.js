import Products from "./components/Products/Products";
import MyCart from "./components/MyCart/MyCart";
import "./css/App.css";
import useMyCart from "./components/Hooks/useMyCart";
import useFetch from "./components/Hooks/useFetch";

function App() {
  const { data, isLoading } = useFetch("https://fakestoreapi.com/products");
  const { addToCart, removeFromCart, cart } = useMyCart();

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };
  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="container-title">
          Fancy products <span className="container-list-total">(29)</span>
        </div>
        <Products data={data} addToCart={addToCart} isLoading={isLoading} />
      </div>
      <MyCart
        cart={cart}
        removeFromCart={removeFromCart}
        getCartTotal={getCartTotal}
        getTotalSum={getTotalSum}
      />
    </div>
  );
}

export default App;
