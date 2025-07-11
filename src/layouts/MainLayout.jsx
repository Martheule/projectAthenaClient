import { Outlet } from "react-router";
import NavBar from "../components/Navbar";

import Footer from "../Components/Footer";

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
