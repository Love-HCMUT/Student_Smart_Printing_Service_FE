import React from "react";

const PageSetting = ({ index, func }) => {
  return (
    <div className="mt-2 pl-4 pr-6 py-2 rounded-lg bg-slate-100 max-w-md w-full">
      <div className="flex items-center mb-2">
        <label htmlFor="small-input" className="flex-1 text-sm font-medium">
          From to
        </label>
        <input
          type="text"
          id="small-input"
          className="flex-grow h-8 px-3 rounded-md text-gray-800 focus:outline-none"
          onChange={(e) => func(index, "from_to", e.target.value)}
          placeholder="1, 2, 3, 5-6"
          // defaultValue="begin to end"
        />
      </div>

      {/* <!-- Sắp xếp Orientation và Color trên cùng một dòng --> */}
      <div className="flex gap-1">
        <div className="flex items-center flex-[0.5]">
          <label className="text-sm font-medium mr-2">Color</label>
          <input
            type="checkbox"
            name="toPage"
            className="w-5 h-5 border-gray-300 rounded bg-white accent-slate-600"
            onChange={(e) => func(index, "color", e.target.checked)}
          />
        </div>

        <div className="flex items-center flex-1">
          <label className="text-sm font-medium mr-2">Orientation</label>
          <select
            name="paper"
            className="h-8 rounded-md text-gray-800 w-full focus:outline-none"
            onChange={(e) => func(index, "orientation", e.target.value)}
          >
            <option value="Portrait">Portrait</option>
            <option value="Landscape">Landscape</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PageSetting;
