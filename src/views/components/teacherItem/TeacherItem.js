import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import swal from "sweetalert";
import { useDeleteUserByRoleAndIdMutation } from "../../../redux/services/authService";
import Image from "../common/Image";

const TeacherItem = ({ teacher }) => {
  // delete teacher
  const [deleteUserByRoleAndId, { isLoading }] =
    useDeleteUserByRoleAndIdMutation();

  const deleteTeacher = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this teacher account!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log(id, teacher?.role);
        deleteUserByRoleAndId({
          role: teacher?.role,
          id,
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
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <div className="border p-2 flex justify-between items-center rounded hover:bg-slate-100 hover:-translate-y-1 transition duration-300">
      <div className="flex gap-3 items-center">
        <div>
          <Image
            src={teacher?.image}
            classname="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
          />
        </div>
        <div>
          <h2 className="capitalize">
            {teacher?.firstName} {teacher?.lastName}
          </h2>
          <p className="capitalize text-gray-600 text-sm">{teacher?.email}</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <button className="capitalize bg-blue-700 text-white px-4 py-3 rounded flex items-center gap-2">
          <FiEye />
        </button>
        <button className="capitalize bg-green-500 text-white px-4 py-3 rounded flex items-center gap-2">
          <FiEdit />
        </button>
        <button
          onClick={() => deleteTeacher(teacher?._id)}
          className="capitalize bg-red-500 text-white px-4 py-3 rounded flex items-center gap-2"
        >
          <FiTrash />
        </button>
      </div>
    </div>
  );
};

export default TeacherItem;
