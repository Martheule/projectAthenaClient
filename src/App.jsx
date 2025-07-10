import FetchEvents from "./api/FetchEvents";
import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import About from "./pages/About";
import Login from "./pages/Login";
import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<h3>404: Not found</h3>} />
      </Route>
    </Routes>
  );
};

export default App;
