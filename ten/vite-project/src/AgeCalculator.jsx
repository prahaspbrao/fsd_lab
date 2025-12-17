import React, { useState, useEffect } from 'react';

// Requirement 1: Functional Component that accepts an 'age' prop
function AgeCalculator({ age: initialAge }) {
  
  // Requirement 2: State variable for age (initialized with the prop)
  const [currentAge, setCurrentAge] = useState(initialAge);
  const [inputValue, setInputValue] = useState("");

  // Requirement 2: useEffect hook to perform action on state change
  useEffect(() => {
    // This code runs every time 'currentAge' changes
    console.log(`Age updated successfully to: ${currentAge}`);
    // Optional: Update document title to reflect age
    document.title = `Age: ${currentAge}`;
  }, [currentAge]); 

  const handleUpdate = () => {
    if (inputValue !== "") {
      setCurrentAge(inputValue);
      setInputValue(""); // Clear input field after update
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Program 10: functional Component</h2>
      
      {/* Requirement 1: Display age inside a heading */}
      <h1>Current Age: {currentAge}</h1>

      <div style={{ marginTop: "20px" }}>
        {/* Requirement 2: Input field to update age */}
        <input 
          type="number" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter new age"
          style={{ padding: "5px" }}
        />
        
        {/* Requirement 2: Button to trigger the update */}
        <button 
          onClick={handleUpdate} 
          style={{ marginLeft: "10px", padding: "5px 10px" }}
        >
          Update Age
        </button>
      </div>
    </div>
  );
}

export default AgeCalculator;