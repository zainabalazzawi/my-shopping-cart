import React from "react";
import "./BackToStore.css";

const BackToStore = ({ setShowCart }) => {
  return (
    <div>
      <button onClick={() => setShowCart(false)} className="back-to-store">
        Back to store
      </button>
    </div>
  );
};

export default BackToStore;
