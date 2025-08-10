import React from "react";
import Header from "../Components/Header";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div>
      {!isDashboard && <Header />}
      <Outlet />
      {!isDashboard && <Footer />}
      <ToastContainer />
    </div>
  );
};

export default Root;
