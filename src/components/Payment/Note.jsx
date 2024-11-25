import React from "react";

const Note = ({ mess, func }) => {
  return (
    <div className="w-full">
      <label
        htmlFor="message"
        className="block mb-2 text-lg font-medium text-gray-900"
      >
        Your message
      </label>
      <textarea
        id="message"
        rows="6"
        value={mess}
        onChange={(e) => func(e.target.value)}
        className="block p-2.5 w-full text-sm text-gray-900 bg-slate-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        placeholder="Write your note for printing staff"
      ></textarea>
    </div>
  );
};

export default Note;
