import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router';

const NotFound = () => {
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="text-center">
        
      
        <h1 className="text-7xl font-bold text-[#244D3F] mb-4">
          404
        </h1>

    
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>

 
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#244D3F] text-white px-5 py-3 rounded-lg hover:bg-[#1e3f33] transition"
        >
          <FaHome />
          Back to Home
        </Link>

      </div>
    </div>
    );
};

export default NotFound;