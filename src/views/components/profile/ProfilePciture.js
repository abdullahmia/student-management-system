import Image from "../common/Image";

const ProfilePciture = ({ image, firstName, lastName, position }) => {
  return (
    <div className="bg-white p-3 border-t-4 border-green-400">
      <div className="image overflow-hidden">
        <Image src={image} classname="h-56 w-full mx-auto rounded" alt="" />
      </div>
      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
        {firstName} {lastName}
      </h1>
      <h3 className="text-gray-600 font-lg text-semibold leading-6">
        {position.toUpperCase()}
      </h3>
    </div>
  );
};

export default ProfilePciture;
