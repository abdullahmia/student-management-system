import { Dialog, Transition } from "@headlessui/react";
import cogoToast from "cogo-toast";
import { Fragment, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";
import { useGetDepartmentsQuery } from "../../../redux/services/deapartmentService";
import { useAddSubjectMutation } from "../../../redux/services/subjectService";

export default function AddSubjectForm({ isFormOpen, setIsFormOpen }) {
  const [message, setMessage] = useState(null);
  const cancelButtonRef = useRef(null);
  const { register, handleSubmit, reset } = useForm();

  // get all departments
  const { data: departments } = useGetDepartmentsQuery();

  // add new subject mutution
  const [addSubject, { isLoading }] = useAddSubjectMutation();

  // add user form submit
  const addUserFormSubmit = async (data) => {
    if (data.image.length > 0) {
      setMessage(null);
      const formData = new FormData();
      formData.append("semester", data.semester);
      formData.append("department", data.department);
      formData.append("name", data.name);
      formData.append("image", data.image[0]);

      await addSubject(formData).then((result) => {
        if (!result?.data?.error) {
          cogoToast.success(result?.data?.message);
          reset();
          setIsFormOpen(!isFormOpen);
        } else if (result?.data?.error) {
          cogoToast.error(result?.data?.message);
        }
      });
    } else {
      setMessage("Please prove an image");
    }
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
                      Add a new Department
                    </h3>
                    {message && (
                      <div className="bg-red-400 my-6 text-white p-4 rounded-md">
                        <h3>{message}</h3>
                      </div>
                    )}
                    <form
                      onSubmit={handleSubmit(addUserFormSubmit)}
                      className="space-y-6"
                      action="#"
                    >
                      <div>
                        <label
                          htmlFor="dname"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Subject Name
                        </label>
                        <input
                          type="text"
                          name="dname"
                          id="dname"
                          {...register("name")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
                          placeholder="Subject Name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="dname"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Semester
                        </label>
                        <select
                          {...register("semester")}
                          className="form-select appearance-none block w-full px-3 py-1.5 text font text-gray-700 bg-gray-50 bg-clip-padding bg-no-repeat border border- border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                      </div>
                      <div>
                        <label
                          htmlFor="dname"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Department
                        </label>
                        <select
                          {...register("department")}
                          className="border bg-gray-50 w-full py-2 px-2 focus:outline-none focus:border focus:border-blue-500"
                        >
                          {departments?.data.map((department, key) => (
                            <option key={key} value={department?._id}>
                              {department.name.toUpperCase()}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div class="flex justify-center items-center w-full">
                        <label
                          for="dropzone-file"
                          class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100"
                        >
                          <div class="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg
                              class="mb-3 w-10 h-10 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              ></path>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span class="font-semibold">
                                Click to upload department image
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            {...register("image")}
                            id="dropzone-file"
                            type="file"
                            class="hidden"
                          />
                        </label>
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
