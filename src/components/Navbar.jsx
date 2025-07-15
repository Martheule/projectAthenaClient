import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Avatar from "./Avatar";

const NavBar = () => {
  const navigate = useNavigate();
  const { isAuth, logout, user } = useAuth();
  // console.log(isAuth);
  // console.log(logout);
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
            <li>
              <Link to="/about">About</Link>
            </li>
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
          <img src="/Logo.png" className="w-[2.5rem] h-[2.5rem]"></img>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/about">About</Link>
          </li>

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
      {isAuth && user ? (
        <div className="navbar-end">
          <Link className="btn btn-ghost " to="/auth/addevent">
            Create Event
          </Link>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <Avatar name={user.name} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  {/* <span className="badge">New</span> */}
                </a>
              </li>

              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        // <div className="navbar-end">
        //   <button className="btn btn-ghost" onClick={logout}>
        //     Log out
        //   </button>

        //   <Link className="btn btn-primary " to="/auth/addevent">
        //     Create Event
        //   </Link>
        // </div>
        <div className="navbar-end">
          <Link className="btn btn-ghost " to="/login">
            Login
          </Link>
          <Link className="btn btn-primary " to="/signup">
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
