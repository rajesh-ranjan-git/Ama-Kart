import React from "react";
import Header from "./components/Layout/Header";
import SubHeader from "./components/Layout/SubHeader";
import Products from "./components/Products/Products";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <Outlet />
    </div>
  );
};

export default App;
