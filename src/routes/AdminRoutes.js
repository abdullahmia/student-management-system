import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  let isValidToken = false;
  let decodedToken;
  let token = localStorage.getItem("token");
  if (token) {
    token = token.split(" ")[1].trim();
    decodedToken = jwt_decode(token);
    let currentDate = new Date();
    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      return <Navigate to={"/login"} />;
    } else {
      isValidToken = true;
    }
  }

  return token && decodedToken.role === "admin" && isValidToken ? (
    children
  ) : (
    <Navigate to={"/login"} />
  );
};

export default AdminRoutes;
