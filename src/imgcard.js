import React from "react";

const Imgcard = ({ image, message }) => {
  return (
    <div className="flex flex-col backdrop-blur-xl my-4 mr-2 ml-2 h-64 min-w-64 p-4 bg-purple-900 bg-opacity-20 rounded-lg">
      <img
        className="w-60 h-56 rounded-lg overflow-hidden object-cover items-center "
        src={image}
      />
      <h1 className="mt-4 text-white text-shadow text-lg font-semibold">
        {message}
      </h1>
    </div>
  );
};

export default Imgcard;
