import jwt_decode from "jwt-decode";
import { BiNotification } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import TeacherSidebar from "./TeacherSidebar";

const Sidebar = () => {
  let decodedToken;
  let token = localStorage.getItem("token");
  if (token) {
    token = token.split(" ")[1].trim();
    decodedToken = jwt_decode(token);
  }

  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 text-white h-full transition-all duration-300 border-none z-10 bg-gray-600">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          {decodedToken.role === "teacher" ? (
            <TeacherSidebar />
          ) : (
            <AdminSidebar />
          )}

          <li>
            <NavLink
              to="/notice"
              className={(navInfo) =>
                navInfo.isActive
                  ? "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6 hover:bg-gray-500 transition duration-300 bg-gray-500"
                  : "relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6 hover:bg-gray-500 transition duration-300"
              }
              end={true}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <BiNotification />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Notice Board
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
