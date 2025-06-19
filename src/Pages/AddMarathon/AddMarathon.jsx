import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

const AddMarathon = () => {
  const { user } = use(AuthContext);
  const [title, setTitle] = useState("");
  const [startRegDate, setStartRegDate] = useState(null);
  const [endRegDate, setEndRegDate] = useState(null);
  const [marathonDate, setMarathonDate] = useState(null);
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("10k");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());
  const [totalRegistrations] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const marathonData = {
      title,
      startRegistrationDate: startRegDate,
      endRegistrationDate: endRegDate,
      marathonStartDate: marathonDate,
      location,
      distance,
      description,
      image,
      createdAt: new Date(createdAt),
      totalRegistrations: parseInt(totalRegistrations),
      creatorEmail: user?.email,
      creatorName: user?.displayName,
    };

    try {
      //   const token = await user.getIdToken();
      const res = await fetch(
        "https://marathon-hub-ecru.vercel.app/marathons",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(marathonData),
        }
      );

      const result = await res.json();
      if (res.ok) {
        toast.success("Marathon added successfully!");
        // Reset form
        setTitle("");
        setStartRegDate(null);
        setEndRegDate(null);
        setMarathonDate(null);
        setLocation("");
        setDistance("10k");
        setDescription("");
        setImage("");
        setCreatedAt(new Date().toISOString().slice(0, 16));
        // setTotalRegistrations(0);
      } else {
        toast.error(result.message || "Failed to add marathon.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
      console.error(err);
    }
  };

  return (
    <div>
      <title>Add Marathon | Marathon Hub</title>
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-10 mt-10 text-center">
          Add A Marathon
        </h2>
        <div className="max-w-5xl mx-auto p-4">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Title */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <legend className="fieldset-legend">Marathon Title</legend>
              <input
                type="text"
                className="input input-bordered w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="e.g. Dhaka Half Marathon"
              />
              <p className="label">You can edit the title later</p>
            </fieldset>

            {/* Location */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <legend className="fieldset-legend">Location</legend>
              <input
                type="text"
                className="input input-bordered w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                placeholder="e.g. Dhaka, Bangladesh"
              />
              <p className="label">City or district name</p>
            </fieldset>

            {/* Start Registration Date */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <legend className="fieldset-legend">
                Start Registration Date
              </legend>
              <DatePicker
                selected={startRegDate}
                onChange={(date) => setStartRegDate(date)}
                className="input input-bordered w-full"
                required
                placeholderText="Pick a start date"
              />
              <p className="label">Registration opens</p>
            </fieldset>

            {/* End Registration Date */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <legend className="fieldset-legend">End Registration Date</legend>
              <DatePicker
                selected={endRegDate}
                onChange={(date) => setEndRegDate(date)}
                className="input input-bordered w-full"
                required
                placeholderText="Pick an end date"
              />
              <p className="label">Registration closes</p>
            </fieldset>

            {/* Marathon Start Date */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <legend className="fieldset-legend">Marathon Date</legend>
              <DatePicker
                selected={marathonDate}
                onChange={(date) => setMarathonDate(date)}
                className="input input-bordered w-full"
                required
                placeholderText="Pick marathon day"
              />
              <p className="label">When the run starts</p>
            </fieldset>

            {/* Running Distance */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <legend className="fieldset-legend">Running Distance</legend>
              <select
                className="select select-bordered w-full"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                required
              >
                <option value="3k">3k</option>
                <option value="10k">10k</option>
                <option value="25k">25k</option>
                <option value="35k">35k</option>
                <option value="75k">75k</option>
              </select>
              <p className="label">Choose a category</p>
            </fieldset>

            {/* Image URL */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4 md:col-span-2">
              <legend className="fieldset-legend">Marathon Image</legend>
              <input
                type="url"
                className="input input-bordered w-full"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                placeholder="https://example.com/image.jpg"
              />
              <p className="label">Image shown on event card</p>
            </fieldset>

            {/* Description */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4 md:col-span-2">
              <legend className="fieldset-legend">Description</legend>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="About the event..."
              ></textarea>
              <p className="label">Brief about this marathon</p>
            </fieldset>

            {/* Created At */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <legend className="fieldset-legend">Created At</legend>
              <input
                type="text"
                className="input input-bordered w-full"
                value={createdAt.toLocaleString()}
                readOnly
              />
              <p className="label">Automatically set when the form is opened</p>
            </fieldset>

            {/* Total Registrations */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <legend className="fieldset-legend">Total Registrations</legend>
              <input
                type="number"
                className="input input-bordered w-full"
                value={totalRegistrations}
                readOnly
              />
              <p className="label">
                Number of runners registered (starts at 0)
              </p>
            </fieldset>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button type="submit" className="btn btn-primary w-full md:w-1/3">
                Submit Marathon
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMarathon;
