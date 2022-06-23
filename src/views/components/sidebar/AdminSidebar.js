import { NavLink } from "react-router-dom";
// for admin sidebars
import { BiBookBookmark } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

const AdminSidebar = () => {
  return (
    <ul className="flex flex-col py-4 space-y-1">
      <li className="px-5 hidden md:block">
        <div className="flex flex-row items-center h-8">
          <div className="text-sm font-light tracking-wide text-gray-300 uppercase">
            Main
          </div>
        </div>
      </li>
      <li>
        <NavLink
          to="/admin"
          className={(navInfo) =>
            navInfo.isActive
              ? "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6 hover:bg-gray-500 transition duration-300 bg-gray-500"
              : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6 hover:bg-gray-500 transition duration-300"
          }
          end={true}
        >
          <span className="inline-flex justify-center items-center ml-4">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
        </NavLink>
      </li>

      <li className="px-5 hidden md:block">
        <div className="flex flex-row items-center h-8">
          <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
            Academic
          </div>
        </div>
      </li>

      <li>
        <NavLink
          to="/admin/department"
          className={(navInfo) =>
            navInfo.isActive
              ? "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6 hover:bg-gray-500transition duration-300 bg-gray-500"
              : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6 hover:bg-gray-500 transition duration-300"
          }
          end={true}
        >
          <span className="inline-flex justify-center items-center ml-4">
            <FaList />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">
            Department
          </span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/admin/subjects"
          className={(navInfo) =>
            navInfo.isActive
              ? "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6 hover:bg-gray-500 transition duration-300 bg-gray-500"
              : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6 hover:bg-gray-500 transition duration-300"
          }
          end={true}
        >
          <span className="inline-flex justify-center items-center ml-4">
            <BiBookBookmark />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">Subjects</span>
        </NavLink>
      </li>

      <li className="px-5 hidden md:block">
        <div className="flex flex-row items-center mt-5 h-8">
          <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
            Teachers
          </div>
        </div>
      </li>

      <li>
        <NavLink
          to="/admin/teachers"
          end={true}
          className={(navInfo) =>
            navInfo.isActive
              ? "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6 hover:bg-gray-500 transition duration-300 bg-gray-500"
              : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6 hover:bg-gray-500 transition duration-300"
          }
        >
          <span className="inline-flex justify-center items-center ml-4">
            <GiTeacher />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">Teachers</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default AdminSidebar;
