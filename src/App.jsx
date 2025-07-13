import FetchEvents from "./api/FetchEvents";
import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import IsAuth from "./pages/IsAuth";
import EventDetails from "./pages/EventDetails";
import EventList from "./components/EventList";
import ShowEventList from "./pages/ShowEventList";
import CreateEvent from "./pages/CreateEvent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/auth" element={<IsAuth />}>
          {/* <Route path="eventlist" element={<EventList />} /> */}
          <Route path="showeventlist" element={<ShowEventList />} />
          <Route path="addevent" element={<CreateEvent />} />
        </Route>
      </Route>
      <Route path="*" element={<h3>404: Not found</h3>} />
    </Routes>
  );
};

export default App;
