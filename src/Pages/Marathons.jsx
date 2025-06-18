// // import React, { useEffect, useState } from "react";
// // import MarathonCard from "../Components/MarathonCard";

// // const Marathons = () => {
// //   const [marathons, setMarathons] = useState([]);
// //   useEffect(() => {
// //     fetch("http://localhost:5000/marathons")
// //       .then((res) => res.json())
// //       .then((data) => setMarathons(data));
// //   }, []);
// //   return (
// //     <div className="lg:w-[1440px] mx-auto my-20">
// //       <h2 className="lg:text-5xl font-bold mb-10 text-center">Marathons</h2>
// //       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
// //         {marathons.map((marathon) => (
// //           <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Marathons;

// import React, { useEffect, useState } from "react";
// import MarathonCard from "../Components/MarathonCard";

// const Marathons = ({ limit }) => {
//   const [marathons, setMarathons] = useState([]);

//   useEffect(() => {
//     const url = limit
//       ? `http://localhost:5000/marathons?limit=${limit}`
//       : "http://localhost:5000/marathons";

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setMarathons(data));
//   }, [limit]);

//   return (
//     <div className="lg:w-[1440px] mx-auto my-20">
//       <h2 className="lg:text-5xl font-bold mb-10 text-center">Marathons</h2>
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
//         {marathons.map((marathon) => (
//           <MarathonCard key={marathon._id} marathon={marathon} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marathons;

import React, { useEffect, useState } from "react";
import MarathonCard from "../Components/MarathonCard";

const Marathons = ({ limit, upcoming }) => {
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    let url = "http://localhost:5000/marathons";

    // Add limit param if needed
    if (limit) {
      url += `?limit=${limit}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (upcoming) {
          const today = new Date();

          // Filter out past marathons
          const filtered = data.filter(
            (m) => new Date(m.marathonStartDate) > today
          );

          setMarathons(filtered);
        } else {
          setMarathons(data);
        }
      });
  }, [limit, upcoming]);

  return (
    <div className="lg:w-[1440px] mx-auto my-20">
      <h2 className="lg:text-5xl font-bold mb-10 text-center">
        {upcoming ? "Upcoming Marathons" : "Marathons"}
      </h2>

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
