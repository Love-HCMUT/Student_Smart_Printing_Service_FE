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
  initialResolution = '',
  initialColor = '',
  initialPrinting = '',
  initialOneTwoSide = '',
  initialPrice = '',
  initialSpeed = '',
  initialCost = '',
  initialWirelessConnection = '',
  initialPrintingMethod = ''
}) => {
  const [brand, setBrand] = useState(initialBrand);
  const [model, setModel] = useState(initialModel);
  const [status, setStatus] = useState(initialStatus);
  const [campus, setCampus] = useState(initialCampus);
  const [building, setBuilding] = useState(initialBuilding);
  const [room, setRoom] = useState(initialRoom);
  const [description, setDescription] = useState(initialDescription);
  const [resolution, setResolution] = useState(initialResolution);
  const [color, setColor] = useState(initialColor);
  const [printing, setPrinting] = useState(initialPrinting);
  const [oneTwoSide, setOneTwoSide] = useState(initialOneTwoSide);
  const [price, setPrice] = useState(initialPrice);
  const [speed, setSpeed] = useState(initialSpeed);
  const [cost, setCost] = useState(initialCost);
  const [wirelessConnection, setWirelessConnection] = useState(initialWirelessConnection);
  const [printingMethod, setPrintingMethod] = useState(initialPrintingMethod);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl h-max max-h-screen overflow-y-auto">
        <h2 className="text-center text-gray-600 text-lg font-semibold mb-6">PRINTER INFORMATION</h2>
        
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Printer ID"
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

          {/* New input fields for additional properties */}
          <input
            type="text"
            placeholder="Brand/Manufacturer Name"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
          />
          
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Resolution"
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
            />
            <input
              type="text"
              placeholder="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
            />
            <input
              type="text"
              placeholder="Printing"
              value={printing}
              onChange={(e) => setPrinting(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
            />
          </div>

          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
            />
            <input
              type="text"
              placeholder="Speed"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
            />
            <input
              type="number"
              placeholder="Cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
            />
          </div>

          <div className="relative">
            <select
              value={oneTwoSide}
              onChange={(e) => setOneTwoSide(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 appearance-none text-center"
            >
              <option value="" disabled>One-/Two-side</option>
              <option value="One-side">One-side</option>
              <option value="Two-side">Two-side</option>
            </select>
          </div>

          <div className="relative">
            <select
              value={wirelessConnection}
              onChange={(e) => setWirelessConnection(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md text-gray-500 appearance-none text-center"
            >
              <option value="" disabled>Wireless Connection</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Printing Method"
            value={printingMethod}
            onChange={(e) => setPrintingMethod(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-md text-gray-500 text-center"
          />

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
