import FetchEvents from "./api/FetchEvents";
import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import About from "./pages/About";
import Login from "./pages/Login";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>

      <FetchEvents />
    </Routes>
  );
};

export default App;
