import Loader from "../../../components/loader/Loader";
import DashboardLayout from "../../layout/DashboardLayout";

const AdminDashboard = () => {
  return (
    <DashboardLayout title={"Dashboard"}>
      <h3 className="text-3xl">Admin dashboard</h3>
      <Loader />
    </DashboardLayout>
  );
};

export default AdminDashboard;
