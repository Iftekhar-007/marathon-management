import React from "react";
import Sliders from "../Components/Sliders";
import Marathons from "./Marathons";
// import UpComing from "../Components/UpComing";
import Legends from "../Components/Legends";
import Sponsor from "../Components/Sponsor";
import ThoughtCard from "../Components/ThoughtCard";
import ThoughtMarquee from "../Components/ThoughtMarquee";

const Home = () => {
  return (
    <>
      <title>Home | Marathon Hub</title>
      <div className="bg-base-100">
        <div className="lg:mb-20">
          <Sliders></Sliders>
        </div>

        <div className="lg:bg-orange-50 py-10 rounded-2xl lg:w-[1680px] mx-auto lg:mt-10">
          <Marathons limit={6} upcoming={true} />
        </div>

        <div className="lg:my-20">
          <Marathons limit={6} />
        </div>

        <div className="lg:bg-orange-50 py-10 lg:w-[1680px] lg:mb-20 rounded-2xl mx-auto">
          <Legends></Legends>
        </div>

        <Sponsor></Sponsor>

        <div>
          <ThoughtMarquee />
        </div>
      </div>
    </>
  );
};

export default Home;
