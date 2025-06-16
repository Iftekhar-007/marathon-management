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
import Marathons from "./Pages/Marathons.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import AddMarathon from "./Pages/AddMarathon/AddMarathon.jsx";
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
      {
        path: "/marathons",
        Component: Marathons,
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "/addmarathon",
        Component: AddMarathon,
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
