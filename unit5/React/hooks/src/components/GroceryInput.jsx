import React from "react";

function GroceryInput({ items }) {
    
  return (
    <div>
      {items.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
        
      ))}
    </div>
  );
}

export default GroceryInput;
