// LoginForm.jsx
import React from "react";
import Login from "../../assets/login_div.jpg";

const LoginForm = () => {
  return (
    <div className="flex-grow flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-[350px] w-full min-h-[420px] space-y-10">
        <div className="flex items-center mb-5">
          <img src={Login} alt="BK Logo" />
        </div>

        <form className="space-y-8">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 border border-blue-300 rounded-lg bg-blue-50 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-blue-300 rounded-lg bg-blue-50 focus:outline-none focus:border-blue-500"
          />

        <div className="flex justify-center space-x-4">
          <button
          type="submit"
          className="w-32 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none"
           >
          Login
          </button>
          <button
          type="button"
          onClick={() => navigate("/register")} // chuyển sang page khác
          className="w-32 py-2 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 font-semibold rounded-full shadow-md hover:shadow-lg hover:from-gray-400 hover:to-gray-500 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none"
          >
          Register
          </button>
          </div>

            </form>
          </div>
          </div>
  );
};

export default LoginForm;
