import { BiCalendarEdit, BiTrash } from "react-icons/bi";
import Image from "../common/Image";

const DepartmentItem = ({ department }) => {
  return (
    <div className="flex gap-5 border p-5">
      <div className="flex-none w-48 relative">
        <Image src={department?.image} />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-600">
          {department.name.toUpperCase()}
        </h2>
        <h2 className="text-gray-600">{department.semester}th Semester</h2>
        <div className="mt-2 flex gap-2 items-center">
          <button class="inline-flex items-center py-1 px-3 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 gap-3">
            <span>Update</span>
            <BiCalendarEdit />
          </button>
          <button class="inline-flex items-center py-1 px-3 text-sm font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 gap-2">
            <span>Delete</span>
            <BiTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentItem;
