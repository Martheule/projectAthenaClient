import UnicornScene from "unicornstudio-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { setIsAuth, setToken, setUser, isAuth } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();

    // Handle input changes if needed
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate an API call for login
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const result = await response.json();
      setToken(result.token);
      setUser(result.user);
      setIsAuth(true);
      console.log(result);
      localStorage.setItem("token", result.token);
      localStorage.setItem("loginSuccess", "true");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <div className="absolute  w-full min-h-screen z-0">
        <div className="absolute  w-full min-h-screen border-b-66 border-[#ffffff] z-10"></div>
        <UnicornScene
          // projectId="sKE07ghh4yvYCU55xEYB"
          projectId="XyC7OwYN00mwuEqwYDOW"
          className="absolute w-full min-h-screen z-0"
        />
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content w-xl flex-col gap-8 justify-center">
          <div className="text-center">
            <h1 className="text-4xl text-white font-medium">Login now!</h1>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={handleChange}
                    value={data.email}
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input w-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={handleChange}
                    value={data.password}
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="input w-full"
                  />
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
