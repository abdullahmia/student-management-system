const TeacherItem = () => {
  return (
    <div className="border p-2 flex justify-between items-center rounded hover:bg-slate-100 transition duration-100">
      <div className="flex gap-3 items-center">
        <div>
          <img
            className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
            src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
            alt="ProfileImage"
          />
        </div>
        <div>
          <h2 className="capitalize">ms Rifat</h2>
          <p className="capitalize text-gray-600 text-sm">ms Rifat</p>
        </div>
      </div>
      <div>
        <button className="capitalize bg-blue-700 text-white px-3 py-2">
          view
        </button>
      </div>
    </div>
  );
};

export default TeacherItem;
