import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import MyMaraCard from "../Components/MyMaraCard";
import { CiLocationOn } from "react-icons/ci";

const MyMarathons = () => {
  const { user } = use(AuthContext);
  const [createdMarathon, setCreatedMarathon] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mymarathons?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCreatedMarathon(data));
  }, [user.email]);
  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold mb-10">
        My Marathons
      </h2>

      <h4 className="font-bold">
        My Added Marathons Total : {createdMarathon.length}
      </h4>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Marathons</th>
              <th>Date(marathon start day)</th>
              <th>View</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {createdMarathon.map((mar) => (
              <tr key={mar._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={mar.image} alt="marathon" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{mar.title}</div>
                      <div className="text-sm opacity-50 flex items-center gap-2">
                        <CiLocationOn /> {mar.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{mar.marathonStartDate}</td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMarathons;
