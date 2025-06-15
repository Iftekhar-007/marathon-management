import React from "react";

const Slide1 = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/KYChBvPH/Untitled-design-5.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-7xl font-bold font-roboto leading-20">
              Discover New Passions Near You
            </h1>
            <p className="mb-5 font-roboto text-base">
              From painting to photography, gardening to gaming—find local
              groups that share your <br /> interests and make new friends along
              the way
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
