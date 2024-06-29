// src/components/Sidebar.js
import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-64 h-full z-30 bg-stone-950 p-5 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="absolute top-28">
        <h1 className="text-white font-bold text-xl">Machines</h1>
        <br></br>
        <a href="#" className="block text-white  mb-4 hover:underline" download="file2">
          Analysis
        </a>
        <a href="#" className="block text-white mb-4 hover:underline" download="file3">
          WannaCry Infected
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
