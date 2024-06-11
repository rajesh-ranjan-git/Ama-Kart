// import React from "react";
import Header from "./components/Layout/Header";
import SubHeader from "./components/Layout/SubHeader";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <Products />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Hello World!") // This is traditional method while the above is modern method where we use JSX.
  // );
};

export default App;
