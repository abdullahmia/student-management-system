const Image = ({ src, ...rest }) => {
  return (
    <img
      src={`${process.env.REACT_APP_CLOUDINARY_IMAGE_LINK + src}`}
      alt=""
      {...rest}
    />
  );
};

export default Image;
