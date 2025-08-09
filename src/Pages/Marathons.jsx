import React, { useEffect, useState } from "react";
import MarathonCard from "../Components/MarathonCard";
// import AuthProvider from "../Context/AuthProvider";

const Marathons = ({ limit, upcoming }) => {
  const [marathons, setMarathons] = useState([]);
  const [sortLatestFirst, setSortLatestFirst] = useState(true);
  // const { loading, user } = AuthProvider();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let url = "https://marathon-hub-ecru.vercel.app/marathons?";

    if (limit) {
      url += `limit=${limit}&`;
    }

    if (upcoming) {
      url += `upcoming=true`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let result = [...data];

        result.sort((a, b) =>
          sortLatestFirst
            ? new Date(b.createdAt) - new Date(a.createdAt)
            : new Date(a.createdAt) - new Date(b.createdAt)
        );

        setMarathons(result);
        setLoading(false);
      });
  }, [limit, upcoming, sortLatestFirst]);

  return (
    <div>
      <title>Marathons | Marathon Hub</title>
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

        {loading ? (
          <div className="flex justify-center items-center min-h-screen h-40">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {marathons.map((marathon) => (
              <MarathonCard key={marathon._id} marathon={marathon} />
            ))}
          </div>
        )}

        {limit && (
          <div className="text-center mt-10">
            <a href="/marathons" className="btn btn-outline btn-primary">
              See All Marathons
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marathons;
