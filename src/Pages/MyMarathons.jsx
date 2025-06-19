import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import MyMaraCard from "../Components/MyMaraCard";
import { CiLocationOn } from "react-icons/ci";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyMarathons = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const [createdMarathon, setCreatedMarathon] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mymarathons?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCreatedMarathon(data));
  }, [user.email]);

  const handleDelete = (id) => {
    console.log();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/marathons/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainningMarathon = createdMarathon.filter(
                (mar) => mar._id !== id
              );
              setCreatedMarathon(remainningMarathon);
              console.log(result);
            }
            console.log("after delete", data);
          });
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        // console.log(result);
      }
    });
  };

  return (
    <>
      <title>My Marathons | Marathon Hub</title>
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
                <th>Marathons</th>
                <th>Date(marathon start day)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {createdMarathon.map((mar) => (
                <tr key={mar._id}>
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

                  <td className="space-x-2">
                    <button
                      onClick={() => navigate(`/marathons/${mar._id}`)}
                      className="btn btn-sm btn-info"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => navigate(`/dashboard/edit/${mar._id}`)}
                      className="btn btn-sm btn-warning"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(mar._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyMarathons;
