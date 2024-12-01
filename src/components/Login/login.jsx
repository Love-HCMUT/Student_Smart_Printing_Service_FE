// LoginForm.jsx
import React, { useEffect, useState } from "react";
import Login from "../../assets/login_div.jpg";
import Google from "../../assets/gg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();

  const r = localStorage.getItem("roles");
  if (r === "User") {
    navigate("/user");
  } else if (r === "SPSO") {
    navigate("/spso");
  } else if (r === "Printing Staff") {
    navigate("/staff");
  }

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Lấy token từ URL nếu có
  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.slice(1));
    const token = hashParams.get("access_token");
    if (token) {
      fetchGoogleUserInfo(token);
    }
  }, []);

  // Lấy thông tin người dùng từ Google API
  const fetchGoogleUserInfo = async (token) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v2/userinfo`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const email = response.data.email;

      try {
        // Gửi yêu cầu POST tới API
        const host = import.meta.env.VITE_HOST;
        const response = await axios.post(
          `${host}/api/account/login_gg`,
          {
            username: email,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json", // Đảm bảo định dạng đúng
            },
          }
        );

        if (response.status === 200 && response.data.status) {
          localStorage.setItem("id", response.data.data.id);
          localStorage.setItem("username", response.data.data.username);
          localStorage.setItem("roles", response.data.data.roles);
          const roles = response.data.data.roles; // roles là "SPSO"
          if (roles === "User") {
            navigate("/user");
          } else if (roles === "SPSO") {
            navigate("/spso");
          } else {
            navigate("/staff");
          }
          console.log("Login successful:", response.data);
        } else {
          setError(response.data.message || "Login failed. Please try again.");
        }
      } catch (err) {
        console.error("Login error:", err);

        setError("An error occurred while logging in.");
      } finally {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching Google user info:", error);
      setError("Unable to fetch user info from Google.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Gửi yêu cầu POST tới API
      const host = import.meta.env.VITE_HOST;
      const response = await axios.post(
        `${host}/api/account/login`,
        {
          username: formData.username,
          password: formData.password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json", // Đảm bảo định dạng đúng
          },
        }
      );

      if (response.status === 200 && response.data.status) {
        localStorage.setItem("id", response.data.data.id);
        localStorage.setItem("username", response.data.data.username);
        localStorage.setItem("roles", response.data.data.roles);
        const roles = response.data.data.roles; // roles là "SPSO"
        if (roles === "User") {
          navigate("/user");
        } else if (roles === "SPSO") {
          navigate("/spso");
        } else {
          navigate("/staff");
        }
        console.log("Login successful:", response.data);
      } else {
        setError(response.data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);

      setError("An error occurred while logging in.");
    } finally {
      setIsLoading(false);
    }
  };

  // const LINK_GET_TOKEN = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&response_type=token&redirect_uri=https://ebc7-171-247-146-191.ngrok-free.app/login&client_id=440702024444-70b3fu82r2kfpj2vhcvhb52lfbbvktvu.apps.googleusercontent.com`;
  const LINK_GET_TOKEN = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&response_type=token&redirect_uri=http://localhost:5173/login&client_id=440702024444-70b3fu82r2kfpj2vhcvhb52lfbbvktvu.apps.googleusercontent.com`;
  return (
    <div className="flex-grow flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-[350px] w-full min-h-[420px] space-y-10">
        <div className="flex items-center mb-5">
          <img src={Login} alt="BK Logo" />
        </div>

        <form className="space-y-8" onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full px-4 py-3 border border-blue-300 rounded-lg bg-blue-50 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 border border-blue-300 rounded-lg bg-blue-50 focus:outline-none focus:border-blue-500"
          />

          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="w-32 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <button
              onClick={() => navigate("/register")}
              className="w-32 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-gray-600 hover:to-gray-600 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none"
            >
              Register
            </button>
          </div>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={() => {
                window.location.href = LINK_GET_TOKEN;
              }}
              className="flex items-center justify-center space-x-4 px-6 py-3 border-2 border-gray-300 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-blue-50 hover:border-blue-400 transition-transform transform hover:-translate-y-1 duration-300"
            >
              <img src={Google} alt="Google Logo" className="w-10 h-10" />
              <span className="text-gray-700 font-semibold text-sm md:text-base">
                Login with Google
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
