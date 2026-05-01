import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#F8FAFC] py-16 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Friends to keep close in your life
      </h1>

      <p className="text-gray-500 max-w-xl mx-auto mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="bg-[#244D3F] hover:bg-green-800 text-white px-6 py-2 rounded-md transition">
        + Add a Friend
      </button>
    </div>
  );
};

export default Banner;
