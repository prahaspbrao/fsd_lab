import React from 'react';
import AgeCalculator from './AgeCalculator';

function App() {
  return (
    <div>
      {/* Pass the initial age as a prop */}
      <AgeCalculator age={20} />
    </div>
  );
}

export default App;