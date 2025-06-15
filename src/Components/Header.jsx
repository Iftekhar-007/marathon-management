import React from "react";
import { NavLink } from "react-router";
// import { AuthContext } from "../Context/AuthContext";
// import { toast } from "react-toastify";
// import { Tooltip } from "react-tooltip";

const Header = () => {
  //   const { user, logOutUser } = use(AuthContext);
  //   console.log(user);

  //   const handleLogOut = () => {
  //     logOutUser()
  //       .then(() => {
  //         toast.success("User logged out successfully!");
  //       })
  //       .catch((error) => console.log(error.message));
  //   };

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar lg:w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink>All Groups</NavLink>
              </li>
              <li>
                <NavLink>My groups</NavLink>
              </li>
              <li>
                <NavLink>Create Group</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="text-2xl font-bold">
            Ru<span className="text-orange-500">N</span>N
          </NavLink>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink>All Groups</NavLink>
            </li>
            <li>
              <NavLink>My groups</NavLink>
            </li>
            <li>
              <NavLink>Create Group</NavLink>
            </li>
          </ul>
        </div> */}
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink>All Groups</NavLink>
              </li>
              <li>
                <NavLink>My groups</NavLink>
              </li>
              <li>
                <NavLink>Create Group</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <NavLink to="/login" className="btn">
              Log In
            </NavLink>
            <NavLink to="/Register" className="btn">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
