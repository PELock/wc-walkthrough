// src/components/Sidebar.js
import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gray-800 p-5 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className = "absolute top-20">
        <a href="#" className="block text-white mb-4 " download="file1">
          Download File 1
        </a>
        <a href="#" className="block text-white  mb-4" download="file2">
          Download File 2
        </a>
        <a href="#" className="block text-white mb-4" download="file3">
          Download File 3
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
