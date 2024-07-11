import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/Products/Products";
import NotFound from "./components/Products/NotFound";
import Error from "./components/Products/Error";
import AuthIndex from "./components/Auth";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/:category?",
        element: <Products />,
      },
      // {
      //   path: "/:type(login|signup)",
      //   element: <AuthIndex />,
      // },
      {
        path: "/login",
        element: <AuthIndex />,
      },
      {
        path: "/signup",
        element: <AuthIndex />,
      },
      {
        path: "/404",
        element: <NotFound />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
