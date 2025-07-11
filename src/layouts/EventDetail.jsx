import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`/api/events/${id}`)
      .then((res) => res.json())
      .then(setEvent)
      .catch((err) => console.error("Error fetching event:", err));
  }, [id]);

  if (!event) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-600 mb-4">{new Date(event.date).toLocaleDateString()}</p>
      <p className="text-lg">{event.description}</p>
    </div>
  );
};

export default EventDetail;
