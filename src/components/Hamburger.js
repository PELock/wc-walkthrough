// src/components/Hamburger.js
import React from "react";

const Hamburger = ({ toggleSidebar, isOpen }) => {
  return (
    <div
    className="fixed top-10 right-10 z-50 cursor-pointer" onClick={toggleSidebar}
      
    >
      <div
        className={`w-10 height: h-1 bg-white my-2 transition-transform ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></div>
      <div
        className={`w-10 h-1 bg-white my-2 transition-opacity ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`w-10 h-1 bg-white my-2 transition-transform ${
          isOpen ? "-rotate-45 -translate-y-4" : ""
        }`}
      ></div>
    </div>
  );
};

export default Hamburger;
