import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets_frontend/assets";

const Navbar = () => {
  const [token, setToken] = useState(true);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbar py-5 space-x-5 flex w-full justify-between items-center mb-4 mt-3 border-b-2 text-sm border-gray-500 relative">
      <NavLink to="/">
        <img src={assets.logo} alt="" />
      </NavLink>

      <ul className="menu-links hidden md:flex gap-5 ">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none w-3/5 bg-blue-500 m-auto"></hr>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none w-3/5 bg-blue-500 m-auto"></hr>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none w-3/5 bg-blue-500 m-auto"></hr>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none w-3/5 bg-blue-500 m-auto"></hr>
        </NavLink>
      </ul>
      <div className="  flex items-center  gap-4 cursor-pointer  ">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              alt="Profile"
              className="rounded-full w-10 h-10"
            />
            <img
              src={assets.dropdown_icon}
              alt="Dropdown"
              className="w-2 h-4 "
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium hidden group-hover:block">
              <div className="flex flex-col  gap-4 text-sm min-w-48 bg-stone-100 p-5 ">
                <p onClick={() => navigate("/my-profile")}>My profile</p>
                <p onClick={() => navigate("/my-appointment")}>
                  MyAppointments
                </p>
                <p onClick={() => setToken(false)}>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="relative px-4 py-2 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setMenu(true)}
          src={assets.menu_icon}
          alt=""
          className="block md:hidden w-6 "
        />
        <div
          className={`${
            menu ? " fixed w-full h-full" : "h-0 w-0"
          }
           block md:hidden right-0 bottom-0 top-0 z-50 overflow-hidden bg-white transition-all duration-300`}
        >
          <div className="flex justify-between px-6 py-3">
            <img src={assets.logo} alt="" className="w-40" />
            <img
              onClick={() => setMenu(false)}
              src={assets.cross_icon}
              alt=""
              className="block md:hidden w-10"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 font-semibold">
            <NavLink to="/">
              <li className="hover:bg-blue-500 hover:text-white px-4 py-2 text-black">
                HOME
              </li>
            </NavLink>
            <NavLink to="/doctors">
              <li className="hover:bg-blue-500 hover:text-white px-4 py-2 text-black">
                ALL DOCTORS
              </li>
            </NavLink>
            <NavLink to="/about">
              <li className="hover:bg-blue-500 hover:text-white px-4 py-2">
                ABOUT
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="hover:bg-blue-500 hover:text-white px-4 py-2">
                CONTACT
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
