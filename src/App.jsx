import React from "react";
import { useState } from "react";
import Header from "./components/Layout/Header";
import SubHeader from "./components/Layout/SubHeader";
import Products from "./components/Products/Products";

const App = () => {
  const [cartItemsCounter, setCartItemsCounter] = useState(0);

  const handleAddItems = () => {
    setCartItemsCounter(cartItemsCounter + 1);
  };

  const handleRemoveItems = () => {
    setCartItemsCounter(cartItemsCounter - 1);
  };

  return (
    <div>
      <Header cartItemsCounter={cartItemsCounter} />
      <SubHeader />
      <Products onAddItem={handleAddItems} onRemoveItem={handleRemoveItems} />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Hello World!") // This is traditional method while the above is modern method where we use JSX.
  // );
};

export default App;
