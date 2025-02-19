import React from "react";
import printer from "../../assets/printer.svg";
import axios from "axios";

const PackageForm = ({
  data = {
    documents: ["a.txt", "b.txt"], // List of documents
    papers: 10,
    sides: 2,
    copies: 1,
    scale: 1,
    paperSize: "A4",
    paperSheet: 1,
    printingPages: [], // Array for multiple printing pages options
    isCover: true,
    isGlass: false,
    isBinding: false,
    isColorAllPages: false,
    isColorCover: false,
  },
  orderID = 1,
  logNumber = 2,
}) => {
  const {
    documents,
    papers,
    sides,
    copies,
    scale,
    paperSize,
    paperSheet,
    printingPages,
    isCover,
    isGlass,
    isBinding,
    isColorAllPages,
    isColorCover,
  } = data;
  const handlePrintFile = async (e, { url, fileName, id }) => {
    e.stopPropagation();
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_HOST
        }/printing/printFile/${url}/${orderID}/${logNumber}/${id}`,
        {
          responseType: "blob", // Handle binary data
        }
      );
      const blob = new Blob([response.data]);
      const file = new File([blob], fileName, { type: "application/pdf" });
      const urlFile = URL.createObjectURL(file);
      window.open(urlFile, "_blank");
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };
  return (
    <div className="p-8 mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-left">
        Packages view point
      </h2>

      <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 h-max max-h-screen overflow-y-auto">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Package ID</h3>
          <label className="block text-gray-700">Documents</label>
          <div className="space-y-2">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center border border-gray-700 rounded-lg p-2 bg-gray-100"
              >
                <input
                  type="text"
                  value={doc.fileName}
                  placeholder="Document name.pdf"
                  readOnly
                  className="flex-grow bg-gray-100 focus:outline-none"
                />
                <button
                  onClick={(e) => handlePrintFile(e, doc)}
                  className="ml-2 text-gray-600"
                >
                  <img src={printer} className="h-5 w-5"></img>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Package's option</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Papers</label>
              <input
                type="text"
                value={papers}
                placeholder="Number of papers"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Sides</label>
              <input
                type="text"
                value={sides}
                placeholder="Number of sides"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Copies</label>
              <input
                type="text"
                value={copies}
                placeholder="Number of copies"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Scale</label>
              <input
                type="text"
                value={scale}
                placeholder="Scale"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Paper Size</label>
              <input
                type="text"
                value={paperSize}
                placeholder="Paper size"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Paper per Sheet
              </label>
              <input
                type="text"
                value={paperSheet}
                placeholder="Paper per sheet"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            Package's after print option
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Is cover</label>
              <input
                type="text"
                value={isCover ? "True" : "False"}
                placeholder="True/False"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Is glass</label>
              <input
                type="text"
                value={isGlass ? "True" : "False"}
                placeholder="True/False"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Is binding</label>
              <input
                type="text"
                value={isBinding ? "True" : "False"}
                placeholder="True/False"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            Package's color print option
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">
                Is color for all pages
              </label>
              <input
                type="text"
                value={isColorAllPages ? "True" : "False"}
                placeholder="True/False"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Is color for only cover
              </label>
              <input
                type="text"
                value={isColorCover ? "True" : "False"}
                placeholder="True/False"
                readOnly
                className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
              />
            </div>
          </div>
        </div>

        {printingPages.length ? (
          printingPages.map((page, index) => (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">
                Package's printing pages
              </h3>

              <div key={index} className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-1">From page</label>
                  <input
                    type="text"
                    value={page.fromPage}
                    placeholder="From"
                    readOnly
                    className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">To page</label>
                  <input
                    type="text"
                    value={page.toPage}
                    placeholder="To"
                    readOnly
                    className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Is color</label>
                  <input
                    type="text"
                    value={page.isColor ? "True" : "False"}
                    placeholder="True/False"
                    readOnly
                    className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Orientation
                  </label>
                  <input
                    type="text"
                    value={
                      page.orientation.charAt(0).toUpperCase() +
                      page.orientation.slice(1)
                    }
                    placeholder="Orientation"
                    readOnly
                    className="border border-gray-300 p-2 rounded-lg w-full bg-gray-100"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PackageForm;
