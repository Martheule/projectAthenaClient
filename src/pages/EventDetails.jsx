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
      <div className="card bg-base-100 image-full w-[50%] shadow-sm mb-[10rem]">
        <figure>
          <img
            src="https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?_gl=1*1qqtt9h*_ga*OTI2ODEzMDQ2LjE3NDc5OTgyODQ.*_ga_8JE65Q40S6*czE3NTI0MDc0MjEkbzExJGcxJHQxNzUyNDA3NDU2JGoyNSRsMCRoMA.."
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex flex-col justify-center items-center border-solid border-4 border-e-indigo-600  border-b-amber-600 border-t-indigo-600 border-l-fuchsia-900">
          <h2 className="card-title text-center text-6xl  mb-8 font-bold">
            {title}
          </h2>

          <div className="w-[75%] h-[70%] p-8 bg-black rounded-xl border-solid border-2 border-e-indigo-600  border-b-amber-600 border-t-indigo-600 border-l-fuchsia-900">
            <div className="flex justify-around align-center my-8">
              <div>
                <p className="text-2xl font-semibold">When?</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">{date.split("T")[0]}</p>
              </div>
            </div>
            <div className="flex justify-around align-center my-8">
              <div>
                <p className="text-2xl font-semibold">Location?</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">{location}</p>
              </div>
            </div>
            <div className="flex justify-around align-center my-8">
              <div>
                <p className="text-2xl font-semibold">Description?</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">{description}</p>
              </div>
            </div>
          </div>

          <button className="btn btn-primary ml-[90%] flex-end">
            <Link to="/">Close</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventDetails;
