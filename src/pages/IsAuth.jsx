import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

function IsAuth() {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default IsAuth;
