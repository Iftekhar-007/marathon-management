import React from "react";
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen lg:w-[1440px] mx-auto my-20">
      {/* Left Navigation */}
      <nav className="col-span-3 bg-base-200 p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4 text-center">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="addmarathon"
              className={({ isActive }) =>
                `btn w-full ${isActive ? "btn-primary" : "btn-ghost"}`
              }
            >
              Add Marathon
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mymarathons"
              className={({ isActive }) =>
                `btn w-full ${isActive ? "btn-primary" : "btn-ghost"}`
              }
            >
              My Marathon List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="my-applies"
              className={({ isActive }) =>
                `btn w-full ${isActive ? "btn-primary" : "btn-ghost"}`
              }
            >
              My Apply List
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Dynamic Content */}
      <main className="col-span-9 bg-base-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
