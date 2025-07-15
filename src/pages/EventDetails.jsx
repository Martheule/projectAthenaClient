import { Link } from "react-router";
import { useParams, useLocation } from "react-router";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const EventDetails = () => {
  const navigate = useNavigate();
  let params = useParams();
  const {
    state: {
      title,
      description,
      date,
      location,
      createdAt,
      latitude,
      longitude,
    },
  } = useLocation();

  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?page=1&per_page=1&orientation=landscape&query=${location}`,
          {
            headers: {
              Authorization:
                "Client-ID m5Cq2F7F7cntLRV4oaAdH8CxlzvPFHpw-oHMJa1wxyU",
            },
          }
        );
        const response = await res.json();
        setBgImage(response.results[0].urls.full);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPictures();
  }, []);

  return (
    <div
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgba(87, 84, 232, 15%)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="bg-base-200 py-8 px-12 flex flex-col rounded-xl w-[45rem] h-auto mb-[8rem] justify-between m-[4rem]">
        <div className="flex justify-between">
          <div className="w-[350px]">
            <h2 className="text-5xl mb-6">{title}</h2>
          </div>
          <div>
            <p className="font-semibold text-3xl mb-4">{location}</p>
            <p className="flex-0 font-bold text-2xl mb-4">
              {date.split("T")[0]}
            </p>
          </div>
        </div>
        <div className="py-4 w-full">
          <p className="mb-4 text-lg">{description}</p>
        </div>
        <MapContainer
          center={[latitude, longitude]}
          zoom={16}
          scrollWheelZoom={false}
          className="h-[300px] w-full rounded-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              <p>latitude: {latitude}</p>
              <p>longitude: {longitude}</p>
            </Popup>
          </Marker>
        </MapContainer>

        <div className="flex justify-between">
          <div className="mt-8 flex flex-col gap-4">
            <p>Created at: {createdAt.split("T")[0]}</p>

            <div className="flex justify-between gap-5"></div>
          </div>
          <div className="flex items-end">
            <button onClick={() => navigate(-1)} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventDetails;
