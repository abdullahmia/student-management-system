import swal from "sweetalert";
import { useDeleteUserByRoleAndIdMutation } from "../../../redux/services/authService";
import Image from "../common/Image";

const StudentTable = ({ students }) => {
  console.log(students);
  const [deleteUserByRoleAndId] = useDeleteUserByRoleAndIdMutation();

  const deleteStudent = async (student) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this student account!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteUserByRoleAndId({
          role: student?.user?.role,
          id: student?.user?._id,
        }).then((result) => {
          if (result?.data) {
            swal(result?.data.message, {
              icon: "success",
            });
          } else if (result?.error) {
            swal(result?.error.data.message, {
              icon: "warning",
            });
          }
        });
      } else {
      }
    });
  };
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
          {students.map((student, key) => (
            <tr class="bg-white border-b">
              <td className="pl-4 py-2">
                <Image
                  src={student?.user?.image}
                  classname="w-16 h-16 rounded-full object-center"
                />
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {student?.user?.firstName} {student?.user?.lastName}
              </th>
              <td class="px-6 py-4">{student?.roll}</td>
              <td class="px-6 py-4">{student?.semester}st</td>
              <td class="px-6 py-4">
                {student?.department?.name.toUpperCase()}
              </td>
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
                <button
                  onClick={() => deleteStudent(student)}
                  className="bg-red-600 text-white py-1 px-6 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
