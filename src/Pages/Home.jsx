import React from "react";
import Sliders from "../Components/Sliders";
import Marathons from "./Marathons";

const Home = () => {
  return (
    <div>
      <Sliders></Sliders>
      <Marathons limit={6} upcoming={true} />
    </div>
  );
};

export default Home;
