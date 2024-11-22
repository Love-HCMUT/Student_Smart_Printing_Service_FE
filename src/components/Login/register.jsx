import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    position: "",
    phoneNumber: "",
    workingLocationCampus: "",
    workingLocationBuilding: "",
    workingLocationRoom: "",
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
  const isLocationRequired =
    formData.position === "Printing Staff";

    const [phoneNumbers, setPhoneNumbers] = useState([""]);

    const handlePhoneChange = (index, value) => {
      const updatedPhoneNumbers = [...phoneNumbers];
      updatedPhoneNumbers[index] = value;
      setPhoneNumbers(updatedPhoneNumbers);
    };
    
    const addPhoneNumber = () => {
      setPhoneNumbers([...phoneNumbers, ""]);
    };
    
    const removePhoneNumber = (index) => {
      const updatedPhoneNumbers = phoneNumbers.filter((_, i) => i !== index);
      setPhoneNumbers(updatedPhoneNumbers);
    };
    


  return (
    <div className="flex-grow flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-5">Register</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
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
      <div>
        {phoneNumbers.map((phoneNumber, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input
              type="tel"
              name={`phoneNumber-${index}`}
              value={phoneNumber}
              onChange={(e) => handlePhoneChange(index, e.target.value)}
              placeholder="Phone Number"
              className="w-full px-5 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <button
              type="button"
              onClick={() => removePhoneNumber(index)}
              className="text-red-500 font-bold"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addPhoneNumber}
          className="px-4 py-2 bg-gray-500 text-white rounded-xl text-center w-full font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        > 
          + Add Phone
        </button>
      </div>
    )}

          {isLocationRequired && (
            <div className="flex space-x-3">
              <input
                type="text"
                name="workingLocationCampus"
                value={formData.workingLocationCampus}
                onChange={handleChange}
                placeholder="Campus"
                className="w-full p-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-center"
                required
              />
              <input
                type="text"
                name="workingLocationBuilding"
                value={formData.workingLocationBuilding}
                onChange={handleChange}
                placeholder="Building"
                className="w-full p-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-center"
                required
              />
              <input
                type="text"
                name="workingLocationRoom"
                value={formData.workingLocationRoom}
                onChange={handleChange}
                placeholder="Room"
                className="w-full p-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-center"
                required
              />
            </div>
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
