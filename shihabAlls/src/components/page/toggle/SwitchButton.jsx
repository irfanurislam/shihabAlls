import React, { useState } from "react";

const SwitchButton = () => {
  const [showPreview, setShowPreview] = useState(true);

  const toggleView = () => {
    setShowPreview(!showPreview);
  };
  const [view, setView] = useState("preview");

  const toggleViewr = () => {
    setView(view === "preview" ? "code" : "preview");
  };

  return (
    <>
      <div className="flex items-center">
        <button
          className={`px-4 py-2 rounded-l ${
            view === "preview"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } focus:outline-none`}
          onClick={toggleViewr}
        >
          Preview
        </button>
        <button
          className={`px-4 py-2 rounded-r ${
            view === "code"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } focus:outline-none`}
          onClick={toggleViewr}
        >
          Code
        </button>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className={`border p-8 rounded-lg ${showPreview ? "" : "hidden"}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
        <div className={`border p-8 rounded-lg ${showPreview ? "hidden" : ""}`}>
          <code className="text-sm">
            &lt;button className="bg-blue-500 hover:bg-blue-700 text-white
            font-bold py-2 px-4 rounded"&gt;
            <br />
            &nbsp;Button Design
            <br />
            &lt;/button&gt;
          </code>
        </div>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-4"
          onClick={toggleView}
        >
          {showPreview ? "Code" : "Preview"}
        </button>
      </div>
    </>
  );
};

export default SwitchButton;
