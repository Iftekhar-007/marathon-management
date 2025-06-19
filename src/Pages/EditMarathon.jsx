import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const EditMarathon = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [marathonData, setMarathonData] = useState({
    title: "",
    startRegistrationDate: null,
    endRegistrationDate: null,
    marathonStartDate: null,
    location: "",
    distance: "10k",
    description: "",
    image: "",
  });

  useEffect(() => {
    fetch(`https://marathon-hub-ecru.vercel.app/marathons/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMarathonData({
          title: data.title || "",
          startRegistrationDate: new Date(data.startRegistrationDate),
          endRegistrationDate: new Date(data.endRegistrationDate),
          marathonStartDate: new Date(data.marathonStartDate),
          location: data.location || "",
          distance: data.distance || "10k",
          description: data.description || "",
          image: data.image || "",
        });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarathonData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://marathon-hub-ecru.vercel.app/marathons/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(marathonData),
        }
      );
      const result = await res.json();
      if (res.ok) {
        toast.success("Marathon updated successfully!");
        navigate("/dashboard/mymarathons");
      } else {
        toast.error(result.message || "Failed to update.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      <title>Edit Marathon | Marathon Hub</title>
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-4xl font-bold text-center mb-8">Edit Marathon</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <fieldset className="bg-base-200 p-4 rounded-box">
            <legend className="font-semibold">Marathon Title</legend>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              value={marathonData.title}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 p-4 rounded-box">
            <legend className="font-semibold">Location</legend>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full"
              value={marathonData.location}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 p-4 rounded-box">
            <legend className="font-semibold">Start Registration Date</legend>
            <DatePicker
              selected={marathonData.startRegistrationDate}
              onChange={(date) =>
                setMarathonData((prev) => ({
                  ...prev,
                  startRegistrationDate: date,
                }))
              }
              className="input input-bordered w-full"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 p-4 rounded-box">
            <legend className="font-semibold">End Registration Date</legend>
            <DatePicker
              selected={marathonData.endRegistrationDate}
              onChange={(date) =>
                setMarathonData((prev) => ({
                  ...prev,
                  endRegistrationDate: date,
                }))
              }
              className="input input-bordered w-full"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 p-4 rounded-box">
            <legend className="font-semibold">Marathon Date</legend>
            <DatePicker
              selected={marathonData.marathonStartDate}
              onChange={(date) =>
                setMarathonData((prev) => ({
                  ...prev,
                  marathonStartDate: date,
                }))
              }
              className="input input-bordered w-full"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 p-4 rounded-box">
            <legend className="font-semibold">Running Distance</legend>
            <select
              name="distance"
              className="select select-bordered w-full"
              value={marathonData.distance}
              onChange={handleChange}
              required
            >
              <option value="3k">3k</option>
              <option value="10k">10k</option>
              <option value="25k">25k</option>
              <option value="35k">35k</option>
              <option value="75k">75k</option>
            </select>
          </fieldset>

          <fieldset className="bg-base-200 p-4 rounded-box md:col-span-2">
            <legend className="font-semibold">Marathon Image URL</legend>
            <input
              type="url"
              name="image"
              className="input input-bordered w-full"
              value={marathonData.image}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 p-4 rounded-box md:col-span-2">
            <legend className="font-semibold">Description</legend>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              rows="4"
              value={marathonData.description}
              onChange={handleChange}
              required
            />
          </fieldset>

          <div className="md:col-span-2 text-center">
            <button type="submit" className="btn btn-primary w-full md:w-1/3">
              Update Marathon
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditMarathon;
