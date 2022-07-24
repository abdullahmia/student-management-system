import getUser from "../../../helper/user";
import { useGetStudentProfileQuery } from "../../../redux/services/profileService";
import PasswordChangeForm from "../../components/forms/PasswordChangeForm";
import Loader from "../../components/loader/Loader";
import ProfilePciture from "../../components/profile/ProfilePciture";
import StudentDetail from "../../components/profile/StudentDetail";
import DashboardLayout from "../layout/DashboardLayout";

const StudentProfile = () => {
  const user = getUser();
  const { data, isLoading } = useGetStudentProfileQuery(user._id);
  const student = data?.data?.data;
  console.log(student);
  return (
    <DashboardLayout title={"Student Profile"}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="md:flex no-wrap">
          {/* Left side */}
          <div className="w-full md:w-3/12">
            {/* Profile Card */}
            <ProfilePciture
              image={student?.user?.image}
              firstName={student?.user?.firstName}
              lastName={student?.user?.lastName}
              position={student?.user?.role}
            />
          </div>

          <div className="w-full md:w-9/12 lg:mx-2 mt-5 lg:mt-0 h-auto">
            {/* About Section */}
            <StudentDetail student={student} />

            <PasswordChangeForm />
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default StudentProfile;
