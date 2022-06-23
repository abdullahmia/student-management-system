import { useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import AddStudentForm from "../../../components/forms/AddStudentForm";
import StudentTable from "../../../components/studentTable/StudentTable";
import DashboardLayout from "../../layout/DashboardLayout";

const Students = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <DashboardLayout title={"Student | Academic"}>
      <div className="p-4 bg-white">
        <h2 className="text-lg font-semibold">Student</h2>

        <div className="flex items-center justify-between mt-5">
          <div className="w-9/12">
            <div className="flex gap-5">
              <div>
                <input
                  type="number"
                  name="roll"
                  id="roll"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
                  placeholder="1500955039"
                  required
                />
              </div>
              <div>
                <select className="border py-2 px-2 w-full focus:outline-none focus:border focus:border-blue-500">
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                  <option value="4">4th</option>
                  <option value="5">5th</option>
                  <option value="6">6th</option>
                  <option value="7">7th</option>
                  <option value="8">8th</option>
                </select>
              </div>
              <div>
                <select className="border w-full px-2 py-2 focus:outline-none focus:border focus:border-blue-500">
                  <option value="computer">Computer</option>
                  <option value="civil">Civil</option>
                  <option value="civil">Electrical</option>
                  <option value="civil">Arche</option>
                  <option value="civil">Arche</option>
                </select>
              </div>
              <div className="">
                <button className="bg-blue-600 text-white py-2 px-6 rounded">
                  Filter
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="bg-orange-500 py-2 px-5 rounded-sm text-white flex items-center justify-center gap-2 hover:bg-orange-400 transition duration-200"
            >
              <BiMessageSquareAdd />
              Add Student
            </button>
            <AddStudentForm
              type={"student"}
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
            />
          </div>
        </div>
        <div className="mt-5">
          <StudentTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Students;
