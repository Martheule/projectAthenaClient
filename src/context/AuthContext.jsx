import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext); //make the useContext hook connect with the created context.
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Restore auth state on page load. When refresh, check the useData and Token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
      setIsAuth(true);
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // auth check is done
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setToken(token);
    setUser(userData);
    setIsAuth(true);
    navigate("/auth/eventlist");
  };
  // const checkAuth = (token) => {
  //   if (!token) {
  //     setError("You are not logged in");
  //     setIsAuth(false);
  //   } else {
  //     setIsAuth(true);
  //   }
  // };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
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
        // checkAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
