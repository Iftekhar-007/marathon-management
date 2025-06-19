import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyApply = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/applications?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setApplications(data));
    }
  }, [user?.email]);

  const handleEdit = (application) => {
    navigate(`/dashboard/update/${application._id}`, { state: application });
  };

  //   const handleDelete = async (id) => {
  //     const confirm = window.confirm("Are you sure you want to delete?");
  //     if (!confirm) return;

  //     try {
  //       const res = await fetch(`http://localhost:5000/applications/${id}`, {
  //         method: "DELETE",
  //       });
  //       const data = await res.json();

  //       if (data.deletedCount > 0) {
  //         setApplications((prev) => prev.filter((a) => a._id !== id));
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

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
        fetch(`http://localhost:5000/applications/${id}`, {
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
              const remainningMarathon = applications.filter(
                (app) => app._id !== id
              );
              setApplications(remainningMarathon);
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

  const filteredApplications = applications.filter((app) =>
    `${app.marathonTitle} ${app.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">My Applications</h2>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by name..."
          className="input input-bordered w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredApplications.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Marathon Title</th>
                <th>Start Date</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((app, index) => (
                <tr key={app._id}>
                  <td>{index + 1}</td>
                  <td>{app.marathonTitle}</td>
                  <td>{new Date(app.startDate).toLocaleDateString()}</td>
                  <td>{app.firstName}</td>
                  <td>{app.lastName}</td>
                  <td>{app.contact}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(app)}
                      className="btn btn-xs btn-warning mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(app._id)}
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No applications found.</p>
      )}
    </div>
  );
};

export default MyApply;
