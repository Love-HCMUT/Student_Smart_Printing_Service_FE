// LoginForm.jsx
import React from "react";
import Login from "../../assets/login_div.jpg";
import Google from "../../assets/gg.png"

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
          type="submit"
          className="w-32 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-gray-600 hover:to-gray-600 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none"
           >
          Register
          </button>
          </div>

          <div className="flex justify-center mt-4">
  <button
    type="button"
    className="flex items-center justify-center space-x-4 px-6 py-3 border-2 border-gray-300 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-blue-50 hover:border-blue-400 transition-transform transform hover:-translate-y-1 duration-300"
  >
    <img src={Google} alt="Google Logo" className="w-10 h-10" />
    <span className="text-gray-700 font-semibold text-sm md:text-base">Login with Google</span>
  </button>
</div>


            </form>
          </div>
          </div>
  );
};

export default LoginForm;