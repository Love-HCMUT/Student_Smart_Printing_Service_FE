// src/PrinterForm.jsx
import React, { useState } from 'react';

const PrinterForm = ({
  initialBrand = '',
  initialModel = '',
  initialStatus = '',
  initialCampus = '',
  initialBuilding = '',
  initialRoom = '',
  initialDescription = '',
}) => {
  const [brand, setBrand] = useState(initialBrand);
  const [model, setModel] = useState(initialModel);
  const [status, setStatus] = useState(initialStatus);
  const [campus, setCampus] = useState(initialCampus);
  const [building, setBuilding] = useState(initialBuilding);
  const [room, setRoom] = useState(initialRoom);
  const [description, setDescription] = useState(initialDescription);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg"> 
        <h2 className="text-center text-gray-600 text-lg font-semibold mb-6">PRINTER INFORMATION</h2>
        
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Brand/Manufacturer Name"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
          />
          <input
            type="text"
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
          />
          
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 appearance-none text-center"
            >
              <option value="" disabled>Status</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Campus"
              value={campus}
              onChange={(e) => setCampus(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
            />
            <input
              type="text"
              placeholder="Building"
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
            />
            <input
              type="text"
              placeholder="Room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
            />
          </div>

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-md text-gray-500 h-24 resize-none text-center"
          ></textarea>

          <div className="flex space-x-4 justify-center">
            <button
              type="button"
              className="w-24 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-center shadow-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-24 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center shadow-md"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrinterForm;
