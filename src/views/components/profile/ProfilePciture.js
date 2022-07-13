import cogoToast from "cogo-toast";
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useUploadProfileMutation } from "../../../redux/services/authService";
import Image from "../common/Image";

const ProfilePciture = () => {
  const rootUser = JSON.parse(localStorage.getItem("user"));
  const token = useSelector((state) => state.auth.token);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const [uploadProfile, { isLoading }] = useUploadProfileMutation();
  // upload prpfile form submit
  const uploadProfileSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    await uploadProfile(formData).then((result) => {
      if (result.data) {
        let user = JSON.parse(localStorage.getItem("user"));

        cogoToast.success(result?.data?.message);

        // remove user data from localstorage
        localStorage.removeItem("user");

        user = { ...user, image: result.data.data.image };
        // dispatch(
        //   setUser({
        //     // user: { ...user, image: result.data.data.image },
        //     user,
        //     token,
        //   })
        // );
        // set the new user with image on localstorage
        localStorage.setItem("user", JSON.stringify(user));

        reset();
      }
      if (result.error) {
        cogoToast.error(result?.error?.data?.message);
      }
    });
  };
  return (
    <div className="bg-white p-3 border-t-4 border-green-400">
      <div className="image overflow-hidden">
        <Image
          src={rootUser?.image}
          classname="h-56 w-full mx-auto rounded"
          alt=""
        />
      </div>
      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
        {rootUser?.firstName} {rootUser?.lastName}
      </h1>
      <h3 className="text-gray-600 font-lg text-semibold leading-6">
        Owner at Her Company Inc.
      </h3>
      <div className="mt-8">
        <form onSubmit={handleSubmit(uploadProfileSubmit)}>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 "
            for="small_size"
          >
            Upload a profile picture
          </label>
          <input
            {...register("image")}
            class="block mb-5 w-full text-xs py-2 px-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer  focus:outline-none dark:border-gray-600 "
            id="small_size"
            type="file"
            required
          />
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center uppercase"
          >
            {isLoading ? (
              <BiLoaderAlt className="inline w-4 h-4 mr-3 text-white animate-spin" />
            ) : (
              "Upload"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePciture;
