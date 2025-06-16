import React from "react";

const Slide3 = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/65Pc92tg/pexels-runffwpu-2083500.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-7xl font-bold font-roboto leading-20">
              Conquer the Course
            </h1>
            <p className="mb-5 font-roboto text-base ">
              Challenge yourself on our scenic marathon route. Push your limits,
              achieve your <br /> goals, and become a champion at our 2025
              event!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
