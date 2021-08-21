import React from "react";
import "./Pay.css";
const Pay = ({ submitPay, cart, isPay }) => {
  return (
    <div>
      <button
        className="pay-btn"
        onClick={submitPay}
        disabled={cart.length === 0 || !isPay}
      >
        {isPay ? "pay" : "paying..."}
      </button>
    </div>
  );
};

export default Pay;
