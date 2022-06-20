import { BiFilterAlt } from "react-icons/bi";
import TeacherItem from "../../../components/teacherItem/TeacherItem";
import DashboardLayout from "../../layout/DashboardLayout";

const Teachers = () => {
  return (
    <DashboardLayout title={"Teachers | Dashbaord"}>
      <div class="h-full ml-14 mt-14 mb-10 md:ml-64 p-5">
        <div className="w-full bg-white p-5 rounded">
          <h2 className="capitalize font-semibold text-xl text-gray-700">
            teachers
          </h2>

          {/* Teacher filtering */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search by teacher name"
              className="w-full border px-3 py-1.5 focus:border-blue-600 focus:outline-none rounded"
            />
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text font text-gray-700 bg-white bg-clip-padding bg-no-repeat border border- border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>Filter by deparment</option>
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
      </div>
    </DashboardLayout>
  );
};

export default Teachers;
