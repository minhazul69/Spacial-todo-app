import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navItem = (
    <>
      <li>
        <NavLink to="/">To-Do</NavLink>
      </li>
      <li>
        <NavLink to="/complete-task">Completed Task</NavLink>
      </li>
      <li>
        <NavLink to="/calendar">Calendar</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl sm:ms-auto">
          ToDo Apps
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItem}</ul>
      </div>
    </div>
  );
};

export default Header;
