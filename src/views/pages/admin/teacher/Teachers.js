import { useState } from "react";
import { BiFilterAlt, BiMessageSquareAdd } from "react-icons/bi";
import UserForm from "../../../components/forms/AddTeacherForm";
import TeacherItem from "../../../components/teacherItem/TeacherItem";
import DashboardLayout from "../../layout/DashboardLayout";

const Teachers = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <DashboardLayout title={"Teachers | Dashbaord"}>
      <div className="w-full bg-white p-5 rounded">
        <div className="flex items-center justify-between">
          <h2 className="capitalize font-semibold text-xl text-gray-700">
            teachers
          </h2>
          <div>
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="bg-orange-500 py-2 px-5 rounded-sm text-white flex items-center justify-center gap-2 hover:bg-orange-400 transition duration-200"
            >
              <BiMessageSquareAdd />
              Add Teacher
            </button>
            <UserForm
              type="teacher"
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
            />
          </div>
        </div>

        {/* Teacher filtering */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search by teacher name"
            className="w-full border px-3 py-1.5 focus:border-blue-600 focus:outline-none rounded"
          />
          <select
            defaultValue={"DEFAULT"}
            className="form-select appearance-none block w-full px-3 py-1.5 text font text-gray-700 bg-white bg-clip-padding bg-no-repeat border border- border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value="DEFAULT" disabled>
              Choose a department ...
            </option>
            <option value="1">Computer</option>
            <option value="2">Electrical</option>
            <option value="3">Civil</option>
            <option value="3">Medical</option>
          </select>
          <button className="bg-blue-700 py-2 text-white flex items-center justify-center gap-2 hover:bg-blue-800 transition duration-200">
            <BiFilterAlt />
            <span>Filter</span>
          </button>
        </div>

        {/* Teachers items */}
        <div className="text-gray-400 flex justify-between items-center pt-6">
          <h2>Search by department & name</h2>
          <h2>search result 12</h2>
        </div>
        <div className="mt-4 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Teachers;
