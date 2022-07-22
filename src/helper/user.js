import jwt_decode from "jwt-decode";

const getUser = () => {
  let decodedToken;
  let token = localStorage.getItem("token");
  if (token) {
    token = token.split(" ")[1].trim();
    decodedToken = jwt_decode(token);
  }
  return decodedToken;
};

export default getUser;
