import empty from "../../../assets/images/empty.png";

const Empty = ({ text }) => {
  return (
    <div className="w-full h-full bg-white mt-9 pb-20 rounded flex items-center flex-col justify-center">
      <img src={empty} className="w-60" alt="" />
      <h2 className="text-xl font-semibold text-gray-700">{text}</h2>
    </div>
  );
};

export default Empty;
