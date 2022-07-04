import cogoToast from "cogo-toast";
import { BiCalendarEdit, BiLoaderAlt } from "react-icons/bi";
import { useDeleteSubjectMutation } from "../../../redux/services/subjectService";
import Image from "../common/Image";

const SubjectItem = ({ subject }) => {
  const [deleteSubject, { isLoading }] = useDeleteSubjectMutation();

  // subject delete func
  const subjectDeleteFunc = async (id) => {
    await deleteSubject(id).then((result) => {
      if (!result?.data?.error) {
        cogoToast.success(result?.data?.message);
      }
    });
  };
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <Image src={subject?.image} classname="w-full h-72 p-6 object-contain" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {subject?.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex gap-3 items-center">
          <button className="inline-flex items-center py-1 px-3 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 gap-3">
            <span>Update</span>
            <BiCalendarEdit />
          </button>
          <button
            onClick={() => subjectDeleteFunc(subject?._id)}
            className="inline-flex items-center py-1 px-3 text-sm font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            {isLoading ? (
              <BiLoaderAlt className="inline w-4 h-4 mr-3 text-white animate-spin" />
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectItem;
