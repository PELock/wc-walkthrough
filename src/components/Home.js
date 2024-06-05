// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProgress } from "../utils/localStorageUtils";
import Sidebar from "../components/Sidebar";
import Hamburger from "../components/Hamburger";
import Navbar from "../components/Navbar"

// Define pages with custom images
const pages = [
  { name: "Introduction", id: 1, img: "/Logos/WC.jpg" },
  { name: "Autopsy", id: 2, img: "../Logos/autopsy_black.jpeg" },
  { name: "Ghidra", id: 3, img: "/Logos/Ghidra_logo.svg.png" },
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
    <div className="min-h-screen bg-gray-950 flex flex-col items-center p-4 font-fira relative">
      <Hamburger toggleSidebar={toggleSidebar} isOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} />
      <Navbar />

        <h1 className="text-3xl  font-bold mb-8 text-white ">
              WannaCry?: The Analytical Walkthrough
        </h1>
      
      <div className=" relative flex flex-col items-center">
        {pages.map((page, index) => (
          <React.Fragment key={page.id}>
            {index > 0 && <div className="w-1 h-12 bg-gray-600"></div>}
            <div className="flex flex-col items-center mb-6 hover:scale-110">
              <button
                onClick={() => navigate(`/walkthrough/${page.id}`)}
                disabled={index > 0 && !progress.includes(pages[index - 1].id)}
                className={`w-32 h-32 rounded-full border flex items-center justify-center 
                            ${
                              index > 0 &&
                              !progress.includes(pages[index - 1].id)
                                ? "bg-gray-800 cursor-not-allowed"
                                : "bg-gray-800 hover:bg-gray-700 cursor-pointer"
                            }`}
              >
                <img
                  src={page.img}
                  alt={""}
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
              <span className="mt-2 text-white font-bold">{page.name}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
