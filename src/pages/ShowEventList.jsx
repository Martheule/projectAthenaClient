import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { useAuth } from "../context/AuthContext";
import SimplePageWrapper from "../components/PageWrapper";
import { useNavigate } from "react-router";

const ShowEventList = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);
  //main fetch function
  useEffect(() => {
    if (!isAuth) return;
    fetch("http://localhost:3001/api/events") //Fetch from the Swagger API
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const sorted = data.results.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        // setEvents(sorted);
        setEvents(data.results);
      })
      .catch((err) => console.error("Failed to fetch events:", err));
  }, [isAuth]);

  return (
    <SimplePageWrapper pageKey="showeventlist">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content flex flex-col text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Recommended Events</h1>
          </div>
          <div className="hero-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </SimplePageWrapper>
  );
};

export default ShowEventList;
