import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <title>Error | Marathon Hub</title>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
        <img
          src="https://i.ibb.co/1JvswfQm/404.gif"
          alt="404 Not Found"
          className="w-80 md:w-[500px] mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Oops! Page not found
        </h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
