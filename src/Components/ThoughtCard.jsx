import React from "react";

const ThoughtCard = ({ image, name, role, thought }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white hover:bg-orange-50 rounded-xl shadow-lg p-6 w-96 mx-4">
      {/* Left: Person Image */}
      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded-full border-4 border-gray-200"
      />

      {/* Right: Thought */}
      <div className="md:ml-4 mt-3 md:mt-0 text-center md:text-left">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>
        <p className="mt-2 text-gray-700 italic">“{thought}”</p>
      </div>
    </div>
  );
};

export default ThoughtCard;
