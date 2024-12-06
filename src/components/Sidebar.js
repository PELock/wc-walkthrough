// src/components/Sidebar.js
import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={` flex flex-col fixed top-0 right-0 w-64 h-screen z-30 overflow-y-auto scroll-smooth bg-stone-950 p-5 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-64"
      }`}
    >
      <div className="absolute top-28">
        <h1 className="text-white font-bold text-xl">Machines</h1>
        <br></br>
        <a
          href="#"
          className="block text-white mb-4 hover:underline"
          download="file2"
        >
          Analysis
        </a>
        <a
          href="#"
          className="block text-white mb-4 hover:underline"
          download="file3"
        >
          WannaCry Infected
        </a>
      </div>
      <a
        href="about"
        className=" absolute bottom-0 block text-white mb-4 hover:underline"
      >
        About
      </a>
    </div>
  );
};

export default Sidebar;
