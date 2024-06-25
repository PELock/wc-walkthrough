import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProgress } from "../utils/localStorageUtils";
import Sidebar from "../components/Sidebar";
import Hamburger from "../components/Hamburger";
import Navbar from "../components/Navbar";

// Define pages with custom images
const pages = [
  { name: "Introduction", id: 1, img: "/Logos/WC.jpg" },
  { name: "Autopsy", id: 2, img: "../Logos/autopsy_black.jpeg" },
  { name: "Ghidra", id: 3, img: "/Logos/Ghidra_logo.svg.png" },
  { name: "Diving Into the Code", id: 4, img: "/Logos/cubes.webp" },
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
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 font-fira relative">
      <Hamburger toggleSidebar={toggleSidebar} isOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} />
      <Navbar title="WannaCry?: The Analytical Walkthrough" />

      <div className="flex justify-center items-center flex-wrap w-full">
        {pages.map((page, index) => (
          <React.Fragment key={page.id}>
            <div className="flex flex-col items-center mx-4 mb-8 hover:scale-110 transition-transform">
              <button
                onClick={() => navigate(`/walkthrough/${page.id}`)}
                disabled={index > 0 && !progress.includes(pages[index - 1].id)}
                className={`w-64 h-64 rounded-full border flex items-center justify-center hover:border-sky-500 hover:border
                            ${
                              index > 0 &&
                              !progress.includes(pages[index - 1].id)
                                ? "bg-gray-800 cursor-not-allowed"
                                : "bg-gray-800 hover:bg-gray-700 cursor-pointer"
                            }`}
              >
                <img
                  src={page.img}
                  alt={page.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
              <span className="mt-2 text-white text-3xl font-bold">
                {page.name}
              </span>
            </div>
            {index < pages.length - 1 && (
              <div className="flex flex-col items-center mb-8">
                <div
                  className={`w-24 h-1 bg-sky-500 mx-auto ${
                    !progress.includes(page.id) ? "bg-gray-500" : "bg-sky-500"
                  }`}
                ></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
