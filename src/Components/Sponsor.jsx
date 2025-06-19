import React from "react";

const Sponsor = () => {
  return (
    <div className="lg:w-[1440px] mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-10">
        Sponsoring Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <img
          className="h-[220px] w-[220px]"
          src="https://i.postimg.cc/Vv9697Zn/circular-saw-1700037-640.png"
          alt="sponsor"
        />
        <img
          className="h-[220px] w-[220px]"
          src="https://i.postimg.cc/fb6TG46Y/logo-7462411-640.png"
          alt="sponsor"
        />
        <img
          className="h-[220px] w-[220px]"
          src="https://i.postimg.cc/NG8fzzbr/logo-2537871-640.png"
          alt="sponsor"
        />
        <img
          className="h-[220px] w-[220px]"
          src="https://i.postimg.cc/rptqCnKs/brand-7833518-640.png"
          alt="sponsor"
        />
      </div>
    </div>
  );
};

export default Sponsor;
