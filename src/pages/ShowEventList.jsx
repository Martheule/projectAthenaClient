import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { useAuth } from "../context/AuthContext";
import SimplePageWrapper from "../components/PageWrapper";
import { useNavigate } from "react-router";

const ShowEventList = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const [events, setEvents] = useState([]);
  const baseUrl = "http://localhost:3001/api/events"; //Fetch from the Swagger API

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);
  //main fetch function
  useEffect(() => {
    if (!isAuth) return;
    const controller = new AbortController();

    const fetchEvents = async () => {
      try {
        const response = await fetch(baseUrl, {
          signal: controller.signal, //We connect the fetch req to the controller above
        });

        if (!response.ok) {
          throw new Error("Something went wrong!!!");
        }
        const data = await response.json();
        setEvents(data.results); //set fetched events to useState;
        console.log(data.results);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchEvents(); //Yes, this time you rememberd to call the fucking function,well done Ciro.

    return () => {
      controller.abort();
    };
  }, [isAuth]);

  return (
    <SimplePageWrapper pageKey="showeventlist">
      <div className="w-full">
        <div className="w-full mx-auto md:w-2/3 text-center flex justify-center py-24">
          <h1 className="text-5xl mb-6">
            Introducing today's Most Interesting Events.
          </h1>
        </div>
        <div className="p-4 w-full flex flex-wrap gap-4 justify-center">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </SimplePageWrapper>
  );
};

export default ShowEventList;
