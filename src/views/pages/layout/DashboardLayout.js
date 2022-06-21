import { useEffect } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const DashboardLayout = ({ children, title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col flex-auto flex-shrink-0 antialiased text-black ">
      <Header />
      <Sidebar />
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64 p-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
