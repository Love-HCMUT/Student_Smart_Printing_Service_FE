import React, { useState, useEffect } from 'react';
import axios from "axios";

const PrinterForm = ({ printerId }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [status, setStatus] = useState('');
  const [campus, setCampus] = useState('');
  const [building, setBuilding] = useState('');
  const [room, setRoom] = useState('');
  const [description, setDescription] = useState('');
  const [resolution, setResolution] = useState('');
  const [color, setColor] = useState('');
  const [oneTwoSide, setOneTwoSide] = useState('');
  const [price, setPrice] = useState('');
  const [speed, setSpeed] = useState('');
  const [wirelessConnection, setWirelessConnection] = useState('');
  const [printingMethod, setPrintingMethod] = useState('');

  // Hàm để lấy dữ liệu từ API dựa trên printerId
  useEffect(() => {
    const fetchPrinterData = async () => {
      if (!printerId) return;

      try {
        const request = {
          ids: [printerId]
        }
        const response = await axios.post(`http://localhost:5000/api/printer/update_printer`,
          request, // Pass the requestBody directly
          {
            headers: {
              "Content-Type": "application/json", // Ensure the correct content type
            },
          }
        );
        const data = response.data.data[0];
        // console.log(data)

        // Nếu có dữ liệu thì gán vào các state
        if (data) {
          setBrand(data.brand || '');
          setModel(data.model || '');
          setStatus(data.status || '');
          setCampus(data.campus || '');
          setBuilding(data.building || '');
          setRoom(data.room || '');
          setDescription(data.description || '');
          setResolution(data.resolution || '');
          setColor(data.color || '');
          setOneTwoSide(data.oneTwoSide || '');
          setPrice(data.price || '');
          setSpeed(data.speed || '');
          setWirelessConnection(data.wirelessConnection || '');
          setPrintingMethod(data.printingMethod || '');
        }
      } catch (error) {
        console.error('Error fetching printer data:', error);
      }
    };

    fetchPrinterData();
  }, [printerId]); // Chỉ gọi lại khi printerId thay đổi

  // Hàm xử lý khi form được submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
        printerStatus: status,
        printerDescription: description,
        resolution: resolution,
        colorPrinting: color,
        side: oneTwoSide,
        price: price,
        model: model,
        speed: speed,
        brand: brand,
        wireless: wirelessConnection,
        printingMethod: printingMethod,
        campus: campus,
        building: building,
        room: room
    };
    // console.log("RequestBody:   ",requestBody)

    try {
      const response = await axios.put(
        `http://localhost:5000/api/printer/update/${printerId}`,
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Update successful:', response);
    } catch (error) {
      console.error('Error updating printer data:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl h-max max-h-screen overflow-y-auto">
        <h2 className="text-center text-gray-600 text-lg font-semibold mb-6">PRINTER INFORMATION</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Printer ID"
            value={printerId}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
          />
          
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black appearance-none text-center"
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
              className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
            />
            <input
              type="text"
              placeholder="Building"
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
            />
            <input
              type="text"
              placeholder="Room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
            />
          </div>

          {/* New input fields for additional properties */}
          <input
            type="text"
            placeholder="Brand/Manufacturer Name"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
          />
          
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Resolution"
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
            />
            <input
              type="text"
              placeholder="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
            />
          </div>

          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
            />
            <input
              type="text"
              placeholder="Speed"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
            />
          </div>

          <div className="relative">
            <select
              value={oneTwoSide}
              onChange={(e) => setOneTwoSide(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black appearance-none text-center"
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
              className="w-full p-3 border border-gray-300 rounded-md text-black appearance-none text-center"
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
            className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-black h-24 resize-none text-center"
          ></textarea>

          <div className="flex space-x-4 justify-center">
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrinterForm;
