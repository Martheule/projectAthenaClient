import { useAuth } from "../context/AuthContext";
import { useNavigate, Outlet } from "react-router";
import { useEffect } from "react";

const IsAuth = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <navigate to="/login" />;
};

export default IsAuth;
