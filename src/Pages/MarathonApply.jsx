// import React from "react";
// import { useParams } from "react-router";

// const MarathonApply = () => {
//   const { id } = useParams();
//   console.log(id);
//   return (
//     <div>
//       <h1>apply here</h1>
//     </div>
//   );
// };

// export default MarathonApply;

import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { useLocation } from "react-router";

const MarathonApply = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const setDetailData = location.state?.setDetailData;

  const [marathon, setMarathon] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    additionalInfo: "",
  });

  useEffect(() => {
    fetch(`https://marathon-hub-ecru.vercel.app/marathons/${id}`)
      .then((res) => res.json())
      .then((data) => setMarathon(data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = {
      email: user.email,
      marathonId: id,
      marathonTitle: marathon.title,
      startDate: marathon.marathonStartDate,
      ...formData,
    };

    try {
      // 1. Save registration
      const res = await fetch(
        `https://marathon-hub-ecru.vercel.app/applications`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registrationData),
        }
      );

      toast.success("Successfully Registered!");
      navigate("/dashboard/myapply");
    } catch (err) {
      // console.error(err);
      toast.error("Registration failed");
    }
  };

  if (!marathon)
    return (
      <div className="flex justify-center items-center min-h-screen h-40">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <>
      <title>Register | Marathon Hub</title>
      <div className="max-w-2xl mx-auto p-6 bg-base-100 shadow-lg rounded-xl mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Register for {marathon.title}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <fieldset className="border border-gray-300 p-4 rounded">
            <legend className="text-lg font-semibold">Registration Info</legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Marathon Title</label>
                <input
                  type="text"
                  value={marathon.title}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Start Date</label>
                <input
                  type="text"
                  value={new Date(
                    marathon.marathonStartDate
                  ).toLocaleDateString()}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  required
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="md:col-span-2">
                <label className="label">Additional Info</label>
                <textarea
                  name="additionalInfo"
                  rows="3"
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button type="submit" className="btn btn-primary">
                Submit Registration
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default MarathonApply;
