import getUser from "../../../helper/user";
import { useGetTeacherProfileQuery } from "../../../redux/services/profileService";
import PasswordChangeForm from "../../components/forms/PasswordChangeForm";
import Loader from "../../components/loader/Loader";
import ProfilePciture from "../../components/profile/ProfilePciture";
import TeacherDetails from "../../components/profile/TeacherDetails";
import DashboardLayout from "../layout/DashboardLayout";

const TeacherProfile = () => {
  const user = getUser();
  const { isLoading, data } = useGetTeacherProfileQuery(user._id);
  let teacher = data?.data?.data;
  return (
    <DashboardLayout title={"Teacher Profile"}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="md:flex no-wrap">
          {/* Left side */}
          <div className="w-full md:w-3/12">
            {/* Profile Card */}
            <ProfilePciture
              image={teacher?.user?.image}
              firstName={teacher?.user?.firstName}
              lastName={teacher?.user?.lastName}
              position={teacher?.user?.role}
            />
          </div>

          <div className="w-full md:w-9/12 lg:mx-2 mt-5 lg:mt-0 h-auto">
            {/* About Section */}
            <TeacherDetails teacher={teacher} />

            <PasswordChangeForm />
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default TeacherProfile;
