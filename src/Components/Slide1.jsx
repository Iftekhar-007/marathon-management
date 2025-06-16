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
              Run Your Best Race
            </h1>
            <p className="mb-5 font-roboto text-base">
              Join our marathon, train with passion, and cross the finish line
              stronger. Your journey to greatness starts here in 2025!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
