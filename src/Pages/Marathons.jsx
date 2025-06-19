import React, { useEffect, useState } from "react";
import MarathonCard from "../Components/MarathonCard";

const Marathons = ({ limit, upcoming }) => {
  const [marathons, setMarathons] = useState([]);
  const [sortLatestFirst, setSortLatestFirst] = useState(true);

  useEffect(() => {
    let url = "http://localhost:5000/marathons";

    if (limit) {
      url += `?limit=${limit}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let result = [...data];

        if (upcoming) {
          const today = new Date();
          result = result.filter((m) => new Date(m.marathonStartDate) > today);
        }

        result.sort((a, b) =>
          sortLatestFirst
            ? new Date(b.createdAt) - new Date(a.createdAt)
            : new Date(a.createdAt) - new Date(b.createdAt)
        );

        setMarathons(result);
      });
  }, [limit, upcoming, sortLatestFirst]);

  return (
    <div className="lg:w-[1440px] mx-auto my-20">
      <h2 className="lg:text-5xl font-bold mb-6 text-center">
        {upcoming ? "Upcoming Marathons" : "Marathons"}
      </h2>

      <div className="flex justify-end mb-4 px-4">
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setSortLatestFirst((prev) => !prev)}
        >
          Sort by: {sortLatestFirst ? "Latest" : "Oldest"}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {marathons.map((marathon) => (
          <MarathonCard key={marathon._id} marathon={marathon} />
        ))}
      </div>

      {limit && (
        <div className="text-center mt-10">
          <a href="/marathons" className="btn btn-outline btn-primary">
            See All Marathons
          </a>
        </div>
      )}
    </div>
  );
};

export default Marathons;
