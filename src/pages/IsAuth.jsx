import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";
import { useEffect } from "react";

const IsAuth = () => {
  const { isAuth, loading } = useAuth();
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-medium">Checking auth...</p>
      </div>
    ); // or <LoadingSpinner /> to show something while loading

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default IsAuth;
