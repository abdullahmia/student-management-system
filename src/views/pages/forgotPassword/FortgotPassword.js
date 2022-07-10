import cogoToast from "cogo-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { useForgotPasswordMutation } from "../../../redux/services/authService";
import Layout from "../layout/Layout";

const FortgotPassword = () => {
  const [message, setMessage] = useState(null);

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const { register, handleSubmit, reset } = useForm();

  // forgot password submit
  const forgotPasswordSubmit = async (data) => {
    await forgotPassword(data).then((result) => {
      if (result.data) {
        cogoToast.success(result?.data?.message);
        reset();
      } else if (result.error) {
        setMessage(result.error.data.message);
      }
    });
  };
  return (
    <Layout title={"Forgot password"}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium self-center">
            <img src={logo} alt="Logo" />
          </div>

          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                Enter email to reset your password
              </span>
            </div>
          </div>
          {message && (
            <div className="bg-red-400 mt-6 text-white p-4 rounded-md">
              <h3>{message}</h3>
            </div>
          )}
          <div className="mt-10">
            <form onSubmit={handleSubmit(forgotPasswordSubmit)}>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    {...register("email")}
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="E-Mail Address"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">
                    {isLoading ? (
                      <BiLoaderAlt className="inline w-4 h-4 mr-3 text-white animate-spin" />
                    ) : (
                      <>
                        <span className="flex items-center gap-2">
                          Forgot Password
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link
              to="/signup"
              className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
            >
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
              <span className="ml-2">You don't have an account?</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FortgotPassword;
