import { useState } from "react";
import { BiFilterAlt, BiMessageSquareAdd } from "react-icons/bi";
import { useGetUserByRoleQuery } from "../../../../redux/services/authService";
import Empty from "../../../components/common/Empty";
import UserForm from "../../../components/forms/AddTeacherForm";
import Loader from "../../../components/loader/Loader";
import TeacherItem from "../../../components/teacherItem/TeacherItem";
import DashboardLayout from "../../layout/DashboardLayout";

const Teachers = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { data: teachers, isLoading } = useGetUserByRoleQuery("teacher");

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
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-5 flex flex-nowrap gap-4">
            <input
              type="text"
              placeholder="Search by teacher name"
              className="w-full border px-3 py-1.5 focus:border-blue-600 focus:outline-none rounded"
            />

            <button className="bg-blue-700 py-2 px-4 text-white flex items-center justify-center gap-2 hover:bg-blue-800 transition duration-200">
              <BiFilterAlt />
              <span>Filter</span>
            </button>
          </div>

          {/* Teachers items */}
          {teachers?.data.length !== 0 ? (
            <div className="bg-white p-4 mt-4 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
              {teachers?.data.map((teacher, key) => (
                <TeacherItem teacher={teacher} />
              ))}
            </div>
          ) : (
            <Empty text="You haven't add any teacher. Add some teacher in your school." />
          )}
        </>
      )}
    </DashboardLayout>
  );
};

export default Teachers;
