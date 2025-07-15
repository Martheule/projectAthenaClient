import { Link } from "react-router";
const EventCard = ({ event }) => {
  return (
    <div className="card w-96 bg-base-100 card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <p>{event.description}</p>
        <p>{event.location}</p>
        <div className="justify-end card-actions">
          <Link to={`/auth/event/${event.id}`} state={event}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
