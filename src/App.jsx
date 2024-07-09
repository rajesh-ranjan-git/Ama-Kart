import React from "react";
import { useState } from "react";
import Header from "./components/Layout/Header";
import SubHeader from "./components/Layout/SubHeader";
import Products from "./components/Products/Products";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddItems = (item) => {
    let items = [...cartItems];
    let index = items.findIndex((i) => i.id === item.id);
    if (index > -1) {
      items[index] = item;
    } else {
      items.push(item);
    }
    setCartItems([...items]);
    // setCartItems(cartItems + 1);
  };

  const handleRemoveItems = (item) => {
    let items = [...cartItems];
    let index = items.findIndex((i) => i.id === item.id);
    if (items[index].quantity === 0) {
      items.splice(index, 1);
    } else {
      items[index] = item;
    }
    setCartItems([...items]);
    // setCartItems(cartItems - 1);
  };

  return (
    <div>
      <Header count={cartItems.length} items={cartItems} />
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
