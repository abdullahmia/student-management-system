import { useState } from "react";
import { BiFilterAlt, BiMessageSquareAdd } from "react-icons/bi";
import DepartmentItem from "../../../components/departmentItem/DepartmentItem";
import AddDepartmentForm from "../../../components/forms/AddDepartmentForm";
import DashboardLayout from "../../layout/DashboardLayout";

const Department = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <DashboardLayout title={"Department | Academic"}>
      <div className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-lg font-semibold text-gray-600">
          Our Academic Departments
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
          <div className="flex gap-3">
            <select
              className="form-select appearance-none block w-full px-3 py-1.5 text font text-gray-700 bg-white bg-clip-padding bg-no-repeat border border- border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
            </select>
            <button className="bg-blue-700 py-2 px-4 text-white flex items-center justify-center gap-2 hover:bg-blue-800 transition duration-200 rounded">
              <BiFilterAlt />
              <span>Filter</span>
            </button>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="bg-orange-500 py-2 px-5 rounded-sm text-white flex items-center justify-center gap-2 hover:bg-orange-400 transition duration-200"
            >
              <BiMessageSquareAdd />
              Add Department
            </button>
            <AddDepartmentForm
              type="teacher"
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <DepartmentItem />
          <DepartmentItem />
          <DepartmentItem />
          <DepartmentItem />
          <DepartmentItem />
          <DepartmentItem />
          <DepartmentItem />
          <DepartmentItem />
          <DepartmentItem />
          <DepartmentItem />
          <DepartmentItem />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Department;
