const DepartmentItem = () => {
  return (
    <div class="flex gap-5 border p-5">
      <div class="flex-none w-48 relative">
        <img
          src="https://i.ytimg.com/vi/SzJ46YA_RaA/maxresdefault.jpg"
          alt=""
          loading="lazy"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-600">
          Computer Department
        </h2>
        <h2 className="text-gray-600">4th Semester</h2>
      </div>
    </div>
  );
};

export default DepartmentItem;
