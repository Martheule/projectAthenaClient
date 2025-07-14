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
    <section className="relative h-screen flex flex-col justify-center px-8 text-white">
      <Toaster />
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Main Content */}
      <div className="relative z-10 max-w-xl text-center mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome, {user.name}
        </h1>
        <p className="text-lg mb-8">Check your events.</p>

        <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
          New event
        </button>
      </div>
      <div className="w-full p-4 m-4  flex flex-col justify-end items-end">
        <WeekDay />
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
