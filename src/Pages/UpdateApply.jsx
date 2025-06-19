import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateApply = () => {
  const location = useLocation();
  const oldData = location.state;
  const [formData, setFormData] = useState({
    firstName: oldData.firstName,
    lastName: oldData.lastName,
    contact: oldData.contact,
    additionalInfo: oldData.additionalInfo || "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:5000/applications/${oldData._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        toast.success("Updated Successfully!");
        navigate("/dashboard/myapply");
      }
    } catch (err) {
      toast.error("Update failed");
    }
  };

  return (
    <div>
      <title>Update Applications | Marathon Hub</title>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 mt-10">
        <h2 className="text-xl mb-4 font-bold text-center">
          Update Registration
        </h2>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="input input-bordered w-full mb-2"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="input input-bordered w-full mb-2"
          required
        />
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="input input-bordered w-full mb-2"
          required
        />
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          className="textarea textarea-bordered w-full mb-4"
          rows={3}
        ></textarea>
        <button className="btn btn-primary w-full">Update</button>
      </form>
    </div>
  );
};

export default UpdateApply;
