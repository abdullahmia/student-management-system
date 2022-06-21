import AdminSidebar from "./AdminSidebar";

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 text-gray-900 h-full transition-all duration-300 border-none z-10 bg-slate-100">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <AdminSidebar />
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
          Copyright @2021
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
