import { Link } from "react-router";
import { useParams, useLocation } from "react-router";

const EventDetails = () => {
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

  return (
    <div
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?_gl=1*1qqtt9h*_ga*OTI2ODEzMDQ2LjE3NDc5OTgyODQ.*_ga_8JE65Q40S6*czE3NTI0MDc0MjEkbzExJGcxJHQxNzUyNDA3NDU2JGoyNSRsMCRoMA..)",
      }}
    >
      <div className="bg-slate-900 p-8 flex flex-col rounded-xl w-[45rem] h-[25rem] mb-[8rem] justify-between">
        <div className="flex justify-between">
          <div className="w[350px] ">
            <h2 className="text-5xl mb-4">{title}</h2>
            <p className="mb-4 text-lg">{description}</p>
          </div>
          <div className="pr-[2rem]">
            <p className="font-semibold text-3xl mb-4">{location}</p>
            <p className="flex-0 font-bold text-2xl mb-4">
              {date.split("T")[0]}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-8 flex flex-col gap-4">
            <p>Created at: {createdAt.split("T")[0]}</p>
            <div className="flex justify-between gap-5">
              <p>latitude: {latitude}</p>
              <p>longitude: {longitude}</p>
            </div>
          </div>
          <div className="flex items-end">
            <button className="btn btn-primary">
              <Link to="/">Close</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventDetails;
