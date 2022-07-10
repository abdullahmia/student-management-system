import cogoToast from "cogo-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { useResetPasswordMutation } from "../../../redux/services/authService";
import Layout from "../layout/Layout";

const ResetPassword = () => {
  const [message, setMessage] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const { user, token } = useParams();
  const navigate = useNavigate();

  // reset password query
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  // reset password submit
  const resetPasswordSubit = async (data) => {
    const { newPassword, confirmPassword } = data;
    if (newPassword === confirmPassword) {
      await resetPassword({
        user: user,
        token: token,
        content: { newPassword, confirmPassword },
      }).then((result) => {
        if (result.data) {
          cogoToast.success(result?.data?.message);
          navigate("/login");
          reset();
        } else if (result.error) {
          cogoToast.error(result?.error?.data?.message);
          navigate("/singup");
          reset();
        }
      });
    } else {
      setMessage("Password and confirm password is not mathed");
    }
  };
  return (
    <Layout title={"Reset your password"}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium self-center">
            <img src={logo} alt="Logo" />
          </div>

          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                Set up a new password
              </span>
            </div>
          </div>
          {message && (
            <div className="bg-red-400 mt-6 text-white p-4 rounded-md">
              <h3>{message}</h3>
            </div>
          )}
          <div className="mt-10">
            <form onSubmit={handleSubmit(resetPasswordSubit)}>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="newPassword"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  New Password:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
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
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="newPassword"
                    type="text"
                    name="newPassword"
                    {...register("newPassword")}
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="New Password"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Confirm Password:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
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
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="confirmPassword"
                    type="text"
                    name="confirmPassword"
                    {...register("confirmPassword")}
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Confirm Password"
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
                          Reset Password
                        </span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
