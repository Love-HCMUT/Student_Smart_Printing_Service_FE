import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    username: "",
    password: "",
    position: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Thực hiện xử lý đăng ký
  };

  const isPhoneRequired =
    formData.position === "Printing Staff" || formData.position === "SPSO";

  return (
    <div className="flex-grow flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-5">Register</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="ID"
            className="w-full px-5 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-5 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-5 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-5 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />

          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-5 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          >
            <option value="">Select Position</option>
            <option value="Printing Staff">Printing Staff</option>
            <option value="Student">Student</option>
            <option value="Lecture">Lecture</option>
            <option value="SPSO">SPSO</option>
          </select>

          {isPhoneRequired && (
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-5 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
