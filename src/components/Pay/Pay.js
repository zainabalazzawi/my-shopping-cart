import React from "react";

const Pay = ({ submitPay, cart, isLoading }) => {
  return (
    <div>
      {cart.length ? (
        <button className="pay-btn" onClick={submitPay}>
          Pay
        </button>
      ) : (
        <button className="pay-btn" disabled>
          Pay
        </button>
      )}
    </div>
  );
};

export default Pay;
