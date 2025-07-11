import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
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
    setToken(null);
    localStorage.removeItem("token");
    setIsAuth(false);
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
