import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container w-[1160px] mx-auto">
      <div className="navbar-list-items flex items-center justify-between pt-[47px] text-[#212832]">
        <div className="navbar-logo">
          <Link to="/">
            <img src={assets.logo} className="w-[115px]" alt="" />
          </Link>
        </div>
        <div className="navbar-menu space-x-16 ml-8 font-medium text-[17px] flex items-center">
          <a href="">Desitnations</a>
          <a href="">Hotels</a>
          <a href="">Flights</a>
          <a href="">Bookings</a>
          <a href="">Login</a>
          <div className="navbar-buttons space-x-10 font-medium text-[17px]">
            <button className="border border-[#212832] w-[102px] h-[40px] rounded-[5px] cursor-pointer">
              Sign up
            </button>
            <select name="" id="" className="cursor-pointer">
              <option value="eng">EN</option>
              <option value="bn">BN</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
