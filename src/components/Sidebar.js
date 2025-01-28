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
          
          className="block text-white mb-4 hover:underline"
          href="https://drive.google.com/file/d/1QOwnPVcNpf1wegWzXHBByw1HCGwETFGY/view?usp=drive_link"
        >
          Analysis
        </a>
        <a
          
          className="block text-white mb-4 hover:underline"
          href="https://drive.google.com/file/d/1tYcMYyqflwyODZxTei8_CTYEFivtzz6J/view?usp=drive_link"
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
