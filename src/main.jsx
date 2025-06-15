import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Home from "./Pages/Home.jsx";
import Root from "./Layout/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home.jsx";
import LogIn from "./Components/Login.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import SignUp from "./Components/SignUp.jsx";
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
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
