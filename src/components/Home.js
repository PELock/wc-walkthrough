import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProgress } from "../utils/localStorageUtils";
import Sidebar from "../components/Sidebar";
import Hamburger from "../components/Hamburger";

// Define pages with custom images
const pages = [
  { name: "Introduction", id: 1, img: "/Logos/WC.jpg" },
  { name: "Live Analysis", id: 2, img: "/Logos/white_magnify.png" },
  { name: "Ghidra", id: 3, img: "/Logos/Ghidra_logo.svg.png" },
  { name: "Diving Into the Code", id: 4, img: "/Logos/cubes.webp" },
  { name: "Cuckoo Sandbox", id: 7, img: "/Logos/cuckoo.png" },
  // Add more pages as needed
];

const Home = () => {
  const [progress, setProgress] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = () => {
    const userProgress = getUserProgress();
    setProgress(userProgress);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-start pt-20 p-4 font-fira relative">
      <Hamburger toggleSidebar={toggleSidebar} isOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} />

      <div className="w-full max-w-screen-xl mt-8">
        <div className="text-white p-4">
          <h1 class=" text-9xl font-bold pb-5 bg-gradient-to-r from-red-900 via-gray-900 to-red-600 inline-block text-transparent bg-clip-text">
            Welcome to WannaCry
          </h1>
          <p className="text-lg text-left">
            Dive deep into the analysis of WannaCry, one of the most notorious
            ransomware attacks. This walkthrough will guide you through each
            stage of the analysis, providing insights and tools used by
            cybersecurity professionals.
          </p>
        </div>

        <div className="w-full flex flex-col ">
          {pages.map((page, index) => (
            <button
              key={page.id}
              onClick={() => navigate(`/walkthrough/${page.id}`)}
              disabled={index > 0 && !progress.includes(pages[index - 1].id)}
              className={`relative mb-0 w-full h-24 flex items-center justify-start transition-all duration-300 group
                ${
                  index > 0 && !progress.includes(pages[index - 1].id)
                    ? "cursor-not-allowed"
                    : "hover:w-screen hover:bg-gray-700 cursor-pointer"
                }`}
            >
              <img
                src={page.img}
                alt={page.name}
                className="h-full w-24 object-cover"
              />
              <span className="text-white text-2xl font-bold ml-4 group-hover:translate-x-full group-hover:scale-125 duration-300 group-hover:bg-gradient-to-r from-red-900 via-gray-900 to-red-600 group-hover:inline-block group-hover:text-transparent group-hover:bg-clip-text">
                {page.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
