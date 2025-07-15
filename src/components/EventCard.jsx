import { Link } from "react-router";
const EventCard = ({ event }) => {
  return (
    <div className="card bg-base-200 shadow-xl cursor-pointer transition hover:shadow-2xl hover:brightness-410">
      <div className="card-body p-[10%]">
        <h2 className="text-xl font-bold">{event.title}</h2>
        <p className="text-gray-500">
          {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-700 mt-2">{event.description}</p>
        <Link to={`/auth/event/${event.id}`} state={event}>
          Details
        </Link>
      </div>
    </div>

    // <div className="card w-96 bg-base-100 card-lg shadow-sm">
    //   <div className="card-body">
    //     <h2 className="card-title">{event.title}</h2>
    //     <p>{event.description}</p>
    //     <p>{event.location}</p>
    //     <div className="justify-end card-actions">
    //       <Link to={`/auth/event/${event.id}`} state={event}>
    //         Details
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default EventCard;
