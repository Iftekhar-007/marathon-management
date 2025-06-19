import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import locationLot from "../assets/location.json";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Lottie from "lottie-react";
import calendarLot from "../assets/calendar.json";
import { FaPersonRunning } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdOutlinePeople } from "react-icons/md";

const MarathonDetails = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  // const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/marathons/${id}`)
      .then((res) => res.json())
      .then((data) => setDetailData(data));
  }, [id]);

  const startDate = new Date(detailData.startRegistrationDate);
  const now = new Date();
  const remainingTime = Math.max((startDate - now) / 1000, 0); // in seconds

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (60 * 60 * 24));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / 3600);
    return `${days}d ${hours}h`;
  };

  return (
    <div className="lg:w-[1440px] lg:mx-auto lg:my-20 grid grid-cols-12 gap-6">
      <div className="md:col-span-9 col-span-12">
        <h2 className="text-3xl font-bold mb-4">{detailData.title}</h2>
        <img className="my-4" src={detailData.image} alt="" />
        <p>{detailData.description}</p>
        <div className="flex justify-start items-center gap-2.5 my-4">
          <Lottie
            animationData={locationLot}
            loop={true}
            className="w-[20px]"
          ></Lottie>
          <p>
            <b>Location : </b>
            {detailData.location}
          </p>
        </div>

        <div className="flex justify-start items-center gap-2.5 my-4">
          <Lottie
            animationData={calendarLot}
            loop={true}
            className="w-[20px]"
          ></Lottie>
          <p>
            <b>Registration Start : </b>
            {detailData.startRegistrationDate}
          </p>
        </div>

        <div className="flex justify-start items-center gap-2.5 my-4">
          <Lottie
            animationData={calendarLot}
            loop={true}
            className="w-[20px]"
          ></Lottie>
          <p>
            <b>Registration end : </b>
            {detailData.endRegistrationDate}
          </p>
        </div>

        <div className="flex justify-start items-center gap-2.5">
          <FaPersonRunning />
          <p>
            <b>Distance : </b>
            {detailData.distance}
          </p>
        </div>
        <div className="flex justify-start items-center gap-2.5 my-4">
          <IoIosPeople />
          <p>
            <b>Total Participant : </b>
            {detailData.totalRegistrations}
          </p>
        </div>

        <div className="flex justify-start items-center gap-2.5">
          <MdOutlinePeople />
          <p>
            <b>Created By : </b>
            {detailData.creatorEmail}
          </p>
        </div>

        <NavLink
          to={`/marathonapply/${detailData._id}`}
          className={`btn ${
            new Date() < new Date(detailData.startRegistrationDate) ||
            new Date() > new Date(detailData.endRegistrationDate)
              ? "btn-disabled cursor-not-allowed opacity-50"
              : ""
          }`}
          disabled={
            new Date() < new Date(detailData.startRegistrationDate) ||
            new Date() > new Date(detailData.endRegistrationDate)
          }
        >
          Registration Now
        </NavLink>
      </div>

      <div className="md:col-span-3 col-span-12">
        {detailData.startRegistrationDate && (
          <div className="p-4 bg-white rounded-xl shadow-md space-y-2 text-center">
            <h3 className="text-lg font-semibold text-primary">
              Registration Starts In
            </h3>

            <div className="ml-[35%]">
              <CountdownCircleTimer
                isPlaying
                duration={remainingTime}
                colors={["#004777", "#F7B801", "#A30000"]}
                colorsTime={[remainingTime, remainingTime / 2, 0]}
                size={100}
              >
                {({ remainingTime }) => (
                  <div className="text-sm font-bold">
                    {formatTime(remainingTime)}
                  </div>
                )}
              </CountdownCircleTimer>
            </div>

            <p className="text-sm text-gray-500">
              Starts on: {startDate.toDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarathonDetails;
