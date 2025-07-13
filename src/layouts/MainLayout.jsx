import { Outlet } from "react-router";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
