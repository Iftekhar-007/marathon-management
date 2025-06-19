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
import MarathonDetails from "./Pages/MarathonDetails.jsx";
import NotFound from "./Pages/notFound.jsx";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes.jsx";
import MyMarathons from "./Pages/MyMarathons.jsx";
import EditMarathon from "./Pages/EditMarathon.jsx";
import MarathonApply from "./Pages/MarathonApply.jsx";
import MyApply from "./Pages/MyApply.jsx";
import UpdateApply from "./Pages/UpdateApply.jsx";
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
        // Component: Marathons,
        element: (
          <PrivateRoutes>
            <Marathons></Marathons>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "addmarathon",
            element: (
              <PrivateRoutes>
                <AddMarathon></AddMarathon>
              </PrivateRoutes>
            ),
          },
          {
            path: "mymarathons",
            element: (
              <PrivateRoutes>
                <MyMarathons></MyMarathons>
              </PrivateRoutes>
            ),
          },
          {
            path: "edit/:id",
            element: (
              <PrivateRoutes>
                <EditMarathon></EditMarathon>
              </PrivateRoutes>
            ),
          },
          {
            path: "update/:id",
            element: (
              <PrivateRoutes>
                <UpdateApply></UpdateApply>
              </PrivateRoutes>
            ),
          },

          {
            path: "myapply",
            element: (
              <PrivateRoutes>
                <MyApply></MyApply>
              </PrivateRoutes>
            ),
          },
        ],
      },

      {
        path: "/marathons/:id",
        // Component: MarathonDetails,
        element: (
          <PrivateRoutes>
            <MarathonDetails></MarathonDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/marathonapply/:id",
        // Component: MarathonApply,
        element: (
          <PrivateRoutes>
            <MarathonApply></MarathonApply>
          </PrivateRoutes>
        ),
      },
      {
        path: "*",
        Component: NotFound,
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
