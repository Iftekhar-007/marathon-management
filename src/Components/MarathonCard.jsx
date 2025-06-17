import React from "react";
import locationLottie from "../assets/location.json";
import run from "../assets/running.json";
import rightArrow from "../assets/right.json";
import calendarLot from "../assets/calendar.json";
import Lottie from "lottie-react";

const MarathonCard = ({ marathon }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            className="h-[580px] w-full object-cover"
            src={marathon.image}
            alt="marathon"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-start items-center gap-2.5">
            <h2 className="card-title">{marathon.title}</h2>
            <Lottie className="w-[44px]" animationData={run}></Lottie>
          </div>
          <div className="flex justify-start items-start gap-2.5">
            <p>
              <b>Description: </b>
              {marathon.description}
            </p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Lottie
              className="w-[20px]"
              animationData={locationLottie}
              loop={true}
            />
            <p>{marathon.location}</p>
          </div>

          <div className="flex justify-start items-center gap-2.5">
            <Lottie
              className="w-[20px]"
              animationData={calendarLot}
              loop={true}
            />
            <p>
              <b>Registration Start : </b>
              {marathon.startRegistrationDate}
            </p>
          </div>

          <div className="flex justify-start items-center gap-2.5">
            <Lottie
              className="w-[20px]"
              animationData={calendarLot}
              loop={true}
            />
            <p>
              <b>Registration End : </b>
              {marathon.endRegistrationDate}
            </p>
          </div>
          <div className="card-actions justify-start">
            <button className="btn border-0 bg-transparent hover:bg-transparent hover:border-0 hover:shadow-none text-red-400">
              View Details...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonCard;
