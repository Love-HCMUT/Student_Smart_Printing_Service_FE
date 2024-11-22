// LoginForm.jsx
import React from "react";
import Login from "../../assets/login_div.jpg";
import { NavLink } from "react-router-dom";

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

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-32 py-2 bg-[#044CC8] text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
