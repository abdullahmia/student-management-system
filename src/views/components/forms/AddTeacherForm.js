import { Dialog, Transition } from "@headlessui/react";
import cogoToast from "cogo-toast";
// import cogoToast from "cogo-toast";
import { Fragment, useRef } from "react";
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";
import { cities } from "../../../data/data";
import { useCreateUserMutation } from "../../../redux/services/authService";

export default function UserForm({ isFormOpen, setIsFormOpen, type }) {
  const cancelButtonRef = useRef(null);
  const { register, handleSubmit, reset } = useForm();

  // create user mution
  const [createUser, { isLoading }] = useCreateUserMutation();

  // add user form submit
  const addUserFormSubmit = async (data) => {
    let role = "teacher";
    const formdata = new FormData();
    formdata.append("firstName", data.firstName);
    formdata.append("lastName", data.lastName);
    formdata.append("email", data.email);
    formdata.append("number", data.number);
    formdata.append("country", data.country);
    formdata.append("city", data.city);
    formdata.append("address", data.address);
    formdata.append("dateOfBirth", data.dateOfBirth);
    formdata.append("religion", data.religion);
    formdata.append("image", data.image[0]);
    formdata.append("role", role);

    await createUser(formdata).then((result) => {
      if (result.data) {
        cogoToast.success(result.data.message);
        reset();
        setIsFormOpen(!isFormOpen);
      } else if (result.error) {
        cogoToast.error(result.error.data.message);
      }
    });
  };
  return (
    <Transition.Root show={isFormOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setIsFormOpen}
      >
        <div
          className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
         sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg
               text-left 
            overflow-hidden shadow-xl 
            transform transition-all 
            sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="relative bg-white rounded-lg shadow">
                  <button
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div className="py-6 px-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900">
                      Add a new Teacher
                    </h3>
                    <form
                      onSubmit={handleSubmit(addUserFormSubmit)}
                      className="space-y-6"
                      action="#"
                    >
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
                          {...register("firstName")}
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
                          {...register("lastName")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
                          placeholder="Doe"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          {...register("email")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Contact Number
                        </label>
                        <input
                          type="number"
                          name="number"
                          id="email"
                          {...register("number")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
                          placeholder="0170000000"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="country"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          id="email"
                          {...register("country")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
                          placeholder="Bangladesh"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="city"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          City
                        </label>
                        <select
                          {...register("city")}
                          className="form-select appearance-none block w-full px-3 py-1.5 text font text-gray-700 bg-gray-50 bg-clip-padding bg-no-repeat border border- border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-label="Default select example"
                        >
                          {cities.map((city, key) => (
                            <option value={city.name} key={key}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="address"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Address
                        </label>
                        <textarea
                          type="text"
                          name="address"
                          id="address"
                          {...register("address")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
                          placeholder="Address"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="dob"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Date of birth
                        </label>
                        <input
                          type="date"
                          name="dob"
                          id="dob"
                          {...register("dateOfBirth")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
                          placeholder="Dath of birth"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="religion"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Religion
                        </label>
                        <input
                          type="text"
                          name="religion"
                          id="religion"
                          {...register("religion")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
                          placeholder="Religion"
                          required
                        />
                      </div>

                      <div>
                        <label
                          class="block mb-2 text-sm font-medium text-gray-900 "
                          for="file_input"
                        >
                          Image
                        </label>
                        <input
                          {...register("image")}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5 "
                          id="file_input"
                          type="file"
                          required
                        ></input>
                      </div>

                      <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase"
                      >
                        {isLoading ? (
                          <BiLoaderAlt className="inline w-4 h-4 mr-3 text-white animate-spin" />
                        ) : (
                          "Add"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
