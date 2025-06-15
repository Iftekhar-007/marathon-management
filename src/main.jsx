import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Home from "./Pages/Home.jsx";
import Root from "./Layout/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home.jsx";
// import Login from "./Components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
