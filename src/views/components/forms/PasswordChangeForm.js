import cogoToast from "cogo-toast";
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";
import { useChangePasswordMutation } from "../../../redux/services/authService";

const PasswordChangeForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  // password change function
  const passwordChanage = async (data) => {
    await changePassword(data).then((result) => {
      if (result.data) {
        cogoToast.success(result?.data?.message);
        reset();
      }
      if (result.error) {
        cogoToast.error(result?.error?.data?.message);
      }
    });
  };
  return (
    <div className="bg-white p-4 mt-3 shadow-sm rounded-sm">
      <h3 className="mt-4 text-lg font-semibold text-gray-600">
        Need to chanage your password?
      </h3>
      <form onSubmit={handleSubmit(passwordChanage)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
          <div>
            <label
              htmlFor="oldPassword"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Old Password
            </label>
            <input
              type="text"
              {...register("oldPassword")}
              name="oldPassword"
              id="oldPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
              placeholder="Old password"
              required
            />
          </div>
          <div>
            <label
              htmlFor="newPass"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              New Password
            </label>
            <input
              type="text"
              name="newPass"
              {...register("newPassword")}
              id="newPass"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
              placeholder="New Password"
              required
            />
          </div>
          <div>
            <label
              htmlFor="conPass"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <input
              type="text"
              name="newPass"
              {...register("confrimPassword")}
              id="newPass"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-600 focus:outline-none block w-full p-2.5"
              placeholder="New Password"
              required
            />
          </div>
        </div>
        <button className="mt-4 block w-full text-white text-sm font-semibold rounded-sm bg-blue-700 hover:bg-blue-600 transition duration-150 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3">
          {isLoading ? (
            <BiLoaderAlt className="inline w-4 h-4 mr-3 text-white animate-spin" />
          ) : (
            "Change Password"
          )}
        </button>
      </form>
    </div>
  );
};

export default PasswordChangeForm;
