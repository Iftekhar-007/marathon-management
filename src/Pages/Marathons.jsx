import React, { useEffect, useState } from "react";
import MarathonCard from "../Components/MarathonCard";

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/marathons")
      .then((res) => res.json())
      .then((data) => setMarathons(data));
  }, []);
  return (
    <div className="lg:w-[1440px] mx-auto my-20">
      <h2 className="lg:text-5xl font-bold mb-10 text-center">
        Total Marathons:{marathons.length}
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {marathons.map((marathon) => (
          <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>
        ))}
      </div>
    </div>
  );
};

export default Marathons;
