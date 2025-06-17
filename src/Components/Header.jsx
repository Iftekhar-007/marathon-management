import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "synthwave" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const { user, logOutUser } = use(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("User logged out successfully!");
      })
      .catch((error) => console.log(error.message));
  };

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
                <NavLink to="/marathons">Marathons</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="text-2xl font-bold">
            Ru<span className="text-orange-500">N</span>n
          </NavLink>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allgroups">All Groups</NavLink>
            </li>
            <li>
              <NavLink to={`/mygroups/${user?.email}`}>My groups</NavLink>
            </li>
            <li>
              <NavLink to="/creategroup">Create Group</NavLink>
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
                <NavLink to="/marathons">Marathons</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
          {user ? (
            <>
              <img
                className="w-[40px] rounded-[50%] mr-3"
                src={user.photoURL}
                alt=""
                // title={user.displayName}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                data-tooltip-place="bottom"
              />
              <Tooltip id="my-tooltip" effects="solid" className="!z-[9999]" />

              <button onClick={handleLogOut} className="btn">
                Log Out
              </button>
              {/* <ToastContainer></ToastContainer> */}
            </>
          ) : (
            <div className="flex items-center gap-3">
              <NavLink to="/login" className="btn">
                Log In
              </NavLink>
              <NavLink to="/signUp" className="btn">
                Register
              </NavLink>
            </div>
          )}

          <div>
            <button
              onClick={toggleTheme}
              className="btn border-0 bg-transparent flex items-center gap-2 ml-3"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
