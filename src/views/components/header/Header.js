import { useNavigate } from "react-router-dom";
import Image from "../common/Image";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="fixed shadow-md bg-white text-gray-900 w-full flex items-center justify-between h-14 z-10">
      <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 border-none">
        <Image
          src={user?.image}
          classname="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
        />
        <span className="hidden md:block">
          {user?.firstName} {user?.lastName}
        </span>
      </div>
      <div className="flex justify-between items-center h-14 header-right">
        <ul className="flex items-center">
          <li>
            <div className="block w-px h-6 mx-3 bg-gray-400"></div>
          </li>
          <li>
            <button
              onClick={logout}
              className="flex items-center mr-4 hover:text-gray-700 transition"
            >
              <span className="inline-flex mr-1">
                <svg
                  className="w-5 h-5 hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </span>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
