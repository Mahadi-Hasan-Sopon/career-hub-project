// import React from 'react'

import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo-transparent.png";

function Navbar() {
  return (
    <div>
      <nav className="border-b border-gray-200 mx-32 p-2">
        <div className="flex flex-wrap items-center justify-between p-4">
          <Link
            to="https://career-hub-practice.surge.sh"
            className="flex items-center"
          >
            <img src={Logo} className="w-1/2" alt="CareerHub Logo" />
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-6 py-3 text-center mr-3 md:mr-0"
            >
              Star Applying
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-lg">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "hover:text-pink-500 text-purple-600"
                    : isActive
                    ? "text-purple-600"
                    : "hover:text-pink-500"
                }
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "hover:text-pink-500 text-purple-600"
                    : isActive
                    ? "text-purple-600"
                    : "hover:text-pink-500"
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "hover:text-pink-500 text-purple-600"
                    : isActive
                    ? "text-purple-600"
                    : "hover:text-pink-500"
                }
                to="/jobs"
              >
                Applied Jobs
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "hover:text-pink-500 text-purple-600"
                    : isActive
                    ? "text-purple-600"
                    : "hover:text-pink-500"
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
