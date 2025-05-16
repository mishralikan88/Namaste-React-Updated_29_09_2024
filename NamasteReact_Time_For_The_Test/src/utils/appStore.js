import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js"


const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
     devTools: process.env.NODE_ENV !== 'production'
})

export default appStore



import React from 'react';

export function App() {
  const handleClick = (event) => {
    // Synthetic event, it normalizes the event across browsers
    console.log(event.type); // Outputs: 'click'
    console.log(event.target); // Outputs the clicked element
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
