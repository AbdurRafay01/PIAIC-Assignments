import React, { useState } from "react";
import "../styles/counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Counter Application</h1>
      <h2 className="counter-count">Count: {count}</h2>
      <div className="counter-buttons">
        <button
          className="counter-button increment-button"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="counter-button decrement-button"
          onClick={() => {
            if (count >= 1) {
              setCount(count - 1);
            }
          }}
        >
          Decrement
        </button>
        <button
          className="counter-button reset-button"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
      <p className="counter-tagline">Styling done by ChatGPT</p>
    </div>
  );
};

export default Counter;
