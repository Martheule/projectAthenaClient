import { Outlet } from "react-router";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const MainLayout = () => {
  // const { token, checkAuth } = useAuth();

  // // Check authentication status when the layout is rendered
  // useEffect(() => {
  //   checkAuth(token);
  // }, [token]);
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
