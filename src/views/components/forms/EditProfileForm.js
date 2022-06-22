const EditProfileForm = () => {
  return (
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
          placeholder="Jhon"
          required
        />
      </div>
      <div>
        <label
          htmlFor="gender"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Gender
        </label>
        <select
          className="form-select appearance-none block w-full px-3 py-1.5 text font text-gray-700 bg-white bg-clip-padding bg-no-repeat border border- border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
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
          placeholder="Jhon"
          required
        />
      </div>
    </div>
  );
};

export default EditProfileForm;
