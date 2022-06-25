import NoticeItem from "../../components/noticeItem/NoticeItem";
import DashboradLayout from "../layout/DashboardLayout";

const Notice = () => {
  return (
    <DashboradLayout title={"Notice Board "}>
      <div className="bg-white p-4">
        <h3 className="text-lg font-semibold text-gray-700">Notice Board</h3>
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
        </div>
      </div>
    </DashboradLayout>
  );
};

export default Notice;
