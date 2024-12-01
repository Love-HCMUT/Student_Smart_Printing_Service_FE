import React, { useState, memo, useEffect } from "react";
import FilePreview from "./FilePreview";
import PageSetting from "./PageSetting";

const Package = ({ index, update, remove }) => {

  const [config, setConfig] = useState({
    copy: 1,
    sides: 2,
    paper: "A4",
    pages_per_sheet: 1,
    scale: 1,
    cover: true,
    binding: true,
    glass: false,
    color_all: false,
    color_cover: false,
  });

  const [pages, setPages] = useState([]);

  //handle file, we need to upload file to MinIO and only store filename, filesize, fileURL in to object
  const [fileSelected, setfileSelected] = useState([]);
  // console.log("listfile: ", fileSelected);

  useEffect(() => {
    console.log("useeffect ", index)
    update(index, { ...config, pages: pages, files: fileSelected });
  }, [index, pages, config, fileSelected]);


  const removeFile = (fileIndex) => {
    const newfileSelected = fileSelected.filter((_, i) => i !== fileIndex);
    setfileSelected(newfileSelected);
    console.log("remove ", fileIndex, index);
  };

  const uploadFile = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      // UPLOAD MIN-IO
      // Loaf file types from config file types

      const newFileSelected = [...fileSelected, file];
      console.log("new list file update ", newFileSelected)
      setfileSelected(prev => [...prev, file]);
    }
  };

  const updateField = (namefield, value) => {
    setConfig((prev) => ({
      ...prev,
      [namefield]: /^\d+$/.test(value) ? parseInt(value, 10) : value,
    }));
  };

  const removePages = (pageIndex) => {
    setPages((page) => page.filter((_, i) => i !== pageIndex));
  };

  const addPages = () => {
    const newpages = {
      from_to: "begin-end",
      color: false,
      orientation: "landscape",
    };
    setPages((prev) => [...prev, newpages]);
  };

  const updatePages = (pageIndex, fieldname, value) => {
    setPages((prev) => {
      const updatedConfig = [...prev];
      updatedConfig[pageIndex] = {
        ...updatedConfig[pageIndex],
        [fieldname]: value,
      };
      return updatedConfig;
    });
  };

  return (
    <div className="relative px-6 py-3 bg-slate-200 rounded w-5/6 shadow-xl">
      {/* icon thung rac  */}
      <button onClick={() => remove(index)} className="absolute top-3 right-3">
        <svg
          className="icon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="System Icons">
            <path
              id="Vector"
              d="M2.25 4.5H3.75H15.75"
              stroke="#111827"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5"
              stroke="#111827"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_3"
              d="M7.5 8.25V12.75"
              stroke="#111827"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_4"
              d="M10.5 8.25V12.75"
              stroke="#111827"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>

      {/* information */}
      <div className="min-h-[230px] w-full flex justify-center items-center rounded gap-6 pt-2">
        {/* format section */}
        <div className="flex-1 flex-col items-center justify-center">
          <div className="my-2">
            <h3 className="font-bold">Format</h3>

            <div className="grid grid-cols-3 gap-2">
              <div className="flex justify-between items-center">
                <label className="ml-2 font-medium mr-2">Copy</label>
                <input
                  type="number"
                  name="copies"
                  min="1"
                  value={config.copy}
                  onChange={(event) => updateField("copy", event.target.value)}
                  className="max-w-11 border border-gray-300 rounded p-1 text-center"
                />
              </div>

              <div className="flex justify-between items-center">
                <label className="ml-2 font-medium mr-2">Sides</label>
                <input
                  type="number"
                  name="toPage"
                  value={config.sides}
                  min="1"
                  max="2"
                  onChange={(event) => updateField("sides", event.target.value)}
                  className="max-w-11 border border-gray-300 rounded p-1 text-center"
                />
              </div>

              <div className="flex justify-between items-center">
                <label className="ml-2 font-medium mr-2">Paper</label>
                <select
                  name="paper"
                  className="w-14 border border-gray-300 rounded p-1 text-center"
                  onChange={(event) => updateField("paper", event.target.value)}
                >
                  <option value="A4">A4</option>
                  <option value="A3">A3</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <label className="ml-2 font-medium mr-2 leading-none">
                  Page per sheet
                </label>
                <input
                  type="number"
                  name="toPage"
                  value={config.pages_per_sheet}
                  min="1"
                  className="max-w-11 border border-gray-300 rounded p-1 text-center"
                  onChange={(event) =>
                    updateField("pages_per_sheet", event.target.value)
                  }
                />
              </div>

              <div className="flex justify-between items-center">
                <label className="ml-2 font-medium mr-2">Scale</label>
                <input
                  type="number"
                  name="toPage"
                  min="0"
                  max="1"
                  step="0.1"
                  value={config.scale}
                  className="max-w-11 border border-gray-300 rounded p-1 text-center"
                  onChange={(event) => updateField("scale", event.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Pages */}
          <div className="">
            <h3 className="font-bold mb-1">Pages</h3>
            <div>
              {pages.map((e, pageIndex) => (
                <div key={pageIndex} className="relative">
                  <button
                    onClick={() => removePages(pageIndex)}
                    className="absolute right-2 top-1 hover:bg-red-600 text-red-500 font-bold hover:text-white w-3 h-3 flex items-center justify-center rounded-full"
                  >
                    x
                  </button>
                  <PageSetting index={pageIndex} func={updatePages} />
                </div>
              ))}
            </div>

            {/* Button add more */}
            {pages.length ? (
              <></>
            ) : (
              <div className="w-full flex items-center justify-center">
                <button
                  onClick={addPages}
                  className="bg-blue-500 mt-2 rounded px-6 hover:bg-blue-600"
                >
                  Custom Printing Pages
                </button>
              </div>
            )}
          </div>

          {/* After printing */}
          <div className="my-2">
            <h3 className="font-bold">After printing</h3>
            <div className="grid grid-cols-3 gap-1">
              <div className="px-2 flex text-center items-center">
                <label className="font-medium mr-2">Cover</label>
                <input
                  type="checkbox"
                  name="toPage"
                  checked={config.cover}
                  min="0"
                  className="max-w-11 border border-gray-300 rounded p-1 text-center"
                  onChange={(event) =>
                    updateField("cover", event.target.checked)
                  }
                />
              </div>

              <div className="px-2 flex text-center items-center">
                <label className="font-medium mr-2">Binding</label>
                <input
                  type="checkbox"
                  name="toPage"
                  checked={config.binding}
                  min="0"
                  className="max-w-11 border border-gray-300 rounded p-1 text-center"
                  onChange={(event) =>
                    updateField("binding", event.target.checked)
                  }
                />
              </div>

              <div className="px-2 flex text-center items-center">
                <label className="font-medium mr-2">Glass</label>
                <input
                  type="checkbox"
                  name="toPage"
                  checked={config.glass}
                  min="0"
                  onChange={(event) =>
                    updateField("glass", event.target.checked)
                  }
                  className="max-w-11 border border-gray-300 rounded p-1 text-center"
                />
              </div>
            </div>
          </div>

          {/* Color printing */}
          <div className="my-2">
            <h3 className="font-bold">Color printing</h3>
            <div className="grid grid-cols-3 gap-1">
              <div className="px-2 flex text-center items-center">
                <label className="font-medium mr-2">All papers</label>
                <input
                  type="checkbox"
                  name="toPage"
                  checked={config.color_all}
                  min="0"
                  onChange={(event) =>
                    updateField("color_all", event.target.checked)
                  }
                  className="max-w-11 border border-gray-300 rounded p-1 text-center"
                />
              </div>

              <div className="px-2 flex text-center items-center">
                <label className="font-medium mr-2">Only cover</label>
                <input
                  type="checkbox"
                  name="toPage"
                  checked={config.color_cover}
                  min="0"
                  onChange={(event) =>
                    updateField("color_cover", event.target.checked)
                  }
                  className="max-w-11 border border-gray-300 rounded p-1 text-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* attachment section */}
        <div className="flex-1">
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor={`dropzone-file-${index}`}
              className="flex flex-col items-center justify-center min-h-[300px] w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition duration-200"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="icon"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-700">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-600">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id={`dropzone-file-${index}`}
                type="file"
                className="hidden"
                accept={"application/pdf"} // Load from config
                onChange={uploadFile}
              />
            </label>
          </div>
        </div>
      </div>

      {/* FILE PREVIEW */}
      <div className="w-full grid gap-1 mb-4">
        {fileSelected.map((e, i) => {
          return (
            <FilePreview
              key={i}
              index={i}
              name={e.name}
              weight={e.size}
              func={removeFile}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Package;
