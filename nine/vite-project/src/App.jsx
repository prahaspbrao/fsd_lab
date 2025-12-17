import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import DivisionCheck from './DivisionCheck';
import ArrayCheck from './ArrayCheck';

function App() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Program 9</h1>

      {/* 1. Division Check (Hardcoded Denominator 0) */}
      <ErrorBoundary>
        <DivisionCheck numerator={10} denominator={10} />
      </ErrorBoundary>

      <br />

      {/* 2. Array Check (Hardcoded Index 5) */}
      <ErrorBoundary>
        <ArrayCheck index={2} />
      </ErrorBoundary>
      
    </div>
  );
}

export default App;