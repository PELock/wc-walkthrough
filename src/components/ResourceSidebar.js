import React from "react";
import { Link } from "react-router-dom";

const ResourceSidebar = () => {
  const resources = [
    {
      name: "Ghidra",
      link: "https://github.com/NationalSecurityAgency/ghidra",
    },
    { name: "Cuckoo", link: "https://cuckoo.cert.ee/" },
    { name: "Resource Hacker", link: "https://www.angusj.com/resourcehacker/" },
    { name: "Kaiju", link: "https://github.com/cmu-sei/Kaiju" },
  ];

  return (
    <div className=" flex left-0 z-10 top-1/3 h-1/3 flex-col  text-white p-4  shadow-lg shadow-black fixed">
      <h2 className="text-lg font-bold mb-4">Resources</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index} className="mb-2">
            <Link
              to={resource.link}
              className="text-gray-500 hover:text-red-950 relative "
            >
              {resource.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceSidebar;
