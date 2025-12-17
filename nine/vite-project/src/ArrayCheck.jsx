import React from 'react';

const ArrayCheck = ({ index }) => {
  const items = ["Apple", "Banana", "Cherry"];
  if (index < 0 || index >= items.length) {
    throw new Error("Index out of bounds");
  }
  return <h3>Item: {items[index]}</h3>;
};
export default ArrayCheck;