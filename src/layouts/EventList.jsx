import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        // Sort events by date (oldest to newest)
        const sorted = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
        setEvents(sorted);
      })
      .catch((err) => console.error("Failed to fetch events:", err));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {events.map((event) => (
        <div
          key={event.id}
          onClick={() => handleCardClick(event.id)}
          className="cursor-pointer bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p className="text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
          <p className="text-sm text-gray-700 mt-2">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
