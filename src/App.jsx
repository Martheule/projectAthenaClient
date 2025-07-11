import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetail from "./components/EventDetail"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  );
}


const App = () => {
  return <div>Hello World!</div>;
};

export default App;
