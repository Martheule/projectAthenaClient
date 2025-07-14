import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext); //make the useContext hook connect with the created context.
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkAuth = (token) => {
    if (!token) {
      setError("You are not logged in");
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuth(false);
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        user,
        setUser,
        token,
        setToken,
        loading,
        setLoading,
        error,
        setError,
        checkAuth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
