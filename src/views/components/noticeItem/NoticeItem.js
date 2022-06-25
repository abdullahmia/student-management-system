import { BiCalendarEdit, BiTime, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const NoticeItem = () => {
  return (
    <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
      <Link to="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="text-gray-500 pb-3 flex gap-2 items-center">
          <BiTime />
          <span>4 may 2022</span>
        </p>
      </Link>
      <p class="mb-3 font-normal text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className="flex gap-3 flex-wrap">
        <Link
          to="#"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
        <Link
          to="#"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 gap-3"
        >
          <span>Update</span>
          <BiCalendarEdit />
        </Link>
        <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 gap-2">
          <span>Delete</span>
          <BiTrash />
        </button>
      </div>
    </div>
  );
};

export default NoticeItem;
