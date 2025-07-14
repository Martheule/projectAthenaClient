import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  const { isAuth, logout } = useAuth();
  console.log(isAuth);
  console.log(logout);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {/* <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li> */}
            <li>
              <a
                onClick={
                  isAuth
                    ? () => {
                        navigate("/auth/showeventlist");
                      }
                    : () => {
                        navigate("/login");
                      }
                }
              >
                Show Events
              </a>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to="/">
          Project Athena
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <Link to="/login">login</Link>
          </li>

          <li>
            <Link to="/signup">signup</Link>
          </li>
          <li>
            <Link to="/auth/eventlist">Eventlist</Link>
          </li> */}
          <li>
            <a
              onClick={
                isAuth
                  ? () => {
                      navigate("/auth/showeventlist");
                    }
                  : () => {
                      navigate("/login");
                    }
              }
            >
              Show Events
            </a>

            {/* <Link to="/auth/showeventlist">Show Events</Link> */}
          </li>
        </ul>
      </div>
      {isAuth ? (
        <div className="navbar-end">
          <button className="btn btn-ghost" onClick={logout}>
            Log out
          </button>

          <Link className="btn btn-primary " to="/auth/addevent">
            Create Event
          </Link>
        </div>
      ) : (
        <div className="navbar-end">
          <Link className="btn btn-ghost " to="/login">
            login
          </Link>
          <Link className="btn btn-primary " to="/signup">
            signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
