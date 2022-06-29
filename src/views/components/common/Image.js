const Image = ({ src, classname }) => {
  return (
    <img
      src={`${process.env.REACT_APP_CLOUDINARY_IMAGE_LINK + src}`}
      alt=""
      className={classname}
    />
  );
};

export default Image;
