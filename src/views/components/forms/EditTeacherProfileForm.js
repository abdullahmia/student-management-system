import { useState } from "react";

const EditTeacherProfileForm = ({ user }) => {
  const [data, setData] = useState({
    firstName: user.user.firstName,
    lastName: user.user.lastName,
    phoneNumber: user?.phoneNumber === undefined ? "" : user?.phoneNumber,
    country: user?.country === undefined ? "" : user?.country,
    city: user?.city === undefined ? "" : user?.city,
    presentAddress:
      user?.presentAddress === undefined ? "" : user?.presentAddress,
    parmanentAddress:
      user?.parmanentAddress === undefined ? "" : user?.parmanentAddress,
    dateOfBirth: user?.dateOfBirth === undefined ? "" : user?.dateOfBirth,
    religion: user?.religion === undefined ? "" : user?.religion,
  });
  console.log(user.user.firstName);
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fname"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            First Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
            placeholder="Jhon"
            required
          />
        </div>
        <div>
          <label
            htmlFor="lname"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
            placeholder="Doe"
            required
          />
        </div>

        <div>
          <label
            htmlFor="contactNumber"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Contact Number
          </label>
          <input
            type="number"
            name="contactNumber"
            id="contactNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
            placeholder="Contact Number"
            required
          />
        </div>
        <div>
          <label
            htmlFor="contactNumber"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Present Address
          </label>
          <textarea
            type="number"
            name="contactNumber"
            id="contactNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
            placeholder="Present Address"
            required
          />
        </div>
        <div>
          <label
            htmlFor="contactNumber"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Parmanent Address
          </label>
          <textarea
            type="number"
            name="contactNumber"
            id="contactNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
            placeholder="Parmanent Address"
            required
          />
        </div>
        <div>
          <label
            htmlFor="contactNumber"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Date of birth
          </label>
          <input
            type="date"
            name="contactNumber"
            id="contactNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
            placeholder="Parmanent Address"
            required
          />
        </div>
        <div>
          <label
            htmlFor="contactNumber"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Religion
          </label>
          <input
            type="text"
            name="contactNumber"
            id="contactNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
            placeholder="Religion"
            required
          />
        </div>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded uppercase mt-4">
        Update
      </button>
    </div>
  );
};

export default EditTeacherProfileForm;
