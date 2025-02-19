import React, { useState, useEffect } from "react";
import axios from "axios";

const PrinterForm = ({ printerId, Id, onChange }) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [status, setStatus] = useState("");
  const [campus, setCampus] = useState("");
  const [building, setBuilding] = useState("");
  const [room, setRoom] = useState("");
  const [description, setDescription] = useState("");
  const [resolution, setResolution] = useState("");
  const [color, setColor] = useState("");
  const [oneTwoSide, setOneTwoSide] = useState("");
  const [price, setPrice] = useState("");
  const [speed, setSpeed] = useState("");
  const [wirelessConnection, setWirelessConnection] = useState("");
  const [printingMethod, setPrintingMethod] = useState("");

  // Hàm để lấy dữ liệu từ API dựa trên printerId
  useEffect(() => {
    const fetchPrinterData = async () => {
      if (!printerId) return;
      try {
        const request = {
          ids: [printerId],
        };
        const host = import.meta.env.VITE_HOST;
        const response = await axios.post(
          `${host}/api/printer/update_printer`,
          request, // Pass the requestBody directly
          {
            headers: {
              "Content-Type": "application/json", // Ensure the correct content type
            },
          }
        );
        let data = response.data.data[0];
        if (data.color == 0) {
          data.color = "False";
        } else {
          data.color = "True";
        }
        if (data.wirelessConnection == 0) {
          data.wirelessConnection = "No";
        } else {
          data.wirelessConnection = "Yes";
        }

        // Nếu có dữ liệu thì gán vào các state
        if (data) {
          setBrand(data.brand || "");
          setModel(data.model || "");
          setStatus(data.status || "");
          setCampus(data.campus || "");
          setBuilding(data.building || "");
          setRoom(data.room || "");
          setDescription(data.description || "");
          setResolution(data.resolution || "");
          setColor(data.color || "");
          setOneTwoSide(data.oneTwoSide || "");
          setPrice(data.price || "");
          setSpeed(data.speed || "");
          setWirelessConnection(data.wirelessConnection || "");
          setPrintingMethod(data.printingMethod || "");
        }
      } catch (error) {
        console.error("Error fetching printer data:", error);
      }
    };

    fetchPrinterData();
  }, [printerId]); // Chỉ gọi lại khi printerId thay đổi

  // Hàm xử lý khi form được submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newcolor = 0;
    if (color == "True") {
      newcolor = 1;
    } else {
      newcolor = 0;
    }

    let newwirelessConnection = 0;
    if (wirelessConnection == "Yes") {
      newwirelessConnection = 1;
    } else {
      newwirelessConnection = 0;
    }

    const requestBody = {
      printerStatus: status,
      printerDescription: description,
      resolution: resolution,
      colorPrinting: newcolor,
      side: oneTwoSide,
      price: price,
      model: model,
      speed: speed,
      brand: brand,
      wireless: newwirelessConnection,
      printingMethod: printingMethod,
      campus: campus,
      building: building,
      room: room,
    };


    try {
      let response;
      const host = import.meta.env.VITE_HOST;
      // Kiểm tra nếu printerId khác 0, thực hiện PUT (cập nhật)
      if (printerId) {
        response = await axios.put(
          `${host}/api/printer/update/${Id}/${printerId}`,
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        confirm("Update successful");
        onChange();
      } else {
        const host = import.meta.env.VITE_HOST;
        // Nếu printerId là 0, thực hiện POST (thêm mới)
        response = await axios.post(
          `${host}/api/printer/add?spsoID=${Id}`,
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        confirm("Add successful");
        onChange();
      }
    } catch (error) {
      console.error("Error handling printer data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl h-max max-h-screen overflow-y-auto">
        <h2 className="text-center text-black font-bold text-lg mb-6">
          PRINTER INFORMATION
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-black font-bold mb-2 text-center">
              Printer ID
            </label>
            <input
              type="text"
              placeholder="Printer ID"
              value={printerId}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
            />
          </div>

          <div>
            <label className="block text-black font-bold mb-2 text-center">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black appearance-none text-center"
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Available">Available</option>
              <option value="Unavailabl">Unavailable</option>
            </select>
          </div>

          <div className="flex space-x-3">
            <div className="w-full">
              <label className="block text-black font-bold mb-2 text-center">
                Campus
              </label>
              <input
                type="text"
                placeholder="Campus"
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
              />
            </div>
            <div className="w-full">
              <label className="block text-black font-bold mb-2 text-center">
                Building
              </label>
              <input
                type="text"
                placeholder="Building"
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
              />
            </div>
            <div className="w-full">
              <label className="block text-black font-bold mb-2 text-center">
                Room
              </label>
              <input
                type="text"
                placeholder="Room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
              />
            </div>
          </div>

          <div>
            <label className="block text-black font-bold mb-2 text-center">
              Brand/Manufacturer Name
            </label>
            <input
              type="text"
              placeholder="Brand/Manufacturer Name"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
            />
          </div>
          <div>
            <label className="block text-black font-bold mb-2 text-center">
              Model
            </label>
            <input
              type="text"
              placeholder="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-black font-bold mb-2 text-center">
                Resolution
              </label>
              <input
                type="text"
                placeholder="Resolution"
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
              />
            </div>
            <div className="w-full">
              <label className="block text-black font-bold mb-2 text-center">
                Color
              </label>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-black appearance-none text-center"
              >
                <option value="" disabled>
                  Select Color Support
                </option>
                <option value="True">True</option>
                <option value="False">False</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-black font-bold mb-2 text-center">
                Price
              </label>
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
              />
            </div>
            <div className="w-full">
              <label className="block text-black font-bold mb-2 text-center">
                Speed
              </label>
              <input
                type="text"
                placeholder="Speed"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
              />
            </div>
          </div>

          <div>
            <label className="block text-black font-bold mb-2 text-center">
              One-/Two-side
            </label>
            <select
              value={oneTwoSide}
              onChange={(e) => setOneTwoSide(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black appearance-none text-center"
            >
              <option value="" disabled>
                Select One-/Two-side
              </option>
              <option value="1">One-side</option>
              <option value="2">Two-side</option>
            </select>
          </div>

          <div>
            <label className="block text-black font-bold mb-2 text-center">
              Wireless Connection
            </label>
            <select
              value={wirelessConnection}
              onChange={(e) => setWirelessConnection(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black appearance-none text-center"
            >
              <option value="" disabled>
                Select Wireless Connection
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label className="block text-black font-bold mb-2 text-center">
              Printing Method
            </label>
            <input
              type="text"
              placeholder="Printing Method"
              value={printingMethod}
              onChange={(e) => setPrintingMethod(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black text-center"
            />
          </div>

          <div>
            <label className="block text-black font-bold mb-2 text-center">
              Description
            </label>
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black h-24 resize-none text-center"
            ></textarea>
          </div>

          <div className="flex space-x-4 justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700"
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
