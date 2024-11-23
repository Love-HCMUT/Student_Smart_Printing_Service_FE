import React, { useState } from "react";
import Google from "../../assets/gg.png"



const RegisterForm = () => {


  const LINK_GET_TOKEN = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&response_type=token&redirect_uri=https://www.facebook.com&client_id=440702024444-70b3fu82r2kfpj2vhcvhb52lfbbvktvu.apps.googleusercontent.com`;

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
    <div className="flex-grow flex items-center justify-center min-h-screen ">
  <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-lg w-full space-y-8">
    <h2 className="text-4xl font-extrabold text-center text-blue-800">Register</h2>
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 bg-blue-50 transition-all"
        required
      />
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        className="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 bg-blue-50 transition-all"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 bg-blue-50 transition-all"
        required
      />
      <select
        name="position"
        value={formData.position}
        onChange={handleChange}
        className="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 bg-blue-50 transition-all"
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
            <div key={index} className="flex items-center gap-3 mb-3">
              <input
                type="tel"
                name={`phoneNumber-${index}`}
                value={phoneNumber}
                onChange={(e) => handlePhoneChange(index, e.target.value)}
                placeholder={`Phone Number ${index + 1}`}
                className="flex-grow px-4 py-2 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 bg-blue-50 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => removePhoneNumber(index)}
                className="px-3 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addPhoneNumber}
            className="w-full py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none"
          >
            + Add Phone
          </button>
        </div>
      )}

      {isLocationRequired && (
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            name="workingLocationCampus"
            value={formData.workingLocationCampus}
            onChange={handleChange}
            placeholder="Campus"
            className="px-3 py-2 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 bg-blue-50 text-center"
            required
          />
          <input
            type="text"
            name="workingLocationBuilding"
            value={formData.workingLocationBuilding}
            onChange={handleChange}
            placeholder="Building"
            className="px-3 py-2 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 bg-blue-50 text-center"
            required
          />
          <input
            type="text"
            name="workingLocationRoom"
            value={formData.workingLocationRoom}
            onChange={handleChange}
            placeholder="Room"
            className="px-3 py-2 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 bg-blue-50 text-center"
            required
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 transition-all"
      >
        Register
      </button>

      <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={() => {
            window.location.href = LINK_GET_TOKEN;
          }}
          className="flex items-center space-x-3 px-6 py-3 bg-white border-2 border-gray-300 rounded-full shadow-md hover:shadow-lg hover:border-blue-400 transition-transform transform hover:-translate-y-1 duration-300"
        >
          <img src={Google} alt="Google Logo" className="w-10 h-10" />
          <span className="text-gray-700 font-medium">Register with Google</span>
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default RegisterForm;
