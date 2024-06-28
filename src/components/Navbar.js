import React from "react";

const Navbar = ({ title }) => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed p-4 w-full z-50 top-0 start-0 shadow-md border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex justify-center items-center mx-auto p-4">
        <h1 className="text-gray-900 dark:text-white text-3xl font-bold text-center tracking-wide">
          {title}
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
