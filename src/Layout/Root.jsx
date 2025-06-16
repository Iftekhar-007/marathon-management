import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
