import React from "react";
import { FaChartPie, FaClock, FaHome } from "react-icons/fa";
import { NavLink } from "react-router";

const NavBar = () => {
  
    const linkStyle = ({ isActive }) =>
    isActive ? "text-white bg-[#244D3F] font-bold px-[18px] py-[4px] rounded" : "text-gray-600";
  
    return (
    <div className="flex justify-between p-4 shadow">
      <h1 className="text-xl font-bold"> <span className="font-extrabold text-2xl">Keen</span>  <span className="font-semibold text-2xl text-[#244D3F]">Keeper</span> </h1>

      <div className="flex gap-6">
        <NavLink to="/" className={linkStyle}>
          <FaHome className="inline" /> Home
        </NavLink>

        <NavLink to="/timeline" className={linkStyle}>
          <FaClock className="inline" /> Timeline
        </NavLink>

        <NavLink to="/stats" className={linkStyle}>
          <FaChartPie className="inline" /> Stats
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
