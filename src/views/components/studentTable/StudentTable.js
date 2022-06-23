const StudentTable = () => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              Photo
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Roll
            </th>
            <th scope="col" class="px-6 py-3">
              Semester
            </th>
            <th scope="col" class="px-6 py-3">
              Department
            </th>
            <th scope="col" class="px-6 py-3">
              View
            </th>
            <th scope="col" class="px-6 py-3">
              Edit
            </th>
            <th scope="col" class="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b">
            <td className="pl-4 py-2">
              <img
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
                className="w-16 h-16 rounded-full"
              />
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">14161</td>
            <td class="px-6 py-4">Sliver</td>
            <td class="px-6 py-4">Laptop</td>
            <td>
              <button className="bg-blue-600 text-white py-1 px-6 rounded">
                View
              </button>
            </td>
            <td>
              <button className="bg-green-600 text-white py-1 px-6 rounded">
                Edit
              </button>
            </td>
            <td>
              <button className="bg-red-600 text-white py-1 px-6 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
