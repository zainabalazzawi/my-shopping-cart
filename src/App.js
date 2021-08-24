import "./css/App.css";

import useMyCart from "./components/Hooks/useMyCart";
import useFetch from "./components/Hooks/useFetch";
import MyCart from "./components/MyCart/MyCart";
import Loading from "./components/Loading/Loading";
import Products from "./components/Products/Products";

function App() {
  const { data, isLoading } = useFetch("https://fakestoreapi.com/products");
  const {
    cart,
    addToCart,
    removeFromCart,
    cartTotal,
    totalSum,
    submitPay,
    isPaying,
  } = useMyCart();

  return (
    <div className="main-container">
      <div className="content-container">
        {isLoading && <Loading />}
        {!isLoading && (
          <div className="container-title">
            Fancy products{" "}
            <span className="container-list-total">{data.length}</span>
          </div>
        )}
        <Products data={data} addToCart={addToCart} />

        <div className="circle-mobile">
          <span className="amount">{cartTotal}</span>
        </div>
      </div>

      <MyCart
        cart={cart}
        removeFromCart={removeFromCart}
        totalSum={totalSum}
        cartTotal={cartTotal}
        submitPay={submitPay}
        isPaying={isPaying}
      />
    </div>
  );
}

export default App;
