import React, { useState, useEffect } from "react";
import Google from "../../assets/gg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";

const RegisterForm = () => {
  const navigate = useNavigate();

  const r = localStorage.getItem("roles");
  if (r === "User") {
    navigate("/user");
  } else if (r === "SPSO") {
    navigate("/spso");
  } else if (r === "Staff") {
    navigate("/staff");
  }

  const LINK_GET_TOKEN = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&response_type=token&redirect_uri=http://localhost:5173/register&client_id=440702024444-70b3fu82r2kfpj2vhcvhb52lfbbvktvu.apps.googleusercontent.com`;

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    position: "",
    workingLocationCampus: "",
    workingLocationBuilding: "",
    workingLocationRoom: "",
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
      const name = response.data.name;
      const hashed = CryptoJS.SHA256(email).toString(CryptoJS.enc.Hex);
      const pw = hashed.substring(0, 8);

      setFormData((prevData) => ({
        ...prevData,
        username: email,
        fullName: name,
        password: pw,
      }));
    } catch (error) {
      console.error("Error fetching Google user info:", error);
      setError("Unable to fetch user info from Google.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Construct the request body
    const requestBody = {
      username: formData.username,
      password: formData.password,
      fullName: formData.fullName,
      roles: formData.position, // Assuming "position" is equivalent to "roles"
      phoneNumber: phoneNumbers,
      campus: formData.workingLocationCampus,
      building: formData.workingLocationBuilding,
      room: formData.workingLocationRoom,
    };

    // Send the POST request
    const host = import.meta.env.VITE_HOST;
    try {
      const response = await axios.post(
        `${host}/api/account/register`,
        requestBody, // Pass the requestBody directly
        {
          headers: {
            "Content-Type": "application/json", // Ensure the correct content type
          },
        }
      );

      if (response.status === 201 && response.data.status) {
        confirm("Register successful");
        navigate("/login");
      } else {
        setError(response.data.message || "Register failed. Please try again.");
      }
    } catch (error) {
      // Handle error response from axios
      setError(
        "Error during registration:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const isPhoneRequired =
    formData.position === "Printing Staff" || formData.position === "SPSO";
  const isLocationRequired = formData.position === "Printing Staff";

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
        <h2 className="text-4xl font-extrabold text-center text-blue-800">
          Register
        </h2>
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
            <option value="Student">Student</option>
            <option value="Lecture">Lecture</option>
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
            disabled={isLoading}
          >
            {isLoading ? "Registering in ..." : "Register"}
          </button>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => {
                window.location.href = LINK_GET_TOKEN;
              }}
              className="flex items-center space-x-3 px-6 py-3 bg-white border-2 border-gray-300 rounded-full shadow-md hover:shadow-lg hover:border-blue-400 transition-transform transform hover:-translate-y-1 duration-300"
            >
              <img src={Google} alt="Google Logo" className="w-10 h-10" />
              <span className="text-gray-700 font-medium">
                Register with Google
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
