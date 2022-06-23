import { BiMessageSquareAdd } from "react-icons/bi";
import DashboardLayout from "../../layout/DashboardLayout";

const Subjects = () => {
  return (
    <DashboardLayout title={"Subject | Academic"}>
      <div className="p-4 bg-white">
        <h2 className="text-lg font-semibold text-gray-600 capitalize">
          subjects
        </h2>
        <div className="flex items-center justify-between mt-5">
          <div className="w-9/12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div>
                <select className="border py-2 w-full focus:outline-none focus:border focus:border-blue-500">
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
                <select className="border w-full py-2 focus:outline-none focus:border focus:border-blue-500">
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
          <div className="w-3/12 flex justify-end">
            <button className="bg-orange-500 py-2 px-5 rounded-sm text-white flex items-center justify-center gap-2 hover:bg-orange-400 transition duration-200 capitalize">
              <BiMessageSquareAdd />
              add subject
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Subjects;
