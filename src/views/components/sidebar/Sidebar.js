import { BiUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 text-gray-900 h-full transition-all duration-300 border-none z-10 bg-slate-100">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <AdminSidebar />
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Profile
              </div>
            </div>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={(navInfo) =>
                navInfo.isActive
                  ? "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6 hover:bg-white transition duration-300 bg-white"
                  : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6 hover:bg-white transition duration-300"
              }
              end={true}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <BiUserCircle />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Profile
              </span>
            </NavLink>
          </li>
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
          Copyright @2022
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
