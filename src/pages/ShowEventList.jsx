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
        setEvents(sorted);
      })
      .catch((err) => console.error("Failed to fetch events:", err));
  }, [isAuth]);

  return (
    <SimplePageWrapper pageKey="showeventlist">
      <div className="w-full bg-blue-900">
        <div className="w-full mx-auto md:w-2/3 text-center flex justify-center py-24">
          <h1 className="text-5xl mb-6 text-white">Recommended Events</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </SimplePageWrapper>
  );
};

export default ShowEventList;
