import React from "react";
import Sliders from "../Components/Sliders";
import Marathons from "./Marathons";
// import UpComing from "../Components/UpComing";
import Legends from "../Components/Legends";
import Sponsor from "../Components/Sponsor";

const Home = () => {
  return (
    <>
      <title>Home | Marathon Hub</title>
      <div className="bg-base-100">
        <Sliders></Sliders>
        <Marathons limit={6} upcoming={true} />
        <Marathons limit={6} />
        <Legends></Legends>
        <Sponsor></Sponsor>
      </div>
    </>
  );
};

export default Home;
