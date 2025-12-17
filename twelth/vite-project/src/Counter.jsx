import React, { useState } from 'react';

function Counter() {
  // 1. Initialize state for count
  const [count, setCount] = useState(0);

  // 2. Function to handle increment
  const incrementCount = () => {
    // Optional: Stop counting after 10 since it's the "End"
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px", fontFamily: "Arial" }}>
      <h2>Program 12: Counter</h2>
      
      {/* Display current count */}
      <h1>Count: {count}</h1>

      {/* Button to increment */}
      <button 
        onClick={incrementCount}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        disabled={count === 10} // Optional: Disable button when end is reached
      >
        Increment
      </button>

      {/* 3. Conditional Rendering: Display message only when count is 10 */}
      {count === 10 && (
        <p style={{ color: "red", fontWeight: "bold", marginTop: "20px" }}>
          End of the count
        </p>
      )}
    </div>
  );
}

export default Counter;