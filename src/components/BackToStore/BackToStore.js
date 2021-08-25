import React from "react";
import "./BackToStore.css";

const BackToStore = ({ setShowCart }) => {
  return (
    <div>
      <button className="back-to-store" onClick={() => setShowCart(true)}>
        Back to store
      </button>
    </div>
  );
};

export default BackToStore;
