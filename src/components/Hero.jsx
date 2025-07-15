import UnicornScene from "unicornstudio-react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import WeekDay from "./WeekDay";
import toast, { Toaster } from "react-hot-toast";

const Hero = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useAuth();
  useEffect(() => {
    const loginSuccess = localStorage.getItem("loginSuccess");

    if (loginSuccess === "true") {
      toast("✅ Login success!");
      localStorage.removeItem("loginSuccess"); // Clean up
    }
  }, []);
  return isAuth ? (
    <section className="hero min-h-screen">
      <Toaster />
      {/* Background animation */}
      <div className="absolute  w-full min-h-screen z-0">
        <div className="absolute w-full min-h-screen border-b-66 border-[#ffffff] z-10"></div>
        <UnicornScene
          projectId="BXrF5jQzBrY1E01zQqzx"
          className="absolute w-full min-h-screen z-0"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Main Content */}
      <div className="relative z-10  max-w-7xl flex flex-col md:flex-row justify-between items-start text-white w-full">
        <div className="text-left mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome, {user.name}
          </h1>
          <p className="text-lg mb-8">Check your events.</p>
          <Link className="btn btn-soft " to="/auth/addevent">
            Create Event
          </Link>
        </div>
        <div className="w-full p-4 m-4  flex flex-col justify-end items-end">
          <WeekDay />
        </div>
      </div>
    </section>
  ) : (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="btn btn-primary"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
