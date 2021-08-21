import React from "react";
import "./Pay.css";
const Pay = ({ submitPay, cart, isPaying }) => {
  return (
    <div>
      <button
        className="pay-btn"
        onClick={submitPay}
        disabled={cart.length === 0 || !isPaying}
      >
        {isPaying ? "pay" : "paying..."}
      </button>
    </div>
  );
};

export default Pay;
