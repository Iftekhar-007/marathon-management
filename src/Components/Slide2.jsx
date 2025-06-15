import React from "react";

const Slide2 = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/cHWTVp0J/pexels-runffwpu-2567025.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-7xl font-bold font-roboto leading-20">
              Join Hobby Communities <br /> That Inspire You
            </h1>
            <p className="mb-5 font-roboto text-base">
              Connect with like-minded people in your area. Whether you're a
              beginner or <br /> an expert, there's a place for you to grow{" "}
              <br /> and thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
