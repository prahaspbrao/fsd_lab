import React from 'react';

const DivisionCheck = ({ numerator, denominator }) => {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }
  return <h3>Result: {numerator / denominator}</h3>;
};
export default DivisionCheck;