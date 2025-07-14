import { useNavigate } from "react-router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const CreateEvent = () => {
  const navigate = useNavigate();
  const maxLength = 200;
  const token = localStorage.getItem("token");
  const notify = () =>
    toast("✅ Congratulation! Event is successfully created!"); //This is successful toast

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (event) => {
    // Handle input changes if needed
    const { name, value } = event.target;
    setEventData({ ...eventData, [name]: value });
  };

  //Submit event function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post event
      const response = await fetch("http://localhost:3001/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 🔐 important
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }
      const result = await response.json();
      console.log(result);
      navigate("/auth/showeventlist");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center p-4 gap-8">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn btn-ghost"
      >
        Back
      </button>

      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4 "
        onSubmit={handleSubmit}
      >
        <label className="label">Title</label>
        <input
          onChange={handleChange}
          value={eventData.title}
          type="title"
          id="title"
          name="title"
          required
          className="input border-none w-auto"
          placeholder="Event title here"
        />
        <label className="label">Description</label>
        <input
          onChange={handleChange}
          value={eventData.description}
          type="description"
          id="description"
          name="description"
          required
          className="input border-none w-auto"
          placeholder="What is the event about?"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>
            Characters:
            <span
              className={`${
                eventData.description.length >= 100
                  ? "text-yellow-600"
                  : "text-gray-600"
              }`}
            >
              {eventData.description.length}
            </span>
            /{maxLength}
          </span>
        </div>
        <label className="label">Date</label>
        <input
          onChange={handleChange}
          value={eventData.date}
          type="date"
          id="date"
          name="date"
          required
          className="input border-none w-auto"
          placeholder="date here"
        />
        <label className="label">Location</label>
        <input
          onChange={handleChange}
          value={eventData.location}
          type="location"
          id="location"
          name="location"
          required
          className="input border-none w-auto"
          placeholder="location here"
        />
        <label className="label">Latitude</label>
        <input
          onChange={handleChange}
          value={eventData.latitude}
          type="latitude"
          id="latitude"
          name="latitude"
          required
          className="input border-none w-auto"
          placeholder="latitude here"
        />
        <label className="label">Longitude</label>
        <input
          onChange={handleChange}
          value={eventData.longitude}
          type="longitude"
          id="longitude"
          name="longitude"
          required
          className="input border-none w-auto"
          placeholder="longitude here"
        />
        <button type="submit" className="btn btn-primary" onClick={notify}>
          Post now
        </button>
        <Toaster />
      </form>
    </div>
  );
};

export default CreateEvent;
