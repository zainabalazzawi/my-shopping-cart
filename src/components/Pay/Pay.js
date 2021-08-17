import React from "react";

const Pay = ({ submitPay, cart, isLoading }) => {
  return (
    <div>
      {cart.length === 0 && (
        <button className="pay-btn" disabled>
          Pay
        </button>
      )}
      {cart.length > 0 && (
        <button className="pay-btn" onClick={submitPay}>
          Pay
        </button>
      )}
      {isLoading && cart.length === 0 && (
        <button className="pay-btn" disabled>
          Pay
        </button>
      )}
    </div>
  );
};

export default Pay;
