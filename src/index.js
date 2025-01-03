import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import Home from "./pages/Home.page";
import About from "./pages/About.page";
import NotFound from "./pages/NotFound.page";
import Search from "./pages/Search.page";

import store from "./store";
import Restaurant from "./pages/Restaurant.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <Restaurant />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
