import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './components/layout/Index'
import App from './App'
import Layout from "./components/layout/Layout";
import Provider from './Context'


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout><Index /></Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);