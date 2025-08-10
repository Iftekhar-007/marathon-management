import React from "react";

const NewsletterCard = ({ image, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden w-full max-w-sm mx-auto">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>

        <div className="mt-4 flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
