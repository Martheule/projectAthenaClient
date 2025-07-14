import { useState } from "react";
import { Link } from "react-router";
import UnicornScene from "unicornstudio-react";

const SignUp = () => {
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
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="absolute  w-full min-h-screen z-0">
        <div className="absolute  w-full min-h-screen border-b-66 border-[#FFFFFF] z-10"></div>
        <UnicornScene
          projectId="sKE07ghh4yvYCU55xEYB"
          className="absolute w-full min-h-screen z-0"
        />
      </div>
      <div className="hero-content flex-col mb-[12rem]">
        <div className="text-center">
          <h1 className="text-6xl font-bold">Sign Up now!</h1>
          <p className="py-8 text-lg">
            Create a user profile to create events and organize your meetings
            <br></br>
            in one place. Everythin just one click away!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form action={submitAction} className="fieldset gap-8 p-4">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />

              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />

              <input
                type="password"
                name="confirm-password"
                className="input"
                placeholder="Confirm Password"
              />

              <button type="submit" className="btn bg-blue-800 mt-2">
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
