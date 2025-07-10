import { useEffect, useState } from "react";
const FetchEvents = () => {
  const [events, setEvents] = useState([]);
  // const baseUrl = "https://teamathenaserver.onrender.com/api/events";
  const baseUrl = "http://localhost:3001/api/events";
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error("Something went wrong!!!");
        }
        const data = await response.json();
        setEvents(data.results);
        console.log(data);
      } catch (error) {
        console.error("Fetch error", error);
      }
    };
    fetchEvents();
  }, []);
  console.log(events);

  return (
    <div>
      <h1>fetch event API</h1>
    </div>
  );
};

export default FetchEvents;
