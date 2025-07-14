import { useState } from "react";
import { Link, useNavigate } from "react-router";
import UnicornScene from "unicornstudio-react";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const { setIsAuth, setToken, setUser } = useAuth();
  const navigate = useNavigate();

  const submitAction = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmedPassword = formData.get("confirm-password");
    const name = formData.get("name");

    if (password !== confirmedPassword) {
      alert("passworts don't match");
    } else if (password.length < 7) {
      alert("passwort needs min 8 characters");
    } else if (!email) {
      alert("Please enter valid email.");
    } else {
      try {
        const res = await fetch("http://localhost:3001/api/users", {
          method: "POST",
          body: JSON.stringify({ email, password, name }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const response = await fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          const result = await response.json();
          setToken(result.token);
          setUser(result.user);
          setIsAuth(true);
          localStorage.setItem("token", result.token);
          localStorage.setItem("loginSuccess", "true");

          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      {/* <div className="absolute  w-full min-h-screen z-0">
        <div className="absolute  w-full min-h-screen border-b-66 border-[#FFFFFF] z-10"></div>
        <UnicornScene
          projectId="sKE07ghh4yvYCU55xEYB"
          className="absolute w-full min-h-screen z-0"
        />
      </div> */}
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full min-h-screen object-cover opacity-100 z-0"
      >
        <source src="/bg_video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content flex-col mb-12 p-12 rounded-xl">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-white">Sign Up now!</h1>
          <p className="pb-4 pt-8 text-lg text-white">
            Create a user profile to plan events and organize your meetings
            <br></br>
            in one place. Everything just one click away!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form
              action={submitAction}
              className="fieldset text-white gap-8 p-4"
            >
              <input
                type="text"
                name="name"
                className="input font-semibold"
                placeholder="Name"
                required
              />

              <input
                type="email"
                name="email"
                className="input font-semibold"
                placeholder="Email"
                required
              />

              <input
                type="password"
                name="password"
                className="input font-semibold"
                placeholder="Password"
                required
              />

              <input
                type="password"
                name="confirm-password"
                className="input font-semibold"
                placeholder="Confirm Password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Sign Up
              </button>
              <div className="text-center">
                <p className="text-base">
                  Already have and Account?{" "}
                  {
                    <Link to="/login" className="text-blue-500">
                      Log in
                    </Link>
                  }
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
